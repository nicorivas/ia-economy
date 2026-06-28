// Charts de la Síntesis con Recharts, tematizados al estilo minimal del resto (catppuccin, sin
// grilla, marcadores cuadrados, ejes finos). El spec (`Chart` en sintesis.ts) no cambia: aquí solo
// se traduce a Recharts. Tres tipos: scale (dot-plot: un estudio por fila), gradient (barras
// agrupadas), lenses (barras divergentes desde el cero).
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  LabelList,
} from "recharts";
import type { Chart } from "./sintesis";
import { C, TONE_COLOR, axisTick, catTick } from "./chartTheme";

const square = (props: { cx?: number; cy?: number; fill?: string }) => {
  const { cx = 0, cy = 0, fill } = props;
  const s = 8;
  return <rect x={cx - s / 2} y={cy - s / 2} width={s} height={s} fill={fill} />;
};

// Etiqueta de valor al extremo exterior de una barra divergente (derecha si +, izquierda si −).
// Recharts pasa x/y como string|number; los normalizamos.
function DivergeLabel(unit: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
    const x = Number(props.x) || 0;
    const y = Number(props.y) || 0;
    const width = Number(props.width) || 0;
    const height = Number(props.height) || 0;
    const value = Number(props.value) || 0;
    const pos = value >= 0;
    const lx = pos ? x + width + 5 : x - 5;
    const txt = `${pos ? "+" : "−"}${Math.abs(value).toFixed(1)}${unit}`;
    return (
      <text
        x={lx}
        y={y + height / 2}
        fill={pos ? C.green : C.peach}
        fontSize={11.5}
        textAnchor={pos ? "start" : "end"}
        dominantBaseline="central"
      >
        {txt}
      </text>
    );
  };
}

export function ChartView({ chart }: { chart: Chart }) {
  if (chart.type === "scale") {
    const data = chart.points.map((p) => ({ x: p.at, y: p.label, tone: p.tone ?? "neutral" }));
    const h = chart.points.length * 30 + 34;
    return (
      <div className="chart">
        <div className="chart-title">{chart.title}</div>
        <div className="chart-plot">
          <ResponsiveContainer width="100%" height={h}>
            <ScatterChart margin={{ top: 14, right: 18, bottom: 4, left: 4 }}>
              {chart.band && (
                <ReferenceArea
                  x1={chart.band.from}
                  x2={chart.band.to}
                  fill={C.green}
                  fillOpacity={0.1}
                  ifOverflow="extendDomain"
                  label={{ value: chart.band.label, position: "insideTop", fill: C.green, fontSize: 9 }}
                />
              )}
              {chart.zero && (
                <ReferenceLine x={0} stroke={C.surface2} ifOverflow="extendDomain" />
              )}
              {chart.threshold && (
                <ReferenceLine
                  x={chart.threshold.at}
                  stroke={C.overlay1}
                  strokeDasharray="3 3"
                  ifOverflow="extendDomain"
                  label={{ value: chart.threshold.label, position: "top", fill: C.overlay1, fontSize: 9 }}
                />
              )}
              <XAxis
                type="number"
                dataKey="x"
                domain={[chart.min, chart.max]}
                ticks={[chart.min, chart.max]}
                tickFormatter={(v) =>
                  v === chart.min ? chart.minLabel ?? `${v}` : v === chart.max ? chart.maxLabel ?? `${v}` : `${v}`
                }
                tick={axisTick}
                tickLine={false}
                axisLine={{ stroke: C.surface2 }}
                interval={0}
              />
              <YAxis
                type="category"
                dataKey="y"
                width={132}
                tick={catTick}
                tickLine={false}
                axisLine={false}
              />
              <Scatter data={data} shape={square} isAnimationActive={false}>
                {data.map((d, i) => (
                  <Cell key={i} fill={TONE_COLOR[d.tone]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        {chart.caption && <div className="chart-cap">{chart.caption}</div>}
      </div>
    );
  }

  if (chart.type === "gradient") {
    const max = Math.max(...chart.buckets.flatMap((b) => [b.a, b.b]));
    const h = chart.buckets.length * 46 + 6;
    return (
      <div className="chart">
        <div className="chart-title">{chart.title}</div>
        <div className="chart-plot">
          <ResponsiveContainer width="100%" height={h}>
            <BarChart
              data={chart.buckets}
              layout="vertical"
              margin={{ top: 4, right: 10, bottom: 4, left: 4 }}
              barGap={2}
              barCategoryGap="26%"
            >
              <XAxis type="number" domain={[0, max]} hide />
              <YAxis
                type="category"
                dataKey="label"
                width={110}
                tick={catTick}
                tickLine={false}
                axisLine={false}
              />
              <Bar dataKey="a" fill={C.blue} isAnimationActive={false} />
              <Bar dataKey="b" fill={C.overlay0} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="gr-legend">
          <span className="gr-k a">{chart.aLabel}</span>
          <span className="gr-k b">{chart.bLabel}</span>
        </div>
        {chart.caption && <div className="chart-cap">{chart.caption}</div>}
      </div>
    );
  }

  // lenses: barras con signo desde un cero central
  const maxAbs = Math.max(...chart.rows.map((r) => Math.abs(r.value)));
  const h = chart.rows.length * 34 + 8;
  return (
    <div className="chart">
      <div className="chart-title">{chart.title}</div>
      {chart.sub && <div className="chart-sub">{chart.sub}</div>}
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height={h}>
          <BarChart
            data={chart.rows}
            layout="vertical"
            margin={{ top: 2, right: 50, bottom: 2, left: 4 }}
            barCategoryGap="28%"
          >
            <XAxis type="number" domain={[-maxAbs * 1.15, maxAbs * 1.15]} hide />
            <YAxis
              type="category"
              dataKey="lens"
              width={110}
              tick={catTick}
              tickLine={false}
              axisLine={false}
            />
            <ReferenceLine x={0} stroke={C.surface2} />
            <Bar dataKey="value" isAnimationActive={false}>
              {chart.rows.map((r, i) => (
                <Cell key={i} fill={r.value >= 0 ? C.green : C.peach} />
              ))}
              <LabelList dataKey="value" content={DivergeLabel(chart.unit)} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {chart.caption && <div className="chart-cap">{chart.caption}</div>}
    </div>
  );
}
