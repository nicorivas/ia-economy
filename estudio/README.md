# estudio — de una escena a tres salidas

Acá se exportan las **piezas** publicables del mapa: las infografías que van a la web, a
Instagram y a LinkedIn. La idea de fondo, en una línea: *una pieza se define como función de
un solo parámetro `t` entre 0 y 1, y las tres salidas son tres muestreos del mismo dibujo*.

- **Web** (`/bits/<slug>`) — `t` lo mueve el scrubber o los capítulos. Alrededor del marco van
  la afirmación, la fuente primaria y el enlace al nodo del mapa.
- **Video** (`video.mp4`) — Chrome sin pantalla recorre `t` cuadro a cuadro y ffmpeg los une.
- **Carrusel** (`lamina-NN.png`, `carrusel.pdf`) — se muestrea `t` en el punto de reposo de
  cada acto. LinkedIn sube el PDF; Instagram, los PNG.

No hay dos diseños. Por eso los **actos** de una pieza son a la vez los tramos de la
animación y las láminas del carrusel.

## Correrlo

```sh
cd ../app && npm run build        # el exportador lee app/dist
cd ../estudio && npm install      # solo la primera vez
node exportar.mjs --bit rho                 # láminas + PDF + video
node exportar.mjs --bit rho --solo-laminas  # rápido, para iterar el diseño
node exportar.mjs --bit rho --fps 60
```

Sale todo a `salida/<slug>/` (ignorado por git: son artefactos, se regeneran).

Requisitos: `ffmpeg` (homebrew) y Google Chrome instalado. Usa `playwright-core`, que **no**
descarga navegadores. Vive fuera de `app/` a propósito, para que el build de Vercel no lo
instale ni se alargue.

Las piezas con capa WebGL (ver `app/src/bits/README.md`) necesitan además que ese Chrome sin
pantalla **tenga contexto WebGL**. En el laptop sale solo: Chrome headless entrega WebGL 2.0
sobre Metal sin pasarle un argumento. En una máquina sin tarjeta —el servidor, por ejemplo— hay
que levantarlo con SwiftShader (`--use-gl=angle --use-angle=swiftshader
--enable-unsafe-swiftshader`), y el render por software es mucho más lento.

## Por qué vertical primero

La web es ancha y las redes son verticales. Un gráfico compuesto a lo ancho y después
encogido queda ilegible, y esa es la razón habitual por la que estos sistemas terminan con dos
diseños. Acá el lienzo es **1080×1350 fijo** y la web lo escala: el formato manda sobre la
pantalla, no al revés.

## El contrato de tiempo

Cada acto termina su animación interna en el **75 %** de su tramo y se queda quieto. La lámina
se muestrea en el **80 %**, que cae en ese reposo y antes de que el acto siguiente empiece a
entrar (su fundido abre en `100 % − FADE`). Si se mueve una de esas tres cifras hay que mover
las tres, o las láminas salen con dos actos superpuestos.

## Agregar una pieza

1. `app/src/bits/<slug>.tsx` — la escena, exportando un `Bit` (ver `tipos.ts`).
2. Registrarla en `app/src/bits/registro.ts`.
3. `cd app && npm run build && cd ../estudio && node exportar.mjs --bit <slug>`.

Cada cifra va verificada contra la fuente primaria y citada al pie de la pieza, igual que en
el mapa. Si una cifra no se puede citar, no entra.
