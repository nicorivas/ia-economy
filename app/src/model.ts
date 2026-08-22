// Motor de escenarios para la métrica principal: Δ empleo neto (% del empleo) a 3 y 5 años.
//
// NO es un pronóstico de la literatura. Es la descomposición canónica de Acemoglu-Restrepo
// (Δ demanda de trabajo ≈ reinstauración − desplazamiento ± efecto productividad) expuesta
// como modelo explícito: los insumos salen de la evidencia; los parámetros que la literatura
// NO fija (reinstauración, elasticidad productividad→demanda) son supuestos del usuario. El
// rango barrido sobre los supuestos es la respuesta honesta.

import EMPLEO_REAL from "./empleo-real.json";

export type Scope = "global" | "us" | "eu" | "latam" | "asia";

export const SCOPES: { key: Scope; label: string; hasData: boolean }[] = [
  { key: "global", label: "Global", hasData: true },
  { key: "us", label: "Estados Unidos", hasData: true },
  { key: "eu", label: "Europa", hasData: false },
  { key: "latam", label: "América Latina", hasData: false },
  { key: "asia", label: "Asia oriental", hasData: false },
];

export type ParamKey = string;
export type Metric = "empleo" | "salarios" | "participacion";
export type Vals = Record<string, number>;
export type HorizonF = { adopt: number; reinst: number };

// Lentes = motores alternativos del núcleo (se elige UNA). Cambian *cómo* se computa el agregado
// (Δ demanda → empleo/salarios/participación), no qué se reparte. Hoy solo "tareas" está
// construida; el resto va en gris (igual que las ramas no construidas del árbol). Roadmap y
// criterio (lente vs. recuadro) en `roadmap-lentes.md`.
export type Lens = "tareas" | "agregado" | "empirico" | "endogeno";

export const LENSES: { key: Lens; label: string; sub: string; built: boolean }[] = [
  { key: "tareas", label: "Tareas", sub: "desplazamiento − reinstauración (Acemoglu-Restrepo)", built: true },
  { key: "agregado", label: "Agregado · CES", sub: "sustitución capital-trabajo (σ)", built: true },
  { key: "empirico", label: "Empírico", sub: "extrapolado de la exposición observada", built: true },
  { key: "endogeno", label: "Crecimiento", sub: "weak links: lo que la IA no puede hacer decide al trabajo (Jones)", built: true },
];

// Transferibilidad geográfica de un parámetro: qué haría falta para usarlo fuera del país donde
// se midió. Existe porque casi toda la evidencia del mapa es estadounidense y trasladarla sin
// declarar el supuesto es el mismo error que mezclar olas, movido al eje del espacio. El campo es
// OBLIGATORIO a propósito: así el compilador obliga a pronunciarse sobre cada parámetro nuevo.
//   estructural   no depende del país — propiedad de la tecnología, de la matemática del modelo,
//                 o fenómeno planetario (la cadena de chips, el desplazamiento de beneficios)
//   recalculable  se traslada si se recalcula con datos locales que EXISTEN; `trasladoNota` dice
//                 con cuáles
//   local         intransferible: hay que medirlo en el país o no se tiene
//   politica      no es una medición sino una decisión; no se traslada porque no se observa
export type Traslado = "estructural" | "recalculable" | "local" | "politica";

export interface ParamDef {
  key: ParamKey;
  short: string; // nombre corto = el que usa la fórmula (el slider lo usa de título; label va de descripción)
  label: string;
  // Dimensión(es) del mapa que ESTE parámetro representa. Al enfocarlo, la banda de dispersión
  // muestra la evidencia de esa dimensión — no todo lo que midieron sus estudios-ancla (un estudio
  // puede medir varias cosas; mostrarlas todas confunde, p.ej. OECD mide adopción Y expectativa salarial).
  dims?: string[];
  anchored: boolean; // true = anclado en evidencia · false = supuesto que la literatura no fija
  // true = "informado" (verde): la evidencia ACOTA la dirección y un rango, sin FIJAR un punto
  // (estado intermedio entre anclado y supuesto). Implica anchored=true (tiene estudios), pero las
  // anclas son traducciones indirectas, no mediciones del parámetro mismo. Hoy: φ.
  informed?: boolean;
  evidence: string;
  // Cada estudio que fundamenta el parámetro, anclado en SU valor dentro de la escala del
  // slider. Al mover el slider, cada estudio "pesa" según qué tan cerca queda (vacío = nada lo fija).
  anchors: { studyId: string; at: number }[];
  // Qué haría falta para usar este parámetro fuera de donde se midió. Ver el tipo `Traslado`.
  traslado: Traslado;
  // Para `recalculable`: con qué dato local se rehace. Para `local`: qué habría que medir.
  trasladoNota?: string;
  min: number;
  max: number;
  step: number;
  fmt: (v: number) => string;
}

export const PARAMS: ParamDef[] = [
  {
    key: "a",
    short: "automatizable",
    label: "Trabajo técnicamente automatizable",
    anchored: true,
    evidence:
      "McKinsey ~30% de horas a 2030; Acemoglu ~14% de tareas costo-efectivas; IMF exposición 40% (economías avanzadas) / 26% (bajos ingresos). El valor exacto es incierto.",
    anchors: [
      { studyId: "acemoglu2024simple", at: 0.14 },
      { studyId: "mckinsey-us-2023", at: 0.295 },
      { studyId: "mckinsey-econ-potential-2023", at: 0.3 },
      { studyId: "imf-cazzaniga-2024", at: 0.4 },
    ],
    dims: ["dim-task-exposure", "dim-automation-potential", "dim-automatable-hours", "dim-occupation-exposure"],
    traslado: "recalculable",
    trasladoNota:
      "Los índices de exposición están construidos sobre ocupaciones: se rehace ponderando por la estructura ocupacional local. La Encuesta Nacional de Empleo chilena ya usa CIUO-08, compatible con Eloundou y Felten.",
    min: 0.1,
    max: 0.4,
    step: 0.01,
    fmt: (v) => v.toFixed(2),
  },
  {
    key: "d",
    short: "adopción",
    label: "Adopción efectiva al horizonte maduro",
    anchored: true,
    evidence:
      "OECD: adopción de IA a nivel firma 2–23% en la UE (2023); Census BTOS EE.UU. ~4%→6,6% (2024), 18–32% (2026). Hacia dónde crece no está fijado.",
    anchors: [
      { studyId: "bonney-btos-2024-tracking", at: 0.066 },
      { studyId: "oecd-emo-2023", at: 0.13 },
      { studyId: "bonney-btos-2026-microstructure", at: 0.25 },
    ],
    dims: ["dim-firm-adoption", "dim-ai-adoption-use"],
    traslado: "local",
    trasladoNota:
      "La adopción real es propia de cada economía y no se deduce de la exposición. En Chile habría que medirla con un módulo tipo BTOS o vía la Encuesta Longitudinal de Empresas.",
    min: 0.05,
    max: 0.45,
    step: 0.01,
    fmt: (v) => v.toFixed(2),
  },
  {
    key: "s",
    short: "sustituye",
    label: "Share que sustituye (vs. aumenta)",
    anchored: true,
    evidence:
      "Anthropic Economic Index: 41–45% de las interacciones son 'automate' frente a 'augment' (feb-2025 y ene-2026).",
    anchors: [
      { studyId: "anthropic-aei-2025-original", at: 0.41 },
      { studyId: "anthropic-aei-2026-primitives", at: 0.45 },
    ],
    dims: ["dim-collaboration-mode", "dim-interaction-type"],
    traslado: "recalculable",
    trasladoNota:
      "La dirección sustituir/aumentar depende del mix de tareas de cada ocupación: se rehace con la misma reponderación ocupacional que la automatizable.",
    min: 0.2,
    max: 0.7,
    step: 0.01,
    fmt: (v) => v.toFixed(2),
  },
  {
    key: "r",
    short: "reinstauración",
    label: "Reinstauración (tareas nuevas)",
    anchored: false,
    evidence:
      "SUPUESTO — no medida para la IA. Histórico: ~½ del crecimiento del empleo vino de tareas nuevas. >1× crea empleo neto.",
    anchors: [],
    traslado: "local",
    trasladoNota:
      "Depende del dinamismo empresarial y de la creación de tareas nuevas. No está medido para la IA en ningún país — es el puente ausente central del mapa —, así que para Chile no es trasladar sino inaugurar.",
    min: 0,
    max: 1.5,
    step: 0.05,
    fmt: (v) => `${v.toFixed(2)}×`,
  },
  {
    key: "elast",
    short: "elasticidad",
    label: "Elasticidad de demanda: ¿la productividad crea o destruye empleo?",
    anchored: false,
    evidence:
      "SUPUESTO — la bisagra (Imas): cuando la IA abarata un bien, ¿la demanda explota (elástica: software, Jevons → más empleo) o se sacia (inelástica: comida, petróleo, insulina → menos)? Sobre 1 crea empleo, bajo 1 lo destruye, en 1 es neutral. Nadie ha medido la elasticidad agregada.",
    anchors: [],
    dims: ["dim-demand-elasticity"],
    traslado: "recalculable",
    trasladoNota:
      "La elasticidad de demanda es propiedad del bien: se aproxima ponderando por el mix sectorial local, con la matriz insumo-producto del Banco Central.",
    min: 0,
    max: 2,
    step: 0.05,
    fmt: (v) => v.toFixed(2),
  },
  {
    key: "phi",
    short: "φ",
    label: "Reparto del ajuste: empleo ↔ salarios",
    anchored: true,
    informed: true,
    evidence:
      "INFORMADO — la rigidez salarial a la baja desvía el ajuste hacia el empleo: el salario se resiste a bajar (Dickens: ~28% de los recortes impedidos; Babecký: recortes de base 'extremely rare'; Bewley: despedir antes que recortar). φ tiende BAJO (central ≈0,30, rango ~0,20–0,45). La evidencia es de shocks cíclicos, no del shock estructural de la IA: acota la dirección y el rango, no fija el punto, y φ sube con el horizonte.",
    anchors: [
      { studyId: "kaur-2019", at: 0.03 },
      { studyId: "babecky-wdn-2010", at: 0.11 },
      { studyId: "daly-hobijn-2014", at: 0.2 },
      { studyId: "dickens-iwfp-2007", at: 0.28 },
    ],
    dims: ["dim-wage-rigidity"],
    traslado: "local",
    trasladoNota:
      "Es institucional puro: rigidez salarial a la baja, protección del empleo, negociación colectiva, salario mínimo e informalidad. Albanesi encuentra que la protección del empleo modula el efecto incluso dentro de Europa.",
    min: 0,
    max: 1,
    step: 0.05,
    fmt: (v) => `${Math.round(v * 100)}% a salarios`,
  },
];

// Factores de horizonte (supuesto): a 3 años el despliegue y la reinstauración están a
// medio camino de su nivel maduro (~5 años).
export const HORIZON: Record<3 | 5, { adopt: number; reinst: number }> = {
  3: { adopt: 0.55, reinst: 0.65 },
  5: { adopt: 1, reinst: 1 },
};

// Rampa continua de los factores de horizonte para cualquier año — lineal, anclada a los dos
// puntos conocidos (año 3 = 0.55/0.65 · año 5 = maduro 1/1) y extrapolada hacia el despliegue
// temprano antes del año 3. Es supuesto (como los propios factores): el despliegue de la IA y la
// creación de tareas nuevas crecen con el tiempo. Sirve para trazar la trayectoria año a año.
export function horizonAt(year: number): HorizonF {
  const ramp = (mature3: number) => 1 - (5 - year) * ((1 - mature3) / 2);
  return {
    adopt: Math.max(0, Math.min(1, ramp(HORIZON[3].adopt))),
    reinst: Math.max(0, Math.min(1, ramp(HORIZON[3].reinst))),
  };
}

export function scopeDefaults(scope: Scope): Vals {
  const us = scope === "us";
  return { a: us ? 0.28 : 0.22, d: us ? 0.35 : 0.25, s: 0.45, r: 0.6, elast: 1, phi: 0.3 };
}

// Descomposición del escenario (Acemoglu-Restrepo), expuesta paso a paso para que la fórmula
// sea legible. El cambio en la demanda de trabajo se reparte entre CANTIDAD (empleo) y PRECIO
// (salarios) según phi: 0 = todo en empleo, 1 = todo en salarios. La participación del trabajo
// cae con las tareas netas que pasan al capital (−Npct), aparte del reparto.
export interface Decomp {
  dEff: number; // adopción efectiva al horizonte (v.d · adopt)
  rEff: number; // reinstauración efectiva al horizonte (v.r · reinst)
  Npct: number; // desplazamiento NETO de la demanda de trabajo, % (tras reinstauración)
  prodEff: number; // efecto productividad al horizonte, pp (v.prod · adopt)
  dLD: number; // cambio en la demanda de trabajo, pp: −Npct + prodEff
  result: number; // el indicador seleccionado
}

export function decompose(metric: Metric, v: Vals, h: { adopt: number; reinst: number }): Decomp {
  const dEff = v.d * h.adopt;
  const rEff = v.r * h.reinst;
  const Npct = v.a * dEff * v.s * (1 - rEff) * 100;
  // El efecto productividad → demanda lo decide la elasticidad de demanda (Imas): elast>1 (elástica,
  // Jevons) crea empleo; elast<1 (saciable) lo destruye; elast=1 neutral. prodEff = 2·(elast−1).
  const prodEff = 2 * (v.elast - 1) * h.adopt;
  const dLD = -Npct + prodEff;
  const result =
    metric === "salarios"
      ? dLD * v.phi // precio
      : metric === "participacion"
        ? -Npct // tajada del trabajo (tareas → capital)
        : dLD * (1 - v.phi); // empleo (cantidad)
  return { dEff, rEff, Npct, prodEff, dLD, result };
}

export function metricDelta(metric: Metric, v: Vals, h: { adopt: number; reinst: number }): number {
  return decompose(metric, v, h).result;
}

// Envolvente honesta: barre todos los parámetros entre sus extremos. metricDelta es
// multilineal en los parámetros → los extremos están en las esquinas.
export function envelope(metric: Metric, h: { adopt: number; reinst: number }): { min: number; max: number } {
  let lo = Infinity;
  let hi = -Infinity;
  const n = PARAMS.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const v = {} as Vals;
    PARAMS.forEach((p, i) => {
      v[p.key] = mask & (1 << i) ? p.max : p.min;
    });
    const d = metricDelta(metric, v, h);
    lo = Math.min(lo, d);
    hi = Math.max(hi, d);
  }
  return { min: lo, max: hi };
}

// Cuánto mueve el resultado cada parámetro por sí solo (barrido sobre su rango).
export function sensitivity(metric: Metric, cur: Vals, h: { adopt: number; reinst: number }) {
  return PARAMS.map((p) => {
    const lo = metricDelta(metric, { ...cur, [p.key]: p.min }, h);
    const hi = metricDelta(metric, { ...cur, [p.key]: p.max }, h);
    return {
      key: p.key,
      label: p.label,
      anchored: p.anchored,
      informed: p.informed,
      swing: Math.abs(hi - lo),
    };
  }).sort((a, b) => b.swing - a.swing);
}

// ── Motores enchufables (lentes) ────────────────────────────────────────────────────────
// Genéricos para cualquier motor: la envolvente barre las esquinas (multilineal) y la
// sensibilidad mide el swing de cada parámetro sobre su rango.
export type SensRow = {
  key: string;
  label: string;
  anchored: boolean;
  informed?: boolean;
  swing: number;
};

function envelopeOf(params: ParamDef[], delta: (v: Vals) => number): { min: number; max: number } {
  let lo = Infinity;
  let hi = -Infinity;
  const n = params.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const v: Vals = {};
    params.forEach((p, i) => {
      v[p.key] = mask & (1 << i) ? p.max : p.min;
    });
    const d = delta(v);
    lo = Math.min(lo, d);
    hi = Math.max(hi, d);
  }
  return { min: lo, max: hi };
}
function sensitivityOf(params: ParamDef[], cur: Vals, delta: (v: Vals) => number): SensRow[] {
  return params
    .map((p) => ({
      key: p.key,
      label: p.label,
      anchored: p.anchored,
      informed: p.informed,
      swing: Math.abs(delta({ ...cur, [p.key]: p.max }) - delta({ ...cur, [p.key]: p.min })),
    }))
    .sort((a, b) => b.swing - a.swing);
}

export interface Engine {
  key: Lens;
  params: ParamDef[];
  // Métricas sobre las que el motor SÍ opina. Un motor puede callar una métrica honestamente (la
  // lente Empírico no mide la participación) → en la tabla/KPI sale "sin datos", no un número falso.
  metrics: Metric[];
  defaults: (scope: Scope) => Vals;
  delta: (metric: Metric, v: Vals, h: HorizonF) => number;
  envelope: (metric: Metric, h: HorizonF) => { min: number; max: number };
  sensitivity: (metric: Metric, v: Vals, h: HorizonF) => SensRow[];
  // Vals del motor para un valor compartido de "penetración de IA" (exposición × adopción), con el
  // RESTO de sus parámetros en su centro de evidencia. Es el puente entre modelos de la vista
  // comparar: ambos consumen la misma cantidad real, cada uno por su propia cuenta. Ver `compareRow`.
  atPenetration: (pen: number, scope: Scope) => Vals;
}

const ALL_METRICS: Metric[] = ["empleo", "salarios", "participacion"];

const TAREAS: Engine = {
  key: "tareas",
  params: PARAMS,
  metrics: ALL_METRICS,
  defaults: scopeDefaults,
  delta: metricDelta,
  envelope,
  sensitivity,
  // La penetración = automatizable × adopción, y en `decompose` esos dos solo aparecen como
  // producto. La routeamos como a=pen, d=1 (la adopción ya está contada dentro de pen); el factor
  // de horizonte la rampa hacia su nivel maduro. s, r, prod y φ quedan en su centro de evidencia.
  atPenetration: (pen, scope) => ({ ...scopeDefaults(scope), a: pen, d: 1 }),
};

// ── Lente Agregado · CES ─────────────────────────────────────────────────────────────────
// Otro primitivo: la economía es una función de producción Y=F(K,L) con elasticidad de
// sustitución σ entre capital (IA = capital más productivo) y trabajo. Comparativa estática de
// un empuje capital-aumentador g:
//   pastel/productividad: Δln Y = s_K · g     (el pastel SIEMPRE crece)
//   salario:  Δln w = (s_K / σ) · g           (sube siempre; σ alto lo amortigua)
//   tajada del trabajo: Δln(part) = −((σ−1)/σ)·s_K·g   (cae si σ>1, sube si σ<1, plana en σ=1)
//   empleo:   Δln L = ε · Δln w                (vía oferta laboral)
// El riesgo en este modelo no es el sueldo: es la PARTICIPACIÓN, si σ>1. s_K/s_L = cuentas
// nacionales (~0,38/0,62), tratados como constantes documentadas. σ y g tienen evidencia (aún
// sin anclar a estudios del mapa); ε es supuesto.
// TRASLADO · recalculable: son cuentas nacionales. La participación del trabajo chilena se obtiene
// del Banco Central y NO es la estadounidense; cambiarla mueve a la vez la lente CES y toda la
// aritmética fiscal de la rama Estados, así que es la primera cifra a reemplazar en una capa Chile.
const SK = 0.38;
const SL = 0.62;

export const CES_PARAMS: ParamDef[] = [
  {
    key: "sigma",
    short: "σ",
    label: "Elasticidad de sustitución capital–trabajo (σ)",
    anchored: true,
    evidence:
      "El grueso de las estimaciones agregadas cae bajo 1 (complementos): Chirinko 0,4–0,6, Oberfield-Raval 0,5–0,7, Antràs ~0,78, meta-análisis Knoblach 0,45–0,87. El caso que necesita σ>1 es Karabarbounis-Neiman (~1,25). σ=1 (Cobb-Douglas) deja la tajada fija; el signo del efecto sobre la participación depende de este número.",
    // 4 anclas bien espaciadas para que las citas no se encimen (Oberfield-Raval queda en el
    // corpus, sin punto en el slider). El escalonado up/down evita choques con este orden.
    anchors: [
      { studyId: "chirinko2008", at: 0.5 },
      { studyId: "knoblach2020", at: 0.66 },
      { studyId: "antras2004", at: 0.8 },
      { studyId: "karabarbounis-neiman2014", at: 1.25 },
    ],
    dims: ["dim-elasticidad-sustitucion"],
    traslado: "estructural",
    trasladoNota:
      "Parámetro tecnológico de la función de producción; la dispersión entre estimaciones es metodológica antes que geográfica.",
    min: 0.4,
    max: 1.4,
    step: 0.05,
    fmt: (v) => v.toFixed(2),
  },
  {
    key: "g",
    short: "empuje IA",
    label: "Empuje de la IA al capital efectivo",
    anchored: true,
    evidence:
      "Cuánto sube el capital efectivo de la economía al horizonte: exposición a la IA (McKinsey/IMF ~30–40%) por la adopción que de verdad ocurre (BTOS). El tamaño exacto es incierto.",
    anchors: [],
    traslado: "local",
    trasladoNota:
      "Es exposición por adopción, así que hereda la localidad de la adopción.",
    min: 0.02,
    max: 0.15,
    step: 0.01,
    fmt: (v) => `${Math.round(v * 100)}%`,
  },
  {
    key: "eps",
    short: "ε",
    label: "Elasticidad de oferta laboral",
    anchored: false,
    evidence:
      "SUPUESTO — cuánto más se trabaja cuando sube el salario (Frisch ~0,3–0,8). Traduce el alza de salarios en puestos; no cambia la tajada.",
    anchors: [],
    traslado: "local",
    trasladoNota:
      "Depende de las instituciones y de la composición del empleo. Con cerca de un cuarto del empleo informal, la elasticidad estimada sobre el empleo formal estadounidense no traslada.",
    min: 0,
    max: 1,
    step: 0.05,
    fmt: (v) => v.toFixed(2),
  },
];

export interface CesDecomp {
  g: number;
  dlnW: number; // Δln salario
  wage: number; // %
  empleo: number; // %
  participacion: number; // pp
  result: number;
}

export function cesDecompose(metric: Metric, v: Vals, h: HorizonF): CesDecomp {
  const g = v.g * h.adopt; // empuje efectivo al horizonte
  const sigma = v.sigma;
  const dlnW = (SK / sigma) * g; // el salario sube con la productividad, amortiguado por σ
  const wage = dlnW * 100;
  const empleo = v.eps * wage; // vía oferta laboral
  const participacion = -SL * ((sigma - 1) / sigma) * SK * g * 100; // pp; cae si σ>1
  const result =
    metric === "salarios" ? wage : metric === "participacion" ? participacion : empleo;
  return { g, dlnW, wage, empleo, participacion, result };
}

// σ por defecto = centro de la evidencia (complementos). Una sola fuente para `defaults` y el
// puente `atPenetration`, así no se desincronizan.
const CES_DEFAULTS: Vals = { sigma: 0.65, g: 0.08, eps: 0.4 };

const AGREGADO: Engine = {
  key: "agregado",
  params: CES_PARAMS,
  metrics: ALL_METRICS,
  defaults: () => ({ ...CES_DEFAULTS }),
  delta: (m, v, h) => cesDecompose(m, v, h).result,
  envelope: (m, h) => envelopeOf(CES_PARAMS, (v) => cesDecompose(m, v, h).result),
  sensitivity: (m, v, h) => sensitivityOf(CES_PARAMS, v, (vv) => cesDecompose(m, vv, h).result),
  // g ES exposición × adopción: la penetración entra directo, 1:1. σ y ε quedan en su default.
  atPenetration: (pen) => ({ ...CES_DEFAULTS, g: pen }),
};

// ── Lente Empírico / reducido ────────────────────────────────────────────────────────────────
// Sin estructura: toma el efecto REALIZADO sobre el empleo (y los ingresos) que ya midieron los
// estudios de empleo realizado, en la rebanada más expuesta, y lo extrapola a la economía con una
// cobertura. El rango sale ancho por lo poco y disperso que se ha medido — no por desacuerdo de
// modelo. La participación no la ha medido nadie: la lente lo dice ("sin datos"). Los β están
// anclados a cifras VERIFICADAS contra primaria en el mapa; cobertura es el supuesto (durazno) — el
// salto de extrapolación de la rebanada estudiada a la economía entera.
// TRASLADO · local: es la penetración de IA "de hoy" en EE.UU., a la que corresponden los efectos
// medidos. En una economía con otra adopción, el mismo efecto realizado corresponde a otra
// penetración, así que la extrapolación de la lente Empírico se desplaza.
const PEN_REF = 0.08; // la penetración de IA "de hoy" a la que corresponden los efectos medidos
const EMP_DEFAULTS: Vals = { bEmp: -4, bSal: -2.5, cob: 0.25 };

export const EMP_PARAMS: ParamDef[] = [
  {
    key: "bEmp",
    short: "efecto empleo",
    label: "Efecto de empleo medido en lo más expuesto",
    anchored: true,
    evidence:
      "Efecto realizado en las ocupaciones más expuestas: Upwork −2% de trabajos (Hui-Reshef-Zhou, causal), jóvenes 22-25 −6% absoluto / −16% relativo con datos a sep-2025 (ADP Canaries; devs ~−20%), firmas ~0 (BTOS: reducciones por IA en 2% de las firmas, agregado robusto). Disperso por diseño. Las anclas conservan la cifra de la versión que las publicó: la versión de ago-2026 del Canaries lleva la brecha de los jóvenes a 19% bajo el contrafactual de sus pares menos expuestos, que es una medida acumulada distinta y no se puede colocar en este eje.",
    anchors: [
      { studyId: "bonney-btos-2026-microstructure", at: 0 },
      { studyId: "hui-reshef-zhou-2024-online-labor", at: -2 },
      { studyId: "brynjolfsson-chandar-chen-2025-canaries", at: -6 },
    ],
    dims: ["dim-realized-labor-demand"],
    traslado: "local",
    trasladoNota:
      "Efecto realizado, medido en EE.UU. Trasladarlo supone igual exposición, igual adopción e iguales instituciones a la vez.",
    min: -16,
    max: 2,
    step: 0.5,
    fmt: (v) => `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(1)}%`,
  },
  {
    key: "bSal",
    short: "efecto salarios",
    label: "Efecto de salarios medido en lo más expuesto",
    anchored: true,
    evidence:
      "Los estudios discrepan: Upwork −5,2% de ingresos de freelancers (precio realizado), pero ADP no halla efecto salarial — 'el golpe va al empleo, no al sueldo, por ahora' (posible rigidez). Miden cosas distintas: ingresos de plataforma vs. salario base de planilla.",
    anchors: [
      { studyId: "hui-reshef-zhou-2024-online-labor", at: -5.2 },
      { studyId: "brynjolfsson-chandar-chen-2025-canaries", at: 0 },
    ],
    dims: ["dim-realized-labor-demand", "dim-wages"],
    traslado: "local",
    trasladoNota:
      "Mismo caso que el efecto de empleo: es una medición local, no un parámetro de la tecnología.",
    min: -6,
    max: 1,
    step: 0.5,
    fmt: (v) => `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(1)}%`,
  },
  {
    key: "cob",
    short: "cobertura",
    label: "Cuánto de la economía se parece a la rebanada estudiada",
    anchored: false,
    evidence:
      "SUPUESTO — los estudios miran freelancers de escritura/imagen y jóvenes en ocupaciones top-expuestas: una rebanada chica y no representativa. Cuánto de la economía entera se le parece es el salto de extrapolación que nadie ha medido.",
    anchors: [],
    traslado: "recalculable",
    trasladoNota:
      "Qué fracción de la economía se parece a la rebanada estudiada se rehace con la estructura sectorial y ocupacional local.",
    min: 0,
    max: 1,
    step: 0.05,
    fmt: (v) => `${Math.round(v * 100)}%`,
  },
];

// Efecto en lo expuesto × cuánto de la economía se le parece. La participación no la mide nadie.
function empiricoDelta(metric: Metric, v: Vals): number {
  if (metric === "participacion") return NaN; // "sin datos" — la gatean `metrics` y la vista
  const beta = metric === "salarios" ? v.bSal : v.bEmp;
  return beta * v.cob;
}

const EMPIRICO: Engine = {
  key: "empirico",
  params: EMP_PARAMS,
  metrics: ["empleo", "salarios"], // ningún estudio mide la participación del trabajo
  defaults: () => ({ ...EMP_DEFAULTS }),
  delta: (m, v) => empiricoDelta(m, v),
  envelope: (m) => envelopeOf(EMP_PARAMS, (v) => empiricoDelta(m, v)),
  sensitivity: (m, v) => sensitivityOf(EMP_PARAMS, v, (vv) => empiricoDelta(m, vv)),
  // Puente para comparar: los efectos medidos corresponden a la penetración de hoy (~8%); a mayor
  // penetración la lente extrapola lineal (un supuesto). cobertura queda en su default.
  atPenetration: (pen) => ({
    bEmp: EMP_DEFAULTS.bEmp * (pen / PEN_REF),
    bSal: EMP_DEFAULTS.bSal * (pen / PEN_REF),
    cob: EMP_DEFAULTS.cob,
  }),
};

// ── Lente Crecimiento / endógeno (Aghion-Jones; Korinek-Suh-Trammell) ──────────────────────────
// El extremo especulativo: la IA automatiza también la producción de IDEAS → el crecimiento se
// acelera, quizá sin techo. Pero el destino del TRABAJO no lo decide el crecimiento (enorme casi
// seguro), sino si sobrevive un CUELLO DE BOTELLA humano (Baumol). Korinek-Suh: si la cola de tareas
// es NO acotada, siempre queda algo esencial que la IA no puede hacer → el trabajo es el factor
// escaso, los salarios suben para siempre y la tajada se sostiene; si es ACOTADA, la automatización
// se completa y salarios y tajada COLAPSAN. El cuello fija el signo; el crecimiento, la escala. Casi
// todo acá es supuesto: es la cota especulativa del debate, no un pronóstico. Las magnitudes ilustran
// el mecanismo (constantes ilustrativas), no son estimaciones — por eso el rango es el más ancho.
const CREC_DEFAULTS: Vals = { gr: 8, cuello: 0.5 };

export const CREC_PARAMS: ParamDef[] = [
  {
    key: "gr",
    short: "crecimiento",
    label: "Aceleración POTENCIAL del crecimiento (%/año) — antes de los weak links",
    anchored: true,
    evidence:
      "Acemoglu ~1%/año (escéptico: la IA toca pocas tareas); Korinek-Suh 2%/año (business-as-usual) hasta 18%/año (AGI). Es el potencial; los weak links lo domestican (Jones): el crecimiento efectivo es menor cuanto más persiste el cuello.",
    anchors: [
      { studyId: "acemoglu2024simple", at: 1 },
      { studyId: "korinek2024scenarios", at: 18 },
    ],
    dims: ["dim-pib-crecimiento"],
    traslado: "estructural",
    trasladoNota:
      "Es la frontera tecnológica mundial, no una propiedad del país. Lo que sí cambia entre países es cuánto de ese potencial se captura, y eso corre por la adopción.",
    min: 1,
    max: 20,
    step: 0.5,
    fmt: (v) => `${v.toFixed(1)}%/año`,
  },
  {
    key: "cuello",
    short: "weak links",
    label: "Persistencia de los «weak links»: las tareas que la IA no puede hacer (Jones)",
    anchored: false,
    evidence:
      "SUPUESTO — los «weak links» (Chad Jones): las tareas difíciles que quedan con humanos. La producción es una cadena que vale por su eslabón más débil. Si siempre sobrevive alguno (cuello alto), el trabajo es el factor escaso y captura el retorno —pero el crecimiento queda acotado—; si se automatizan todos (cuello bajo), el crecimiento se dispara y la renta del trabajo colapsa. Korinek-Suh: cola de tareas acotada vs no-acotada. Nadie sabe de qué lado caemos.",
    anchors: [],
    dims: ["dim-weak-links"],
    traslado: "recalculable",
    trasladoNota:
      "Los weak links dependen de qué produce el país: en una economía de minería y agroexportación la cadena de tareas complementarias no es la de una de servicios financieros.",
    min: 0,
    max: 1,
    step: 0.05,
    fmt: (v) => `${Math.round(v * 100)}%`,
  },
];

export interface CrecDecomp {
  tilt: number; // −1 (colapso) … +1 (el trabajo prospera); 0 = filo del cuchillo
  gr: number; // crecimiento potencial (%/año), antes de los weak links
  pie: number; // crecimiento EFECTIVO, ya domesticado por los weak links (%/año)
  empleo: number;
  salarios: number;
  participacion: number;
  result: number;
}

// Cuánto DOMESTICAN los weak links al crecimiento (Jones & Tonetti 2026): a más cuello, más se
// frena la explosión — "accelerating growth requires the weak links to be automated away".
const TAME = 0.6;

// Marco de weak links (Jones). El cuello hace DOS cosas: (1) DOMESTICA el crecimiento — el pastel
// efectivo cae con el cuello (g·(1−TAME·cuello)); (2) decide QUIÉN captura — el `tilt` (distancia a
// ½) fija el signo. Mientras el cuello sobrevive el trabajo es escaso y captura (pero el pastel es
// chico); si se automatiza todo el crecimiento explota pero la renta del trabajo colapsa. La
// participación es reparto puro (no depende del tamaño). Constantes ilustrativas: muestra el mecanismo.
function crecDecompose(metric: Metric, v: Vals): CrecDecomp {
  const tilt = (v.cuello - 0.5) * 2;
  const gEff = v.gr * (1 - TAME * v.cuello); // crecimiento efectivo, acotado por los weak links
  const empleo = tilt * (6 + 0.3 * gEff);
  const salarios = tilt * gEff * 1.4;
  const participacion = tilt * 25;
  const result =
    metric === "salarios" ? salarios : metric === "participacion" ? participacion : empleo;
  return { tilt, gr: v.gr, pie: gEff, empleo, salarios, participacion, result };
}

const CRECIMIENTO: Engine = {
  key: "endogeno",
  params: CREC_PARAMS,
  metrics: ALL_METRICS,
  defaults: () => ({ ...CREC_DEFAULTS }),
  delta: (m, v) => crecDecompose(m, v).result,
  envelope: (m) => envelopeOf(CREC_PARAMS, (v) => crecDecompose(m, v).result),
  sensitivity: (m, v) => sensitivityOf(CREC_PARAMS, v, (vv) => crecDecompose(m, vv).result),
  // Puente para comparar: más penetración → crecimiento más rápido (anclado, BAU→AGI) Y el cuello se
  // erosiona (la automatización avanza hacia completarse). Así la lente RESPONDE a la perilla: a baja
  // penetración tiende al optimismo, a alta penetración inclina al colapso de la tajada.
  atPenetration: (pen) => {
    const t = (pen - 0.02) / 0.18; // 0 en pen=2% (mín) … 1 en pen=20% (máx)
    return { gr: 2 + t * 16, cuello: Math.max(0, Math.min(1, 0.55 - t * 0.45)) };
  },
};

// Registro de motores. null = aún no construida (la fila la muestra en gris).
export const ENGINES: Record<Lens, Engine | null> = {
  tareas: TAREAS,
  agregado: AGREGADO,
  empirico: EMPIRICO,
  endogeno: CRECIMIENTO,
};

export const SK_SL = { SK, SL };

// ── Rama RECURSOS FÍSICOS: el motor de los átomos (CES de dos factores) ──────────────────────
// NO es una lente del trabajo: es la SEGUNDA RAMA del árbol ("¿se muda la escasez del trabajo a
// los recursos físicos?"), con sus PROPIAS métricas (precio/cantidad/tajada del factor físico), su
// propio motor y su propio veredicto. Por eso vive aparte del registro de lentes (ENGINES) y no
// entra en la tabla comparar (métricas distintas). Derivación completa y evidencia en
// recursos-fisicos.md. Motor: CES Y=[a·Ĩ^ρ + b·P^ρ]^(1/ρ) entre inteligencia Ĩ (la IA la abarata:
// su input efectivo crece g) y recursos físicos P (energía/cómputo), con σ = sustitución
// inteligencia↔físico y η = elasticidad de la OFERTA física (dlnP = η·dln r_P). Comparativa estática
// del empuje g (todo en log-cambios, s_I = 1−s_P):
//   dlnY        = (1−s_P)·g                       el pastel (≈; omite el feedback GE de 2º orden, <2%, como en CES)
//   dln r_P     = dlnY / (σ+η)                   PRECIO del factor físico   (señal de escasez)
//   dlnP        = η/(σ+η) · dlnY                 CANTIDAD desplegada        (se queda corta si η baja)
//   dln share_P = (1−σ)/(σ+η) · dlnY             TAJADA de la renta física  (sube si σ<1)
// σ<1 (complementos) → la tajada del físico sube (espejo del resultado de la lente CES). η baja
// (oferta inelástica) → el ajuste va al PRECIO, no a la cantidad: los dueños del factor físico
// capturan la renta. Es el teorema de Trammell-Korinek (la tajada del factor fijo → 1 si ρ<0); mi
// (1−σ)/(σ+η) es su versión local. η y σ ambos apuntan a la tesis en el corto plazo (inelástico +
// complementos) y ambos la relajan en el largo (elástico + sustituto) — el desacuerdo es de horizonte.

export type RecMetric = "precio" | "cantidad" | "tajada";
export const REC_METRICS: RecMetric[] = ["precio", "cantidad", "tajada"];

// Habilitantes físicos: energía, cómputo y tierra NO son un solo factor — sus historias se
// contradicen (la energía: generación barata pero ENTREGA escasa; el cómputo: FLOP barato pero
// EMPAQUETADO escaso; la tierra: fija). Cada uno es su propia instancia del mismo motor CES, con su
// σ/η/s_P anclados a SU evidencia. Por eso "precio" significa cosas distintas (la entrega de energía,
// el cuello de empaquetado —no el FLOP—, la tierra). El empuje g (la inteligencia se abarata) es
// compartido. Selector de habilitante en la rama. Calidad de evidencia distinta: energía medida,
// cómputo mixto (σ razonado), tierra teórica (Korinek-Suh/Trammell, el factor genuinamente fijo).
export type Enabler = "energia" | "computo" | "tierra";

export interface RecDecomp {
  g: number; // empuje efectivo al horizonte
  dlnY: number; // el pastel (% de crecimiento)
  precio: number; // Δ precio del factor físico (%)
  cantidad: number; // Δ cantidad física desplegada (%)
  tajada: number; // Δ tajada de la renta física (% RELATIVO sobre la base s_P)
  tajadaPP: number; // Δ tajada en puntos porcentuales del producto
  result: number;
}

// Comparativa estática del CES de dos factores (inteligencia abundante vs habilitante físico
// escaso). s_P = tajada actual del habilitante; el resto, derivación en recursos-fisicos.md.
export function recDecompose(metric: RecMetric, v: Vals, h: HorizonF, sP: number): RecDecomp {
  const g = v.g * h.adopt;
  const sigma = v.sigma;
  const eta = v.eta;
  const sI = 1 - sP;
  const k = sigma + eta;
  const dlnY = sI * g; // el pastel ≈ (1−s_P)·empuje (omite el feedback GE de 2º orden, <2%, como CES)
  const precio = (dlnY / k) * 100; // dln r_P
  const cantidad = ((eta / k) * dlnY) * 100; // dlnP
  const dlnShare = ((1 - sigma) / k) * dlnY; // dln share_P (relativo)
  const tajada = dlnShare * 100;
  const tajadaPP = sP * dlnShare * 100;
  const result = metric === "precio" ? precio : metric === "cantidad" ? cantidad : tajada;
  return { g, dlnY, precio, cantidad, tajada, tajadaPP, result };
}

// g (penetración) es compartido: el empuje que abarata la inteligencia es el mismo para todos los
// habilitantes. σ y η son propios de cada uno.
const G_PARAM: ParamDef = {
  key: "g",
  short: "penetración",
  label: "Cuánta IA aterriza: exposición × adopción (el empuje a la inteligencia)",
  anchored: true,
  evidence:
    "El empuje que vuelve abundante la inteligencia. El cómputo la abarata rápido por unidad (hardware ~2x cada 2,3 años, inferencia mediana ~50x/año, algoritmos ~2x/8 meses) mientras la escala de frontera crece 4-5x/año. El tamaño efectivo al horizonte es incierto.",
  anchors: [],
  dims: ["dim-abundancia-computo"],
  traslado: "local",
  trasladoNota:
    "Igual que la adopción: cuánta IA aterriza de verdad es propio de cada economía.",
  min: 0.02,
  max: 0.15,
  step: 0.01,
  fmt: (v) => `${Math.round(v * 100)}%`,
};

export interface EnablerCfg {
  key: Enabler;
  label: string;
  sub: string;
  built: boolean;
  sP: number;
  params: ParamDef[];
  defaults: Vals;
  precioShort: string; // etiqueta de la metrica precio para este habilitante
  precioNote?: string; // salvedad (p.ej. cómputo: no es el FLOP)
  delta: (m: RecMetric, v: Vals, h: HorizonF) => number;
  envelope: (m: RecMetric, h: HorizonF) => { min: number; max: number };
  sensitivity: (m: RecMetric, v: Vals, h: HorizonF) => SensRow[];
}

type EnablerSpec = Omit<EnablerCfg, "delta" | "envelope" | "sensitivity">;
function mkEnabler(c: EnablerSpec): EnablerCfg {
  return {
    ...c,
    delta: (m, v, h) => recDecompose(m, v, h, c.sP).result,
    envelope: (m, h) => envelopeOf(c.params, (v) => recDecompose(m, v, h, c.sP).result),
    sensitivity: (m, v, h) => sensitivityOf(c.params, v, (vv) => recDecompose(m, vv, h, c.sP).result),
  };
}

export const ENABLERS: EnablerCfg[] = [
  mkEnabler({
    key: "energia",
    label: "Energía",
    sub: "la entrega, no la generación",
    built: true,
    sP: 0.06, // gasto de energía ~5–7% del PIB EE.UU. (EIA)
    defaults: { g: 0.08, sigma: 0.4, eta: 0.2 },
    precioShort: "Precio de la energía",
    params: [
      G_PARAM,
      {
        key: "sigma",
        short: "σ energía–inteligencia",
        label: "Sustitución entre energía e inteligencia (σ)",
        anchored: true,
        evidence:
          "σ<1 (complementos) = la inteligencia abundante vuelve más valiosa la energía y su tajada sube. La energía sale complemento del capital en el corto plazo y agregado (Berndt-Wood; Koetse ~0,2–0,4), hacia sustituto en el largo plazo (Koetse ~0,8–1,1).",
        anchors: [
          { studyId: "berndt-wood1975", at: 0.4 },
          { studyId: "koetse-meta2008", at: 0.9 },
        ],
        dims: ["dim-sustitucion-energia-factores"],
        traslado: "estructural",
        trasladoNota:
          "Sustitución tecnológica entre factores; no es una propiedad del país.",
        min: 0.3,
        max: 1.4,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
      {
        key: "eta",
        short: "elasticidad de oferta",
        label: "Elasticidad de la oferta de energía (la entrega) — la perilla central",
        anchored: true,
        evidence:
          "El costo de generación cae (solar −88%), pero la ENTREGA es el cuello: conectar generación firme toma ~5 años y solo se construye el 14% de la cola (LBNL); la red, los transformadores y las turbinas escasean. Largo plazo más elástico (Johnson ~2,7, probable techo).",
        anchors: [
          { studyId: "lbnl-queued-up2024", at: 0.1 },
          { studyId: "johnson-supply-elasticity2014", at: 2.7 },
        ],
        dims: ["dim-oferta-energia"],
        traslado: "local",
        trasladoNota:
          "La elasticidad de la ENTREGA es del sistema eléctrico de cada país. La cola de interconexión del LBNL es estadounidense; el equivalente chileno son los datos del Coordinador Eléctrico Nacional y el vertimiento del norte.",
        min: 0,
        max: 2.7,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
    ],
  }),
  mkEnabler({
    key: "computo",
    label: "Cómputo",
    sub: "el empaquetado, no el FLOP",
    built: true,
    sP: 0.03, // capex de cómputo, chico pero creciendo rápido
    defaults: { g: 0.08, sigma: 0.25, eta: 0.3 },
    precioShort: "Precio del cuello de cómputo",
    precioNote:
      "Ojo: el precio por FLOP CAE rápido (Epoch ~2x/2,3 años). Lo que sube es el premium del cuello vinculante —empaquetado CoWoS/HBM, capacidad de frontera—, no el FLOP.",
    params: [
      G_PARAM,
      {
        key: "sigma",
        short: "σ cómputo–inteligencia",
        label: "Sustitución entre cómputo físico e inteligencia (σ)",
        anchored: true,
        informed: true,
        evidence:
          "INFORMADO — el cómputo físico de frontera es el sustrato de la inteligencia: complemento casi puro (σ→0). Korinek-Suh notan, eso sí, que el cómputo es REPRODUCIBLE (se puede construir más), así que su renta se disipa con el tiempo — es un cuello transitorio, no permanente. Razonado, no medido.",
        anchors: [{ studyId: "korinek2024scenarios", at: 0.25 }],
        dims: ["dim-captura-renta-factor-fijo"],
        traslado: "estructural",
        trasladoNota:
          "Sustitución tecnológica entre factores; no es una propiedad del país.",
        min: 0.1,
        max: 1.0,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
      {
        key: "eta",
        short: "elasticidad de oferta",
        label: "Elasticidad de la oferta de cómputo (el empaquetado) — la perilla central",
        anchored: true,
        evidence:
          "Bimodal: el die lógico es elástico (se redirige capacidad pujando precio), pero el empaquetado CoWoS y la memoria HBM son el cuello duro e inelástico —fabs nuevas, lead times largos, ~90% consumido por los 4 grandes (Epoch)—. El cuello vinculante manda.",
        anchors: [{ studyId: "epoch-chip-supply2025", at: 0.3 }],
        dims: ["dim-oferta-computo"],
        traslado: "estructural",
        trasladoNota:
          "La cadena de suministro de chips es planetaria: el cuello de empaquetado y memoria es el mismo para todos los países.",
        min: 0,
        max: 2.0,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
    ],
  }),
  mkEnabler({
    key: "tierra",
    label: "Tierra",
    sub: "espacio, materia, minerales",
    built: true,
    sP: 0.02,
    defaults: { g: 0.08, sigma: 0.4, eta: 0.1 },
    precioShort: "Precio de la tierra/materia",
    params: [
      G_PARAM,
      {
        key: "sigma",
        short: "σ tierra–inteligencia",
        label: "Sustitución entre tierra/materia e inteligencia (σ)",
        anchored: true,
        informed: true,
        evidence:
          "INFORMADO — la tierra/materia es el factor genuinamente fijo (Korinek-Suh: 'matter or energy may be the ultimate source of scarcity'; Trammell: el factor de oferta fija captura ~toda la renta si es complemento). Complemento por su naturaleza física; sin estimación econométrica limpia.",
        anchors: [
          { studyId: "aghion-jones-jones2019", at: 0.3 },
          { studyId: "korinek-trammell2024-growth-tai", at: 0.5 },
        ],
        dims: ["dim-captura-renta-factor-fijo"],
        traslado: "estructural",
        trasladoNota:
          "Sustitución tecnológica entre factores; no es una propiedad del país.",
        min: 0.1,
        max: 1.4,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
      {
        key: "eta",
        short: "elasticidad de oferta",
        label: "Elasticidad de la oferta de tierra/minerales — la perilla central",
        anchored: false,
        evidence:
          "SUPUESTO — no hay estimación de elasticidad de oferta de tierra/minerales para datacenters. Fija por construcción en el corto plazo; inferida muy inelástica por analogía con la red y las cadenas de equipos.",
        anchors: [],
        dims: ["dim-oferta-tierra"],
        traslado: "local",
        trasladoNota:
          "La disponibilidad de suelo, agua y minerales es propia de cada territorio.",
        min: 0,
        max: 1.5,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
    ],
  }),
];

export const ENABLER_BY_KEY: Record<Enabler, EnablerCfg> = Object.fromEntries(
  ENABLERS.map((e) => [e.key, e]),
) as Record<Enabler, EnablerCfg>;

// ── Capa Distribución (quién) — recuadro ADITIVO, no lente ───────────────────────────────────
// No cambia el agregado: lo REPARTE. Toma el ΔEmpleo de la lente activa y lo distribuye entre
// terciles de habilidad/salario según su exposición relativa a la IA. Hallazgo (la tesis "para
// quién"): la exposición de la IA apunta HACIA ARRIBA — sube con la calificación, pico medio-alto,
// top algo protegido (Eloundou 2023: mayor ingreso más expuesto; Webb 2020: pico ~pctil 90, top 1%
// intacto; Anthropic AEI: pico medio-alto) — invirtiendo la automatización rutinaria, que vació el
// MEDIO (Autor-Dorn 2013). Pesos relativos con promedio (terciles iguales) = 1 → el reparto CONSERVA
// el agregado. SUPUESTO del reparto: el efecto cae proporcional a la exposición (forma reducida tipo
// SBTC); exposición no es lo mismo que daño neto (un grupo expuesto puede ser asistido, no reemplazado).
export interface Tercil {
  key: string;
  label: string;
  ai: number; // exposición REAL a la IA, relativa al promedio (BLS OEWS × Eloundou)
  rutina: number; // exposición a la automatización rutinaria histórica (estilizada, Autor-Dorn)
}
// La exposición IA ahora es REAL (datos/realdata/empleo-real.json): cruce de empleo+sueldo por
// ocupación (BLS OEWS May-2021) × exposición por ocupación (Eloundou 2023), 750 ocupaciones, ~130M.
// Confirma la tesis "para quién": rel 0,62/0,98/1,38 (bajo→alto). rutina = estilizada (Autor-Dorn:
// la polarización pasada pegó al medio), como contraste histórico. Los `rel` están normalizados por
// empleo (promedio = 1) → el reparto CONSERVA el agregado.
const RUTINA_NIVEL: Record<string, number> = { alto: 0.7, medio: 1.45, bajo: 0.85 };
const NIVEL_LABEL: Record<string, string> = {
  alto: "Habilidad alta",
  medio: "Habilidad media",
  bajo: "Habilidad baja",
};
export const DIST_TERCILES: Tercil[] = [...EMPLEO_REAL.distribucion.terciles]
  .reverse() // alto → bajo (orden de despliegue)
  .map((t) => ({ key: t.nivel, label: NIVEL_LABEL[t.nivel], ai: t.rel, rutina: RUTINA_NIVEL[t.nivel] }));
// Detalle real para la vista (sueldos, empleo, ocupaciones ejemplo, fuente).
export const REAL_DIST = EMPLEO_REAL.distribucion;

// ── Comparar lentes: un mismo "cuánta IA aterriza" leído por cada motor ──────────────────────
// Perilla compartida = penetración de IA = exposición × adopción. Ambos motores YA consumen esta
// misma cantidad real (Tareas: automatizable·adopción; CES: g), así que la alimentan 1:1 — sin
// factor de ajuste. El resto de cada modelo queda en su centro de evidencia. Lo único "supuesto"
// (durazno) es la afirmación de que un mismo número significa lo mismo en los dos marcos.
export const PEN = {
  short: "penetración de IA",
  label: "Cuánta IA aterriza de verdad: exposición × adopción",
  evidence:
    "Exposición a la IA (McKinsey ~30%, IMF 40% en economías avanzadas) por la adopción que de verdad ocurre (BTOS EE.UU. ~7% en 2024, hacia 18–32% en 2026). El producto es lo que ambos modelos consumen.",
  min: 0.02,
  max: 0.2,
  step: 0.01,
  default: 0.08,
  fmt: (v: number) => `${Math.round(v * 100)}%`,
};

export const COMPARE_METRICS: Metric[] = ["empleo", "salarios", "participacion"];

// Una fila de la tabla comparar: cada métrica del motor evaluada al MISMO pen. La fila entera es
// null si el motor aún no está construido; una CELDA es null si el motor no opina de esa métrica
// (p.ej. Empírico calla la participación) → "sin datos", no un número falso. Horizonte: lo decide
// el llamador (la vista usa 5 años, efecto maduro).
export function compareRow(
  lens: Lens,
  pen: number,
  h: HorizonF,
  scope: Scope,
): Record<Metric, number | null> | null {
  const e = ENGINES[lens];
  if (!e) return null;
  const v = e.atPenetration(pen, scope);
  const cell = (m: Metric) => (e.metrics.includes(m) ? e.delta(m, v, h) : null);
  return { empleo: cell("empleo"), salarios: cell("salarios"), participacion: cell("participacion") };
}

// ── Rama LOS ESTADOS: el motor de la capacidad fiscal ────────────────────────────────────────
// TERCERA RAMA del árbol ("¿cuánto se puede gravar y repartir?"), hermana de Recursos físicos: sus
// PROPIAS métricas (recaudación / fuga / suficiencia), su propio motor y su propio veredicto. No es
// una lente del trabajo ni una capa: no reparte el ΔEmpleo, responde otra pregunta. Derivación y
// libro de evidencia en estados-fiscal.md.
//
// La tesis del modelo, y la razón de que no sea aritmética de servilleta: LO QUE SE PUEDE GRAVAR ES
// LO QUE NO SE PUEDE MOVER. El eje que decide quién captura la renta decide también a quién se le
// puede cobrar. Por eso el instrumento no es una tasa sino un par (base, movilidad de esa base), y
// el resultado central es un intercambio: la base grande se fuga, la base que no se fuga es chica.
//
// El punto de partida NO es inventado: es la aritmética de Acemoglu-Manera-Restrepo (2020, nota 22),
// verificada verbatim contra el paper. Ellos resumen el sistema tributario de EE.UU. como una tasa
// efectiva de 25,5% sobre el trabajo y 10% sobre el equipo y software, y observan que
//   25,5% × ingreso laboral + 10% × ingreso neto de capital ≈ 18,6% del PIB,
// que coincide con el 18,7% observado en NIPA 1981-2018. Con s_L = 0,58 y s_K = 0,38 la identidad
// cierra exactamente. De ahí salen las tres constantes de abajo.
// TRASLADO · local las dos tasas, recalculable las dos participaciones. τ_L y τ_K son las tasas
// efectivas que Acemoglu-Manera-Restrepo estiman para EE.UU. incorporando depreciación acelerada y
// tasa corporativa efectiva; Chile tiene otra arquitectura —primera categoría con integración
// parcial, IVA de 19% con un peso en la recaudación que no tiene equivalente allá—, así que la
// identidad de la nota 22 hay que rehacerla entera, no ajustarla. s_L y s_K salen de cuentas
// nacionales locales.
const TAU_L = 0.255; // tasa efectiva sobre el trabajo (AMR 2020; rango declarado 25,5–33,5%)
const TAU_K = 0.1; // tasa efectiva sobre equipo y software (AMR 2020, década de 2010; ~5% tras 2017)
const S_L0 = 0.58; // participación del trabajo de partida
const S_K0 = 0.38; // ingreso neto de capital / PIB (menor que 1−s_L: descuenta depreciación)

export type EstMetric = "recaudacion" | "fuga" | "suficiencia";
export const EST_METRICS: EstMetric[] = ["recaudacion", "fuga", "suficiencia"];

// Instrumentos: qué base se grava. No son variantes de la misma palanca — son bases distintas, con
// tamaños y movilidades distintas, y cada una con su calidad de evidencia. El selector de la rama.
export type Instrumento = "capital" | "automatizacion" | "inmovil";

export interface EstDecomp {
  dsL: number; // shock: Δ participación del trabajo, en pp (viene de la lente activa del Trabajo)
  erosion: number; // Δ recaudación por el shock, sin que nadie cambie ninguna ley (pp del PIB)
  bruta: number; // recaudación adicional del instrumento ANTES de la fuga (pp del PIB)
  retenido: number; // fracción de la base que sobrevive al gravamen (0–1)
  neta: number; // recaudación adicional efectiva del instrumento (pp del PIB)
  recaudacion: number; // erosión + neta = Δ total de la caja (pp del PIB)
  fuga: number; // % de la base que desaparece al gravarla
  fugaPP: number; // lo que esa fuga cuesta, en pp del PIB
  perdida: number; // ingreso laboral perdido por el shock (pp del PIB) — el hoyo a tapar
  suficiencia: number; // % del ingreso laboral perdido que la transferencia repone en los hogares
  result: number;
}

// Comparativa estática de la caja fiscal ante un shock a la participación del trabajo y una tasa
// adicional sobre una base con movilidad ε:
//   erosión   = (τ_L − τ_K) · Δs_L                      la caja cede sola: la base migra de lo
//                                                        gravado al 25,5% a lo gravado al 10%
//   retenido  = exp(−ε · Δτ)                            respuesta de la base declarada al gravamen
//                                                        (forma semi-elástica, el estándar de la
//                                                        literatura de desplazamiento de beneficios)
//   neta      = Δτ · s_base · retenido                  lo que efectivamente entra
//   suficiencia = (erosión + neta) · ρ / (−Δs_L)        cuánto del ingreso laboral perdido llega de
//                                                        vuelta a los hogares, descontado el ρ de la
//                                                        evidencia de transferencias
// ρ < 1 porque una transferencia se compensa en parte con menos trabajo propio: en el RCT de renta
// garantizada, 12.000 USD/año redujeron el ingreso propio en 1.800 → ρ ≈ 0,85. El dividendo de
// Alaska (universal y permanente) no bajó el empleo agregado → ρ ≈ 1. El diseño manda.
export function estDecompose(
  metric: EstMetric,
  v: Vals,
  h: HorizonF,
  sBase: number,
  dsL: number,
): EstDecomp {
  const dtau = v.dtau * h.adopt; // la política también se implementa gradualmente
  const erosion = (TAU_L - TAU_K) * dsL; // pp del PIB; negativo si la participación cae
  const bruta = dtau * sBase * 100; // pp del PIB
  const retenido = Math.exp(-v.eps * dtau);
  const neta = bruta * retenido;
  const recaudacion = erosion + neta;
  const fuga = (1 - retenido) * 100;
  const fugaPP = bruta - neta;
  const perdida = -dsL; // pp del PIB de ingreso laboral que el shock se llevó (positivo si cayó)
  // Sin pérdida no hay nada que reponer: la suficiencia no está definida y se reporta como 0 para
  // no fabricar un infinito. La UI lo dice con palabras, no con el número.
  const suficiencia = perdida > 0.01 ? ((recaudacion * v.rho) / perdida) * 100 : 0;
  const result =
    metric === "recaudacion" ? recaudacion : metric === "fuga" ? fuga : suficiencia;
  return {
    dsL,
    erosion,
    bruta,
    retenido,
    neta,
    recaudacion,
    fuga,
    fugaPP,
    perdida,
    suficiencia,
    result,
  };
}

// La tasa adicional y el retorno de la transferencia son compartidos por los tres instrumentos: la
// decisión de política es una sola, lo que cambia es sobre qué base cae.
const DTAU_PARAM: ParamDef = {
  key: "dtau",
  short: "tasa adicional",
  label: "Cuántos puntos de tasa se agregan sobre esta base",
  anchored: false,
  evidence:
    "SUPUESTO — es la palanca de política, no un dato: nadie ha medido cuánto se puede subir. Como referencia de escala, el piso mínimo global acordado es de 15% y la reforma de 2017 movió la tasa efectiva sobre equipo y software unos 5 puntos.",
  anchors: [],
  dims: ["dim-impuesto-optimo-automatizacion"],
  traslado: "politica",
  trasladoNota:
    "No es una medición sino una decisión de política: no se traslada porque no se observa en ninguna parte.",
  min: 0,
  max: 0.2,
  step: 0.01,
  fmt: (v) => `${Math.round(v * 100)} pp`,
};

const RHO_PARAM: ParamDef = {
  key: "rho",
  short: "retorno de la transferencia",
  label: "Cuánto ingreso neto llega al hogar por cada punto transferido",
  anchored: true,
  evidence:
    "Una transferencia se compensa en parte con menos trabajo propio. En el mayor experimento aleatorizado (Vivalt et al.), 12.000 USD al año bajaron el ingreso propio en 1.800 → ρ ≈ 0,85. El dividendo universal y permanente de Alaska (Jones-Marinescu) no redujo el empleo agregado → ρ ≈ 1. La diferencia es de diseño: focalizado y temporal contra universal y permanente.",
  anchors: [
    { studyId: "vivalt-etal-2025-guaranteed-income", at: 0.85 },
    { studyId: "jones-marinescu-2022-alaska", at: 1 },
  ],
  dims: ["dim-respuesta-oferta-laboral-transferencia"],
  traslado: "local",
  trasladoNota:
    "La respuesta de la oferta laboral a una transferencia depende del mercado laboral que la recibe. Con informalidad alta, el margen de ajuste es otro que el de los experimentos estadounidenses.",
  min: 0.6,
  max: 1,
  step: 0.01,
  fmt: (v) => v.toFixed(2),
};

export interface InstrumentoCfg {
  key: Instrumento;
  label: string;
  sub: string;
  built: boolean;
  sBase: number; // tajada del producto que constituye la base (fracción del PIB)
  baseNote: string; // qué es exactamente esa base, y de dónde sale su tamaño
  params: ParamDef[];
  defaults: Vals;
  delta: (m: EstMetric, v: Vals, h: HorizonF, dsL: number) => number;
  envelope: (m: EstMetric, h: HorizonF, dsL: number) => { min: number; max: number };
  sensitivity: (m: EstMetric, v: Vals, h: HorizonF, dsL: number) => SensRow[];
}

type InstrumentoSpec = Omit<InstrumentoCfg, "delta" | "envelope" | "sensitivity">;
function mkInstrumento(c: InstrumentoSpec): InstrumentoCfg {
  return {
    ...c,
    delta: (m, v, h, dsL) => estDecompose(m, v, h, c.sBase, dsL).result,
    envelope: (m, h, dsL) =>
      envelopeOf(c.params, (v) => estDecompose(m, v, h, c.sBase, dsL).result),
    sensitivity: (m, v, h, dsL) =>
      sensitivityOf(c.params, v, (vv) => estDecompose(m, vv, h, c.sBase, dsL).result),
  };
}

export const INSTRUMENTOS: InstrumentoCfg[] = [
  mkInstrumento({
    key: "capital",
    label: "El capital",
    sub: "la base grande, la que se mueve",
    built: true,
    sBase: S_K0,
    baseNote:
      "El ingreso neto de capital, ~38% del PIB (la contraparte de la participación del trabajo en la identidad de Acemoglu-Manera-Restrepo). Es la base más grande y la más móvil: el beneficio de intangibles se declara donde convenga.",
    defaults: { dtau: 0.1, eps: 3, rho: 0.85 },
    params: [
      DTAU_PARAM,
      {
        key: "eps",
        short: "movilidad de la base",
        label: "Cuánta base se va cuando la gravas (semi-elasticidad ε)",
        anchored: true,
        informed: true,
        evidence:
          "INFORMADO — cerca del 36% de los beneficios multinacionales se declaraba en paraísos en 2015 y ~40% en 2019 (Tørsløv-Wier-Zucman). La prueba coordinada: la OCDE proyectó en 2024 que el piso global del 15% recaudaría 6,5–8,1% del impuesto corporativo mundial y en 2026, con datos de implementación, recortó la estimación a 3,2–5,4%. Esa brecha acota la dirección y el orden de magnitud; no es una elasticidad estimada, y parte de ella son exclusiones y adopción parcial, no solo fuga.",
        anchors: [{ studyId: "torslov-wier-zucman-2023-missing-profits", at: 4 }],
        dims: ["dim-elasticidad-fuga-base"],
        traslado: "estructural",
        trasladoNota:
          "El desplazamiento de beneficios es un fenómeno global y su mecánica no cambia por país; lo que varía es cuánto está expuesta cada economía a él.",
        min: 0.5,
        max: 7,
        step: 0.1,
        fmt: (v) => v.toFixed(1),
      },
      RHO_PARAM,
    ],
  }),
  mkInstrumento({
    key: "automatizacion",
    label: "La automatización",
    sub: "corregir el sesgo, no gravar al robot",
    built: true,
    sBase: 0.08,
    baseNote:
      "SUPUESTO el tamaño: la renta atribuible a equipo y software, tomada como ~8% del producto. Ninguna de las fuentes del mapa reporta esa tajada; es el parámetro más débil de la rama y está aquí rotulado, no escondido. Lo que sí está medido es la BRECHA que se corrige: 25,5% al trabajo contra ~10% (y ~5% desde 2017) a esta base.",
    defaults: { dtau: 0.1, eps: 1.2, rho: 0.85 },
    params: [
      DTAU_PARAM,
      {
        key: "eps",
        short: "movilidad de la base",
        label: "Cuánta base se va cuando la gravas (semi-elasticidad ε)",
        anchored: true,
        informed: true,
        evidence:
          "INFORMADO — una máquina instalada no cambia de jurisdicción, pero la decisión de instalarla sí responde al precio: Acemoglu-Manera-Restrepo muestran que la caída de la tasa efectiva de ~20% (2000) a ~5% (post-2017) empujó la automatización por encima de su nivel eficiente, y la mitad de esa caída vino de la depreciación acelerada. La respuesta es real y menor que la del beneficio declarado.",
        anchors: [{ studyId: "acemoglu-manera-restrepo-2020-tax", at: 1.2 }],
        dims: ["dim-sesgo-tributario-capital-trabajo"],
        traslado: "local",
        trasladoNota:
          "La respuesta de la inversión al gravamen depende del código tributario de cada país: depreciación acelerada, integración del impuesto, tratamiento del leasing.",
        min: 0.2,
        max: 4,
        step: 0.1,
        fmt: (v) => v.toFixed(1),
      },
      RHO_PARAM,
    ],
  }),
  mkInstrumento({
    key: "inmovil",
    label: "Lo inmóvil",
    sub: "energía, tierra, presencia física",
    built: true,
    sBase: 0.11,
    baseNote:
      "Los factores con arraigo: energía (~6% del PIB) más cómputo (~3%) más tierra, las mismas tajadas que usa la rama de recursos físicos. Base chica, y ese es justamente el punto: es lo único que no puede declararse en otra jurisdicción.",
    defaults: { dtau: 0.1, eps: 0.2, rho: 0.85 },
    params: [
      DTAU_PARAM,
      {
        key: "eps",
        short: "movilidad de la base",
        label: "Cuánta base se va cuando la gravas (semi-elasticidad ε)",
        anchored: false,
        evidence:
          "SUPUESTO — una central, un terreno o una línea de transmisión no se trasladan, así que la fuga debería ser cercana a cero; pero nadie la ha medido para esta base y algo de respuesta hay (dónde se instala el próximo centro de datos sí se elige). El valor bajo es un razonamiento, no un dato.",
        anchors: [],
        dims: ["dim-elasticidad-fuga-base"],
        traslado: "estructural",
        trasladoNota:
          "Que un activo con arraigo físico no pueda declararse en otra jurisdicción no depende del país.",
        min: 0,
        max: 1.5,
        step: 0.05,
        fmt: (v) => v.toFixed(2),
      },
      RHO_PARAM,
    ],
  }),
];

export const INSTRUMENTO_BY_KEY: Record<Instrumento, InstrumentoCfg> = Object.fromEntries(
  INSTRUMENTOS.map((i) => [i.key, i]),
) as Record<Instrumento, InstrumentoCfg>;

// EL PUENTE con la rama del trabajo. La suficiencia solo tiene sentido contra algo perdido, y ese
// algo lo calcula la OTRA rama: Δ participación del trabajo (en pp) según la lente que se elija, a
// la penetración compartida. Devuelve null si esa lente no opina de participación — el Empírico
// calla, y callar es un resultado, no un cero.
export function shockDesdeTrabajo(lens: Lens, pen: number, h: HorizonF, scope: Scope): number | null {
  return compareRow(lens, pen, h, scope)?.participacion ?? null;
}
