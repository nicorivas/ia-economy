// Veredicto de la SEGUNDA RAMA del árbol: "Los recursos físicos" (el motor de los átomos).
// Hermano de VeredictoSection. Trae un SELECTOR DE HABILITANTE (energía/cómputo/tierra): cada uno es
// su propia instancia del mismo CES, con su σ/η/s_P anclados a SU evidencia (por eso "precio"
// significa cosas distintas: la entrega de energía, el cuello de empaquetado —no el FLOP—, la tierra).
// Sin fila de lentes ni comparar ni capas. El cuerpo Estudios/Evidencia/Hipótesis es compartido en
// App.tsx y branch-agnóstico: corre con el `ParamFocus` que emite este componente. Motor en model.ts.
import { useState, useEffect } from "react";
import { ENABLERS, ENABLER_BY_KEY, REC_METRICS, recDecompose, HORIZON } from "./model";
import type { Vals, ParamKey, ParamDef, RecMetric, Enabler, EnablerCfg } from "./model";
import { Section } from "./Section";
import { PhaseMap } from "./PhaseMap";
import { DivergeEnablers } from "./DivergeEnablers";
import { mkFocus, axisMarks } from "./Veredicto";
import type { ParamFocus } from "./Veredicto";
import { helpRecKpi, helpRecParam, HELP_REC_FORMULA, HELP_ENABLER, HELP_ENABLER_DETAIL } from "./help";
import type { HelpEntry } from "./help";

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");
const fmt = (n: number, suf: string) => `${n >= 0 ? "+" : ""}${n.toFixed(1)}${suf}`;
const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;

const REC_VERDICT: Record<RecMetric, { pos: string; neg: string }> = {
  precio: { pos: "el precio sube", neg: "el precio baja" },
  cantidad: { pos: "se despliega más", neg: "se queda corta" },
  tajada: { pos: "los átomos capturan", neg: "la inteligencia retiene" },
};
const LBL: Record<RecMetric, string> = {
  precio: "Δ precio",
  cantidad: "Δ cantidad",
  tajada: "Δ tajada física",
};
// La etiqueta de la métrica "precio" depende del habilitante (entrega de energía / cuello de cómputo
// / tierra); cantidad y tajada son genéricas.
const recShort = (cfg: EnablerCfg, m: RecMetric) =>
  m === "precio" ? cfg.precioShort : m === "cantidad" ? "Cantidad física" : "Tajada a los átomos";

// El número del KPI va en color NEUTRO a propósito: aquí "sube/baja" no es bueno/malo (la rama
// describe dónde se muda la escasez), así que la dirección la marca el signo, no el color.
function RecKpiCard({
  cfg,
  metric,
  horizon,
  vals,
  onHelp,
}: {
  cfg: EnablerCfg;
  metric: RecMetric;
  horizon: 3 | 5;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const h = HORIZON[horizon];
  const env = cfg.envelope(metric, h);
  const point = cfg.delta(metric, vals, h);
  const span = env.max - env.min || 1;
  const pos = (x: number) => ((x - env.min) / span) * 100;
  const straddles = env.min < 0 && env.max > 0;
  return (
    <div
      className="kpi"
      onMouseEnter={() => onHelp?.(helpRecKpi(metric, horizon, point, env))}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="kpi-h">a {horizon} años</div>
      <div className="kpi-point" style={{ color: Math.abs(point) < 0.05 ? "var(--subtext1)" : "var(--text)" }}>
        {fmt(point, "%")}
      </div>
      <div className="kpi-sub">tu escenario</div>
      <div className="kpi-track">
        <div className="kpi-zero" style={{ left: `${pos(0)}%` }} />
        <div className="kpi-dot" style={{ left: `${pos(point)}%` }} />
      </div>
      <div className="kpi-range">
        <span>{fmt(env.min, "%")}</span>
        <span className="kpi-verdict">
          {straddles ? "no está determinado" : point > 0 ? REC_VERDICT[metric].pos : REC_VERDICT[metric].neg}
        </span>
        <span>{fmt(env.max, "%")}</span>
      </div>
    </div>
  );
}

// Fila de la fórmula: la cuenta CES entera del habilitante activo. Las tres caras de la misma cuenta.
function RecFormula({
  cfg,
  metric,
  vals,
  onHelp,
}: {
  cfg: EnablerCfg;
  metric: RecMetric;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const d = recDecompose(metric, vals, HORIZON[5], cfg.sP);
  const byKey: Record<string, ParamDef> = Object.fromEntries(cfg.params.map((p) => [p.key, p]));
  const pillHover = (key: ParamKey) => ({
    onMouseEnter: () => onHelp?.(helpRecParam(byKey[key], vals[key])),
    onMouseLeave: () => onHelp?.(HELP_REC_FORMULA),
  });
  // El tono del pill sigue el estado del parámetro de ESTE habilitante (azul/verde/durazno).
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
  const pastel = <span className="f-derived">el pastel</span>;
  const gPill = term("penetración", byKey.g.fmt(vals.g), "g");
  const sigmaPill = term("σ", vals.sigma.toFixed(2), "sigma");
  const etaPill = term("η", vals.eta.toFixed(2), "eta");
  const sumDen = (
    <span className="f-group">
      {pq("(")}
      {sigmaPill}
      {op("+")}
      {etaPill}
      {pq(")")}
    </span>
  );

  const recEq = (m: RecMetric) => {
    const r = m === "precio" ? d.precio : m === "cantidad" ? d.cantidad : d.tajada;
    const color = Math.abs(r) < 0.05 ? "var(--subtext1)" : "var(--text)";
    return (
      <span className={cx("f-eq", m === metric && "sel")} key={m}>
        <span className="f-lhs">{LBL[m]}</span>
        {op("=")}
        {m === "precio" && (
          <>
            {pastel}
            {op("÷")}
            {sumDen}
          </>
        )}
        {m === "cantidad" && (
          <>
            <span className="f-group">
              {pq("(")}
              {etaPill}
              {op("÷")}
              {sumDen}
              {pq(")")}
            </span>
            {op("×")}
            {pastel}
          </>
        )}
        {m === "tajada" && (
          <>
            <span className="f-group">
              {pq("(")}
              <span className="f-num">1</span>
              {op("−")}
              {sigmaPill}
              {pq(")")}
            </span>
            {op("÷")}
            {sumDen}
            {op("×")}
            {pastel}
          </>
        )}
        {op("=")}
        <span className="f-result" style={{ color }}>
          {signed(r, "%")}
        </span>
      </span>
    );
  };

  return (
    <div
      className="formula"
      onMouseEnter={() => onHelp?.(HELP_REC_FORMULA)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="f-kicker">Cómo se calcula · a 5 años · {cfg.label.toLowerCase()}</div>
      <div className="f-line">
        <span className="f-eq">
          <span className="f-lhs">el pastel</span>
          {op("=")}
          {konst("1−s_P", (1 - cfg.sP).toFixed(2))}
          {op("×")}
          {gPill}
          {op("=")}
          <span className="f-mid">{signed(d.dlnY * 100, "%")} de producción</span>
        </span>
      </div>
      <div className="f-line">
        {REC_METRICS.flatMap((m, i) =>
          i === 0
            ? [recEq(m)]
            : [<span className="f-sep" key={`sep-${m}`} aria-hidden="true" />, recEq(m)],
        )}
      </div>
      <div className="f-note">
        Las tres caras de la misma cuenta CES. Con <b>η baja</b> (oferta inelástica) el alza se va al{" "}
        <b>precio</b> y la cantidad se queda corta —el cuello aprieta y sus dueños capturan—; con{" "}
        <b>σ&lt;1</b> (complementos) la <b>tajada</b> sube. <b>s_P</b> = tajada actual de{" "}
        {cfg.label.toLowerCase()} (~{Math.round(cfg.sP * 100)}% del PIB).
        {cfg.precioNote ? ` ${cfg.precioNote}` : ""}
      </div>
    </div>
  );
}

const SG_HEAD: Record<"ev" | "inf" | "as", { cls: string; label: string; note: string }> = {
  ev: { cls: "sg-head-ev", label: "Anclados en evidencia", note: " · los puntos son los estudios; muévelo y mira abajo a quién le das peso" },
  inf: { cls: "sg-head-inf", label: "Informados en evidencia", note: " · la evidencia acota la dirección y el rango, no fija el punto" },
  as: { cls: "sg-head-as", label: "Supuestos", note: " · la literatura no los fija — aquí está el aire" },
};

export function RecursosVeredicto({
  metric,
  onParamFocus,
  onHelp,
}: {
  metric: RecMetric;
  onParamFocus?: (f: ParamFocus) => void;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const [enabler, setEnabler] = useState<Enabler>("energia");
  const cfg = ENABLER_BY_KEY[enabler];
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
  // Cambiar de habilitante reinicia los parámetros (cada uno tiene su calibración) y desfija.
  const pickEnabler = (k: Enabler) => {
    setEnabler(k);
    setVals({ ...ENABLER_BY_KEY[k].defaults });
    setPinnedKey(null);
  };

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
          onHelp?.(helpRecParam(p, vals[p.key]));
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
            onHelp?.(helpRecParam(p, nv));
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
      title="Veredicto · recursos físicos"
      always={
        <div className="ver-always">
          {/* Selector de habilitante: energía/cómputo/tierra, cada uno su CES calibrado. Estilo de
              la fila de lentes (otra cosa que se ELIGE). */}
          <div
            className="lens-row"
            onMouseEnter={() => onHelp?.(HELP_ENABLER)}
            onMouseLeave={() => onHelp?.(null)}
          >
            <span className="lens-tag">Habilitante</span>
            {ENABLERS.map((e) => (
              <button
                key={e.key}
                className={cx("lens-cell", e.key === enabler && "sel", !e.built && "soon")}
                onClick={() => pickEnabler(e.key)}
                title={e.sub}
                onMouseEnter={() => onHelp?.(HELP_ENABLER_DETAIL[e.key])}
                onMouseLeave={() => onHelp?.(HELP_ENABLER)}
              >
                {e.label}
                {!e.built && <span className="lens-soon">pronto</span>}
              </button>
            ))}
          </div>
          <div className="kpi-groups">
            {REC_METRICS.map((m) => (
              <div className={cx("kpi-group", m === metric && "sel")} key={m}>
                <div className="kpi-group-label">{recShort(cfg, m)}</div>
                <div className="kpis">
                  <RecKpiCard cfg={cfg} metric={m} horizon={3} vals={vals} onHelp={onHelp} />
                  <RecKpiCard cfg={cfg} metric={m} horizon={5} vals={vals} onHelp={onHelp} />
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <RecFormula cfg={cfg} metric={metric} vals={vals} onHelp={onHelp} />

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

      <PhaseMap cfg={cfg} vals={vals} onHelp={onHelp} />
      <DivergeEnablers vals={vals} activeKey={enabler} onHelp={onHelp} />
    </Section>
  );
}
