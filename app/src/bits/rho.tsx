// ── Pieza nº 1 · La resta que decide el saldo ───────────────────────────────────────────
// LA IDEA, en una línea: el empleo que deja una tecnología es una resta —lo que se lleva
// menos lo que crea—, y de los dos términos solo el primero se está midiendo.
//
// DOS NIVELES DE ZOOM, y nada en medio:
//   1. El que pasa volando  → láminas 1, 2 y 6: una afirmación, una imagen, una línea.
//   2. El que quiere leer   → láminas 3, 4 y 5: los valores medidos, con autor y con la
//      tecnología que midieron. Es el detalle, pero presentado como datos y no como prosa.
//      La prosa del nivel 2 vive en `parrafo`, que la web muestra bajo el reproductor.
//
// EL DIBUJO Y EL NÚMERO SON LA MISMA COSA: el fondo WebGL son dos ríos de cuadraditos. El de
// la izquierda son tareas que se automatizan; el de la derecha, tareas nuevas. La DENSIDAD del
// río derecho es el parámetro: con 50 por cada 100, el río derecho tiene la mitad de los
// cuadraditos del izquierdo. Las láminas de datos repiten esa densidad en marcas contables,
// para que el mismo gesto visual sirva de un extremo al otro de la pieza.
//
// CIFRAS Y DE DÓNDE SALEN (todas verificadas contra el reporte primario):
//   · 98 y 50 por 100 → `acemoglu-restrepo-2019-newtasks`, figuras 3 y 5. Son cocientes que
//     calculo yo sobre las tasas que ellos publican: 0,47/0,48 = 0,979 y 0,35/0,70 = 0,50.
//     Por eso cada fila muestra también las dos tasas: el mecanismo queda a la vista.
//   · 50 · 25 · 0 por 100 → `korinek-jones-2026-escenarios`, sección 3 (ρ = 0,50 · 0,25 · 0).
//   · Las cuatro analogías → nodos `ricardo1821-machinery`, `david1990-dynamo`,
//     `feigenbaum-gross-2024-operators`, `bessen2015-tellers` (los cuatro de ola histórica).
//
// HONESTIDAD QUE LA PIEZA NO PUEDE TRAICIONAR:
//   · Lo medido son TAREAS, no puestos. Un puesto es un paquete de tareas; la descomposición
//     de Acemoglu y Restrepo habla de demanda de trabajo por contenido de tareas. La pieza
//     dice «tareas» en todas las láminas de datos.
//   · Las cuatro analogías NO miden esta razón, y la lámina lo dice en el mismo renglón: el
//     hueco va en la columna donde en la lámina anterior había un número.
//   · Los escenarios de Korinek y Jones difieren en VARIOS supuestos, no solo en este.
//   · Los tres valores están en o por debajo de lo que dio la historia, y los autores declaran
//     el supuesto. El hallazgo es el agujero de la evidencia, no un descuido de ellos.

import { C } from "../chartTheme";
import { seg, stagger, easeOut, easeInOut, lerp, clamp01, actAlpha } from "./anim";
import { campoDeTareas } from "./campo";
import type { EstadoCampo } from "./campo";
import type { Bit } from "./tipos";

const SERIF = '"Newsreader", Georgia, "Times New Roman", serif';
const SANS = "-apple-system, BlinkMacSystemFont, Inter, system-ui, sans-serif";
const PAD = 72;
const DER = 1080 - PAD;
const MEDIO = 540;

// CONTRATO DE TIEMPO: cada acto cierra su animación en el 75 % de su tramo y se queda quieto.
// La lámina se muestrea en el 80 %, dentro de ese reposo y antes de que entre el siguiente
// (su fundido abre en 100 % − FADE). Si se mueve una cifra hay que mover las tres.
const FADE = 0.03;

// Tres papeles de color, y nada más:
//   rojo = lo que se lleva · turquesa = lo que nace y lo medido · azul = supuesto del modelo.
const SE_LLEVA = C.red;
const NACE = C.teal;
const SUPUESTO = C.blue;

const ACTOS: [number, number][] = [
  [0.0, 0.14],
  [0.14, 0.28],
  [0.28, 0.48],
  [0.48, 0.72],
  [0.72, 0.88],
  [0.88, 1.0],
];
/** Reposo del acto i: el 80 % de su tramo. De ahí sale la lámina. */
const reposo = (i: number) => ACTOS[i][0] + 0.8 * (ACTOS[i][1] - ACTOS[i][0]);
/** Tiempo local del acto i, y su cierre de animación en el 75 %. */
const local = (t: number, i: number) => seg(t, ACTOS[i][0], ACTOS[i][0] + 0.75 * (ACTOS[i][1] - ACTOS[i][0]));

// ── el campo de fondo como función de t ─────────────────────────────────────────────────
// Coreografía del fondo, acto por acto. La densidad del río derecho dice siempre lo mismo que
// el tipo que está encima; no hay dos mensajes compitiendo.
function planCampo(t: number): EstadoCampo {
  const fase = t * 3.4; // monótona en t: el flujo avanza sin acumular estado

  let baja = 1;
  let sube = 1;
  let brillo = 1;

  if (t < ACTOS[1][0]) {
    // Acto 1: los dos ríos entran, el izquierdo primero, y quedan parejos.
    const l = local(t, 0);
    baja = easeOut(clamp01(l / 0.5));
    sube = easeOut(clamp01((l - 0.22) / 0.55));
    brillo = easeOut(clamp01(l / 0.35));
  } else if (t < ACTOS[2][0]) {
    // Acto 2: el río derecho barre valores y no se deja fijar. Se asienta en la mitad para que
    // la lámina salga quieta, pero el barrido es lo que se lee: nadie sabe cuánto es.
    const l = local(t, 1);
    const barrido = 0.52 + 0.46 * Math.cos(l * Math.PI * 5);
    sube = lerp(barrido, 0.52, easeInOut(clamp01((l - 0.72) / 0.28)));
  } else if (t < ACTOS[4][0]) {
    // Actos 3 y 4: el campo se va atrás y deja hablar a la tabla.
    const l = seg(t, ACTOS[2][0] - FADE, ACTOS[2][0] + 0.04);
    brillo = lerp(1, 0.13, easeInOut(l));
    sube = 0.52;
  } else if (t < ACTOS[5][0]) {
    // Acto 5: el río baja con los tres escenarios —50, 25, 0— y se seca cuando aparece el cero.
    const l = local(t, 4);
    brillo = 0.16;
    // Dos escalones, uno por escenario revelado: 50 → 25 → 0. El río se seca justo cuando
    // entra el cero, y así se queda para la lámina.
    sube =
      l < 0.46
        ? lerp(0.5, 0.25, easeInOut(clamp01((l - 0.18) / 0.26)))
        : lerp(0.25, 0, easeInOut(clamp01((l - 0.5) / 0.28)));
  } else {
    // Acto 6: el río vuelve, pero otra vez indeterminado: es la pregunta abierta.
    const l = local(t, 5);
    brillo = lerp(0.16, 0.9, easeOut(l));
    // Vuelve oscilando —nadie lo ha fijado— pero la oscilación se amortigua a cero antes del
    // reposo: la lámina tiene que salir quieta, y en un valor que no afirme nada.
    const duda = 0.3 * Math.cos(l * Math.PI * 3) * (1 - easeInOut(clamp01((l - 0.5) / 0.5)));
    sube = lerp(0, 0.52 + duda, easeOut(clamp01(l / 0.6)));
  }

  return { baja, sube, brillo, fase, apertura: 1 };
}

// ── primitivas ──────────────────────────────────────────────────────────────────────────

function T({ y, t, x = PAD, size = 29, fill = C.subtext0, anchor = "start", serif = false, o = 1, peso }: {
  y: number; t: string; x?: number; size?: number; fill?: string;
  anchor?: "start" | "middle" | "end"; serif?: boolean; o?: number; peso?: number;
}) {
  return (
    <text x={x} y={y} fontFamily={serif ? SERIF : SANS} fontSize={size} fill={fill}
      textAnchor={anchor} opacity={o} fontWeight={peso}>
      {t}
    </text>
  );
}

/** Rótulo de grupo: versalitas espaciadas, para nombrar sin dibujar una caja. */
function Rotulo({ y, t, x = PAD, fill = C.overlay1, anchor = "start", o = 1 }: {
  y: number; t: string; x?: number; fill?: string; anchor?: "start" | "middle" | "end"; o?: number;
}) {
  return (
    <text x={x} y={y} fontFamily={SANS} fontSize={21} fill={fill} letterSpacing="0.16em"
      textAnchor={anchor} opacity={o}>
      {t}
    </text>
  );
}

function Hairline({ y, o = 1, x1 = PAD, x2 = DER, color = C.surface0 }: {
  y: number; o?: number; x1?: number; x2?: number; color?: string;
}) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth={1} opacity={o} />;
}

/** El velo: un degradado opaco arriba y abajo para que el tipo se lea sobre el campo.
 *  Sin esto las partículas pasan por detrás de las letras y la lámina se vuelve ilegible. */
function Velo({ o }: { o: number }) {
  return (
    <g opacity={o}>
      <rect x={0} y={0} width={1080} height={560} fill="url(#veloArriba)" />
      <rect x={0} y={790} width={1080} height={560} fill="url(#veloAbajo)" />
    </g>
  );
}

/** La densidad, hecha contable: cien marcas, n encendidas. Es el mismo gesto del río de
 *  fondo, a escala de lámina, para que «50 por 100» se pueda verificar con el ojo. */
function Marcas({ x, y, n, color, w = 936, h = 22, o = 1, total = 100 }: {
  x: number; y: number; n: number; color: string; w?: number; h?: number; o?: number; total?: number;
}) {
  const paso = w / total;
  const ancho = Math.max(1.4, paso - 1.8);
  return (
    <g opacity={o}>
      {Array.from({ length: total }, (_, i) => (
        <rect key={i} x={x + i * paso} y={y} width={ancho} height={h}
          fill={i < n ? color : C.surface0} />
      ))}
    </g>
  );
}

/** La misma densidad en columna, de cien casillas, para poner tres escenarios en paralelo. */
function Bloque({ cx, y, n, color, o = 1 }: { cx: number; y: number; n: number; color: string; o?: number }) {
  const cell = 14;
  const gap = 4;
  const cols = 10;
  const x0 = cx - (cols * (cell + gap) - gap) / 2;
  return (
    <g opacity={o}>
      {Array.from({ length: 100 }, (_, i) => {
        const fila = 9 - Math.floor(i / cols); // se llena de abajo hacia arriba
        return (
          <rect key={i} x={x0 + (i % cols) * (cell + gap)} y={y + fila * (cell + gap)}
            width={cell} height={cell} fill={i < n ? color : C.surface0} />
        );
      })}
    </g>
  );
}

// ── actos ───────────────────────────────────────────────────────────────────────────────

/** 1 · La resta. Los dos ríos entran y se nombran: la idea entera, sin una cifra. */
function ActoResta({ t }: { t: number }) {
  const l = local(t, 0);
  const a = (i: number) => stagger(l, i, 5, 0.6);
  return (
    <g>
      <Velo o={easeOut(a(0))} />
      <T y={268} t="Toda tecnología" size={82} fill={C.text} serif o={easeOut(a(0))} />
      <T y={352} t="hace dos cosas." size={82} fill={C.text} serif o={easeOut(a(1))} />

      <Rotulo y={520} t="SE LLEVA TAREAS" fill={SE_LLEVA} o={easeOut(a(2))} />
      <Rotulo y={520} t="CREA TAREAS NUEVAS" x={DER} fill={NACE} anchor="end" o={easeOut(a(3))} />
      <line x1={MEDIO} y1={556} x2={MEDIO} y2={1040} stroke={C.surface0} strokeWidth={1}
        opacity={0.8 * easeOut(a(2))} />

      <T y={1136} t="El empleo que queda es la resta." size={46} fill={C.subtext1} serif o={easeOut(a(4))} />
      <T y={1188} t="Y de los dos términos, solo uno se está midiendo." size={28} fill={C.overlay2} o={easeOut(a(4))} />
    </g>
  );
}

/** 2 · La pregunta. El río derecho barre valores: la razón que nadie fijó. */
function ActoPregunta({ t }: { t: number }) {
  const l = local(t, 1);
  const a = (i: number) => stagger(l, i, 5, 0.6);
  return (
    <g>
      <Velo o={1} />
      <T y={252} t="Por cada 100 tareas" size={72} fill={C.text} serif o={easeOut(a(0))} />
      <T y={332} t="que se automatizan," size={72} fill={C.text} serif o={easeOut(a(1))} />
      <T y={412} t="¿cuántas nuevas nacen?" size={72} fill={NACE} serif o={easeOut(a(2))} />

      <T y={880} t="100" x={270} size={104} fill={SE_LLEVA} anchor="middle" o={easeOut(a(3))} peso={600} />
      <T y={900} t="?" x={810} size={176} fill={NACE} anchor="middle" serif o={easeOut(a(4))} />

      <T y={1136} t="Ese número decide el saldo." size={46} fill={C.subtext1} serif o={easeOut(a(4))} />
      <T y={1188} t="Y es un número que se puede medir." size={28} fill={C.overlay2} o={easeOut(a(4))} />
    </g>
  );
}

// Lo único medido: dos tramos de la misma descomposición, el mismo estudio, el mismo país.
const MEDIDO = [
  {
    razon: 98,
    donde: "EE.UU. 1947–1987",
    autor: "Acemoglu & Restrepo (2019)",
    mec: "se automatizan −0,48 %/año · nacen +0,47 %/año",
  },
  {
    razon: 50,
    donde: "EE.UU. 1987–2017",
    autor: "Acemoglu & Restrepo (2019)",
    mec: "se automatizan −0,70 %/año · nacen +0,35 %/año",
  },
];

/** 3 · Lo medido. La lámina-tablero: el valor, su autor y el mecanismo a la vista. */
function ActoMedido({ t }: { t: number }) {
  const l = local(t, 2);
  const a = (i: number) => stagger(l, i, 4, 0.62);
  return (
    <g>
      <T y={226} t="Esa razón se ha medido" size={64} fill={C.text} serif o={easeOut(a(0))} />
      <T y={296} t="dos veces." size={64} fill={C.text} serif o={easeOut(a(0))} />

      {MEDIDO.map((m, i) => {
        const ai = easeOut(a(1 + i));
        const y = 420 + i * 300;
        const n = Math.round(m.razon * easeOut(clamp01((a(1 + i) - 0.15) / 0.85)));
        return (
          <g key={m.donde}>
            <Hairline y={y - 42} o={0.9 * ai} />
            <T y={y + 72} t={String(n)} size={92} fill={NACE} o={ai} peso={600} />
            <T y={y + 72} t="por cada 100" x={PAD + 180} size={30} fill={C.overlay2} o={ai} />
            <Marcas x={PAD} y={y + 104} n={n} color={NACE} o={ai} />
            <T y={y + 170} t={`${m.donde} · ${m.autor}`} size={27} fill={C.subtext1} o={ai} />
            <T y={y + 208} t={m.mec} size={24} fill={C.overlay2} o={ai} />
          </g>
        );
      })}

      <Hairline y={978} o={0.9 * easeOut(a(2))} />
      <T y={1072} t="Y eso es todo lo que existe." size={46} fill={C.text} serif o={easeOut(a(3))} />
      <T y={1124} t="Setenta años de un solo país, sin IA generativa." size={28} fill={C.overlay2} o={easeOut(a(3))} />
    </g>
  );
}

// Las cuatro tecnologías que se citan como análogas, y qué midió cada una. Ninguna midió la
// razón: el hueco va en la misma columna donde la lámina anterior puso un número.
const ANALOGIAS = [
  { tec: "El telar y la máquina", autor: "Ricardo, 1821", midio: ["predijo desempleo masivo:", "acertó la máquina, erró el total"] },
  { tec: "El dínamo", autor: "David, 1990", midio: ["cuatro décadas hasta que", "la productividad se movió"] },
  { tec: "La telefonista", autor: "Feigenbaum & Gross, 2024", midio: ["el total no cayó;", "las que ya estaban, sí"] },
  { tec: "El cajero automático", autor: "Bessen, 2015", midio: ["21 → 13 cajeros por sucursal,", "y el empleo de cajeros subió"] },
];

/** 4 · Las analogías. Lo que se cita como precedente mide otra cosa, y se dice cuál. */
function ActoAnalogias({ t }: { t: number }) {
  const l = local(t, 3);
  const a = (i: number) => stagger(l, i, 6, 0.64);
  return (
    <g>
      <T y={212} t="Las analogías que se citan" size={60} fill={C.text} serif o={easeOut(a(0))} />
      <T y={278} t="miden otra cosa." size={60} fill={C.text} serif o={easeOut(a(0))} />

      {ANALOGIAS.map((r, i) => {
        const ai = easeOut(a(1 + i));
        const y = 400 + i * 172;
        return (
          <g key={r.tec}>
            <Hairline y={y - 46} o={0.9 * ai} />
            {/* El guion ocupa la columna de la razón: no hay número porque no se midió. */}
            <T y={y + 28} t="—" size={56} fill={C.surface2} o={ai} />
            <T y={y + 10} t={r.tec} x={PAD + 92} size={37} fill={C.text} serif o={ai} />
            <T y={y + 46} t={r.autor} x={PAD + 92} size={23} fill={C.overlay2} o={ai} />
            <T y={y + 2} t={r.midio[0]} x={DER} size={24} fill={C.subtext1} anchor="end" o={ai} />
            <T y={y + 36} t={r.midio[1]} x={DER} size={24} fill={C.subtext1} anchor="end" o={ai} />
          </g>
        );
      })}

      <Hairline y={1042} o={0.9 * easeOut(a(4))} />
      <T y={1132} t="Ninguna midió esa razón." size={46} fill={C.text} serif o={easeOut(a(5))} />
      <T y={1184} t="Son analogías, no mediciones de este número." size={28} fill={C.overlay2} o={easeOut(a(5))} />
    </g>
  );
}

// Los tres escenarios al 2030. Son supuestos declarados, no mediciones: color azul, el de
// «lo medido» se queda en el acto anterior.
const ESCENARIOS = [
  { n: 50, nombre: "modesto", color: SUPUESTO },
  { n: 25, nombre: "sustancial", color: SUPUESTO },
  { n: 0, nombre: "extremo", color: SE_LLEVA },
];

/** 5 · El supuesto. Lo que el modelo de 2030 tiene que poner a mano, y de dónde lo saca. */
function ActoSupuesto({ t }: { t: number }) {
  const l = local(t, 4);
  const a = (i: number) => stagger(l, i, 6, 0.6);
  return (
    <g>
      <T y={212} t="El modelo que proyecta 2030" size={58} fill={C.text} serif o={easeOut(a(0))} />
      <T y={276} t="lo tiene que suponer." size={58} fill={C.text} serif o={easeOut(a(0))} />

      {ESCENARIOS.map((e, i) => {
        const ai = easeOut(a(1 + i));
        const cx = 252 + i * 288;
        const n = Math.round(e.n * easeOut(clamp01((a(1 + i) - 0.2) / 0.8)));
        return (
          <g key={e.nombre}>
            <T y={448} t={String(n)} x={cx} size={104} fill={e.color} anchor="middle" o={ai} peso={600} />
            <T y={492} t="por cada 100" x={cx} size={23} fill={C.overlay2} anchor="middle" o={ai} />
            <Bloque cx={cx} y={534} n={n} color={e.color} o={ai} />
            <T y={766} t={e.nombre} x={cx} size={27} fill={C.subtext1} anchor="middle" o={ai} />
          </g>
        );
      })}

      <Hairline y={840} o={0.9 * easeOut(a(4))} />
      <T y={908} t="Korinek, Jones y coautores (2026) declaran el supuesto, y los tres" size={27} fill={C.subtext0} o={easeOut(a(5))} />
      <T y={946} t="valores están en o por debajo de lo que dio esa historia." size={27} fill={C.subtext0} o={easeOut(a(5))} />

      <T y={1108} t="El agujero no es de ellos." size={46} fill={C.text} serif o={easeOut(a(5))} />
      <T y={1160} t="Es de la evidencia: la cifra no existe para esta tecnología." size={28} fill={C.overlay2} o={easeOut(a(5))} />
    </g>
  );
}

/** 6 · La pregunta abierta. El río vuelve sin fijarse: ahí está la pregunta. */
function ActoCierre({ t }: { t: number }) {
  const l = local(t, 5);
  const a = (i: number) => stagger(l, i, 4, 0.6);
  return (
    <g>
      <Velo o={1} />
      <T y={318} t="¿Se parece esta" size={84} fill={C.text} serif o={easeOut(a(0))} />
      <T y={406} t="revolución a esas?" size={84} fill={C.text} serif o={easeOut(a(1))} />

      <Hairline y={1000} o={0.9 * easeOut(a(2))} />
      <T y={1066} t="Nadie lo ha medido todavía." size={32} fill={C.subtext1} o={easeOut(a(2))} />
      <T y={1112} t="Y de esa respuesta depende el saldo." size={32} fill={C.subtext1} o={easeOut(a(3))} />
      <T y={1194} t="ia-economy.vercel.app" size={30} fill={NACE} o={easeOut(a(3))} />
    </g>
  );
}

const PIES = [
  "Dos efectos, un saldo.",
  "La razón entre tareas nuevas y tareas automatizadas.",
  "Acemoglu & Restrepo (2019), figuras 3 y 5.",
  "Ricardo (1821) · David (1990) · Feigenbaum & Gross (2024) · Bessen (2015).",
  "Korinek, Jones, Sacher, Cotter & McCrory (2026), sección 3.",
  "El mapa muestra los puentes ausentes. Este es uno.",
];

const ROTULOS = ["La resta", "La pregunta", "Lo medido", "Las analogías", "El supuesto", "El cierre"];

function Escena({ t }: { t: number }) {
  const actual = Math.max(0, ACTOS.findIndex((x) => t < x[1] - 0.0005));
  const i = actual === -1 ? ACTOS.length - 1 : actual;
  const al = (k: number) => actAlpha(t, ACTOS[k][0], ACTOS[k][1], FADE);

  return (
    <>
      <defs>
        {/* El velo que hace legible el tipo sobre el campo: opaco en el borde, nulo al centro. */}
        <linearGradient id="veloArriba" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.mantle} stopOpacity={0.97} />
          <stop offset="62%" stopColor={C.mantle} stopOpacity={0.86} />
          <stop offset="100%" stopColor={C.mantle} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="veloAbajo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.mantle} stopOpacity={0} />
          <stop offset="38%" stopColor={C.mantle} stopOpacity={0.86} />
          <stop offset="100%" stopColor={C.mantle} stopOpacity={0.97} />
        </linearGradient>
      </defs>

      <g opacity={al(0)}><ActoResta t={t} /></g>
      <g opacity={al(1)}><ActoPregunta t={t} /></g>
      <g opacity={al(2)}><ActoMedido t={t} /></g>
      <g opacity={al(3)}><ActoAnalogias t={t} /></g>
      <g opacity={al(4)}><ActoSupuesto t={t} /></g>
      <g opacity={al(5)}><ActoCierre t={t} /></g>

      {/* Encabezado y pie van DESPUÉS de los actos: el velo de las láminas con campo los
          tapaba, y son justo lo que le dice a una lámina suelta de dónde viene. */}
      <rect x={0} y={0} width={1080} height={124} fill={C.mantle} opacity={0.92} />
      <Rotulo y={84} t="MAPA DEL DEBATE IA Y EMPLEO" fill={C.overlay1} />
      <Rotulo y={84} t={ROTULOS[i].toUpperCase()} x={DER} fill={C.overlay0} anchor="end" />
      <Hairline y={124} color={C.surface1} />

      <rect x={0} y={1240} width={1080} height={110} fill={C.mantle} opacity={0.92} />
      <Hairline y={1240} color={C.surface1} />
      <T y={1300} t={PIES[i]} size={20} fill={C.overlay1} />
      {ACTOS.map((_, k) => (
        <rect key={k} x={DER - (ACTOS.length - 1 - k) * 20 - 9} y={1288} width={9} height={9}
          fill={k === i ? C.subtext0 : C.surface1} />
      ))}
    </>
  );
}

export const BIT_RHO: Bit = {
  slug: "rho",
  kicker: "MAPA DEL DEBATE IA Y EMPLEO",
  titulo: "La resta que decide el saldo",
  afirmacion:
    "El empleo que deja una tecnología es una resta: las tareas que se lleva menos las nuevas que crea. " +
    "La primera mitad se mide sin parar. La segunda se ha medido dos veces en la historia, las dos en el " +
    "mismo estudio y las dos en Estados Unidos, y ninguna de las dos incluye IA generativa.",
  parrafo: [
    "El saldo de empleo de una tecnología depende de dos cosas: cuántas",
    "tareas se lleva y cuántas tareas nuevas aparecen. La razón entre",
    "las dos —cuántas nacen por cada cien que se van— decide si los",
    "desplazados encuentran otra cosa que hacer. Esa razón se ha medido",
    "dos veces, y las dos en la misma descomposición de la economía",
    "estadounidense: entre 1947 y 1987 las tareas nuevas acompañaron",
    "casi exactamente a las automatizadas (98 por cada 100), y entre",
    "1987 y 2017 corrieron a la mitad (50 por cada 100).",
    "",
    "Las analogías que se citan en el debate miden otras cosas. Bessen",
    "mostró que el cajero automático redujo los cajeros por sucursal de",
    "21 a 13 y que el empleo total de cajeros siguió subiendo; eso es el",
    "empleo de una ocupación, no la razón. Feigenbaum y Gross mostraron",
    "que automatizar a las telefonistas no bajó el empleo agregado pero",
    "sí golpeó a las que ya estaban; eso es un efecto de cohorte. David",
    "mostró que el dínamo tardó cuarenta años en mover la productividad;",
    "eso es difusión. Son buenas analogías y no son mediciones de este",
    "número.",
    "",
    "Por eso el modelo de Korinek, Jones y coautores que proyecta 2030",
    "tiene que suponerla: la fija en 50, 25 y 0 por cada 100 según el",
    "escenario, apoyándose en esa misma historia de setenta años sin IA",
    "generativa. Los tres valores están en o por debajo de lo que dio la",
    "historia y los autores declaran el supuesto. El agujero no es de",
    "ellos: la cifra de la que depende el destino de los desplazados",
    "todavía no existe para esta tecnología. Los economistas la llaman ρ.",
  ],
  fuente:
    "Acemoglu & Restrepo (2019), «Automation and New Tasks», figuras 3 y 5 · Korinek, Jones, Sacher, " +
    "Cotter & McCrory (2026), sección 3 · Bessen (2015) · Feigenbaum & Gross (2024, QJE) · David (1990) · " +
    "Ricardo (1821, cap. 31)",
  nodo: "/?nodo=korinek-jones-2026-escenarios",
  duracion: 36,
  acts: ACTOS.map((at, i) => ({ at, slide: reposo(i), rotulo: ROTULOS[i] })),
  Scene: Escena,
  fondo: campoDeTareas(planCampo, { baja: SE_LLEVA, sube: NACE }),
};
