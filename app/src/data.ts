import rawMap from "./mapa.json";
import type { MapData, StudyHypEdge } from "./types";

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
  return tokens[tokens.length - 1]; // persona: último token = apellido
}
