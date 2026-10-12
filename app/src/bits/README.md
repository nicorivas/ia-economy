# bits — las piezas publicables

Una **pieza** es una unidad publicable del mapa: **una sola afirmación**, compuesta en vertical
(1080×1350), dibujada como función de un parámetro `t` entre 0 y 1.

| archivo | qué es |
|---|---|
| `tipos.ts` | qué es un `Bit` y qué es un acto |
| `anim.ts` | el tiempo como parámetro: `seg`, `stagger`, `actAlpha` |
| `registro.ts` | el catálogo; el slug es la URL |
| `Player.tsx` | la web (scrubber, capítulos, ficha) y el modo captura |
| `bits.css` | presentación; el lienzo solo se escala |
| `campo.ts` | la capa WebGL (three.js): los dos ríos de trazos |
| `rho.tsx` | pieza nº 1 · la resta que decide el saldo |

Entrada aparte (`bits.html`, no `index.html`): una pieza es la página de llegada desde redes y
no tiene por qué cargar el Explorador completo. Ruta `/bits/<slug>`, que Vercel reescribe a
`/bits.html` (ver `vercel.json`); en `vite dev` lo imita un plugin de `vite.config.ts`.

Con `?captura=1&t=0.42` la página entrega ese cuadro exacto, sin cromo, y expone
`window.__bitSetT` para que el exportador avance el tiempo sin recargar. Cómo se exporta a
video y carrusel: `../../../estudio/README.md`.

## Las dos capas

Una pieza se dibuja en dos capas superpuestas, las dos a 1080×1350 y las dos función de `t`:

- **El campo (WebGL, `campo.ts`)**, detrás. Dos ríos de trazos verticales: el izquierdo baja
  —tareas que se automatizan—, el derecho sube —tareas nuevas—. La **densidad** del río derecho
  es el parámetro del que habla la pieza; «50 por cada 100» es, literalmente, la mitad de los
  trazos. Es three.js porque son ~2.000 cuadriláteros instanciados con profundidad y mezcla
  aditiva: en SVG serían 2.000 nodos del DOM por cuadro.
- **El tipo (SVG)**, encima, con un **velo** (degradado opaco arriba y abajo) para que el texto
  le gane al campo en vez de empatarle.

El campo es opcional: una pieza sin `fondo` se dibuja solo en SVG.

> **La regla que no se puede romper:** la capa WebGL tiene que ser función **pura** de `t`,
> igual que el SVG. Nada de integrar por cuadro. La posición de cada trazo sale de su semilla
> y de una **fase** que la pieza calcula desde `t`. Un solo `+=` por cuadro y el exportador deja
> de poder fotografiar la escena: el mismo `t` daría dibujos distintos según cuántas veces se
> pintó antes. Por lo mismo el dibujo va en `useLayoutEffect` y no en un bucle de animación.

**Reglas.** Una afirmación por pieza — si no se dice en una frase, no es una pieza. Toda cifra
verificada contra la fuente primaria y citada al pie. Lo que el mapa declara ausente se muestra
ausente, no se rellena.
