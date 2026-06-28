import { useState, useEffect } from "react";
import {
  SCOPES,
  PARAMS,
  CES_PARAMS,
  EMP_PARAMS,
  CREC_PARAMS,
  LENSES,
  ENGINES,
  HORIZON,
  scopeDefaults,
  decompose,
  cesDecompose,
  SK_SL,
} from "./model";
import type { Scope, Vals, ParamKey, Metric, ParamDef, Lens, Engine, SensRow } from "./model";
import { readParams, writeParams } from "./urlState";
import { studyById, surname } from "./data";
import { Compare } from "./Compare";
import { Distribucion } from "./Distribucion";
import {
  helpKpi,
  helpParam,
  HELP_SCOPE,
  HELP_SHARE,
  HELP_FORMULA,
  HELP_FORMULA_CES,
  HELP_FORMULA_EMP,
  HELP_FORMULA_CREC,
  HELP_LENS,
  HELP_LENS_DETAIL,
  HELP_COMPARE,
  HELP_CAPAS,
} from "./help";
import type { HelpEntry } from "./help";

const META: Record<Metric, { titulo: string; suf: string; pos: string; neg: string }> = {
  empleo: { titulo: "¿Sube o baja el empleo?", suf: "%", pos: "más empleo", neg: "menos empleo" },
  salarios: {
    titulo: "¿Suben o bajan los salarios?",
    suf: "%",
    pos: "salarios al alza",
    neg: "salarios a la baja",
  },
  participacion: {
    titulo: "¿Cae la participación del trabajo?",
    suf: " pp",
    pos: "el trabajo gana tajada",
    neg: "el trabajo pierde tajada",
  },
};

// Foco de un parámetro: los estudios que lo anclan, cada uno con cuánto "pesa" dado el valor
// actual del slider (1 = el slider está justo sobre ese estudio, 0 = lejos). El orden de
// despliegue lo decide la vista (alfabético, estable). studies vacío = supuesto libre.
export type ParamFocus = {
  label: string;
  anchored: boolean;
  studies: { id: string; weight: number }[];
  dims?: string[]; // dimensiones que representa el parámetro (para filtrar la dispersión)
} | null;

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");
const fmt = (n: number, suf: string) => `${n >= 0 ? "+" : ""}${n.toFixed(1)}${suf}`;

// Peso de cada estudio-ancla según la cercanía del valor actual (kernel triangular sobre la
// escala del parámetro). El ancho de banda decide qué tan "selectivo" es el resaltado.
const BANDWIDTH = 0.4;
function weightedStudies(p: ParamDef, v: number): { id: string; weight: number }[] {
  const bw = (p.max - p.min) * BANDWIDTH;
  return p.anchors.map((a) => ({
    id: a.studyId,
    weight: Math.max(0, 1 - Math.abs(v - a.at) / bw),
  }));
}
// Solo "ancla de verdad" (colapsa la fila de estudios) si tiene estudios fijados. Un parámetro
// anclado en evidencia pero sin pins de estudio (p.ej. los de la lente CES) no colapsa la fila.
export const mkFocus = (p: ParamDef, v: number): ParamFocus => ({
  label: p.label,
  anchored: p.anchored && p.anchors.length > 0,
  studies: p.anchors.length ? weightedStudies(p, v) : [],
  dims: p.dims,
});

// Marcas de los estudios sobre la barra: posición en la escala + cita mínima (apellido 'año).
// Dos estudios con la MISMA cita y casi el mismo valor (p.ej. dos McKinsey '23 ~30%) se
// colapsan a una etiqueta (en el promedio); los pills de abajo siguen mostrando ambos.
// Ordenadas por posición para escalonar las citas (una abajo, la siguiente arriba).
export function axisMarks(p: ParamDef) {
  const raw = p.anchors.map((a) => {
    const s = studyById.get(a.studyId);
    return {
      id: a.studyId,
      pct: ((a.at - p.min) / (p.max - p.min)) * 100,
      cite: s ? `${surname(s.authors)} '${String(s.year).slice(2)}` : a.studyId,
    };
  });
  const byCite = new Map<string, { id: string; cite: string; pcts: number[] }>();
  for (const m of raw) {
    const e = byCite.get(m.cite);
    if (e) e.pcts.push(m.pct);
    else byCite.set(m.cite, { id: m.id, cite: m.cite, pcts: [m.pct] });
  }
  return [...byCite.values()]
    .map((e) => ({ id: e.id, cite: e.cite, pct: e.pcts.reduce((a, b) => a + b, 0) / e.pcts.length }))
    .sort((x, y) => x.pct - y.pct);
}

function KpiCard({
  engine,
  metric,
  horizon,
  vals,
  onHelp,
}: {
  engine: Engine;
  metric: Metric;
  horizon: 3 | 5;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const h = HORIZON[horizon];
  const env = engine.envelope(metric, h);
  const point = engine.delta(metric, vals, h);
  const span = env.max - env.min || 1;
  const pos = (x: number) => ((x - env.min) / span) * 100;
  const straddles = env.min < 0 && env.max > 0;
  const suf = META[metric].suf;
  const color =
    point < -0.05 ? "var(--peach)" : point > 0.05 ? "var(--green)" : "var(--subtext1)";

  return (
    <div
      className="kpi"
      onMouseEnter={() => onHelp?.(helpKpi(metric, horizon, point, env, engine.key))}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="kpi-h">a {horizon} años</div>
      <div className="kpi-point" style={{ color }}>
        {fmt(point, suf)}
      </div>
      <div className="kpi-sub">tu escenario</div>
      <div className="kpi-track">
        <div className="kpi-zero" style={{ left: `${pos(0)}%` }} />
        <div className="kpi-dot" style={{ left: `${pos(point)}%` }} />
      </div>
      <div className="kpi-range">
        <span>{fmt(env.min, suf)}</span>
        <span className="kpi-verdict">
          {straddles ? "no está determinado" : point > 0 ? META[metric].pos : META[metric].neg}
        </span>
        <span>{fmt(env.max, suf)}</span>
      </div>
    </div>
  );
}

const METRIC_LABEL: Record<Metric, string> = {
  empleo: "Δ empleo",
  salarios: "Δ salarios",
  participacion: "Δ participación",
};
const METRIC_SHORT: Record<Metric, string> = {
  empleo: "Empleo",
  salarios: "Salarios",
  participacion: "Participación",
};

// "Qué mueve más la aguja": el ranking de sensibilidad, que se DEDUCE de la fórmula. Vive bajo la
// ayuda de la fila de fórmulas (cualquier motor lo alimenta con su propia sensibilidad).
function sensViz(sens: SensRow[]) {
  return (
    <div className="sens">
      <div className="sens-h">Qué mueve más la aguja</div>
      {sens.slice(0, 3).map((s) => (
        <div className="sens-row" key={s.key}>
          <div className="sens-track">
            <span
              className="sens-bar"
              style={{
                width: `${Math.min(100, (s.swing / (sens[0].swing || 1)) * 100)}%`,
                background: s.informed
                  ? "var(--green)"
                  : s.anchored
                    ? "var(--blue)"
                    : "var(--peach)",
              }}
            />
          </div>
          <span className="sens-label">
            {s.label} <span className="sens-swing">±{(s.swing / 2).toFixed(1)}pp</span>
          </span>
        </div>
      ))}
      <div className="sens-note">
        Se deduce de la fórmula: el parámetro cuyo rango cambia más el resultado. Y lo que más lo
        mueve suele ser un supuesto (durazno), no lo anclado.
      </div>
    </div>
  );
}

// Fila de la fórmula: el motor explícito entre el indicador y las palancas. Hace transparente
// la cuenta que convierte tus palancas en el resultado (descomposición Acemoglu-Restrepo): nada
// de caja negra. Empleo y salarios se muestran JUNTOS porque φ reparte el mismo golpe entre los
// dos — verlos a la vez vuelve legible esa palanca. Se muestra a 5 años (efecto maduro), donde
// los factores de horizonte valen 1 y la cuenta calza exacta con el KPI de 5 años.
function Formula({
  engine,
  metric,
  vals,
  onHelp,
}: {
  engine: Engine;
  metric: Metric;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;
  const Npct = decompose("empleo", vals, HORIZON[5]).Npct; // N no depende de la métrica

  // La ayuda de la fórmula incluye la sensibilidad ("qué mueve más la aguja"): cuál parámetro
  // cambia más el resultado se DEDUCE de la propia fórmula, así que documenta esta fila.
  const formulaHelp: HelpEntry = {
    ...HELP_FORMULA,
    node: sensViz(engine.sensitivity(metric, vals, HORIZON[5])),
  };

  // Cada parámetro = un pill chico y sobrio: nombre y valor del mismo tamaño y color, sin bold;
  // el tipo (azul = evidencia, durazno = supuesto) se marca solo con un filo a la derecha. Al
  // pasar el cursor, el pill abre la ayuda de SU palanca (la misma del slider de abajo); al salir
  // vuelve a la ayuda general de la fórmula. Los derivados (N, resultado) van como texto.
  const byKey: Record<string, ParamDef> = Object.fromEntries(PARAMS.map((p) => [p.key, p]));
  const pillHover = (key: ParamKey) => ({
    onMouseEnter: () => onHelp?.(helpParam(byKey[key], vals[key])),
    onMouseLeave: () => onHelp?.(formulaHelp),
  });
  const term = (name: string, val: string, tone: "ev" | "as" | "inf", key: ParamKey) => (
    <span className={cx("f-term", tone)} {...pillHover(key)}>
      <span className="f-tname">{name}</span>
      <span className="f-tval">{val}</span>
    </span>
  );
  const ev = (name: string, v: number, key: ParamKey) => term(name, v.toFixed(2), "ev", key);
  const as = (name: string, txt: string, key: ParamKey) => term(name, txt, "as", key);
  // φ ya no es supuesto sino "informado" (verde): la rigidez salarial acota su rango sin fijarlo.
  const inf = (name: string, txt: string, key: ParamKey) => term(name, txt, "inf", key);
  const op = (s: string) => <span className="f-op">{s}</span>;
  const pq = (s: string) => <span className="f-pq">{s}</span>;
  const N = <span className="f-derived">N</span>;

  // (−N + productividad): el golpe neto a la demanda, compartido por empleo y salarios. El efecto
  // productividad→empleo lo decide la elasticidad de demanda: prodEff = 2·(elast−1) (a 5 años).
  const prodEff = 2 * (vals.elast - 1);
  const golpe = (
    <span className="f-group">
      {pq("(")}
      {op("−")}
      {N}
      {op("+")}
      {as(
        "elasticidad",
        `${vals.elast.toFixed(2)} → ${prodEff >= 0 ? "+" : "−"}${Math.abs(prodEff).toFixed(1)}pp`,
        "elast",
      )}
      {pq(")")}
    </span>
  );
  const unoMenosPhi = (
    <span className="f-group">
      {pq("(")}
      <span className="f-num">1</span>
      {op("−")}
      {inf("φ", vals.phi.toFixed(2), "phi")}
      {pq(")")}
    </span>
  );

  // Ecuación de un indicador. Empleo y salarios reparten el golpe con φ (1−φ a puestos, φ a
  // sueldos: por eso van juntos). Participación = desplazamiento neto puro (φ y prod no entran).
  const deltaEq = (m: Metric) => {
    const r = decompose(m, vals, HORIZON[5]).result;
    const color = r < -0.05 ? "var(--peach)" : r > 0.05 ? "var(--green)" : "var(--subtext1)";
    return (
      <span className={cx("f-eq", m === metric && "sel")} key={m}>
        <span className="f-lhs">{METRIC_LABEL[m]}</span>
        {op("=")}
        {m === "participacion" ? (
          <>
            {op("−")}
            {N}
          </>
        ) : (
          <>
            {golpe}
            {op("×")}
            {m === "salarios" ? inf("φ", vals.phi.toFixed(2), "phi") : unoMenosPhi}
          </>
        )}
        {op("=")}
        <span className="f-result" style={{ color }}>
          {signed(r, META[m].suf)}
        </span>
      </span>
    );
  };

  const deltas: Metric[] = metric === "participacion" ? ["participacion"] : ["empleo", "salarios"];

  return (
    <div
      className="formula"
      onMouseEnter={() => onHelp?.(formulaHelp)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="f-kicker">Cómo se calcula · a 5 años</div>
      {/* Paso 1: N (común). Paso 2: el reparto del golpe — empleo y salarios juntos para que se
          vea cómo φ divide el mismo (−N + productividad) entre cantidad (puestos) y precio (sueldos). */}
      <div className="f-line">
        <span className="f-eq">
          <span className="f-lhs">N</span>
          {op("=")}
          {ev("automatizable", vals.a, "a")}
          {op("×")}
          {ev("adopción", vals.d, "d")}
          {op("×")}
          {ev("sustituye", vals.s, "s")}
          {op("×")}
          <span className="f-group">
            {pq("(")}
            <span className="f-num">1</span>
            {op("−")}
            {as("reinstauración", vals.r.toFixed(2), "r")}
            {pq(")")}
          </span>
          {op("=")}
          <span className="f-mid">{signed(Npct, "%")}</span>
        </span>
      </div>
      <div className="f-line">
        {deltas.flatMap((m, i) =>
          i === 0
            ? [deltaEq(m)]
            : [<span className="f-sep" key={`sep-${m}`} aria-hidden="true" />, deltaEq(m)],
        )}
      </div>
      <div className="f-note">
        {metric === "participacion" ? (
          <>
            <b>Δ participación</b> es el porcentaje total — el mismo del indicador. Aquí φ y la
            productividad no entran: es desplazamiento neto puro (las tareas que pasan al capital).
          </>
        ) : (
          <>
            <b>φ reparte el mismo golpe</b> entre puestos y sueldos: lo que no cae en uno cae en el
            otro. Por eso empleo y salarios van juntos — son las dos caras del indicador. <b>N</b> es
            el desplazamiento neto que los alimenta.
          </>
        )}{" "}
        A 3 años, la adopción y la reinstauración van a medio camino (×0,55 y ×0,65).
      </div>
    </div>
  );
}

// Fila de la fórmula para la lente Agregado · CES. Otro motor, otra cuenta: la IA empuja el
// capital (g), el pastel crece y σ decide la tajada. No hay φ. Mismos pills sobrios; s_K/s_L son
// constantes documentadas (cuentas nacionales).
function CesFormula({
  engine,
  metric,
  vals,
  onHelp,
}: {
  engine: Engine;
  metric: Metric;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;
  const g = vals.g * HORIZON[5].adopt;
  const formulaHelp: HelpEntry = {
    ...HELP_FORMULA_CES,
    node: sensViz(engine.sensitivity(metric, vals, HORIZON[5])),
  };
  const byKey: Record<string, ParamDef> = Object.fromEntries(CES_PARAMS.map((p) => [p.key, p]));
  const pillHover = (key: ParamKey) => ({
    onMouseEnter: () => onHelp?.(helpParam(byKey[key], vals[key])),
    onMouseLeave: () => onHelp?.(formulaHelp),
  });
  const term = (name: string, val: string, tone: "ev" | "as", key: ParamKey) => (
    <span className={cx("f-term", tone)} {...pillHover(key)}>
      <span className="f-tname">{name}</span>
      <span className="f-tval">{val}</span>
    </span>
  );
  const op = (s: string) => <span className="f-op">{s}</span>;
  const pq = (s: string) => <span className="f-pq">{s}</span>;
  const konst = (name: string, val: string) => (
    <span className="f-konst">
      <span className="f-kname">{name}</span>
      <span className="f-kval">{val}</span>
    </span>
  );

  const sigmaPill = term("σ", vals.sigma.toFixed(2), "ev", "sigma");
  const gPill = term("empuje IA", byKey.g.fmt(vals.g), "ev", "g");
  const epsPill = term("ε", vals.eps.toFixed(2), "as", "eps");
  const skTok = konst("s_K", SK_SL.SK.toFixed(2));
  const slTok = konst("s_L", SK_SL.SL.toFixed(2));
  const wageOverSigma = (
    <span className="f-group">
      {pq("(")}
      {konst("s_K", SK_SL.SK.toFixed(2))}
      {op("÷")}
      {sigmaPill}
      {pq(")")}
    </span>
  );

  const deltas: Metric[] = metric === "participacion" ? ["participacion"] : ["empleo", "salarios"];
  const deltaEq = (m: Metric) => {
    const r = cesDecompose(m, vals, HORIZON[5]).result;
    const color = r < -0.05 ? "var(--peach)" : r > 0.05 ? "var(--green)" : "var(--subtext1)";
    return (
      <span className={cx("f-eq", m === metric && "sel")} key={m}>
        <span className="f-lhs">{METRIC_LABEL[m]}</span>
        {op("=")}
        {m === "salarios" && (
          <>
            {wageOverSigma}
            {op("×")}
            {gPill}
          </>
        )}
        {m === "empleo" && (
          <>
            {epsPill}
            {op("×")}
            {wageOverSigma}
            {op("×")}
            {gPill}
          </>
        )}
        {m === "participacion" && (
          <>
            {op("−")}
            <span className="f-group">
              {pq("(")}
              <span className="f-num">1</span>
              {op("−")}
              <span className="f-num">1</span>
              {op("÷")}
              {sigmaPill}
              {pq(")")}
            </span>
            {op("×")}
            {skTok}
            {op("×")}
            {gPill}
            {op("×")}
            {slTok}
          </>
        )}
        {op("=")}
        <span className="f-result" style={{ color }}>
          {signed(r, META[m].suf)}
        </span>
      </span>
    );
  };

  return (
    <div
      className="formula"
      onMouseEnter={() => onHelp?.(formulaHelp)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="f-kicker">Cómo se calcula · a 5 años · lente Agregado</div>
      <div className="f-line">
        <span className="f-eq">
          <span className="f-lhs">el pastel</span>
          {op("=")}
          {skTok}
          {op("×")}
          {gPill}
          {op("=")}
          <span className="f-mid">{signed(SK_SL.SK * g * 100, "%")} de producción</span>
        </span>
      </div>
      <div className="f-line">
        {deltas.flatMap((m, i) =>
          i === 0
            ? [deltaEq(m)]
            : [<span className="f-sep" key={`sep-${m}`} aria-hidden="true" />, deltaEq(m)],
        )}
      </div>
      <div className="f-note">
        La IA es <b>capital más productivo</b>: el pastel crece y el salario casi siempre sube.{" "}
        <b>σ</b> decide la tajada — sobre 1 el capital se la lleva, bajo 1 el trabajo. No hay φ: el
        reparto ya no se elige. <b>s_K</b>, <b>s_L</b> = tajada del capital / del trabajo (cuentas
        nacionales).
      </div>
    </div>
  );
}

// Fila de la fórmula para la lente Empírico. La cuenta es deliberadamente simple — esa es la
// honestidad de la lente: efecto realizado medido en lo más expuesto × cobertura. La participación
// no la mide nadie: se deja en blanco, no se inventa.
function EmpiricoFormula({
  engine,
  metric,
  vals,
  onHelp,
}: {
  engine: Engine;
  metric: Metric;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;
  const supported = engine.metrics.includes(metric);
  const formulaHelp: HelpEntry = {
    ...HELP_FORMULA_EMP,
    node: supported ? sensViz(engine.sensitivity(metric, vals, HORIZON[5])) : undefined,
  };
  const byKey: Record<string, ParamDef> = Object.fromEntries(EMP_PARAMS.map((p) => [p.key, p]));
  const pillHover = (key: ParamKey) => ({
    onMouseEnter: () => onHelp?.(helpParam(byKey[key], vals[key])),
    onMouseLeave: () => onHelp?.(formulaHelp),
  });
  const term = (name: string, val: string, tone: "ev" | "as", key: ParamKey) => (
    <span className={cx("f-term", tone)} {...pillHover(key)}>
      <span className="f-tname">{name}</span>
      <span className="f-tval">{val}</span>
    </span>
  );
  const op = (s: string) => <span className="f-op">{s}</span>;
  const cobPill = term("cobertura", byKey.cob.fmt(vals.cob), "as", "cob");
  const betaPill = (m: Metric) =>
    m === "salarios"
      ? term("efecto salarios", byKey.bSal.fmt(vals.bSal), "ev", "bSal")
      : term("efecto empleo", byKey.bEmp.fmt(vals.bEmp), "ev", "bEmp");

  const deltaEq = (m: Metric) => {
    const r = (m === "salarios" ? vals.bSal : vals.bEmp) * vals.cob;
    const color = r < -0.05 ? "var(--peach)" : r > 0.05 ? "var(--green)" : "var(--subtext1)";
    return (
      <span className={cx("f-eq", m === metric && "sel")} key={m}>
        <span className="f-lhs">{METRIC_LABEL[m]}</span>
        {op("=")}
        {betaPill(m)}
        {op("×")}
        {cobPill}
        {op("=")}
        <span className="f-result" style={{ color }}>
          {signed(r, META[m].suf)}
        </span>
      </span>
    );
  };

  return (
    <div
      className="formula"
      onMouseEnter={() => onHelp?.(formulaHelp)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="f-kicker">Cómo se calcula · lente Empírico</div>
      {metric === "participacion" ? (
        <div className="f-line">
          <span className="f-eq">
            <span className="f-lhs">Δ participación</span>
            {op("=")}
            <span className="f-nd">sin datos</span>
          </span>
        </div>
      ) : (
        <div className="f-line">
          {(["empleo", "salarios"] as Metric[]).flatMap((m, i) =>
            i === 0
              ? [deltaEq(m)]
              : [<span className="f-sep" key={`sep-${m}`} aria-hidden="true" />, deltaEq(m)],
          )}
        </div>
      )}
      <div className="f-note">
        {metric === "participacion" ? (
          <>
            Ningún estudio ha medido el efecto de la IA sobre la <b>participación del trabajo</b>.
            Esta lente no la inventa — la deja en blanco. Mira el empleo o los salarios, donde sí hay
            mediciones.
          </>
        ) : (
          <>
            <b>Efecto medido en lo más expuesto × cobertura</b>: el dato realizado en freelancers y
            jóvenes top-expuestos, escalado por cuánto de la economía se le parece. El rango sale
            ancho por lo poco que se ha medido. Empleo y salarios <b>discrepan entre estudios</b>: ese
            desacuerdo es parte del dato.
          </>
        )}
      </div>
    </div>
  );
}

// Fila de la fórmula para la lente Crecimiento. El cuello de botella (distancia a ½) fija el SIGNO;
// el crecimiento, la ESCALA. La participación la decide solo el cuello (es un reparto). Magnitudes
// ilustrativas: esta lente muestra el mecanismo, no estima — es la cota especulativa del debate.
function CrecimientoFormula({
  engine,
  metric,
  vals,
  onHelp,
}: {
  engine: Engine;
  metric: Metric;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;
  const formulaHelp: HelpEntry = {
    ...HELP_FORMULA_CREC,
    node: sensViz(engine.sensitivity(metric, vals, HORIZON[5])),
  };
  const byKey: Record<string, ParamDef> = Object.fromEntries(CREC_PARAMS.map((p) => [p.key, p]));
  const pillHover = (key: ParamKey) => ({
    onMouseEnter: () => onHelp?.(helpParam(byKey[key], vals[key])),
    onMouseLeave: () => onHelp?.(formulaHelp),
  });
  const term = (name: string, val: string, tone: "ev" | "as", key: ParamKey) => (
    <span className={cx("f-term", tone)} {...pillHover(key)}>
      <span className="f-tname">{name}</span>
      <span className="f-tval">{val}</span>
    </span>
  );
  const op = (s: string) => <span className="f-op">{s}</span>;
  const cuelloPill = term("weak links", byKey.cuello.fmt(vals.cuello), "as", "cuello");
  const grPill = term("crecimiento", byKey.gr.fmt(vals.gr), "ev", "gr");
  const tilt = (vals.cuello - 0.5) * 2;
  const gEff = vals.gr * (1 - 0.6 * vals.cuello); // domesticado por los weak links (TAME en model.ts)

  const deltaEq = (m: Metric) => {
    const r = m === "salarios" ? tilt * gEff * 1.4 : m === "participacion" ? tilt * 25 : tilt * (6 + 0.3 * gEff);
    const color = r < -0.05 ? "var(--peach)" : r > 0.05 ? "var(--green)" : "var(--subtext1)";
    return (
      <span className={cx("f-eq", m === metric && "sel")} key={m}>
        <span className="f-lhs">{METRIC_LABEL[m]}</span>
        {op("=")}
        {cuelloPill}
        {m !== "participacion" && (
          <>
            {op("·")}
            {grPill}
          </>
        )}
        {op("=")}
        <span className="f-result" style={{ color }}>
          {signed(r, META[m].suf)}
        </span>
      </span>
    );
  };

  const deltas: Metric[] = metric === "participacion" ? ["participacion"] : ["empleo", "salarios"];

  return (
    <div
      className="formula"
      onMouseEnter={() => onHelp?.(formulaHelp)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="f-kicker">Cómo se calcula · lente Crecimiento</div>
      <div className="f-line">
        <span className="f-eq">
          <span className="f-lhs">el pastel</span>
          {op("=")}
          {grPill}
          {op("−")}
          {cuelloPill}
          {op("=")}
          <span className="f-mid">crece {gEff.toFixed(1)}% al año (los weak links lo domestican)</span>
        </span>
      </div>
      <div className="f-line">
        {deltas.flatMap((m, i) =>
          i === 0
            ? [deltaEq(m)]
            : [<span className="f-sep" key={`sep-${m}`} aria-hidden="true" />, deltaEq(m)],
        )}
      </div>
      <div className="f-note">
        {metric === "participacion" ? (
          <>
            La <b>tajada del trabajo</b> la deciden solo los <b>weak links</b> (Jones): sobre 50% el
            trabajo es el factor escaso y captura; bajo 50%, se automatiza todo y se la lleva el
            capital. El tamaño del pastel no entra — es reparto.
          </>
        ) : (
          <>
            Los <b>weak links</b> hacen dos cosas (Jones): <b>domestican</b> el crecimiento —más cuello,
            pastel más chico— y deciden <b>quién captura</b>. Sobre 50% el trabajo es escaso y captura
            (pero el pastel queda acotado); bajo 50%, el crecimiento se dispara y la renta del trabajo
            colapsa.
          </>
        )}{" "}
        Magnitudes ilustrativas: es la cota especulativa del debate, no un pronóstico.
      </div>
    </div>
  );
}

export function VeredictoSection({
  metric,
  onParamFocus,
  onHelp,
}: {
  metric: Metric;
  onParamFocus?: (f: ParamFocus) => void;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  // Estado inicial desde el hash de la URL (escenario compartido). Ver urlState.ts.
  const u0 = readParams();
  const [scope, setScope] = useState<Scope>(() => (u0.get("sc") as Scope) || "global");
  const [lens, setLens] = useState<Lens>(() => (u0.get("l") as Lens) || "tareas"); // motor del núcleo (lente)
  const [compareMode, setCompareMode] = useState(() => u0.get("cmp") === "1"); // comparar todas las lentes
  const [distOn, setDistOn] = useState(() => u0.get("dist") === "1"); // capa Distribución (quién), aditiva
  const [vals, setVals] = useState<Vals>(() => {
    const l = (u0.get("l") as Lens) || "tareas";
    const sc = (u0.get("sc") as Scope) || "global";
    const base = (ENGINES[l] ?? (ENGINES.tareas as Engine)).defaults(sc);
    const p = u0.get("p"); // palancas movidas: "clave~valor!clave~valor" (solo las ≠ default)
    if (p)
      for (const pair of p.split("!")) {
        const [k, v] = pair.split("~");
        if (k && v !== undefined && k in base) base[k] = Number(v);
      }
    return base;
  });
  const [copied, setCopied] = useState(false); // feedback del botón "compartir"
  const engine = ENGINES[lens] ?? (ENGINES.tareas as Engine);

  // Foco de parámetro: el hover da una vista previa; el clic lo FIJA (persiste al salir el cursor)
  // y vuelve a clic lo desfija. El parámetro en foco colapsa la fila de estudios a sus anclas.
  const [pinnedKey, setPinnedKey] = useState<ParamKey | null>(null);
  const [hoverKey, setHoverKey] = useState<ParamKey | null>(null);
  const focusKey = hoverKey ?? pinnedKey;
  useEffect(() => {
    if (!focusKey) {
      onParamFocus?.(null);
      return;
    }
    const p = engine.params.find((x) => x.key === focusKey);
    onParamFocus?.(p ? mkFocus(p, vals[focusKey]) : null);
  }, [focusKey, vals, engine, onParamFocus]);
  const togglePin = (k: ParamKey) => setPinnedKey((cur) => (cur === k ? null : k));

  // Sincroniza la rebanada del escenario (lente, escala, capa, palancas) al hash. Solo escribe
  // lo que se desvía del default → links cortos cuando casi no tocas nada.
  useEffect(() => {
    const base = engine.defaults(scope);
    const diff = Object.keys(vals)
      .filter((k) => Math.abs(vals[k] - (base[k] ?? vals[k])) > 1e-9)
      .map((k) => `${k}~${+vals[k].toFixed(4)}`)
      .join("!");
    writeParams({
      l: lens === "tareas" ? null : lens,
      sc: scope === "global" ? null : scope,
      cmp: compareMode ? "1" : null,
      dist: distOn ? "1" : null,
      p: diff || null,
    });
  }, [engine, scope, lens, compareMode, distOn, vals]);

  // "Compartir": el hash ya está sincronizado, así que basta copiar el link actual. El feedback
  // sale siempre (optimista); si el navegador no expone clipboard, no rompe.
  const share = () => {
    navigator.clipboard?.writeText(location.href)?.catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pickScope = (sc: Scope) => {
    setScope(sc);
    setVals(engine.defaults(sc));
  };
  // Cambiar de lente reinicia los parámetros (y desfija): cada motor tiene su juego de palancas.
  // Elegir una lente concreta también sale del modo comparar.
  const pickLens = (l: Lens) => {
    const e = ENGINES[l];
    if (!e) return;
    setLens(l);
    setVals(e.defaults(scope));
    setPinnedKey(null);
    setCompareMode(false);
  };
  // Entrar a comparar desfija el parámetro en foco (no hay sliders abajo que lo sostengan), así las
  // bandas Estudios/Evidencia/Hipótesis vuelven a su estado pleno.
  const toggleCompare = () => {
    setCompareMode((c) => !c);
    setPinnedKey(null);
  };
  const set = (k: ParamKey, v: number) => setVals((p) => ({ ...p, [k]: v }));

  const meta = SCOPES.find((s) => s.key === scope)!;

  // Tres estados: anclado (azul, la evidencia lo fija), informado (verde, la evidencia lo acota sin
  // fijarlo) y supuesto (durazno, la literatura no lo toca).
  const anclados = engine.params.filter((p) => p.anchored && !p.informed);
  const informados = engine.params.filter((p) => p.informed);
  const supuestos = engine.params.filter((p) => !p.anchored && !p.informed);

  // Empleo y salarios se muestran emparejados: φ reparte el mismo golpe entre los dos, así que
  // verlos juntos hace legible esa palanca. La participación es otro eje (−N) y va sola.
  const kpiMetrics: Metric[] =
    metric === "participacion" ? ["participacion"] : ["empleo", "salarios"];

  const renderSlider = (p: ParamDef) => {
    const marks = p.anchored ? axisMarks(p) : [];
    return (
      <div
        className={cx("slider", p.key === pinnedKey && "pinned")}
        key={p.key}
        onMouseEnter={() => {
          setHoverKey(p.key); // vista previa; el foco efectivo lo emite el effect (hover ?? fijado)
          onHelp?.(helpParam(p, vals[p.key]));
        }}
        onMouseLeave={() => {
          setHoverKey(null); // al salir, vuelve al parámetro fijado (si hay) o a nada
          onHelp?.(null);
        }}
        onClick={(e) => {
          // Clic en el recuadro lo fija/desfija; arrastrar el slider (input) no togglea.
          if ((e.target as HTMLElement).tagName !== "INPUT") togglePin(p.key);
        }}
      >
        <div className="slider-top">
          <span className="slider-label">{p.short}</span>
          <span className="slider-val">{p.fmt(vals[p.key])}</span>
        </div>
        <div className="slider-desc">{p.label}</div>
        <input
          type="range"
          min={p.min}
          max={p.max}
          step={p.step}
          value={vals[p.key]}
          onChange={(e) => {
            const nv = Number(e.target.value);
            set(p.key, nv); // el effect re-emite los pesos en vivo al cambiar vals
            onHelp?.(helpParam(p, nv)); // y la ayuda reinterpreta el nuevo valor en vivo
          }}
        />
        {p.anchored && marks.length ? (
          <div className="slider-axis">
            <span className="sa-line" />
            {marks.map((m) => (
              <span className="sa-dot" key={`${m.id}-d`} style={{ left: `${m.pct}%` }} />
            ))}
            {marks.map((m, i) => {
              const edge = m.pct <= 15 ? "l" : m.pct >= 85 ? "r" : "";
              const style =
                edge === "l" ? { left: 0 } : edge === "r" ? { right: 0 } : { left: `${m.pct}%` };
              return (
                <span
                  key={`${m.id}-c`}
                  className={cx("sa-cite", i % 2 ? "up" : "down", edge && `edge-${edge}`)}
                  style={style}
                >
                  {m.cite}
                </span>
              );
            })}
          </div>
        ) : (
          <div className="slider-ev">
            <span className={p.anchored ? undefined : "slider-ev-as"}>
              {p.evidence.replace(/^SUPUESTO — /, "")}
            </span>
          </div>
        )}
      </div>
    );
  };

  // La fórmula de la lente activa: el "efecto en vivo" que se actualiza al mover las palancas.
  const effectFormula =
    lens === "agregado" ? (
      <CesFormula engine={engine} metric={metric} vals={vals} onHelp={onHelp} />
    ) : lens === "empirico" ? (
      <EmpiricoFormula engine={engine} metric={metric} vals={vals} onHelp={onHelp} />
    ) : lens === "endogeno" ? (
      <CrecimientoFormula engine={engine} metric={metric} vals={vals} onHelp={onHelp} />
    ) : (
      <Formula engine={engine} metric={metric} vals={vals} onHelp={onHelp} />
    );

  // Explorador que respira: la pregunta y su respuesta honesta arriba y grandes; abajo una cabina
  // de dos columnas — las palancas (la causa) junto al efecto en vivo (la cuenta) — para que se vea
  // mover el resultado al mover una palanca, sin perder de vista el sentido. roadmap-lentes.md.
  return (
    <div className="ver-band respira">
      {/* Con qué modelo respondo (lente). Hoy las 4 construidas; "Comparar" no es lente: las corre
          todas a la vez. */}
      <div
        className="lens-row"
        onMouseEnter={() => onHelp?.(HELP_LENS)}
        onMouseLeave={() => onHelp?.(null)}
      >
        <span className="lens-tag">Lente</span>
        {LENSES.map((l) => (
          <button
            key={l.key}
            className={cx("lens-cell", !compareMode && l.key === lens && "sel", !l.built && "soon")}
            onClick={() => pickLens(l.key)}
            aria-disabled={!l.built}
            title={l.sub}
            onMouseEnter={() => onHelp?.(HELP_LENS_DETAIL[l.key])}
            onMouseLeave={() => onHelp?.(HELP_LENS)}
          >
            {l.label}
            {!l.built && <span className="lens-soon">pronto</span>}
          </button>
        ))}
        <button
          className={cx("lens-cell", "cmp-toggle", compareMode && "sel")}
          onClick={toggleCompare}
          title="Comparar todas las lentes con un mismo escenario"
          onMouseEnter={() => onHelp?.(HELP_COMPARE)}
          onMouseLeave={() => onHelp?.(HELP_LENS)}
        >
          Comparar
        </button>
      </div>

      {compareMode ? (
        <Compare scope={scope} metric={metric} onHelp={onHelp} />
      ) : (
        <>
          {/* La pregunta y la respuesta honesta — arriba, grandes, el foco de la vista. */}
          <div className="ver-answer">
            <h2 className="ver-question">{META[metric].titulo}</h2>
            <div className="kpi-groups">
              {kpiMetrics.map((m) => (
                <div className={cx("kpi-group", m === metric && "sel")} key={m}>
                  <div className="kpi-group-label">{METRIC_SHORT[m]}</div>
                  {engine.metrics.includes(m) ? (
                    <div className="kpis">
                      <KpiCard engine={engine} metric={m} horizon={3} vals={vals} onHelp={onHelp} />
                      <KpiCard engine={engine} metric={m} horizon={5} vals={vals} onHelp={onHelp} />
                    </div>
                  ) : (
                    <div className="kpi-nd">
                      Este modelo no mide la {METRIC_SHORT[m].toLowerCase()}: ningún estudio empírico
                      la ha estimado. Mira el empleo o los salarios.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Capas: recuadros ADITIVOS (no lentes) que reparten/elaboran el resultado de la lente
              activa. Toggles, no exclusión. Hoy solo "Distribución" está construida. */}
          <div
            className="capa-row"
            onMouseEnter={() => onHelp?.(HELP_CAPAS)}
            onMouseLeave={() => onHelp?.(null)}
          >
            <span className="capa-tag">Capas</span>
            <button
              className={cx("capa-cell", distOn && "on")}
              onClick={() => setDistOn((o) => !o)}
              title="Reparte el cambio de empleo por nivel de habilidad"
            >
              <span className="capa-check" aria-hidden="true">
                {distOn ? "✓" : "+"}
              </span>
              Distribución · quién
            </button>
            {["Transición · cuándo", "Reasignación · dónde", "Captura de renta"].map((t) => (
              <button key={t} className="capa-cell soon" aria-disabled>
                {t}
                <span className="lens-soon">pronto</span>
              </button>
            ))}
          </div>

          {distOn && (
            <Distribucion empleoAgg={engine.delta("empleo", vals, HORIZON[5])} onHelp={onHelp} />
          )}

          {/* La cabina: a la izquierda las palancas (la causa), a la derecha el efecto en vivo
              (la cuenta + qué mueve más la aguja). Causa y efecto a la vista, juntos. */}
          <div className="ver-cockpit">
            <div className="cockpit-col knobs">
              <div className="cockpit-h">Tus palancas · calíbralas y mira el efecto →</div>
              <div className="ver-body">
                {anclados.length > 0 && (
                  <div className="sg">
                    <div className="sg-head sg-head-ev">
                      Anclados en evidencia
                      <span> · los puntos son los estudios; muévelo y mira a quién le das peso</span>
                    </div>
                    <div className="sg-sliders">{anclados.map(renderSlider)}</div>
                  </div>
                )}

                {informados.length > 0 && (
                  <div className="sg">
                    <div className="sg-head sg-head-inf">
                      Informados en evidencia
                      <span> · la evidencia acota la dirección y el rango, no fija el punto</span>
                    </div>
                    <div className="sg-sliders">{informados.map(renderSlider)}</div>
                  </div>
                )}

                {supuestos.length > 0 && (
                  <div className="sg">
                    <div className="sg-head sg-head-as">
                      Supuestos<span> · la literatura no los fija — aquí está el aire</span>
                    </div>
                    <div className="sg-sliders">{supuestos.map(renderSlider)}</div>
                  </div>
                )}
              </div>

              <div className="ver-head">
                <select
                  value={scope}
                  onChange={(e) => pickScope(e.target.value as Scope)}
                  onMouseEnter={() => onHelp?.(HELP_SCOPE)}
                  onMouseLeave={() => onHelp?.(null)}
                >
                  {SCOPES.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                      {s.hasData ? "" : " · sin datos propios"}
                    </option>
                  ))}
                </select>
                <button onClick={() => setVals(engine.defaults(scope))}>defaults</button>
                <button
                  className="share-btn"
                  onClick={share}
                  title="Copia un link que reproduce este escenario exacto"
                  onMouseEnter={() => onHelp?.(HELP_SHARE)}
                  onMouseLeave={() => onHelp?.(null)}
                >
                  {copied ? "copiado ✓" : "compartir"}
                </button>
              </div>

              {!meta.hasData && (
                <div className="ver-note">
                  Sin datos propios de esta región todavía — usa los supuestos globales como base.
                </div>
              )}
            </div>

            <div className="cockpit-col effect">
              {effectFormula}
              {engine.metrics.includes(metric) && (
                <div className="cockpit-sens">
                  {sensViz(engine.sensitivity(metric, vals, HORIZON[5]))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
