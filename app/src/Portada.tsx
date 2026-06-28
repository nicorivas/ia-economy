// Portada / umbral: la primera pantalla. Orienta antes de soltar al recién llegado en la cabina del
// Explorador — la pregunta superior, qué es esto (un mapa del debate, no un pronóstico), las dos
// puertas de entrada, y el espíritu del proyecto (método anti-aire + abierto). Voz neutra.
import type { View } from "./TopBar";

export function Portada({ onView }: { onView: (v: View) => void }) {
  return (
    <div className="portada">
      <div className="pt-wrap">
        <div className="pt-kicker">Un mapa del debate · abierto</div>
        <h1 className="pt-q">
          Cuando la inteligencia se vuelve abundante, ¿qué queda escaso — y quién se queda con la
          renta de esa escasez?
        </h1>
        <p className="pt-lead">
          El empleo, los salarios, la participación del trabajo, la energía, el cómputo, la renta:
          este es un mapa interactivo del debate económico sobre la IA. No es un pronóstico. La
          respuesta honesta a casi todas estas preguntas es un rango que cruza el cero — y a veces
          depende del modelo tanto como de los datos. Esta herramienta deja ver exactamente eso.
        </p>

        <div className="pt-cta">
          <button className="pt-enter pt-enter-sintesis" onClick={() => onView("sintesis")}>
            <span className="pt-ico" aria-hidden="true" />
            <span className="pt-enter-txt">
              <span className="pt-enter-t">Leer la síntesis</span>
              <span className="pt-enter-d">las conclusiones, en prosa, con su evidencia</span>
            </span>
            <span className="pt-arrow" aria-hidden="true">→</span>
          </button>
          <button className="pt-enter pt-enter-explorar" onClick={() => onView("explorador")}>
            <span className="pt-ico" aria-hidden="true" />
            <span className="pt-enter-txt">
              <span className="pt-enter-t">Explorar el modelo</span>
              <span className="pt-enter-d">arma un escenario y mira qué evidencia lo sostiene</span>
            </span>
            <span className="pt-arrow" aria-hidden="true">→</span>
          </button>
        </div>

        <div className="pt-also">
          También:{" "}
          <button className="pt-link" onClick={() => onView("realidad")}>
            los datos reales
          </button>{" "}
          ·{" "}
          <button className="pt-link" onClick={() => onView("fuentes")}>
            las fuentes
          </button>
        </div>

        <div className="pt-spirit">
          <h2 className="pt-spirit-h">El espíritu</h2>
          <div className="pt-tenets">
            <div className="pt-tenet">
              <span className="pt-tenet-l">Sin aire.</span> Cada cifra se verifica contra la fuente
              primaria. Nada de números redondos inventados ni de gancho marquetero: si algo no se
              sabe, se dice.
            </div>
            <div className="pt-tenet">
              <span className="pt-tenet-l">Los supuestos, rotulados como supuestos.</span> Un sistema
              de color separa lo{" "}
              <span className="pt-dot anchored" /> anclado en evidencia, lo{" "}
              <span className="pt-dot informed" /> informado por evidencia, y lo que es un{" "}
              <span className="pt-dot assumed" /> supuesto. Nunca se disfraza uno de otro.
            </div>
            <div className="pt-tenet">
              <span className="pt-tenet-l">Lo que falta también es producto.</span> Donde no existe
              una función validada que conecte dos cosas —de «la IA puede hacer esta tarea» a «se
              pierden estos empleos»—, se muestra el puente ausente en vez de taparlo.
            </div>
            <div className="pt-tenet">
              <span className="pt-tenet-l">Abierto y auditable.</span> Los datos, el modelo y el
              código son públicos. Cualquiera puede revisarlos, corregir un dato o extender el mapa.
            </div>
          </div>
        </div>

        <div className="pt-foot">
          Iniciado por{" "}
          <a href="https://nicolasrivasabud.com/" target="_blank" rel="noreferrer">
            Nicolás Rivas
          </a>
          . Código bajo licencia MIT · textos y datos bajo CC-BY 4.0.
        </div>
      </div>
    </div>
  );
}
