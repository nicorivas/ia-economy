// Charts de la Síntesis, hechos a mano (HTML+CSS, sin librería) en el lenguaje minimal de la
// plataforma — catppuccin, plano, marcadores cuadrados. Reemplazan a Recharts (sacado del bundle).
// El spec (`Chart` en sintesis.ts) NO cambió. Tres tipos: scale (dot-plot sobre una recta numérica),
// gradient (dos barras por categoría), lenses (barras con signo desde un cero central, patrón .rr-*).
import type { Chart } from "./sintesis";
import { TONE_COLOR } from "./chartTheme";

const pct = (v: number, min: number, max: number) => ((v - min) / (max - min || 1)) * 100;
const signed = (n: number, unit: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${unit}`;

export function ChartView({ chart }: { chart: Chart }) {
  if (chart.type === "scale") {
    const X = (v: number) => pct(v, chart.min, chart.max);
    return (
      <div className="chart">
        <div className="chart-title">{chart.title}</div>
        {(chart.band || chart.threshold) && (
          <div className="sc-marks">
            <span />
            <div className="sc-cell">
              {chart.band && (
                <span
                  className="sc-lab band"
                  style={{ left: `${X((chart.band.from + chart.band.to) / 2)}%` }}
                >
                  {chart.band.label}
                </span>
              )}
              {chart.threshold && (
                <span className="sc-lab th" style={{ left: `${X(chart.threshold.at)}%` }}>
                  {chart.threshold.label}
                </span>
              )}
            </div>
          </div>
        )}
        <div className="sc-rows">
          {chart.points.map((p, i) => (
            <div className="sc-row" key={i}>
              <span className="sc-name">{p.label}</span>
              <div className="sc-track">
                {chart.band && (
                  <span
                    className="sc-band"
                    style={{ left: `${X(chart.band.from)}%`, width: `${X(chart.band.to) - X(chart.band.from)}%` }}
                  />
                )}
                {chart.zero && <span className="sc-vline" style={{ left: `${X(0)}%` }} />}
                {chart.threshold && (
                  <span className="sc-vline dash" style={{ left: `${X(chart.threshold.at)}%` }} />
                )}
                <span
                  className="sc-mk"
                  style={{ left: `${X(p.at)}%`, background: TONE_COLOR[p.tone ?? "neutral"] }}
                />
                {p.value && (
                  <span
                    className="sc-val"
                    style={{
                      // cerca del borde derecho el valor se voltea a la izquierda del marcador
                      ...(X(p.at) > 82
                        ? { right: `calc(${100 - X(p.at)}% + 9px)` }
                        : { left: `calc(${X(p.at)}% + 9px)` }),
                      color: TONE_COLOR[p.tone ?? "neutral"],
                    }}
                  >
                    {p.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sc-axis">
          <span />
          <div className="sc-cell end">
            <span>{chart.minLabel ?? chart.min}</span>
            {chart.zero && X(0) > 6 && X(0) < 94 && (
              <span className="sc-zero-lab" style={{ left: `${X(0)}%` }}>
                0
              </span>
            )}
            <span>{chart.maxLabel ?? chart.max}</span>
          </div>
        </div>
        {chart.caption && <div className="chart-cap">{chart.caption}</div>}
      </div>
    );
  }

  if (chart.type === "gradient") {
    const max = Math.max(...chart.buckets.flatMap((b) => [b.a, b.b]), 0.01);
    return (
      <div className="chart">
        <div className="chart-title">{chart.title}</div>
        <div className="gr-rows">
          {chart.buckets.map((b, i) => (
            <div className="gr-row" key={i}>
              <span className="gr-name">{b.label}</span>
              <div className="gr-bars">
                <span className="gr-bar a" style={{ width: `${(b.a / max) * 100}%` }} />
                <span className="gr-bar b" style={{ width: `${(b.b / max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="gr-legend">
          <span className="gr-k a">{chart.aLabel}</span>
          <span className="gr-k b">{chart.bLabel}</span>
        </div>
        {chart.caption && <div className="chart-cap">{chart.caption}</div>}
      </div>
    );
  }

  // lenses: barras con signo desde un cero central (reusa el patrón .rr-* de RentReallocation)
  const maxAbs = Math.max(...chart.rows.map((r) => Math.abs(r.value)), 0.01);
  return (
    <div className="chart">
      <div className="chart-title">{chart.title}</div>
      {chart.sub && <div className="chart-sub">{chart.sub}</div>}
      <div className="rr-rows">
        {chart.rows.map((r, i) => {
          const posv = r.value >= 0;
          const w = (Math.abs(r.value) / maxAbs) * 48;
          return (
            <div className="rr-row" key={i}>
              <span className="rr-name">{r.lens}</span>
              <div className="rr-track">
                <span className="rr-zero" />
                <span
                  className="rr-bar"
                  style={{
                    left: posv ? "50%" : `${50 - w}%`,
                    width: `${w}%`,
                    background: posv ? "var(--green)" : "var(--peach)",
                  }}
                />
              </div>
              <span className="rr-val" style={{ color: posv ? "var(--green)" : "var(--peach)" }}>
                {signed(r.value, chart.unit)}
              </span>
            </div>
          );
        })}
      </div>
      {chart.caption && <div className="chart-cap">{chart.caption}</div>}
    </div>
  );
}
