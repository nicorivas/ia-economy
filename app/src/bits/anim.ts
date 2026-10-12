// ── El tiempo como parámetro, no como efecto ────────────────────────────────────────────
// Una pieza se define como función de (datos, t) con t entre 0 y 1. De ahí salen las tres
// salidas sin pipelines separados: en la web `t` lo mueve el scrubber o el scroll; en video
// lo recorre Chrome sin pantalla cuadro a cuadro; en carrusel se muestrea en los puntos
// `keyframes` de la pieza. Nada acá depende del reloj: el mismo t da siempre el mismo dibujo,
// que es lo que permite fotografiar la escena sin condiciones de carrera.

export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

/** Reescala un tramo [a,b] de la línea global a un 0..1 local. Fuera del tramo satura. */
export const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a || 1));

export const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
export const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

export const lerp = (a: number, b: number, x: number) => a + (b - a) * x;

/** Entrada escalonada: el elemento i de n aparece con retardo, para que la lista «se escriba». */
export function stagger(local: number, i: number, n: number, overlap = 0.55): number {
  const step = (1 - overlap) / Math.max(1, n - 1 || 1);
  return clamp01((local - i * step) / (overlap || 1));
}

/** Opacidad de un acto: entra, se sostiene, sale. Los cortes son cortos a propósito. */
export function actAlpha(t: number, from: number, to: number, fade = 0.035): number {
  if (t < from - fade || t > to + fade) return 0;
  const inA = clamp01((t - (from - fade)) / fade);
  const outA = clamp01(((to + fade) - t) / fade);
  return Math.min(inA, outA);
}

/** Interpolación de números con formato español (coma decimal). */
export const fmt = (v: number, dec = 0) =>
  v.toFixed(dec).replace(".", ",");
