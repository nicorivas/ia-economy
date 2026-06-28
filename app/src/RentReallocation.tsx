// Reasignación de la renta entre factores: la tesis del árbol entero en una imagen. A un escenario
// central, el Δ de la tajada del ingreso que predice CADA modelo — trabajo, capital, y los tres
// habilitantes físicos. CAVEAT honesto (anti-aire): no es un balance contable único. Trabajo y capital
// SÍ se reparten (suman cero, modelo de tareas); energía/cómputo/tierra es presión ADICIONAL, cada una
// de un modelo aparte. Es la DIRECCIÓN del movimiento de la renta, no un reparto que cierra.
import { decompose, scopeDefaults, ENABLERS, recDecompose, HORIZON } from "./model";
import type { Vals } from "./model";
import { C } from "./chartTheme";
import { HELP_REALLOC } from "./help";
import type { HelpEntry } from "./help";

// Escenario central de referencia (la Síntesis no tiene sliders): defaults globales, 5 años.
function rows() {
  const lab = decompose("participacion", scopeDefaults("global"), HORIZON[5]).result; // pp, ≈ −1
  const out: { label: string; v: number; group: "trabajo" | "fisico" }[] = [
    { label: "Trabajo", v: lab, group: "trabajo" },
    { label: "Capital (IA)", v: -lab, group: "trabajo" },
  ];
  for (const e of ENABLERS) {
    const v: Vals = { ...e.defaults }; // cada habilitante a su centro de evidencia, mismo empuje
    out.push({ label: e.label, v: recDecompose("tajada", v, HORIZON[5], e.sP).tajadaPP, group: "fisico" });
  }
  return out;
}

export function RentReallocation({ onHelp }: { onHelp?: (e: HelpEntry | null) => void }) {
  const data = rows();
  const maxAbs = Math.max(...data.map((r) => Math.abs(r.v)), 0.01);
  const fmt = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(2)} pp`;

  return (
    <div
      className="realloc"
      onMouseEnter={() => onHelp?.(HELP_REALLOC)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="chart-title">¿Quién hereda la renta? · dirección del movimiento</div>
      <div className="rr-rows">
        {data.map((r, i) => {
          const pos = r.v >= 0;
          const w = (Math.abs(r.v) / maxAbs) * 48; // % del ancho a cada lado del cero
          return (
            <div className={`rr-row ${r.group}`} key={i}>
              <span className="rr-name">{r.label}</span>
              <div className="rr-track">
                <span className="rr-zero" />
                <span
                  className="rr-bar"
                  style={{
                    left: pos ? "50%" : `${50 - w}%`,
                    width: `${w}%`,
                    background: pos ? C.teal : C.peach,
                  }}
                />
              </div>
              <span className="rr-val">{fmt(r.v)}</span>
            </div>
          );
        })}
      </div>
      <div className="chart-cap">
        El trabajo cede tajada; el capital y los tres habilitantes físicos la ganan — la renta se muda
        de las personas a las máquinas y los átomos. <b>Ojo:</b> no es un balance que cierra. Trabajo y
        capital sí se reparten (suman cero, modelo de tareas); energía/cómputo/tierra es presión adicional
        de modelos separados, a su centro de evidencia. Es la dirección, no un reparto contable único.
      </div>
    </div>
  );
}
