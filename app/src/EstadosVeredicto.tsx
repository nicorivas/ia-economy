// Veredicto de la TERCERA RAMA del árbol: "Los Estados" (el motor de la capacidad fiscal).
// Hermano de RecursosVeredicto. Dos selectores en vez de uno: el INSTRUMENTO (sobre qué base cae el
// impuesto: capital / automatización / lo inmóvil, cada uno con su tamaño y su movilidad) y el
// PUENTE (qué lente de la rama del trabajo calcula el shock, porque la suficiencia solo tiene
// sentido contra algo perdido). Si la lente elegida no opina de participación —el Empírico calla—,
// la rama lo dice y la suficiencia queda sin definir, en vez de inventar un cero. Motor en model.ts,
// derivación y evidencia en estados-fiscal.md.
import { useState, useEffect } from "react";
import {
  INSTRUMENTOS,
  INSTRUMENTO_BY_KEY,
  EST_METRICS,
  estDecompose,
  shockDesdeTrabajo,
  LENSES,
  HORIZON,
  PEN,
} from "./model";
import type {
  Vals,
  ParamKey,
  ParamDef,
  EstMetric,
  Instrumento,
  InstrumentoCfg,
  Lens,
} from "./model";
import { Section } from "./Section";
import { mkFocus, axisMarks, KpiChart } from "./Veredicto";
import type { ParamFocus } from "./Veredicto";
import {
  helpEstKpi,
  helpEstParam,
  HELP_EST_FORMULA,
  HELP_INSTRUMENTO,
  HELP_INSTRUMENTO_DETAIL,
} from "./help";
import type { HelpEntry } from "./help";

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");
const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;

// Todas las anclas fiscales de esta rama son de EE.UU. (tasas efectivas de Acemoglu-Manera-Restrepo,
// composición de la recaudación federal). El shock se lee en el mismo alcance para no mezclar.
const SCOPE = "us" as const;

const EST_VERDICT: Record<EstMetric, { pos: string; neg: string }> = {
  recaudacion: { pos: "la caja crece", neg: "la caja se achica" },
  fuga: { pos: "se escapa", neg: "se recauda entero" },
  suficiencia: { pos: "repone parte", neg: "no alcanza" },
};
const EST_SHORT: Record<EstMetric, string> = {
  recaudacion: "Recaudación",
  fuga: "Fuga de la base",
  suficiencia: "Suficiencia",
};
const EST_SUF: Record<EstMetric, string> = {
  recaudacion: " pp",
  fuga: "%",
  suficiencia: "%",
};
const LBL: Record<EstMetric, string> = {
  recaudacion: "Δ caja",
  fuga: "fuga",
  suficiencia: "suficiencia",
};

// Fila del puente: de dónde viene el shock. No es decoración — es la dependencia entre ramas hecha
// visible. Cambiar de lente cambia el tamaño del hoyo que hay que tapar.
function PuenteRow({
  lens,
  setLens,
  pen,
  setPen,
  dsL,
  onHelp,
}: {
  lens: Lens;
  setLens: (l: Lens) => void;
  pen: number;
  setPen: (p: number) => void;
  dsL: number | null;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const help: HelpEntry = {
    kicker: "El puente con la otra rama",
    title: "El hoyo que hay que tapar lo calcula el trabajo",
    body: [
      "La suficiencia compara lo recaudado con algo perdido, y ese algo no lo decide esta rama: es la caída de la participación del trabajo que calcula la lente que elijas, a la penetración que fijes aquí.",
      "Por eso el resultado de los Estados hereda el desacuerdo del trabajo. Con la lente Agregado·CES y σ en su centro empírico (0,65, complementos) la participación SUBE y no hay nada que reponer; con Tareas o Crecimiento cae y el hoyo aparece. La política fiscal necesaria depende del modelo con que leas el shock, no solo de la ideología.",
    ],
    read:
      dsL === null
        ? "Esta lente no opina de participación del trabajo: la suficiencia queda sin definir, que es más honesto que un cero."
        : `Con esta lente y esta penetración, la participación del trabajo cambia ${signed(dsL, " pp")}.`,
    tone: "ev",
  };
  return (
    <div
      className="lens-row"
      onMouseEnter={() => onHelp?.(help)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <span className="lens-tag">El shock lo calcula</span>
      {LENSES.filter((l) => l.built).map((l) => (
        <button
          key={l.key}
          className={cx("lens-cell", l.key === lens && "sel")}
          onClick={() => setLens(l.key)}
          title={l.sub}
        >
          {l.label}
        </button>
      ))}
      <span className="lens-tag" style={{ marginLeft: 12 }}>
        {PEN.fmt(pen)} de IA
      </span>
      <input
        type="range"
        min={PEN.min}
        max={PEN.max}
        step={PEN.step}
        value={pen}
        onChange={(e) => setPen(Number(e.target.value))}
        style={{ flex: "0 1 140px" }}
      />
      <span className="lens-tag">
        {dsL === null ? "no opina · sin datos" : `participación ${signed(dsL, " pp")}`}
      </span>
    </div>
  );
}

// Fila de la fórmula: la cuenta fiscal entera. Las tres caras de la misma cuenta.
function EstFormula({
  cfg,
  metric,
  vals,
  dsL,
  onHelp,
}: {
  cfg: InstrumentoCfg;
  metric: EstMetric;
  vals: Vals;
  dsL: number;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const d = estDecompose(metric, vals, HORIZON[5], cfg.sBase, dsL);
  const byKey: Record<string, ParamDef> = Object.fromEntries(cfg.params.map((p) => [p.key, p]));
  const pillHover = (key: ParamKey) => ({
    onMouseEnter: () => onHelp?.(helpEstParam(byKey[key], vals[key])),
    onMouseLeave: () => onHelp?.(HELP_EST_FORMULA),
  });
  const tone = (key: ParamKey): "ev" | "inf" | "as" =>
    byKey[key]?.informed ? "inf" : byKey[key]?.anchored ? "ev" : "as";
  const term = (name: string, val: string, key: ParamKey) => (
    <span className={cx("f-term", tone(key))} {...pillHover(key)}>
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
  const tauPill = term("tasa", byKey.dtau.fmt(vals.dtau), "dtau");
  const epsPill = term("ε", byKey.eps.fmt(vals.eps), "eps");
  const rhoPill = term("ρ", byKey.rho.fmt(vals.rho), "rho");
  const retenido = <span className="f-derived">lo que se queda</span>;
  const entra = <span className="f-derived">lo que entra</span>;

  const estEq = (m: EstMetric) => {
    const r = m === "recaudacion" ? d.recaudacion : m === "fuga" ? d.fuga : d.suficiencia;
    const color = Math.abs(r) < 0.05 ? "var(--subtext1)" : "var(--text)";
    return (
      <span className={cx("f-eq", m === metric && "sel")} key={m}>
        <span className="f-lhs">{LBL[m]}</span>
        {op("=")}
        {m === "recaudacion" && (
          <>
            <span className="f-mid">{signed(d.erosion, " pp")} de erosión</span>
            {op("+")}
            {entra}
          </>
        )}
        {m === "fuga" && (
          <>
            <span className="f-num">1</span>
            {op("−")}
            {retenido}
          </>
        )}
        {m === "suficiencia" && (
          <>
            <span className="f-group">
              {pq("(")}
              <span className="f-mid">{signed(d.recaudacion, " pp")}</span>
              {op("×")}
              {rhoPill}
              {pq(")")}
            </span>
            {op("÷")}
            <span className="f-mid">{d.perdida.toFixed(1)} pp perdidos</span>
          </>
        )}
        {op("=")}
        <span className="f-result" style={{ color }}>
          {m === "fuga" ? `${r.toFixed(1)}%` : signed(r, EST_SUF[m])}
        </span>
      </span>
    );
  };

  return (
    <div
      className="formula"
      onMouseEnter={() => onHelp?.(HELP_EST_FORMULA)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="f-kicker">Cómo se calcula · a 5 años · {cfg.label.toLowerCase()}</div>
      <div className="f-line">
        <span className="f-eq">
          <span className="f-lhs">la erosión</span>
          {op("=")}
          {konst("τ_L−τ_K", (0.255 - 0.1).toFixed(3))}
          {op("×")}
          <span className="f-mid">{signed(dsL, " pp")} de participación</span>
          {op("=")}
          <span className="f-mid">{signed(d.erosion, " pp")} del producto</span>
        </span>
      </div>
      <div className="f-line">
        <span className="f-eq">
          <span className="f-lhs">lo que se queda</span>
          {op("=")}
          <span className="f-num">e</span>
          <span className="f-op">^−</span>
          {epsPill}
          {op("×")}
          {tauPill}
          {op("=")}
          <span className="f-mid">{(d.retenido * 100).toFixed(0)}% de la base</span>
        </span>
        <span className="f-sep" aria-hidden="true" />
        <span className="f-eq">
          <span className="f-lhs">lo que entra</span>
          {op("=")}
          {tauPill}
          {op("×")}
          {konst("base", cfg.sBase.toFixed(2))}
          {op("×")}
          {retenido}
          {op("=")}
          <span className="f-mid">{signed(d.neta, " pp")} del producto</span>
        </span>
      </div>
      <div className="f-line">
        {EST_METRICS.flatMap((m, i) =>
          i === 0
            ? [estEq(m)]
            : [<span className="f-sep" key={`sep-${m}`} aria-hidden="true" />, estEq(m)],
        )}
      </div>
      <div className="f-note">
        La <b>erosión</b> no la decide nadie: es el código tributario vigente aplicado a una base que
        migra de lo gravado al 25,5% a lo gravado al 10%. Lo que sí se decide es la{" "}
        <b>tasa</b> y sobre qué <b>base</b> cae — y ahí manda ε: con base móvil, subir la tasa rinde
        cada vez menos. Sobre <b>100% de suficiencia</b> el instrumento cubre la pérdida entera y
        sobra: el rango llega alto porque la tasa es una decisión libre, no porque el modelo prometa
        holgura. <b>base</b> = {cfg.baseNote.replace(/^SUPUESTO el tamaño: /, "supuesto — ")}
      </div>
    </div>
  );
}

const SG_HEAD: Record<"ev" | "inf" | "as", { cls: string; label: string; note: string }> = {
  ev: {
    cls: "sg-head-ev",
    label: "Anclados en evidencia",
    note: " · los puntos son los estudios; muévelo y mira abajo a quién le das peso",
  },
  inf: {
    cls: "sg-head-inf",
    label: "Informados en evidencia",
    note: " · la evidencia acota la dirección y el rango, no fija el punto",
  },
  as: {
    cls: "sg-head-as",
    label: "Supuestos",
    note: " · la literatura no los fija — aquí está el aire",
  },
};

export function EstadosVeredicto({
  metric,
  onParamFocus,
  onHelp,
}: {
  metric: EstMetric;
  onParamFocus?: (f: ParamFocus) => void;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const [instrumento, setInstrumento] = useState<Instrumento>("capital");
  const [lens, setLens] = useState<Lens>("tareas");
  const [pen, setPen] = useState<number>(PEN.default);
  const cfg = INSTRUMENTO_BY_KEY[instrumento];
  const [vals, setVals] = useState<Vals>(() => ({ ...cfg.defaults }));
  const [pinnedKey, setPinnedKey] = useState<ParamKey | null>(null);
  const [hoverKey, setHoverKey] = useState<ParamKey | null>(null);
  const focusKey = hoverKey ?? pinnedKey;
  useEffect(() => {
    if (!focusKey) {
      onParamFocus?.(null);
      return;
    }
    const p = cfg.params.find((x) => x.key === focusKey);
    onParamFocus?.(p ? mkFocus(p, vals[focusKey]) : null);
  }, [focusKey, vals, cfg, onParamFocus]);
  const togglePin = (k: ParamKey) => setPinnedKey((cur) => (cur === k ? null : k));
  const set = (k: ParamKey, v: number) => setVals((p) => ({ ...p, [k]: v }));
  const pickInstrumento = (k: Instrumento) => {
    setInstrumento(k);
    setVals({ ...INSTRUMENTO_BY_KEY[k].defaults });
    setPinnedKey(null);
  };

  // El puente: Δ participación del trabajo según la lente elegida. null = esa lente no opina.
  const dsLRaw = shockDesdeTrabajo(lens, pen, HORIZON[5], SCOPE);
  const dsL = dsLRaw ?? 0;
  const sinShock = dsLRaw === null;

  const groups: ("ev" | "inf" | "as")[] = ["ev", "inf", "as"];
  const paramsOf = (g: "ev" | "inf" | "as") =>
    cfg.params.filter((p) =>
      g === "inf" ? p.informed : g === "ev" ? p.anchored && !p.informed : !p.anchored && !p.informed,
    );

  const renderSlider = (p: ParamDef) => {
    const marks = p.anchored ? axisMarks(p) : [];
    return (
      <div
        className={cx("slider", p.key === pinnedKey && "pinned")}
        key={p.key}
        onMouseEnter={() => {
          setHoverKey(p.key);
          onHelp?.(helpEstParam(p, vals[p.key]));
        }}
        onMouseLeave={() => {
          setHoverKey(null);
          onHelp?.(null);
        }}
        onClick={(e) => {
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
            set(p.key, nv);
            onHelp?.(helpEstParam(p, nv));
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
              {p.evidence.replace(/^(INFORMADO|SUPUESTO) — /, "")}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Section
      className="acc-primary"
      defaultOpen
      title="Veredicto · los Estados"
      always={
        <div className="ver-always">
          <div
            className="lens-row"
            onMouseEnter={() => onHelp?.(HELP_INSTRUMENTO)}
            onMouseLeave={() => onHelp?.(null)}
          >
            <span className="lens-tag">Instrumento</span>
            {INSTRUMENTOS.map((i) => (
              <button
                key={i.key}
                className={cx("lens-cell", i.key === instrumento && "sel", !i.built && "soon")}
                onClick={() => pickInstrumento(i.key)}
                title={i.sub}
                onMouseEnter={() => onHelp?.(HELP_INSTRUMENTO_DETAIL[i.key])}
                onMouseLeave={() => onHelp?.(HELP_INSTRUMENTO)}
              >
                {i.label}
                {!i.built && <span className="lens-soon">pronto</span>}
              </button>
            ))}
          </div>
          <PuenteRow
            lens={lens}
            setLens={setLens}
            pen={pen}
            setPen={setPen}
            dsL={dsLRaw}
            onHelp={onHelp}
          />
          <div className="kpi-groups">
            {EST_METRICS.map((m) => (
              <div className={cx("kpi-group", m === metric && "sel")} key={m}>
                <div className="kpi-group-label">{EST_SHORT[m]}</div>
                {m === "suficiencia" && (sinShock || dsL >= 0) ? (
                  <div className="kpi-sub" style={{ padding: "10px 0", color: "var(--subtext1)" }}>
                    {sinShock
                      ? "esta lente no opina de participación — sin datos"
                      : "con esta lente la participación no cae: no hay pérdida que reponer"}
                  </div>
                ) : (
                  <KpiChart
                    delta={(h) => cfg.delta(m, vals, h, dsL)}
                    envelope={(h) => cfg.envelope(m, h, dsL)}
                    suf={EST_SUF[m]}
                    pos={EST_VERDICT[m].pos}
                    neg={EST_VERDICT[m].neg}
                    color={(v) => (Math.abs(v) < 0.05 ? "var(--subtext1)" : "var(--text)")}
                    help={(p, e) => helpEstKpi(m, 5, p, e)}
                    onHelp={onHelp}
                    fmtPoint={m === "fuga" ? (v) => `${v.toFixed(1)}%` : undefined}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      }
    >
      <EstFormula cfg={cfg} metric={metric} vals={vals} dsL={dsL} onHelp={onHelp} />

      <div className="ver-head">
        <button onClick={() => setVals({ ...cfg.defaults })}>defaults</button>
      </div>

      <div className="ver-body">
        {groups.map((g) => {
          const ps = paramsOf(g);
          if (!ps.length) return null;
          const head = SG_HEAD[g];
          return (
            <div className="sg" key={g}>
              <div className={cx("sg-head", head.cls)}>
                {head.label}
                <span>{head.note}</span>
              </div>
              <div className="sg-sliders">{ps.map(renderSlider)}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
