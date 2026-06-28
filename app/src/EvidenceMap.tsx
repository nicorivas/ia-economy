// El mapa de la evidencia: dónde el debate está contestado. Por cada hipótesis, la MEZCLA de
// relaciones que le llegan desde los estudios (confirma/informa/tensiona/refuta) como barra apilada.
// Una matriz literal hipótesis×estudio (27×80) sería un muro vacío; esta es su forma legible —
// revela el insight que importa: qué hipótesis están asentadas (un color) y cuáles contestadas
// (verde Y durazno/rojo a la vez). Las contestadas suben primero. Datos del grafo (mapa real).
import { map, edgesByHyp } from "./data";
import { C } from "./chartTheme";
import { HELP_EVIDMAP } from "./help";
import type { HelpEntry } from "./help";

const ORDER = ["confirma", "informa", "tensiona", "refuta"] as const;
const REL_C: Record<string, string> = {
  confirma: C.green,
  informa: C.blue,
  tensiona: C.peach,
  refuta: C.red,
};

export function EvidenceMap({ onHelp }: { onHelp?: (e: HelpEntry | null) => void }) {
  const rows = map.hypotheses
    .map((h) => {
      const edges = edgesByHyp[h.id] || [];
      const counts: Record<string, number> = {};
      for (const e of edges) counts[e.type] = (counts[e.type] || 0) + 1;
      const total = edges.length;
      const conflict = Math.min(
        counts.confirma || 0,
        (counts.tensiona || 0) + (counts.refuta || 0),
      );
      return { id: h.id, name: h.name, counts, total, conflict };
    })
    .filter((r) => r.total >= 3)
    .sort((a, b) => b.conflict - a.conflict || b.total - a.total)
    .slice(0, 16);

  const maxTotal = Math.max(...rows.map((r) => r.total), 1);

  return (
    <div
      className="evidmap"
      onMouseEnter={() => onHelp?.(HELP_EVIDMAP)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="chart-title">El mapa de la evidencia · dónde el debate está contestado</div>
      <div className="em-rows">
        {rows.map((r) => (
          <div className="em-row" key={r.id} data-contested={r.conflict > 0}>
            <span className="em-name" title={r.name}>
              {r.name}
            </span>
            <div className="em-bar" style={{ width: `${(r.total / maxTotal) * 100}%` }}>
              {ORDER.map((t) =>
                r.counts[t] ? (
                  <span
                    key={t}
                    className="em-seg"
                    style={{ flex: r.counts[t], background: REL_C[t] }}
                    title={`${r.counts[t]} ${t}`}
                  />
                ) : null,
              )}
            </div>
            <span className="em-n">{r.total}</span>
          </div>
        ))}
      </div>
      <div className="em-legend">
        <span className="em-k">
          <span className="em-sw" style={{ background: C.green }} /> confirma
        </span>
        <span className="em-k">
          <span className="em-sw" style={{ background: C.blue }} /> informa
        </span>
        <span className="em-k">
          <span className="em-sw" style={{ background: C.peach }} /> tensiona
        </span>
        <span className="em-k">
          <span className="em-sw" style={{ background: C.red }} /> refuta
        </span>
      </div>
      <div className="chart-cap">
        Las hipótesis con verde Y durazno/rojo a la vez son las contestadas (arriba) — ahí el debate
        está vivo y la respuesta honesta es un rango. Las de un solo color están asentadas. Es la forma
        legible de la matriz hipótesis×estudio: con 80 estudios, una celda por par sería un muro vacío.
      </div>
    </div>
  );
}
