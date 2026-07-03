// Vista Realidad — el terreno: series macro REALES de EE.UU. (datos/realdata/empleo-real.json),
// no estudios. Abre con el REPARTO de la población (empleados / desempleados / fuera de la fuerza
// laboral): hace visible por qué el desempleo es bajo y a la vez solo ~60% trabaja — los "fuera" no
// cuentan como desempleados. Cada serie enmarca una pregunta del Explorador, y separa tres cosas
// distintas que rondan el 60% (cuánta gente trabaja · qué tan bajo es el desempleo · qué tajada del
// INGRESO va al trabajo).
import type { ReactNode } from "react";
import EMPLEO_REAL from "./empleo-real.json";
import { C } from "./chartTheme";
import { niceTicks } from "./Veredicto";

type Punto = { year: number; value: number };

// Etiquetas de año dispersas (no una por punto): paso en décadas/lustros según el rango.
function yearTicks(a: number, b: number): number[] {
  const span = b - a;
  const step = span > 25 ? 10 : span > 12 ? 5 : span > 6 ? 2 : 1;
  const t: number[] = [];
  for (let y = Math.ceil(a / step) * step; y <= b; y += step) t.push(y);
  return t;
}

// Chart de una serie histórica REAL — mismo lenguaje visual que el Explorador (SVG a medida,
// eje Y con escala, gridlines tenues, catppuccin). Sin barras de error: es dato medido, no un
// escenario con incertidumbre. La línea es la protagonista; un punto marca el último valor.
function RealChart({ data, unit, color }: { data: Punto[]; unit: string; color: string }) {
  const vals = data.map((d) => d.value);
  let lo = Math.min(...vals);
  let hi = Math.max(...vals);
  const pad = (hi - lo || 1) * 0.15;
  lo -= pad;
  hi += pad;
  const span = hi - lo || 1;
  const yMin = data[0].year;
  const yMax = data[data.length - 1].year;
  const last = data[data.length - 1];

  const W = 520,
    H = 140,
    padL = 34,
    padR = 12,
    padT = 10,
    padB = 18;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const X = (yr: number) => padL + ((yr - yMin) / (yMax - yMin || 1)) * plotW;
  const Y = (v: number) => padT + ((hi - v) / span) * plotH;

  return (
    <svg className="kc-svg" viewBox={`0 0 ${W} ${H}`}>
      {niceTicks(lo, hi, 4).map((t) => (
        <g key={t}>
          <line className="kc-grid" x1={padL} x2={W - padR} y1={Y(t)} y2={Y(t)} />
          <text className="kc-ylab" x={padL - 5} y={Y(t) + 3}>{`${t}${unit}`}</text>
        </g>
      ))}
      <line className="kc-axis" x1={padL} x2={padL} y1={padT} y2={H - padB} />
      <polyline
        className="kc-line"
        style={{ stroke: color }}
        points={data.map((d) => `${X(d.year)},${Y(d.value)}`).join(" ")}
      />
      <circle className="kc-dot" cx={X(last.year)} cy={Y(last.value)} r={3} style={{ fill: color }} />
      {yearTicks(yMin, yMax).map((yr) => (
        <text className="kc-xlab" key={yr} x={X(yr)} y={H - 5}>
          {yr}
        </text>
      ))}
    </svg>
  );
}

function Serie({
  title,
  frame,
  data,
  unit,
  color,
  source,
}: {
  title: string;
  frame: ReactNode;
  data: Punto[];
  unit: string;
  color: string;
  source: string;
}) {
  const first = data[0];
  const last = data[data.length - 1];
  return (
    <section className="real-item">
      <h2 className="real-q">{title}</h2>
      <p className="real-frame">{frame}</p>
      <div className="real-range">
        {first.year}: <b>{first.value}{unit}</b> → {last.year}: <b>{last.value}{unit}</b>
      </div>
      <div className="chart-plot">
        <RealChart data={data} unit={unit} color={color} />
      </div>
      <div className="real-src">{source}</div>
    </section>
  );
}

// El reparto de la población: barra apilada de empleados / desempleados / fuera de la fuerza laboral.
function Reparto() {
  const r = EMPLEO_REAL.baseline.reparto_poblacion;
  const tasa = (r.desempleados / (r.empleados + r.desempleados)) * 100; // = la tasa de desempleo
  const seg = [
    { key: "emp", label: "Empleados", pct: r.empleados, color: C.teal },
    { key: "unemp", label: "Desempleados", pct: r.desempleados, color: C.peach },
    { key: "out", label: "Fuera de la fuerza laboral", pct: r.fuera, color: C.overlay0 },
  ];
  return (
    <section className="real-item">
      <h2 className="real-q">¿Cuánta gente trabaja, y por qué el desempleo «engaña»?</h2>
      <p className="real-frame">
        El reparto de la población en edad de trabajar ({r.year}). El truco que confunde: la <b>tasa de
        desempleo</b> se calcula sobre la <b>fuerza laboral</b> (quienes trabajan o buscan), no sobre
        toda la población. Por eso puede estar en ~4% mientras solo ~60% tiene empleo.
      </p>
      <div className="rep-bar">
        {seg.map((s) => (
          <span
            key={s.key}
            className="rep-seg"
            style={{ width: `${s.pct}%`, background: s.color }}
            title={`${s.label} ${s.pct}%`}
          />
        ))}
      </div>
      <div className="rep-legend">
        <div className="rep-row">
          <span className="rep-dot" style={{ background: C.teal }} />
          <b>Empleados {r.empleados}%</b> — de la población (empleo/población).
        </div>
        <div className="rep-row">
          <span className="rep-dot" style={{ background: C.peach }} />
          <b>Desempleados {r.desempleados}%</b> de la población = <b>{tasa.toFixed(1)}% de la fuerza
          laboral</b>: <i>esa</i> es la «tasa de desempleo».
        </div>
        <div className="rep-row">
          <span className="rep-dot" style={{ background: C.overlay0 }} />
          <b>Fuera de la fuerza laboral {r.fuera}%</b> — jubilados, estudiantes, cuidado, personas con
          discapacidad, desalentados. <i>No cuentan como desempleados.</i>
        </div>
      </div>
      <div className="real-src">World Bank / ILO (participación y empleo/población), Estados Unidos.</div>
    </section>
  );
}

export function Realidad() {
  const b = EMPLEO_REAL.baseline;
  return (
    <div className="realidad">
      <div className="real-wrap">
        <div className="real-intro">
          <p>
            El terreno real: las series de Estados Unidos contra las cuales leer el resto. No son
            estudios ni modelos — son los hechos que el debate intenta explicar.
          </p>
          <p className="real-meta">
            Datos reales · {EMPLEO_REAL.meta.construido}. Ojo: tres cosas distintas rondan el 60% y no
            son lo mismo — cuánta gente trabaja, qué tan bajo es el desempleo, y qué tajada del ingreso
            va al trabajo. Acá están separadas.
          </p>
        </div>

        <Reparto />

        <Serie
          title="¿Por qué el desempleo se ve tan bajo?"
          frame={
            <>
              La tasa de desempleo: desempleados como % de la <b>fuerza laboral</b>, no de la población.
              Esconde a quienes dejan de buscar. Importa para la IA: si desplaza gente, puede aparecer
              como personas que <b>salen</b> de la fuerza laboral —no como desempleo— y la tasa ni se
              mueve.
            </>
          }
          data={b.desempleo}
          unit="%"
          color={C.peach}
          source="World Bank / ILO (SL.UEM.TOTL.NE.ZS), Estados Unidos."
        />

        <Serie
          title="¿Cuántos tienen empleo, de verdad?"
          frame={
            <>
              La razón empleo-población: de toda la gente en edad de trabajar, cuánta está ocupada. Es
              la medida ancha —más plana que el desempleo— y la que vigilan los estudios de IA, porque
              el desplazamiento se ve antes acá que en la tasa de desempleo.
            </>
          }
          data={b.empleo_poblacion}
          unit="%"
          color={C.blue}
          source="World Bank / ILO (SL.EMP.TOTL.SP.NE.ZS), Estados Unidos."
        />

        <Serie
          title="¿Quién se queda con la renta?"
          frame={
            <>
              La tajada del <b>ingreso</b> (PIB) que va a los sueldos en vez de al capital — <i>no</i> las
              personas. Que también dé ~60% es coincidencia. Es la métrica que la lente Agregado·CES
              decide con σ; acá está su trayectoria real, en lenta caída.
            </>
          }
          data={b.tajada_ingreso_trabajo}
          unit="%"
          color={C.lavender}
          source="OWID / ILO (SDG 10.4.1, participación del trabajo en el PIB), Estados Unidos."
        />
      </div>
    </div>
  );
}
