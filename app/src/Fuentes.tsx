// Vista Fuentes — la biblioteca: los estudios del mapa y sus conexiones, sin el motor. Maestro-
// detalle: a la izquierda la lista (buscable), a la derecha el estudio con sus estimaciones y las
// hipótesis que toca. Es la evidencia cruda que sostiene el Explorador y la Síntesis.
import { useState, useEffect, useRef } from "react";
import { map, edgesByStudy, hypById, studyById, surname } from "./data";

const REL: Record<string, { color: string; mark: string }> = {
  confirma: { color: "var(--green)", mark: "●" },
  tensiona: { color: "var(--peach)", mark: "◐" },
  refuta: { color: "var(--red)", mark: "✕" },
  informa: { color: "var(--blue)", mark: "○" },
  aplica: { color: "var(--lavender)", mark: "◆" },
  reencuadra: { color: "var(--mauve)", mark: "◇" },
};

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export function Fuentes({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect?: (id: string) => void;
}) {
  const studies = [...map.studies].sort((a, b) =>
    surname(a.authors).localeCompare(surname(b.authors), "es"),
  );
  const [q, setQ] = useState("");
  // Controlado por el padre (para saltar desde una cita de la Síntesis); cae al primero si vacío.
  const sel = selected && studyById.has(selected) ? selected : studies[0]?.id ?? "";
  const setSel = (id: string) => onSelect?.(id);
  const selRef = useRef<HTMLButtonElement>(null);
  // Al cambiar la selección desde fuera (salto de cita), traer la fila a la vista.
  useEffect(() => {
    selRef.current?.scrollIntoView({ block: "nearest" });
  }, [sel]);
  const ql = q.trim().toLowerCase();
  const shown = ql
    ? studies.filter((s) => (s.authors + " " + s.year + " " + (s.venue ?? "")).toLowerCase().includes(ql))
    : studies;
  const s = studyById.get(sel);
  const conns = s ? edgesByStudy[s.id] || [] : [];

  return (
    <div className="fuentes">
      <div className="fu-list">
        <div className="fu-head">
          <span className="fu-count">
            {map.studies.length} estudios · {map.hypotheses.length} hipótesis · {map.dimensions.length}{" "}
            dimensiones
          </span>
          <input
            className="fu-search"
            placeholder="buscar autor, año, revista…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="fu-rows">
          {shown.map((st) => (
            <button
              key={st.id}
              ref={st.id === sel ? selRef : undefined}
              className={cx("fu-row", st.id === sel && "sel")}
              onClick={() => setSel(st.id)}
            >
              <span className="fu-auth">{st.authors}</span>
              <span className="fu-yr">
                {st.year}
                {st.reliability_note ? " ⚠" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="fu-detail">
        {s ? (
          <div className="fu-card">
            <h2 className="fu-title">
              {s.authors} <span className="fu-title-yr">({s.year})</span>
            </h2>
            {s.venue && (
              <div className="fu-venue">
                {s.venue}
                {s.url && (
                  <>
                    {" · "}
                    <a href={s.url} target="_blank" rel="noreferrer">
                      fuente
                    </a>
                  </>
                )}
              </div>
            )}
            {s.reliability_note && (
              <div className="fu-note">⚠ {s.reliability_note}</div>
            )}

            <div className="fu-sec">Estimaciones ({s.estimates.length})</div>
            {s.estimates.map((e, i) => (
              <div className="fu-est" key={i}>
                <div className="fu-est-val">{e.value}</div>
                <div className="fu-est-metric">{e.metric}</div>
                <div className="fu-est-dim">{e.dimension}</div>
              </div>
            ))}

            <div className="fu-sec">Engancha a ({conns.length})</div>
            {conns.map((e, i) => (
              <div className="fu-conn" key={i}>
                <span className="fu-rel" style={{ color: REL[e.type]?.color }}>
                  {REL[e.type]?.mark} {e.type}
                </span>{" "}
                → {hypById.get(e.hypothesis)?.name || e.hypothesis}
                {e.why && <div className="fu-why">{e.why}</div>}
              </div>
            ))}
          </div>
        ) : (
          <div className="fu-empty">Elige un estudio de la lista.</div>
        )}
      </div>
    </div>
  );
}
