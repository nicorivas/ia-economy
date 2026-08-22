// La ola tecnológica que mide cada estudio, y cómo se muestra.
//
// Existe porque «exposición a IA» nombraba dos cosas distintas dentro del mismo mapa: el
// aprendizaje automático predictivo de los 2010 —Webb midiendo patentes hasta 2010, Felten
// capacidades a 2019, Frey-Osborne 2013— y los modelos generativos posteriores a noviembre de
// 2022. Nada permitía notarlo al leer, y había afirmaciones que se apoyaban en ambas a la vez.
//
// La regla: un estudio pre-generativo NO sostiene por sí solo una afirmación sobre IA
// generativa. Entra como línea de base de la ola anterior o como contraste — y el contraste es
// producto: que en Europa 2011-2019 el empleo subiera en las ocupaciones expuestas y que después
// de 2022 caiga en la misma población es la mejor demostración de que la generativa hace algo
// distinto.
import type { Ola } from "./types";

export type OlaInfo = {
  label: string; // etiqueta corta para la marca
  short: string; // una línea, para el hover
  body: string; // qué significa y cómo debe leerse
  tone: "warn" | "half" | "live" | "mute"; // cómo se pinta
};

export const OLAS: Record<Ola, OlaInfo> = {
  generativa: {
    label: "generativa",
    short: "mide modelos generativos, con datos desde fines de 2022",
    body: "Evidencia sobre la ola actual: LLMs y modelos generativos, con datos posteriores a la difusión de ChatGPT. Es la única que habla directamente del objeto de este mapa.",
    tone: "live",
  },
  "pre-generativa": {
    label: "pre-generativa",
    short: "dice «IA», pero mide la ola anterior",
    body: "Mide aprendizaje automático predictivo, robots o automatización digital, con datos anteriores a noviembre de 2022. La etiqueta es la misma y el objeto no: sirve como línea de base o como contraste, y no para sostener por sí sola una afirmación sobre la IA generativa.",
    tone: "warn",
  },
  mixta: {
    label: "mixta",
    short: "la muestra cruza noviembre de 2022",
    body: "Los datos abarcan las dos olas y el estudio no las separa. Lo que mide es un promedio de ambas, así que atribuirle el resultado entero a la IA generativa la sobreestima.",
    tone: "half",
  },
  historica: {
    label: "histórica",
    short: "otra tecnología de propósito general, como analogía",
    body: "Mide una tecnología anterior —la electricidad, el cajero automático, la centralita telefónica, la maquinaria del siglo XIX— y entra al mapa como analogía declarada, no como medición de la IA.",
    tone: "mute",
  },
  teoria: {
    label: "teoría",
    short: "modelo o marco, sin período de datos propio",
    body: "Aporta estructura —un modelo, una identidad, un teorema— y no una medición. Su validez no depende de la ola, pero sus parámetros sí de con qué evidencia se los calibre.",
    tone: "mute",
  },
  contexto: {
    label: "contexto",
    short: "no mide IA",
    body: "Aporta un parámetro estructural o un dato del entorno: la elasticidad de sustitución, la rigidez salarial, la composición de la recaudación, el costo de la energía. No habla de IA y no le corresponde una ola.",
    tone: "mute",
  },
};

// Solo estas dos merecen marca visible en las listas: son las que se pueden leer mal.
export const OLA_VISIBLE: Ola[] = ["pre-generativa", "mixta"];

export const olaDe = (s: { ola?: Ola }): Ola | null => s.ola ?? null;
