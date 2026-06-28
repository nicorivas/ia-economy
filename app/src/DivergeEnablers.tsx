// Divergencia de habilitantes: el mismo empuje de IA leído por energía/cómputo/tierra a la vez.
// El selector muestra uno; esto los pone lado a lado (cada uno a SU centro de evidencia) para que el
// contraste se vea de un vistazo — energía moderada, cómputo más tajada (σ bajo), tierra precio alto /
// cantidad clavada (η ínfima). Barras escaladas POR métrica (se comparan los factores en la misma).
import { ENABLERS, recDecompose, HORIZON } from "./model";
import type { Vals, Enabler, RecMetric } from "./model";
import { HELP_DIVERGE } from "./help";
import type { HelpEntry } from "./help";

const COLS: { m: RecMetric; label: string }[] = [
  { m: "precio", label: "Precio" },
  { m: "cantidad", label: "Cantidad" },
  { m: "tajada", label: "Tajada a átomos" },
];

export function DivergeEnablers({
  vals,
  activeKey,
  onHelp,
}: {
  vals: Vals;
  activeKey: Enabler;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const g = vals.g; // empuje compartido (reacciona al slider g del habilitante activo)
  const rows = ENABLERS.map((e) => {
    const v: Vals = { ...e.defaults, g };
    const d = recDecompose("tajada", v, HORIZON[5], e.sP);
    const dp = recDecompose("precio", v, HORIZON[5], e.sP);
    const dc = recDecompose("cantidad", v, HORIZON[5], e.sP);
    return { key: e.key, label: e.label, precio: dp.precio, cantidad: dc.cantidad, tajada: d.tajada };
  });
  const colMax = (m: RecMetric) => Math.max(...rows.map((r) => Math.abs(r[m])), 0.01);
  const fmt = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}%`;

  return (
    <div
      className="diverge"
      onMouseEnter={() => onHelp?.(HELP_DIVERGE)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="chart-title">Comparar habilitantes · mismo empuje ({Math.round(g * 100)}%)</div>
      <div className="dv-grid">
        <div className="dv-head" />
        {COLS.map((c) => (
          <div className="dv-head" key={c.m}>
            {c.label}
          </div>
        ))}
        {rows.map((r) => (
          <div className="dv-rowgroup" key={r.key} data-active={r.key === activeKey}>
            <div className="dv-name">{r.label}</div>
            {COLS.map((c) => {
              const v = r[c.m];
              const w = (Math.abs(v) / colMax(c.m)) * 100;
              return (
                <div className="dv-cell" key={c.m}>
                  <div className="dv-bar-track">
                    <span className="dv-bar" style={{ width: `${w}%` }} />
                  </div>
                  <span className="dv-val">{fmt(v)}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="chart-cap">
        Cada factor a su centro de evidencia, al mismo empuje. El contraste es el punto: la tierra
        clava la cantidad (oferta casi fija), el cómputo se lleva la mayor tajada (complemento casi
        puro). Barras escaladas por columna.
      </div>
    </div>
  );
}
