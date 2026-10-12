import type { ReactNode } from "react";

// ── Qué es una «pieza» ──────────────────────────────────────────────────────────────────
// Una unidad publicable: una sola afirmación, compuesta en vertical (1080×1350), definida
// como función de un parámetro t entre 0 y 1. Los ACTOS son a la vez los tramos de la
// animación y las láminas del carrusel: el exportador muestrea `slide` de cada acto y saca
// el PNG. Así el video y el carrusel no son dos diseños, son dos muestreos del mismo.

export type Act = {
  /** Tramo que ocupa en la línea global [desde, hasta]. */
  at: [number, number];
  /** Punto donde el acto está «asentado»: de ahí sale la lámina del carrusel. */
  slide: number;
  /** Para el pie de la lámina y la lista de capítulos en la web. */
  rotulo: string;
};

/** Capa WebGL de una pieza. Se define acá, y no en `campo.ts`, para que el tipo no cierre un
 *  círculo de importaciones: `campo.ts` necesita W y H de este archivo. */
export type Fondo = {
  crear: (lienzo: HTMLCanvasElement) => { dibujar: (t: number) => void; destruir: () => void };
};

export type Bit = {
  slug: string;
  /** Rótulo de serie, arriba a la izquierda. */
  kicker: string;
  /** Título del documento y de la portada del carrusel. */
  titulo: string;
  /** La única afirmación de la pieza. Si no se puede decir en una frase, no es una pieza. */
  afirmacion: string;
  /** NIVEL 2: el detalle, para quien quiere leer. Un párrafo, no más.
   *  Va cortado en líneas porque el SVG no sabe fluir texto; la web las une con espacios.
   *  Una sola fuente para la lámina y para la página: no se escriben dos veces. */
  parrafo: string[];
  /** Cita de la fuente primaria, al pie. Siempre. */
  fuente: string;
  /** Enlace al nodo del mapa, para que la pieza sea auditable. */
  nodo: string;
  /** Duración del video en segundos. */
  duracion: number;
  acts: Act[];
  Scene: (p: { t: number }) => ReactNode;
  /** Capa WebGL opcional, DETRÁS del SVG. Como el SVG, tiene que ser función pura de t:
   *  ver la regla al principio de `campo.ts`. */
  fondo?: Fondo;
};

export const W = 1080;
export const H = 1350;
