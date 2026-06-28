import { useState, useEffect } from "react";
import { map, edgesByStudy, edgesByHyp, hypById, studyById, surname } from "./data";
import { readParams, writeParams } from "./urlState";
import type { EdgeType } from "./types";
import { Band3 } from "./Band3";
import { VeredictoSection } from "./Veredicto";
import type { ParamFocus } from "./Veredicto";
import { RecursosVeredicto } from "./RecursosVeredicto";
import { Section } from "./Section";
import { TopBar } from "./TopBar";
import type { View } from "./TopBar";
import { Portada } from "./Portada";
import { Sintesis } from "./SintesisView";
import { Realidad } from "./Realidad";
import { Fuentes } from "./Fuentes";
import type { Metric, RecMetric } from "./model";
import { HELP_HOME, HELP_TREE, helpMetric, helpRecMetric, HELP_REC_BRANCH } from "./help";
import type { HelpEntry } from "./help";
import "./App.css";

const REL: Record<string, { color: string; mark: string }> = {
  confirma: { color: "var(--green)", mark: "●" },
  tensiona: { color: "var(--peach)", mark: "◐" },
  refuta: { color: "var(--red)", mark: "✕" },
  informa: { color: "var(--blue)", mark: "○" },
};
const SPINE = "hyp-exposure-not-employment";
const PRIO: EdgeType[] = ["refuta", "tensiona", "informa", "confirma"];
const strongest = (types: string[]): string | null =>
  PRIO.find((t) => types.includes(t)) ?? types[0] ?? null;
const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

// El árbol de navegación: dos preguntas madre → respuestas → cada respuesta abre una
// pregunta que maneja el dashboard. Solo "El trabajo" está construida (live).
const MOTHER = [
  {
    q: "¿Qué queda escaso cuando la inteligencia se vuelve abundante?",
    answers: [
      {
        t: "El trabajo",
        opens: "¿Sigue siendo escaso el trabajo humano?",
        live: true,
        metrics: [
          { t: "¿Sube o baja el empleo?", m: "empleo" },
          { t: "¿Suben o bajan los salarios?", m: "salarios" },
          { t: "¿Cae la participación del trabajo?", m: "participacion" },
        ],
      },
      {
        t: "Los recursos físicos",
        opens: "¿El cuello se mueve al cómputo, la energía, la tierra?",
        live: true,
        branch: "recursos",
        metrics: [
          { t: "¿Sube el precio del cómputo/energía?", m: "precio" },
          { t: "¿Se queda corta la cantidad física?", m: "cantidad" },
          { t: "¿Crece la tajada a los átomos?", m: "tajada" },
        ],
      },
      {
        t: "Lo relacional",
        opens: "¿Cuánto vale que haya un humano en el loop?",
        live: false,
        kind: "síntesis",
        why: "No es un eje aparte sino un mecanismo de por qué el trabajo sigue escaso (la preferencia intrínseca por lo humano). Ya respondida en la Síntesis.",
      },
      {
        t: "Los cuellos de botella",
        opens: "¿Qué tareas no puede tocar la IA?",
        live: false,
        kind: "lente",
        why: "Son los «weak links» (Jones) — ya son el motor de la lente Crecimiento. Una rama re-contaría el mismo modelo.",
      },
    ],
  },
  {
    q: "¿Quién se queda con la renta de esa escasez?",
    answers: [
      {
        t: "La tajada: capital vs trabajo",
        opens: "¿Crece la cuota del capital?",
        live: false,
        kind: "duplicado",
        why: "Es 1 − participación: ya lo responde la métrica «Participación» y la lente Agregado·CES (σ). Escasez y renta son un mismo eje — «lo escaso captura el valor».",
      },
      {
        t: "Las plataformas",
        opens: "¿IA como electricidad o como redes sociales?",
        live: false,
        kind: "construir",
        why: "Contenido nuevo: la concentración de la renta (difusa vs platafórmica) y la indexabilidad — quién, entre los dueños del capital, captura.",
      },
      {
        t: "Los Estados",
        opens: "¿Cuánto se puede gravar y repartir?",
        live: false,
        kind: "construir",
        why: "La capa de redistribución (impuestos, UBI, capital básico). Eje nuevo, aunque corre después de la captura.",
      },
    ],
  },
];

type Sel = { kind: "study" | "hyp"; id: string };

export function App() {
  // Estado inicial desde el hash de la URL (escenario compartido). Ver urlState.ts.
  const url0 = readParams();
  const [view, setView] = useState<View>(() => (url0.get("v") as View) || "portada");
  const [fuentesSel, setFuentesSel] = useState<string>(""); // estudio seleccionado en Fuentes
  // Saltar a Fuentes con un estudio seleccionado (desde una cita clicable en la Síntesis).
  const goToStudy = (id: string) => {
    setFuentesSel(id);
    setView("fuentes");
  };
  const [pinned, setPinned] = useState<Sel[]>([]);
  const [hover, setHover] = useState<Sel | null>(null);
  const [mq, setMq] = useState(() => Number(url0.get("q")) || 0);
  const [ans, setAns] = useState(() => Number(url0.get("a")) || 0);
  const [met, setMet] = useState(() => {
    const q = Number(url0.get("q")) || 0;
    const a = Number(url0.get("a")) || 0;
    const ms = (MOTHER[q]?.answers?.[a] as { metrics?: { m: string }[] })?.metrics;
    const mstr = url0.get("m");
    const i = mstr && ms ? ms.findIndex((x) => x.m === mstr) : -1;
    return i >= 0 ? i : 0;
  });
  const [paramFocus, setParamFocus] = useState<ParamFocus>(null);
  const [help, setHelp] = useState<HelpEntry | null>(null);
  // Engancha el hover de un elemento a la ayuda contextual de la derecha (entrada ya armada).
  const hp = (e: HelpEntry) => ({
    onMouseEnter: () => setHelp(e),
    onMouseLeave: () => setHelp(null),
  });
  const mother = MOTHER[mq];
  const answer = mother.answers[ans];
  const live = answer.live;
  const branch = (answer as { branch?: string }).branch ?? "trabajo";
  const metrics = (answer as { metrics?: { t: string; m: string }[] }).metrics;
  const metricRaw = metrics ? metrics[met].m : "empleo";
  const metric = metricRaw as Metric; // rama "El trabajo"
  const recMetric = metricRaw as RecMetric; // rama "Los recursos físicos"

  // Sincroniza la posición (vista + árbol + métrica) al hash. La rebanada del escenario
  // (lente, escala, palancas) la escribe Veredicto. Juntas, el hash describe el escenario.
  useEffect(() => {
    writeParams({
      v: view === "portada" ? null : view,
      q: mq ? String(mq) : null,
      a: ans ? String(ans) : null,
      m: met ? metricRaw : null,
    });
  }, [view, mq, ans, met, metricRaw]);
  const pickMother = (i: number) => {
    setMq(i);
    setAns(0);
    setMet(0);
  };
  const pickAns = (i: number) => {
    setAns(i);
    setMet(0);
  };

  const togglePin = (kind: "study" | "hyp", id: string) =>
    setPinned((p) =>
      p.some((f) => f.kind === kind && f.id === id)
        ? p.filter((f) => !(f.kind === kind && f.id === id))
        : [...p, { kind, id }],
    );
  const clear = () => {
    setPinned([]);
    setHover(null);
  };

  const activeStudies = new Set<string>();
  const activeHyps = new Set<string>();
  for (const f of hover ? [...pinned, hover] : pinned) {
    if (f.kind === "study") activeStudies.add(f.id);
    else activeHyps.add(f.id);
  }

  // Hipótesis iluminadas por los estudios activos
  const hypRel: Record<string, string> = {};
  if (activeStudies.size) {
    for (const h of map.hypotheses) {
      const types: string[] = [];
      for (const sid of activeStudies)
        for (const e of edgesByStudy[sid] || [])
          if (e.hypothesis === h.id) types.push(e.type);
      const s = strongest(types);
      if (s) hypRel[h.id] = s;
    }
  }
  // Estudios iluminados por las hipótesis activas
  const studyRel: Record<string, string> = {};
  if (activeHyps.size) {
    for (const s of map.studies) {
      const types: string[] = [];
      for (const hid of activeHyps)
        for (const e of edgesByHyp[hid] || [])
          if (e.study_id === s.id) types.push(e.type);
      const st = strongest(types);
      if (st) studyRel[s.id] = st;
    }
  }
  // Hipótesis relacionadas vía aristas entre hipótesis
  const relHyp: Record<string, string> = {};
  if (activeHyps.size)
    for (const hid of activeHyps)
      for (const e of hypById.get(hid)?.edges || []) relHyp[e.target] = e.type;

  // Estudios en foco para la banda 3: los activos, o los conectados a las
  // hipótesis activas, o todos si no hay selección.
  let focusStudies: Set<string> | null = null;
  if (activeStudies.size) focusStudies = activeStudies;
  else if (activeHyps.size) {
    const fs = new Set<string>();
    for (const s of map.studies) if (studyRel[s.id]) fs.add(s.id);
    focusStudies = fs;
  }

  const focus: Sel | null = hover ?? (pinned.length === 1 ? pinned[0] : null);

  // Estudios del parámetro en foco, ordenados por escala y con su peso (null si no hay
  // parámetro anclado activo): la fila colapsa a ellos y cada uno se "llena" según el peso.
  const pw = paramFocus && paramFocus.anchored ? paramFocus.studies : null;
  const pwWeight = (id: string) => pw?.find((x) => x.id === id)?.weight;
  // Dimensión(es) del parámetro en foco: la dispersión se restringe a ellas (la evidencia DE ese
  // parámetro), en vez de mostrar todo lo que midieron sus estudios-ancla.
  const focusDims = paramFocus?.anchored && paramFocus.dims?.length ? paramFocus.dims : null;

  // Hipótesis relevantes al parámetro en foco: las que tocan sus estudios-ancla (con su relación).
  // Cuando hay parámetro anclado activo, la sección Hipótesis se restringe a estas.
  const paramHypRel: Record<string, string> = {};
  if (pw && pw.length) {
    for (const h of map.hypotheses) {
      const types: string[] = [];
      for (const sw of pw)
        for (const e of edgesByStudy[sw.id] || [])
          if (e.hypothesis === h.id) types.push(e.type);
      const s = strongest(types);
      if (s) paramHypRel[h.id] = s;
    }
  }
  // Hay un parámetro enfocado (anclado O supuesto): la sección Hipótesis se restringe a las
  // relevantes. Si no toca ninguna (p.ej. un supuesto sin estudios-ancla), no muestra ninguna.
  const hypFocused = !!paramFocus;
  const hypList = hypFocused ? map.hypotheses.filter((h) => paramHypRel[h.id]) : map.hypotheses;

  return (
    <div className="app">
      <TopBar view={view} onView={setView} />
      {view === "portada" ? (
        <Portada onView={setView} />
      ) : view === "explorador" ? (
        <>
      <header className="tree">
        <div className="tree-fold">
          <div className="tree-fold-inner">
            <div className="tree-row">
              {MOTHER.map((m, i) => (
                <button
                  key={i}
                  className={cx("tree-cell", i === mq && "sel")}
                  onClick={() => pickMother(i)}
                  {...hp(HELP_TREE)}
                >
                  {m.q}
                </button>
              ))}
            </div>
            <div className="tree-row">
              {mother.answers.map((a, i) => (
                <button
                  key={i}
                  className={cx("tree-cell", i === ans && "sel", !a.live && "soon")}
                  onClick={() => pickAns(i)}
                  {...hp(HELP_TREE)}
                >
                  {a.t}
                </button>
              ))}
            </div>
            {live && metrics && (
              <div className="tree-row">
                <div className="tree-cell sel leaf" {...hp(HELP_TREE)}>
                  {answer.opens}
                </div>
              </div>
            )}
          </div>
        </div>
        {live && metrics ? (
          <div className="tree-row">
            {metrics.map((mt, i) => (
              <button
                key={i}
                className={cx("tree-cell", "sel", i === met && "focus")}
                onClick={() => setMet(i)}
                {...hp(branch === "recursos" ? helpRecMetric(mt.m as RecMetric) : helpMetric(mt.m as Metric))}
              >
                {mt.t}
              </button>
            ))}
          </div>
        ) : (
          <div className="tree-row">
            <div className="tree-cell sel leaf">{answer.opens}</div>
          </div>
        )}
      </header>

      {live ? (
      <div className="body">
        <div className="bands">
          {branch === "recursos" ? (
            <RecursosVeredicto metric={recMetric} onParamFocus={setParamFocus} onHelp={setHelp} />
          ) : (
            <VeredictoSection metric={metric} onParamFocus={setParamFocus} onHelp={setHelp} />
          )}

          {/* Estudios — justo bajo el veredicto para que el hover de un slider prenda los pills */}
          <Section
            defaultOpen
            title={
              pw
                ? `Estudios que anclan «${paramFocus!.label}» — el llenado = el peso que les da tu valor`
                : `Estudios (${map.studies.length})`
            }
          >
            {pinned.length > 0 && !pw && (
              <button className="mini-btn" onClick={clear}>
                limpiar ({pinned.length})
              </button>
            )}
            <div className="study-row">
              {(pw
                ? pw
                    .map((x) => studyById.get(x.id)!)
                    .sort((a, b) => surname(a.authors).localeCompare(surname(b.authors), "es"))
                : map.studies
              ).map((s) => {
                const isActive = activeStudies.has(s.id);
                const rel = studyRel[s.id];
                // En modo parámetro la fila colapsa a los estudios que anclan el parámetro y
                // cada uno se "llena" según el peso que le da el valor actual del slider.
                const w = pwWeight(s.id);
                const inParam = w !== undefined;
                const dim = !pw && activeHyps.size > 0 && !rel && !isActive;
                return (
                  <button
                    key={s.id}
                    className={cx("pill", !pw && isActive && "active", dim && "dim", inParam && "wt")}
                    style={
                      !pw && rel && REL[rel]
                        ? { boxShadow: `inset 0 -2.5px 0 ${REL[rel].color}` }
                        : undefined
                    }
                    onMouseEnter={() => setHover({ kind: "study", id: s.id })}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => togglePin("study", s.id)}
                  >
                    {inParam && (
                      <span className="pill-wt" style={{ height: `${Math.round(w! * 100)}%` }} />
                    )}
                    <span className="pill-auth">{s.authors}</span>
                    <span className="pill-year">
                      {s.year}
                      {s.reliability_note ? " ⚠" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </Section>

          {/* La evidencia detrás — dispersión por dimensión */}
          <Section
            title={
              !paramFocus
                ? "La evidencia detrás — dispersión por dimensión"
                : paramFocus.anchored
                  ? `La evidencia detrás de «${paramFocus.label}»`
                  : `«${paramFocus.label}»: la literatura no fija esto`
            }
            summary={`${map.studies.length} estudios · ${map.dimensions.length} dimensiones`}
          >
            <Band3
              focusStudies={pw && pw.length ? new Set(pw.map((x) => x.id)) : focusStudies}
              focusDims={focusDims}
            />
          </Section>

          {/* Hipótesis */}
          <Section
            title={
              hypFocused
                ? `Hipótesis relevantes a «${paramFocus!.label}» (${hypList.length})`
                : `Hipótesis (${map.hypotheses.length})`
            }
            summary="se iluminan según los estudios activos"
          >
            <div className="legend-mini hyp-legend">
              ● confirma&nbsp;&nbsp;◐ tensiona&nbsp;&nbsp;○ informa
            </div>
            {hypFocused && hypList.length === 0 ? (
              <div className="hyp-empty">
                Ningún estudio que ancla este parámetro se conecta a una hipótesis del mapa.
              </div>
            ) : (
            <div className="hyp-grid">
              {hypList.map((h) => {
                const isActive = !hypFocused && activeHyps.has(h.id);
                const rel = hypFocused ? paramHypRel[h.id] : hypRel[h.id];
                const related = hypFocused ? undefined : relHyp[h.id];
                const dim = !hypFocused && activeStudies.size > 0 && !rel && !isActive;
                const borderColor = rel
                  ? REL[rel]?.color
                  : related
                    ? REL[related]?.color
                    : undefined;
                const n = (edgesByHyp[h.id] || []).length;
                return (
                  <button
                    key={h.id}
                    className={cx(
                      "hyp-card",
                      isActive && "active",
                      dim && "dim",
                      h.id === SPINE && "spine",
                    )}
                    style={borderColor ? { borderLeftColor: borderColor } : undefined}
                    onMouseEnter={() => setHover({ kind: "hyp", id: h.id })}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => togglePin("hyp", h.id)}
                  >
                    {h.id === SPINE && <span className="spine-tag">columna</span>}
                    <span className="hyp-name">{h.name}</span>
                    <span className="hyp-meta">
                      {n} estudio{n === 1 ? "" : "s"}
                      {rel ? ` · ${REL[rel]?.mark ?? "•"} ${rel}` : ""}
                    </span>
                  </button>
                );
              })}
            </div>
            )}
          </Section>
        </div>

        <aside className="detail">
          {help ? (
            <Help entry={help} />
          ) : focus ? (
            <Detail focus={focus} />
          ) : (
            <Help entry={branch === "recursos" ? HELP_REC_BRANCH : HELP_HOME} />
          )}
        </aside>
      </div>
      ) : (
        <div className="placeholder">
          <div>
            {(() => {
              const a = answer as { kind?: string; why?: string };
              const kc: Record<string, string> = {
                construir: "var(--blue)",
                lente: "var(--lavender)",
                "síntesis": "var(--lavender)",
                duplicado: "var(--overlay1)",
              };
              return (
                <>
                  {a.kind && (
                    <div
                      style={{
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.6px",
                        color: kc[a.kind] ?? "var(--overlay1)",
                        marginBottom: 8,
                      }}
                    >
                      {a.kind === "construir"
                        ? "Eje real · por construir"
                        : a.kind === "duplicado"
                          ? "Duplicado · ya está"
                          : `Mecanismo · es una ${a.kind}`}
                    </div>
                  )}
                  <div className="ph-q">{answer.opens}</div>
                  <div className="ph-sub">
                    {a.why ?? "Esta rama aún no está construida. Hoy el mapa vive en «El trabajo»."}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
        </>
      ) : view === "sintesis" ? (
        <Sintesis onCite={goToStudy} />
      ) : view === "realidad" ? (
        <Realidad />
      ) : (
        <Fuentes selected={fuentesSel} onSelect={setFuentesSel} />
      )}
    </div>
  );
}

// Panel de ayuda contextual: explica en palabras simples el elemento bajo el cursor (o, en
// reposo, cómo leer todo el observatorio). El kicker se tiñe con el lenguaje de color del
// resto: azul = anclado en evidencia, durazno = supuesto.
function Help({ entry: e }: { entry: HelpEntry }) {
  return (
    <div className="help">
      <div className={cx("help-kicker", e.tone)}>{e.kicker}</div>
      <h3 className="help-title">{e.title}</h3>
      {e.body.map((p, i) => (
        <p className="help-body" key={i}>
          {p}
        </p>
      ))}
      {e.node && <div className="help-extra">{e.node}</div>}
      {e.read && <div className="help-read">{e.read}</div>}
    </div>
  );
}

function Detail({ focus }: { focus: Sel | null }) {
  if (!focus)
    return (
      <div className="d-empty">
        Pasa el cursor o fija un estudio o una hipótesis para ver sus conexiones.
      </div>
    );

  if (focus.kind === "study") {
    const s = studyById.get(focus.id);
    if (!s) return null;
    const conns = edgesByStudy[s.id] || [];
    return (
      <div>
        <div className="d-type">Estudio</div>
        <h3>
          {s.authors} ({s.year})
        </h3>
        {s.venue && (
          <div className="d-statement">
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
          <div className="conn" style={{ borderLeftColor: "var(--peach)" }}>
            ⚠ {s.reliability_note}
          </div>
        )}
        <div className="d-section">Estimaciones ({s.estimates.length})</div>
        {s.estimates.map((e, i) => (
          <div className="conn" key={i}>
            <strong>{e.value}</strong> — {e.metric}
            <br />
            <span style={{ color: "var(--overlay2)" }}>{e.dimension}</span>
          </div>
        ))}
        <div className="d-section">Engancha a ({conns.length})</div>
        {conns.map((e, i) => (
          <div className="conn" key={i}>
            <span className="rel" style={{ color: REL[e.type]?.color }}>
              {REL[e.type]?.mark} {e.type}
            </span>{" "}
            → {hypById.get(e.hypothesis)?.name || e.hypothesis}
            {e.why && (
              <>
                <br />
                <span style={{ color: "var(--subtext0)" }}>{e.why}</span>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  const h = hypById.get(focus.id);
  if (!h) return null;
  const conns = edgesByHyp[h.id] || [];
  return (
    <div>
      <div className="d-type">Hipótesis{h.id === SPINE ? " · columna" : ""}</div>
      <h3>{h.name}</h3>
      <div className="d-statement">{h.statement}</div>
      {h.edges && h.edges.length > 0 && (
        <>
          <div className="d-section">Relaciones con otras hipótesis</div>
          {h.edges.map((e, i) => (
            <div className="conn" key={i}>
              <span className="rel">{e.type}</span> →{" "}
              {hypById.get(e.target)?.name || e.target}
              {e.why && (
                <>
                  <br />
                  <span style={{ color: "var(--subtext0)" }}>{e.why}</span>
                </>
              )}
            </div>
          ))}
        </>
      )}
      <div className="d-section">Estudios que la tocan ({conns.length})</div>
      {conns.map((e, i) => (
        <div className="conn" key={i}>
          <span className="rel" style={{ color: REL[e.type]?.color }}>
            {REL[e.type]?.mark} {e.type}
          </span>{" "}
          — {studyById.get(e.study_id)?.authors} {studyById.get(e.study_id)?.year}
          {e.why && (
            <>
              <br />
              <span style={{ color: "var(--subtext0)" }}>{e.why}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
