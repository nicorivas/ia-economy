export type EdgeType = "confirma" | "tensiona" | "refuta" | "informa";

// Código de geografía normalizado (datos/aplicar-geografia.py). `geography` conserva la prosa,
// que tiene detalle que el código pierde; `geo` es el eje sobre el que se puede contar y filtrar.
// El vocabulario incluye `latam` y `cl` aunque hoy tengan cero estimaciones: el cero es el dato.
export type Geo =
  | "us" | "eu" | "us-eu" | "cn" | "multi" | "global" | "otro" | "latam" | "cl" | "na";

export interface Estimate {
  metric: string;
  dimension: string;
  geo?: Geo;
  value: string;
  unit?: string;
  horizon?: string;
  geography?: string;
  sector?: string;
  counterfactual?: string;
  quote?: string;
  location?: string;
}

// La ola tecnológica que mide el estudio. Existe porque «exposición a IA» nombraba dos cosas
// distintas: el aprendizaje automático de los 2010 y los modelos generativos posteriores a
// noviembre de 2022. Un estudio pre-generativo no sostiene por sí solo una afirmación sobre
// generativa; entra como línea de base o como contraste.
export type Ola =
  | "generativa"
  | "pre-generativa"
  | "mixta"
  | "historica"
  | "teoria"
  | "contexto";

export interface Study {
  id: string;
  authors: string;
  year: string;
  venue?: string;
  url?: string;
  source_type?: string;
  accessed?: boolean;
  reliability_note?: string;
  ola?: Ola;
  estimates: Estimate[];
}

export interface HypEdge {
  target: string;
  type: string;
  why?: string;
}

export interface Hypothesis {
  id: string;
  name: string;
  statement: string;
  edges?: HypEdge[];
}

export interface Dimension {
  id: string;
  name: string;
  definition: string;
}

export interface Conversion {
  id: string;
  from: string;
  to: string;
  kind: string;
  assumptions?: string;
  params?: string;
  source?: string;
}

export interface StudyHypEdge {
  study_id: string;
  hypothesis: string;
  type: string;
  why?: string;
}

export interface MapData {
  hypotheses: Hypothesis[];
  studies: Study[];
  dimensions: Dimension[];
  conversions: Conversion[];
  study_hypothesis_edges: StudyHypEdge[];
  findings: string[];
  gaps: string[];
}
