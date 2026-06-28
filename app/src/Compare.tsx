// Vista comparar lentes: un mismo "cuánta IA aterriza" (perilla compartida) leído por cada motor.
// Es el punchline de la idea de lentes: la conclusión depende del MARCO, no solo del dato. Los dos
// motores no comparten parámetros, así que lo único fijo es la penetración (exposición × adopción),
// que ambos ya consumen; el resto de cada uno queda en su centro de evidencia (ver `compareRow`).
import { useState } from "react";
import { LENSES, PEN, COMPARE_METRICS, compareRow, HORIZON } from "./model";
import type { Metric, Scope } from "./model";
import { HELP_PEN, HELP_LENS_DETAIL } from "./help";
import type { HelpEntry } from "./help";

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");
const META_SHORT: Record<Metric, string> = {
  empleo: "Empleo",
  salarios: "Salarios",
  participacion: "Participación",
};
const SUF: Record<Metric, string> = { empleo: "%", salarios: "%", participacion: " pp" };
const signed = (n: number, s: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${s}`;
const sgn = (n: number) => (n < -0.05 ? -1 : n > 0.05 ? 1 : 0);
const colorOf = (n: number) =>
  n < -0.05 ? "var(--peach)" : n > 0.05 ? "var(--green)" : "var(--subtext1)";

export function Compare({
  scope,
  metric,
  onHelp,
}: {
  scope: Scope;
  metric: Metric;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const [pen, setPen] = useState(PEN.default);
  const h = HORIZON[5]; // efecto maduro, donde los factores de horizonte valen 1 (como la fórmula)
  const rows = LENSES.map((l) => ({ lens: l, row: compareRow(l.key, pen, h, scope) }));
  const built = rows.filter((r) => r.row);

  // Por columna: ¿los modelos que opinan discrepan en el signo? (un + y un − a la vez). Esa
  // divergencia es el hallazgo — el mismo empuje, leído por marcos distintos, da conclusiones
  // opuestas. Las celdas "sin datos" (null) no cuentan: un modelo que calla no vota el signo.
  const divergent = COMPARE_METRICS.filter((m) => {
    const signs = new Set(
      built
        .map((r) => r.row![m])
        .filter((x): x is number => x != null)
        .map(sgn)
        .filter((s) => s !== 0),
    );
    return signs.has(1) && signs.has(-1);
  });
  const isDiv = (m: Metric) => divergent.includes(m);

  return (
    <div className="cmp">
      {/* La perilla compartida: lo único fijo entre lentes. */}
      <div
        className="cmp-pen"
        onMouseEnter={() => onHelp?.(HELP_PEN)}
        onMouseLeave={() => onHelp?.(null)}
      >
        <div className="cmp-pen-top">
          <span className="cmp-pen-label">{PEN.short}</span>
          <span className="cmp-pen-val">{PEN.fmt(pen)}</span>
        </div>
        <div className="cmp-pen-desc">{PEN.label}</div>
        <input
          type="range"
          min={PEN.min}
          max={PEN.max}
          step={PEN.step}
          value={pen}
          onChange={(e) => setPen(Number(e.target.value))}
        />
      </div>

      {/* La tabla: filas = lentes, columnas = métricas. Mismo escenario, distinto modelo. */}
      <div className="cmp-table" role="table">
        <div className="cmp-r cmp-head" role="row">
          <span className="cmp-c cmp-lens">a 5 años · efecto maduro</span>
          {COMPARE_METRICS.map((m) => (
            <span
              key={m}
              className={cx("cmp-c cmp-col", m === metric && "sel", isDiv(m) && "div")}
              role="columnheader"
            >
              {META_SHORT[m]}
            </span>
          ))}
        </div>
        {rows.map(({ lens, row }) => (
          <div
            key={lens.key}
            className={cx("cmp-r", !row && "soon")}
            role="row"
            onMouseEnter={() => onHelp?.(HELP_LENS_DETAIL[lens.key])}
            onMouseLeave={() => onHelp?.(null)}
          >
            <span className="cmp-c cmp-lens">
              {lens.label}
              {!row && <span className="cmp-soon">pronto</span>}
            </span>
            {COMPARE_METRICS.map((m) => {
              // number = valor · null = el motor no opina (sin datos) · undefined = lente no construida
              const cell = row ? row[m] : undefined;
              return (
                <span key={m} className={cx("cmp-c cmp-cell", m === metric && "sel")} role="cell">
                  {typeof cell === "number" ? (
                    <span style={{ color: colorOf(cell) }}>{signed(cell, SUF[m])}</span>
                  ) : cell === null ? (
                    <span className="cmp-nd">sin datos</span>
                  ) : (
                    <span className="cmp-na">—</span>
                  )}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* El punchline (si hay divergencia de signo) + la honestidad del puente entre modelos. */}
      {divergent.length > 0 && (
        <div className="cmp-punch">
          El signo se invierte en{" "}
          <b>{divergent.map((m) => META_SHORT[m].toLowerCase()).join(" · ")}</b>: con el mismo
          empuje de IA, un modelo dice que sube y otro que baja. La conclusión depende del marco, no
          solo del dato.
        </div>
      )}
      <div className="cmp-foot">
        Mismo empuje de IA en los dos modelos. El resto de cada uno —σ, reinstauración, φ…— queda en
        su centro de evidencia.{" "}
        <span className="cmp-as">El mapeo de un mismo valor a los dos marcos es un supuesto.</span>
      </div>
    </div>
  );
}
