export type EdgeType = "confirma" | "tensiona" | "refuta" | "informa";

export interface Estimate {
  metric: string;
  dimension: string;
  value: string;
  unit?: string;
  horizon?: string;
  geography?: string;
  sector?: string;
  counterfactual?: string;
  quote?: string;
  location?: string;
}

export interface Study {
  id: string;
  authors: string;
  year: string;
  venue?: string;
  url?: string;
  source_type?: string;
  accessed?: boolean;
  reliability_note?: string;
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
