import { map, dimById, conversions, absentBridges, normDim, dimLabel } from "./data";
import type { Estimate, Study, Conversion } from "./types";

type Item = { est: Estimate; study: Study };

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

// Cómo se presenta cada tipo de puente (función entre dos dimensiones).
const KIND: Record<string, { label: string; cls: string; order: number }> = {
  established: { label: "función establecida", cls: "br-est", order: 0 },
  hypothesized: { label: "función supuesta", cls: "br-hyp", order: 1 },
  absent: { label: "puente ausente", cls: "br-abs", order: 2 },
};

// Una tarjeta de puente: de qué dimensión a cuál, su tipo, la función (cómo está escrita) y los
// supuestos que requiere. Hace visible la maquinaria que conecta (o no) una medida con otra.
function BridgeCard({ c }: { c: Conversion }) {
  const k = KIND[c.kind] ?? { label: c.kind, cls: "", order: 9 };
  return (
    <div className={cx("bridge", k.cls)}>
      <div className="br-head">
        <span className="br-flow">
          <b>{dimLabel(c.from)}</b> → <b>{dimLabel(c.to)}</b>
        </span>
        <span className="br-kind">{k.label}</span>
      </div>
      {c.params ? (
        <div className="br-fn">
          <span className="br-lbl">función</span> {c.params}
        </div>
      ) : (
        c.kind === "absent" && (
          <div className="br-fn br-none">No existe función validada — y eso es el hallazgo.</div>
        )
      )}
      {c.assumptions && (
        <div className="br-asm">
          <span className="br-lbl">{c.kind === "absent" ? "por qué falta" : "supuestos"}</span>{" "}
          {c.assumptions.replace(/^\[[^\]]*\]\s*/, "").replace(/^HALLAZGO[:/]?\s*/i, "")}
        </div>
      )}
      {c.source && <div className="br-src">{c.source}</div>}
    </div>
  );
}

// Primer número que aparece en el value (para posicionar en el eje).
function primaryNum(v: string): number | null {
  const m = v.match(/-?\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

// Apellido del primer autor, aproximado (lo completo va en el tooltip).
function shortStudy(s: Study): string {
  const first = s.authors.split(/[,;&]|\bet al\b|\(/)[0].trim();
  const parts = first.split(/\s+/).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : s.authors;
}

export function Band3({
  focusStudies,
  focusDims,
}: {
  focusStudies: Set<string> | null;
  focusDims?: string[] | null;
}) {
  // Si hay un parámetro enfocado, mostramos la dispersión de SU dimensión (de todos los estudios),
  // no todo lo que midieron sus estudios-ancla — un estudio mide varias cosas y mezclarlas confunde.
  const dimSet = focusDims && focusDims.length ? new Set(focusDims) : null;
  const studies =
    !dimSet && focusStudies ? map.studies.filter((s) => focusStudies.has(s.id)) : map.studies;

  const byDim: Record<string, Item[]> = {};
  for (const s of studies)
    for (const e of s.estimates) {
      const nd = normDim(e.dimension);
      if (dimSet && !dimSet.has(nd)) continue;
      (byDim[nd] ||= []).push({ est: e, study: s });
    }

  const dims = Object.entries(byDim).sort((a, b) => b[1].length - a[1].length);
  const present = new Set(Object.keys(byDim));
  const touching = (c: Conversion) => present.has(c.from) || present.has(c.to);
  // Enfocado en una dimensión/parámetro: se muestran TODOS los puentes que la tocan (establecidos,
  // supuestos y ausentes) con su función y supuestos. Sin foco: solo el resumen de los ausentes.
  const focused = !!dimSet;
  const detailed = focused
    ? conversions
        .filter(touching)
        .slice()
        .sort((a, b) => (KIND[a.kind]?.order ?? 9) - (KIND[b.kind]?.order ?? 9))
    : [];
  const absent = absentBridges.filter(touching);

  if (dims.length === 0)
    return <div className="b3-empty">Sin estimaciones para la selección actual.</div>;

  return (
    <div className="b3">
      {focused ? (
        detailed.length > 0 && (
          <div className="b3-bridges">
            <div className="br-section">Puentes — cómo (y si) conecta con el resto del mapa</div>
            {detailed.map((c) => (
              <BridgeCard c={c} key={c.id} />
            ))}
          </div>
        )
      ) : absent.length > 0 ? (
        <div className="b3-bridges">
          {absent.map((c) => (
            <div className="b3-bridge" key={c.id}>
              ⚠ Sin puente validado: <b>{dimLabel(c.from)}</b> → <b>{dimLabel(c.to)}</b>
            </div>
          ))}
        </div>
      ) : null}

      <div className="b3-grid">
        {dims.map(([dim, items]) => {
          const def = dimById.get(dim)?.definition;
          const byUnit: Record<string, Item[]> = {};
          for (const it of items) (byUnit[it.est.unit || "—"] ||= []).push(it);

          return (
            <div className="dim-card" key={dim}>
              <div className="dim-head" title={def || ""}>
                <span className="dim-name">{dimLabel(dim)}</span>
                <span className="dim-count">{items.length}</span>
              </div>

              {Object.entries(byUnit).map(([unit, group]) => {
                const nums = group.map((g) => primaryNum(g.est.value));
                const numericCount = nums.filter((n) => n != null).length;
                const vals = nums.filter((n): n is number => n != null);
                const min = Math.min(...vals);
                const max = Math.max(...vals);
                const lineable = numericCount >= 2 && min !== max;
                const rows = lineable ? group.filter((_, i) => nums[i] == null) : group;

                return (
                  <div className="unit-group" key={unit}>
                    <div className="unit-label">{unit}</div>

                    {lineable && (
                      <div className="numline">
                        <span className="nl-min">{min}</span>
                        <div className="nl-track">
                          {group.map((g, i) =>
                            nums[i] == null ? null : (
                              <span
                                key={i}
                                className="nl-dot"
                                style={{ left: `${((nums[i]! - min) / (max - min)) * 100}%` }}
                                title={`${g.est.metric}\n${g.est.value} — ${g.study.authors} (${g.study.year})${g.est.horizon ? " · " + g.est.horizon : ""}${g.est.geography ? " · " + g.est.geography : ""}`}
                              >
                                <span className="nl-pip" />
                                <span className="nl-tag">{shortStudy(g.study)}</span>
                              </span>
                            ),
                          )}
                        </div>
                        <span className="nl-max">{max}</span>
                      </div>
                    )}

                    {rows.map((g, i) => (
                      <div className="est-row" key={i}>
                        <span className="est-metric">{g.est.metric}</span>
                        <span className="est-figs">
                          <span className="est-val">{g.est.value}</span>
                          <span className="est-study">
                            {shortStudy(g.study)} {g.study.year}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
