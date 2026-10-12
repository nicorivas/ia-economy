// ── La misma escena, dos presentaciones ─────────────────────────────────────────────────
// Web: el marco vertical escalado por CSS, con scrubber, capítulos y la ficha de fuentes
// alrededor. Captura: solo el SVG a 1080×1350 exactos, sin cromo, con `data-listo` cuando
// las fuentes ya cargaron — así el exportador fotografía y no adivina.

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Bit } from "./tipos";
import { W, H } from "./tipos";
import "./bits.css";

/** La capa WebGL. Se dibuja en `useLayoutEffect` y no en un bucle de animación: así el canvas
 *  se pinta en el MISMO cuadro en que React actualiza el SVG, que es lo que permite al
 *  exportador fotografiar las dos capas juntas sin esperar a ciegas. */
function CapaFondo({ fondo, t }: { fondo: NonNullable<Bit["fondo"]>; t: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const motor = useRef<{ dibujar: (t: number) => void; destruir: () => void } | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    motor.current = fondo.crear(ref.current);
    return () => {
      motor.current?.destruir();
      motor.current = null;
    };
  }, [fondo]);

  useLayoutEffect(() => {
    motor.current?.dibujar(t);
  }, [t]);

  return <canvas ref={ref} width={W} height={H} className="bit-canvas" />;
}

function Lienzo({ bit, t }: { bit: Bit; t: number }) {
  return (
    <div className="bit-capas">
      {bit.fondo ? <CapaFondo fondo={bit.fondo} t={t} /> : null}
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="bit-svg" shapeRendering="crispEdges">
        <bit.Scene t={t} />
      </svg>
    </div>
  );
}

/** Modo captura: nada más que el lienzo, en píxeles exactos.
 *  Expone `window.__bitSetT`, que devuelve una promesa resuelta cuando el cuadro ya se pintó.
 *  Así el exportador avanza el tiempo sin recargar la página y sin esperar a ciegas. */
export function BitCaptura({ bit, t0 }: { bit: Bit; t0: number }) {
  const [t, setT] = useState(t0);

  useEffect(() => {
    const w = window as unknown as {
      __bitSetT?: (v: number) => Promise<void>;
      __bitMeta?: unknown;
    };
    w.__bitSetT = (v: number) =>
      new Promise<void>((res) => {
        setT(Math.max(0, Math.min(1, v)));
        requestAnimationFrame(() => requestAnimationFrame(() => res()));
      });
    w.__bitMeta = {
      slug: bit.slug,
      titulo: bit.titulo,
      duracion: bit.duracion,
      acts: bit.acts.map((a) => ({ at: a.at, slide: a.slide, rotulo: a.rotulo })),
    };
    let vivo = true;
    (async () => {
      try {
        await (document as Document & { fonts?: FontFaceSet }).fonts?.ready;
      } catch {
        /* sin API de fuentes: seguimos */
      }
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (vivo) document.documentElement.dataset.listo = "1";
        }),
      );
    })();
    return () => {
      vivo = false;
    };
  }, [bit]);

  return (
    <div className="bit-captura">
      <Lienzo bit={bit} t={t} />
    </div>
  );
}

export function BitPlayer({ bit }: { bit: Bit }) {
  const [t, setT] = useState(0);
  const [play, setPlay] = useState(true);
  const raf = useRef(0);
  const t0 = useRef(0);
  const desde = useRef(0);

  useEffect(() => {
    if (!play) return;
    t0.current = performance.now();
    desde.current = t >= 0.999 ? 0 : t;
    const paso = (now: number) => {
      const avance = (now - t0.current) / 1000 / bit.duracion;
      const nuevo = desde.current + avance;
      if (nuevo >= 1) {
        setT(1);
        setPlay(false);
        return;
      }
      setT(nuevo);
      raf.current = requestAnimationFrame(paso);
    };
    raf.current = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf.current);
    // `t` a propósito fuera: al pausar se retoma del valor actual, no se reinicia en cada cuadro.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, bit.duracion]);

  const acto = bit.acts.findIndex((a) => t < a.at[1] - 0.0005);
  const actoActual = acto === -1 ? bit.acts.length - 1 : acto;

  return (
    <div className="bit-page">
      <header className="bit-head">
        <a className="bit-back" href="/">
          ← Mapa del debate
        </a>
        <span className="bit-serie">{bit.kicker}</span>
      </header>

      <div className="bit-stage">
        <div className="bit-frame">
          <Lienzo bit={bit} t={t} />
        </div>
      </div>

      <div className="bit-controls">
        <button className="bit-btn" onClick={() => setPlay((p) => !p)} aria-label={play ? "Pausar" : "Reproducir"}>
          {play ? "❙❙" : "▶"}
        </button>
        <input
          className="bit-range"
          type="range"
          min={0}
          max={1000}
          value={Math.round(t * 1000)}
          onChange={(e) => {
            setPlay(false);
            setT(Number(e.target.value) / 1000);
          }}
          aria-label="Posición"
        />
        <button className="bit-btn bit-btn-wide" onClick={() => { setPlay(false); setT(0); }}>
          ↺
        </button>
      </div>

      <nav className="bit-caps">
        {bit.acts.map((a, i) => (
          <button
            key={i}
            className={"bit-cap" + (i === actoActual ? " on" : "")}
            onClick={() => {
              setPlay(false);
              setT(a.at[0] + 0.0005);
            }}
          >
            <span className="bit-cap-n">{i + 1}</span>
            {a.rotulo}
          </button>
        ))}
      </nav>

      <section className="bit-ficha">
        <h1 className="bit-titulo">{bit.titulo}</h1>
        <p className="bit-afirmacion">{bit.afirmacion}</p>
        {/* Nivel 2, en texto de verdad: seleccionable, buscable y legible por lectores de
            pantalla. Es el MISMO párrafo de la lámina 3, no una segunda redacción. */}
        <p className="bit-parrafo">{bit.parrafo.join(" ").replace(/\s+/g, " ").trim()}</p>
        <dl className="bit-meta">
          <dt>Fuente primaria</dt>
          <dd>{bit.fuente}</dd>
          <dt>En el mapa</dt>
          <dd>
            <a href={bit.nodo}>Ver el nodo, sus 22 aristas y las citas verificadas →</a>
          </dd>
        </dl>
        <p className="bit-nota">
          Cada cifra de esta pieza está verificada contra el reporte técnico original. El mapa
          muestra los puentes ausentes en vez de taparlos: este es uno de ellos.
        </p>
      </section>
    </div>
  );
}
