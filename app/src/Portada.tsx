// Portada / informe: la primera pantalla es el estudio mismo — los hallazgos principales del
// mapa, gráficos e interactivos, al estilo de un informe (el veredicto primero, la evidencia a
// un clic). Los hallazgos se toman de la Síntesis (una sola fuente de verdad para las
// afirmaciones y sus charts); acá solo se les escribe el resumen corto. Cierra invitando a
// desarmarlo todo en el Explorador. Voz neutra.
import { useState } from "react";
import type { View } from "./TopBar";
import { SINTESIS, SINTESIS_FECHA } from "./sintesis";
import { ChartView } from "./Chart";
import { map, absentBridges, studyById, surname } from "./data";
import { LENSES, PEN, HORIZON, compareRow } from "./model";

// Los hallazgos de la portada: ids de la Síntesis + el resumen corto (deck) de cada uno.
// El titular, el chart y las citas vienen del item de la Síntesis — si aquella cambia, esto sigue.
const FINDINGS: { id: string; deck: string; live?: boolean }[] = [
  {
    id: "empleo-neto",
    deck: "El agregado todavía no muestra destrucción neta de empleo, pero las rebanadas más expuestas sí. Que eso se generalice depende de la reinstauración — cuántas tareas nuevas crea la IA — y eso nadie lo ha medido.",
  },
  {
    id: "jovenes-atribucion",
    deck: "El golpe a los jóvenes en ocupaciones expuestas se profundiza: 19% por debajo de sus pares menos expuestos a junio de 2026. Tres causas compiten —IA, trabajo remoto y ciclo—, y en agosto de 2026 el estudio replicó a la rival del remoto y sostuvo su resultado, mientras reconocía tendencias previas a la IA. La disputa se estrechó sin cerrarse.",
  },
  {
    id: "puestos-o-sueldos",
    deck: "Los salarios se resisten a caer (rigidez a la baja), así que el ajuste inicial cae en el empleo. Con los años — contratos renegociados, inflación que erosiona el salario real — el ajuste de precio se materializa.",
  },
  {
    id: "quien-renta",
    deck: "En el modelo agregado todo lo decide σ, la elasticidad de sustitución entre capital y trabajo. El centro de gravedad empírico está bajo 1 — complementos, no sustitutos — y con eso la tajada del trabajo sube.",
  },
  {
    id: "para-quien",
    deck: "A diferencia de la automatización rutinaria, que vació el medio de la escala de habilidades, la exposición a la IA trepa con la calificación; los más golpeados hasta ahora son los jóvenes en ocupaciones expuestas.",
  },
  {
    id: "depende-del-modelo",
    deck: "Corre el mismo escenario — el mismo empuje de IA — por las cuatro lentes del mapa y el signo se da vuelta. Este es en vivo: mueve la penetración y mira qué dice cada modelo.",
    live: true,
  },
];

const citeLabel = (id: string): string | null => {
  const s = studyById.get(id);
  if (!s) return null;
  return `${surname(s.authors)} '${String(s.year).slice(2)}`;
};

const signed = (n: number, unit: string) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${unit}`;

// El hallazgo interactivo: la perilla de penetración compartida (la misma de Comparar) alimenta
// los cuatro motores en vivo. Δ empleo a 5 años (efecto maduro), barras con signo desde el cero.
function LiveLenses() {
  const [pen, setPen] = useState(PEN.default);
  const h = HORIZON[5];
  const rows = LENSES.flatMap((l) => {
    const r = compareRow(l.key, pen, h, "global");
    return r && r.empleo != null ? [{ lens: l.label, value: r.empleo }] : [];
  });
  const maxAbs = Math.max(...rows.map((r) => Math.abs(r.value)), 0.01);
  const flips = rows.some((r) => r.value > 0.05) && rows.some((r) => r.value < -0.05);
  return (
    <div className="chart">
      <div className="chart-title">Un mismo escenario, leído por cada lente — en vivo</div>
      <div className="chart-sub">Δ empleo a 5 años · efecto maduro</div>
      <div className="pt-pen">
        <span className="pt-pen-label">{PEN.short}</span>
        <input
          type="range"
          min={PEN.min}
          max={PEN.max}
          step={PEN.step}
          value={pen}
          onChange={(e) => setPen(Number(e.target.value))}
          aria-label={PEN.label}
        />
        <span className="pt-pen-val">{PEN.fmt(pen)}</span>
      </div>
      <div className="rr-rows">
        {rows.map((r) => {
          const posv = r.value >= 0;
          const w = (Math.abs(r.value) / maxAbs) * 48;
          return (
            <div className="rr-row" key={r.lens}>
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
                {signed(r.value, "%")}
              </span>
            </div>
          );
        })}
      </div>
      <div className="chart-cap">
        {flips
          ? "El signo se invierte entre marcos: con el mismo empuje, un modelo dice que el empleo sube y otro que baja. La conclusión depende del marco, no solo del dato."
          : "A esta penetración los marcos apuntan al mismo lado — mueve la perilla y mira dónde se separan."}
      </div>
    </div>
  );
}

export function Portada({
  onView,
  onCite,
  onSintesis,
}: {
  onView: (v: View) => void;
  onCite?: (studyId: string) => void;
  onSintesis?: (itemId: string) => void;
}) {
  return (
    <div className="portada">
      <div className="pt-wrap">
        <div className="pt-kicker">La economía de la IA · informe interactivo · al {SINTESIS_FECHA}</div>
        <h1 className="pt-q">
          ¿Qué queda escaso cuando la inteligencia abunda — y quién captura la renta?
        </h1>
        <p className="pt-lead">
          El empleo, los salarios, la energía, el cómputo, la renta: un mapa interactivo del debate
          económico sobre la IA. No es un pronóstico — la respuesta honesta a casi todas estas
          preguntas es un rango que cruza el cero, y depende del modelo tanto como de los datos.
          Abajo, lo que el mapa concluye; detrás de cada hallazgo, el dataset completo para
          desarmarlo.
        </p>

        <div className="pt-stats">
          <div className="pt-stat">
            <span className="pt-stat-n">{map.studies.length}</span>
            <span className="pt-stat-l">estudios, verificados contra su fuente primaria</span>
          </div>
          <div className="pt-stat">
            <span className="pt-stat-n">{map.hypotheses.length}</span>
            <span className="pt-stat-l">hipótesis en disputa</span>
          </div>
          <div className="pt-stat">
            <span className="pt-stat-n">{map.study_hypothesis_edges.length}</span>
            <span className="pt-stat-l">conexiones estudio ↔ hipótesis</span>
          </div>
          <div className="pt-stat">
            <span className="pt-stat-n">{absentBridges.length}</span>
            <span className="pt-stat-l">puentes ausentes — donde el conocimiento se acaba</span>
          </div>
        </div>

        <div className="pt-sec">
          <h2 className="pt-h">Los hallazgos</h2>
          {FINDINGS.map((f, i) => {
            const it = SINTESIS.find((s) => s.id === f.id);
            if (!it) return null;
            const cites = it.cites.flatMap((id) => {
              const label = citeLabel(id);
              return label ? [{ id, label }] : [];
            });
            return (
              <section className="pt-find" key={f.id}>
                <div className="pt-find-k">
                  <span className="pt-find-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pt-find-q">{it.q}</span>
                </div>
                <h3 className="pt-find-v">{it.verdict}</h3>
                <p className="pt-find-d">{f.deck}</p>
                {f.live ? <LiveLenses /> : it.chart && <ChartView chart={it.chart} />}
                <div className="pt-find-trail">
                  <button className="pt-more" onClick={() => onSintesis?.(it.id)}>
                    el análisis completo →
                  </button>
                  {cites.map((c) => (
                    <button
                      className="sint-cite"
                      key={c.id}
                      onClick={() => onCite?.(c.id)}
                      title="Ver en Fuentes"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="pt-sec">
          <h2 className="pt-h">Explora el dataset completo</h2>
          <p className="pt-explore-d">
            Cada hallazgo de arriba se puede desarmar. El Explorador es la cabina: las palancas de
            cada modelo con su evidencia anclada, las cuatro lentes, las capas, los{" "}
            {map.studies.length} estudios y los puentes entre dimensiones — con cada supuesto
            rotulado como supuesto.
          </p>
          <div className="pt-cta">
            <button className="pt-enter pt-enter-explorar" onClick={() => onView("explorador")}>
              <span className="pt-ico" aria-hidden="true" />
              <span className="pt-enter-txt">
                <span className="pt-enter-t">Explorar el modelo</span>
                <span className="pt-enter-d">arma un escenario y mira qué evidencia lo sostiene</span>
              </span>
              <span className="pt-arrow" aria-hidden="true">→</span>
            </button>
            <button className="pt-enter pt-enter-sintesis" onClick={() => onView("sintesis")}>
              <span className="pt-ico" aria-hidden="true" />
              <span className="pt-enter-txt">
                <span className="pt-enter-t">Leer la síntesis</span>
                <span className="pt-enter-d">todas las preguntas, en prosa, con su evidencia</span>
              </span>
              <span className="pt-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <div className="pt-also">
            También:{" "}
            <button className="pt-link" onClick={() => onView("realidad")}>
              los datos reales
            </button>{" "}
            ·{" "}
            <button className="pt-link" onClick={() => onView("fuentes")}>
              las fuentes
            </button>
          </div>
        </div>

        <div className="pt-spirit">
          <h2 className="pt-spirit-h">El método</h2>
          <div className="pt-tenets">
            <div className="pt-tenet">
              <span className="pt-tenet-l">Sin aire.</span> Cada cifra se verifica contra la fuente
              primaria. Nada de números redondos inventados ni de gancho marquetero: si algo no se
              sabe, se dice.
            </div>
            <div className="pt-tenet">
              <span className="pt-tenet-l">Los supuestos, rotulados como supuestos.</span> Un sistema
              de color separa lo{" "}
              <span className="pt-dot anchored" /> anclado en evidencia, lo{" "}
              <span className="pt-dot informed" /> informado por evidencia, y lo que es un{" "}
              <span className="pt-dot assumed" /> supuesto. Nunca se disfraza uno de otro.
            </div>
            <div className="pt-tenet">
              <span className="pt-tenet-l">Lo que falta también es producto.</span> Donde no existe
              una función validada que conecte dos cosas —de «la IA puede hacer esta tarea» a «se
              pierden estos empleos»—, se muestra el puente ausente en vez de taparlo.
            </div>
            <div className="pt-tenet">
              <span className="pt-tenet-l">Abierto y auditable.</span> Los datos, el modelo y el
              código son públicos. Cualquiera puede revisarlos, corregir un dato o extender el mapa.
            </div>
          </div>
        </div>

        <div className="pt-foot">
          Iniciado por{" "}
          <a href="https://nicolasrivasabud.com/" target="_blank" rel="noreferrer">
            Nicolás Rivas
          </a>
          . Código bajo licencia MIT · textos y datos bajo CC-BY 4.0.
        </div>
      </div>
    </div>
  );
}
