import rawMap from "./mapa.json";
import type { Geo, MapData, StudyHypEdge } from "./types";
import type { Scope } from "./model";

export const map = rawMap as unknown as MapData;

export const studyById = new Map(map.studies.map((s) => [s.id, s] as const));
export const hypById = new Map(map.hypotheses.map((h) => [h.id, h] as const));

export const edgesByStudy: Record<string, StudyHypEdge[]> = {};
export const edgesByHyp: Record<string, StudyHypEdge[]> = {};
for (const e of map.study_hypothesis_edges) {
  (edgesByStudy[e.study_id] ||= []).push(e);
  (edgesByHyp[e.hypothesis] ||= []).push(e);
}

export const dimById = new Map(map.dimensions.map((d) => [d.id, d] as const));
export const conversions = map.conversions; // puentes entre dimensiones: función + supuestos + kind
export const absentBridges = map.conversions.filter((c) => c.kind === "absent");

// La dimensión de una estimación a veces trae un sufijo entre paréntesis:
// "dim-task-exposure (…)" → "dim-task-exposure".
export const normDim = (d: string) => d.trim().split(/[\s(]/)[0];
export const dimLabel = (id: string) =>
  dimById.get(id)?.name ?? id.replace(/^dim-/, "").replace(/-/g, " ");

// Apellido del primer autor (o nombre corto de la institución) para citas mínimas y orden.
const INST = /Institute|Index|Team|Bureau|Organisation|Organization|Office|Fund|Forum|Council|Commission|Global|OECD|IMF|ILO|WEF|McKinsey|Anthropic|Epoch|SemiAnalysis/;
export function surname(authors: string): string {
  const first = authors.split(/[,;&]|\bet al\.?\b|\(/)[0].trim();
  const tokens = first.split(/\s+/).filter(Boolean);
  if (tokens.length <= 1) return first;
  if (INST.test(first)) return tokens[0]; // institución: McKinsey, Anthropic, OECD…
  // Apellidos con partícula: "Jan De Loecker" → "De Loecker", "John Van Reenen" → "Van Reenen".
  // Sin esto el último token solo deja "Loecker", que no es como se cita.
  const n = tokens.length;
  if (n >= 3 && PARTICULA.test(tokens[n - 2])) return `${tokens[n - 2]} ${tokens[n - 1]}`;
  return tokens[n - 1]; // persona: último token = apellido
}
const PARTICULA = /^(de|del|de la|van|von|der|den|da|di|du|la|le|dos|das|ter)$/i;

// ── Cuánta evidencia del mapa cubre cada alcance geográfico ──────────────────────────────
// El selector de alcance decía «sin datos propios» para Europa, y eso confundía dos cosas
// distintas: que el MODELO no tiene parámetros europeos propios, que es cierto y sigue
// siéndolo, con que el mapa no tiene evidencia europea, que es falso y cada ronda lo vuelve
// más falso. Esto cuenta lo segundo a partir de los códigos `geo` que normaliza
// aplicar-geografia.py, así que se actualiza solo y no hay una cifra que mantener a mano.
// El cero de América Latina se muestra igual que el resto: es el dato, no un vacío.
const SCOPE_GEO: Record<Scope, Geo[]> = {
  global: ["global", "multi"],
  us: ["us", "us-eu"],
  eu: ["eu", "us-eu"],
  latam: ["latam", "cl"],
  asia: ["cn"],
};

export function scopeEvidence(scope: Scope): { studies: number; estimates: number } {
  const codes = SCOPE_GEO[scope];
  let studies = 0;
  let estimates = 0;
  for (const s of map.studies) {
    const n = (s.estimates ?? []).filter((e) => e.geo && codes.includes(e.geo)).length;
    if (n > 0) {
      studies += 1;
      estimates += n;
    }
  }
  return { studies, estimates };
}
