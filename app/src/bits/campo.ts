// ── El campo de tareas: la capa WebGL que va detrás del tipo ────────────────────────────
// QUÉ SE VE, en una línea: dos ríos de trazos verticales. El de la izquierda son tareas que la
// automatización se lleva, y baja; el de la derecha son tareas nuevas, y sube. La DENSIDAD del
// río derecho es el parámetro del que habla la pieza: si nacen 50 por cada 100 que se van, el
// río derecho tiene la mitad de los trazos del izquierdo. No es una ilustración del número: es
// el número, y se puede comparar de un vistazo porque los dos ríos están lado a lado.
//
// POR QUÉ UN TRAZO Y NO UN PUNTO: en una lámina suelta no hay movimiento. Un punto cuadrado se
// lee como ruido; un trazo vertical se lee como dirección, y la dirección es la mitad del
// mensaje (lo que baja se va, lo que sube nace). Cada trazo es un cuadrilátero instanciado,
// no un `gl_Point`, justamente para poder estirarlo en el eje del movimiento.
//
// POR QUÉ three.js y no SVG: son ~2.000 cuadriláteros con profundidad, atenuación por distancia
// y mezcla aditiva. En SVG eso son 2.000 nodos del DOM por cuadro y el exportador tardaría
// horas. Acá es un solo draw call instanciado.
//
// LA REGLA QUE NO SE PUEDE ROMPER: esto tiene que ser función pura de t, igual que el SVG.
// No hay integración ni estado acumulado: la posición de cada trazo se calcula desde su semilla
// y la FASE, y la fase la entrega el plan de la pieza como función de t. Si alguna vez alguien
// mete aquí un `+=` por cuadro, el exportador deja de poder fotografiar la escena: el mismo t
// daría dibujos distintos según cuántas veces se pintó antes.

import {
  AdditiveBlending,
  BufferAttribute,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Mesh,
  PerspectiveCamera,
  Scene,
  RawShaderMaterial,
  WebGLRenderer,
} from "three";
import { W, H } from "./tipos";
import type { Fondo } from "./tipos";

/** Lo que la pieza le pide al campo en un instante dado. Todo entre 0 y 1 salvo la fase. */
export type EstadoCampo = {
  /** Densidad del río que BAJA (lo que se automatiza). */
  baja: number;
  /** Densidad del río que SUBE (las tareas nuevas). Es el parámetro, hecho visible. */
  sube: number;
  /** Brillo global: 1 cuando el campo es el protagonista, ~0,15 cuando va detrás de una tabla. */
  brillo: number;
  /** Avance del flujo. Monótona en t y calculada por la pieza, nunca acumulada acá. */
  fase: number;
  /** Apertura horizontal: 1 = cada río ocupa su mitad entera del cuadro. */
  apertura: number;
};

// Pocos trazos a propósito: con mil el campo se volvía ruido y tapaba el tipo, y —lo que
// importa más— la diferencia entre «lleno» y «la mitad» dejaba de poder compararse de un
// vistazo, que es justamente lo que la pieza le pide al fondo.
const N_POR_RIO = 420;

// Ruido reproducible: la misma semilla da siempre el mismo campo, en la web y en el video.
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let z = Math.imul(a ^ (a >>> 15), 1 | a);
    z = (z + Math.imul(z ^ (z >>> 7), 61 | z)) ^ z;
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
  };
}

const VERT = /* glsl */ `
  precision highp float;

  attribute vec3 position;     // el cuadrilátero unitario, en [-0.5, 0.5]
  attribute vec3 aSemilla;     // x: desfase de fase · y: lugar en su mitad · z: profundidad
  attribute float aSube;       // 0 baja (se automatiza), 1 sube (nace)
  attribute float aRango;      // 0..1: su lugar en la fila de su río — la compuerta de densidad

  uniform mat4 modelViewMatrix, projectionMatrix;
  uniform float uBaja, uSube, uFase, uApertura;

  varying float vAlfa;
  varying float vSube;

  void main() {
    // Compuerta de densidad: un trazo existe si su rango cabe bajo la densidad pedida. Como el
    // rango está repartido uniforme y en desorden, «densidad 0,5» apaga la mitad del río
    // repartida por todo el cuadro, no una franja entera.
    float densidad = mix(uBaja, uSube, aSube);
    float vive = step(aRango, densidad);

    // Recorrido: p va de 0 a 1 y vuelve a empezar. El río izquierdo baja; el derecho sube.
    float p = fract(aSemilla.x + uFase);
    float y = mix(1.55, -1.55, p) * mix(1.0, -1.0, aSube);

    // Cada río en su mitad, con un canal al centro para que la división se vea sin dibujarla.
    float lado = mix(-1.0, 1.0, aSube);
    float x = lado * (0.07 + 0.93 * (aSemilla.y * 0.5 + 0.5)) * uApertura;
    x += 0.012 * sin(aSemilla.z * 6.2831 + uFase * 6.2831 * 2.0);

    float z = mix(-2.6, 0.3, aSemilla.z);

    // El trazo se estira en el eje del movimiento: dirección legible incluso en una foto fija.
    float escala = mix(0.45, 1.0, aSemilla.z);
    vec3 centro = vec3(x, y, z);
    vec3 offset = vec3(position.x * 0.013 * escala, position.y * 0.105 * escala, 0.0);

    vec4 mv = modelViewMatrix * vec4(centro + offset, 1.0);
    gl_Position = projectionMatrix * mv;

    // Se asoma y se va: sin esto los trazos aparecen y desaparecen de golpe en los bordes.
    float bordes = smoothstep(0.0, 0.12, p) * smoothstep(0.0, 0.12, 1.0 - p);
    vAlfa = vive * bordes * mix(0.16, 0.78, aSemilla.z);
    vSube = aSube;
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;

  uniform float uBrillo;
  uniform vec3 uColorBaja, uColorSube;

  varying float vAlfa;
  varying float vSube;

  void main() {
    // Trazo plano, sin degradado ni esquinas redondas: la estética de la casa es dura.
    vec3 color = mix(uColorBaja, uColorSube, vSube);
    gl_FragColor = vec4(color, vAlfa * uBrillo);
  }
`;

const hexAVec = (hex: string): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16) / 255,
  parseInt(hex.slice(3, 5), 16) / 255,
  parseInt(hex.slice(5, 7), 16) / 255,
];

export function campoDeTareas(
  plan: (t: number) => EstadoCampo,
  colores: { baja: string; sube: string },
): Fondo {
  return {
    crear(lienzo) {
      const renderer = new WebGLRenderer({
        canvas: lienzo,
        antialias: true,
        alpha: true,
        // Sin esto, Chrome puede descartar el búfer tras componer y la captura sale en negro.
        preserveDrawingBuffer: true,
      });
      renderer.setPixelRatio(1);
      renderer.setSize(W, H, false);
      renderer.setClearColor(0x000000, 0);

      const camara = new PerspectiveCamera(42, W / H, 0.1, 20);
      camara.position.set(0, 0, 3.1);

      const n = N_POR_RIO * 2;
      const semilla = new Float32Array(n * 3);
      const sube = new Float32Array(n);
      const rango = new Float32Array(n);
      const az = mulberry32(0x5eed);
      for (let i = 0; i < n; i++) {
        semilla[i * 3] = az();
        semilla[i * 3 + 1] = az() * 2 - 1;
        semilla[i * 3 + 2] = az();
        sube[i] = i % 2;
        rango[i] = az();
      }

      // Un cuadrilátero unitario, instanciado una vez por trazo.
      const geo = new InstancedBufferGeometry();
      geo.instanceCount = n;
      geo.setAttribute(
        "position",
        new BufferAttribute(
          new Float32Array([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0]),
          3,
        ),
      );
      geo.setIndex([0, 1, 2, 0, 2, 3]);
      geo.setAttribute("aSemilla", new InstancedBufferAttribute(semilla, 3));
      geo.setAttribute("aSube", new InstancedBufferAttribute(sube, 1));
      geo.setAttribute("aRango", new InstancedBufferAttribute(rango, 1));

      const mat = new RawShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        blending: AdditiveBlending,
        uniforms: {
          uBaja: { value: 1 },
          uSube: { value: 1 },
          uFase: { value: 0 },
          uApertura: { value: 1 },
          uBrillo: { value: 1 },
          uColorBaja: { value: hexAVec(colores.baja) },
          uColorSube: { value: hexAVec(colores.sube) },
        },
      });

      const malla = new Mesh(geo, mat);
      // La posición de cada trazo la calcula el shader, así que la esfera envolvente queda en el
      // origen con radio 0 y three descartaría la malla por «fuera de cuadro». Se apaga el corte.
      malla.frustumCulled = false;

      const escena = new Scene();
      escena.add(malla);

      return {
        dibujar(t) {
          const e = plan(t);
          mat.uniforms.uBaja.value = e.baja;
          mat.uniforms.uSube.value = e.sube;
          mat.uniforms.uFase.value = e.fase;
          mat.uniforms.uApertura.value = e.apertura;
          mat.uniforms.uBrillo.value = e.brillo;
          renderer.render(escena, camara);
        },
        destruir() {
          geo.dispose();
          mat.dispose();
          renderer.dispose();
        },
      };
    },
  };
}
