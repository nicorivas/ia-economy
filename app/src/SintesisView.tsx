// Vista Síntesis — la capa editorial sobre el Explorador. Las grandes preguntas respondidas
// navegando el grafo, con su rastro de evidencia (estudios reales del mapa). Es un resumen de todo
// lo demás: lo que concluimos, no solo lo que se puede explorar. Contenido en `sintesis.ts`.
import { SINTESIS, SINTESIS_FECHA } from "./sintesis";
import { studyById, surname } from "./data";
import { ChartView } from "./Chart";
import { RentReallocation } from "./RentReallocation";
import { EvidenceMap } from "./EvidenceMap";

const citeLabel = (id: string): string | null => {
  const s = studyById.get(id);
  if (!s) return null;
  return `${surname(s.authors)} '${String(s.year).slice(2)}`;
};

export function Sintesis({ onCite }: { onCite?: (studyId: string) => void }) {
  return (
    <div className="sintesis">
      <div className="sint-wrap">
        <div className="sint-intro">
          <p>
            El Explorador deja jugar con los supuestos y ver el rango. Esta es la otra cara: lo que,
            puestas todas las piezas sobre la mesa, de verdad se concluye — con su rastro de evidencia,
            y sin esconder dónde la respuesta es un rango o depende del marco.
          </p>
          <p className="sint-meta">
            Síntesis del debate, navegando el grafo de evidencia · al {SINTESIS_FECHA}. Cada respuesta
            nombra los estudios en que se apoya; el detalle vive en Fuentes y en el Explorador.
          </p>
        </div>

        <RentReallocation />

        {SINTESIS.map((it) => {
          const cites = it.cites
            .map((id) => ({ id, label: citeLabel(id) }))
            .filter((c) => c.label);
          return (
            <section className="sint-item" key={it.id}>
              <h2 className="sint-q">{it.q}</h2>
              <div className="sint-verdict">{it.verdict}</div>
              {it.answer.map((p, i) => (
                <p className="sint-a" key={i}>
                  {p}
                </p>
              ))}
              {it.chart && <ChartView chart={it.chart} />}
              <div className="sint-trail">
                {cites.length > 0 && (
                  <div className="sint-cites">
                    <span className="sint-trail-tag">Se apoya en</span>
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
                )}
                {it.lentes && it.lentes.length > 0 && (
                  <div className="sint-lentes">
                    <span className="sint-trail-tag">Lente</span>
                    {it.lentes.map((l) => (
                      <span className="sint-lente" key={l}>
                        {l}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <EvidenceMap />
      </div>
    </div>
  );
}
