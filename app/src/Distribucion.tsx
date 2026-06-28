// Capa Distribución (quién) — el primer recuadro ADITIVO, no una lente. Reparte el ΔEmpleo de la
// lente activa entre terciles de sueldo según su exposición a la IA, conservando el agregado (el
// promedio pesa lo mismo que el total). El corazón es la INVERSIÓN del gradiente: la IA se concentra
// arriba, al revés de la automatización rutinaria, que vació el medio (Autor-Dorn). La exposición IA
// es REAL (BLS OEWS × Eloundou; ver datos/realdata) — los sueldos, el empleo y las ocupaciones de
// ejemplo salen de ahí.
import { DIST_TERCILES, REAL_DIST } from "./model";
import { HELP_DISTRIBUCION } from "./help";
import type { HelpEntry } from "./help";

const signed = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}%`;
const colorOf = (n: number) =>
  n < -0.05 ? "var(--peach)" : n > 0.05 ? "var(--green)" : "var(--subtext1)";
const k = (n: number) => `$${Math.round(n / 1000)}k`;

const realByNivel = Object.fromEntries(REAL_DIST.terciles.map((t) => [t.nivel, t]));
const titles = (xs: { titulo: string }[]) => xs.slice(0, 3).map((x) => x.titulo).join(" · ");

export function Distribucion({
  empleoAgg,
  onHelp,
}: {
  empleoAgg: number;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  // Escala común para las dos barras (IA y rutina), para que la comparación de alturas sea honesta.
  const maxW = Math.max(...DIST_TERCILES.flatMap((t) => [t.ai, t.rutina]));

  return (
    <div
      className="dist"
      onMouseEnter={() => onHelp?.(HELP_DISTRIBUCION)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="dist-intro">
        Reparte el <b>Δ empleo ({signed(empleoAgg)})</b> de la lente activa entre terciles de sueldo,
        según cuánto expone la IA a cada uno. El promedio pesa lo mismo que el agregado: la capa no
        cambia el total, muestra cómo se reparte.
      </div>
      <div className="dist-rows">
        {DIST_TERCILES.map((t) => {
          const d = empleoAgg * t.ai;
          const r = realByNivel[t.key];
          return (
            <div className="dist-row" key={t.key}>
              <span className="dist-label">
                {t.label}
                {r && (
                  <span className="dist-wage">
                    {k(r.sueldo_min)}–{k(r.sueldo_max)} · {Math.round(r.empleo / 1e6)}M
                  </span>
                )}
              </span>
              <div className="dist-bars">
                <div className="dist-bar-track">
                  <span className="dist-bar ai" style={{ width: `${(t.ai / maxW) * 100}%` }} />
                </div>
                <div className="dist-bar-track">
                  <span className="dist-bar rut" style={{ width: `${(t.rutina / maxW) * 100}%` }} />
                </div>
              </div>
              <span className="dist-delta" style={{ color: colorOf(d) }}>
                {signed(d)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="dist-legend">
        <span className="dist-k ai">exposición IA</span>
        <span className="dist-k rut">automatización rutinaria (histórico)</span>
        <span className="dist-k delta">Δ empleo repartido</span>
      </div>
      <div className="dist-examples">
        <div>
          <span className="dist-ex-tag up">+ expuestas</span> {titles(REAL_DIST.mas_expuestas)}
        </div>
        <div>
          <span className="dist-ex-tag down">− expuestas</span> {titles(REAL_DIST.menos_expuestas)}
        </div>
      </div>
      <div className="dist-note">
        La IA se concentra <b>arriba</b> (la exposición sube con el sueldo); la automatización rutinaria
        vació el <b>medio</b> (Autor-Dorn). Es la primera ola que toca de lleno el trabajo cognitivo —
        ahí cambia el «para quién».
      </div>
      <div className="dist-src">
        Exposición IA: datos reales de EE.UU. — BLS OEWS (May 2021) × Eloundou et al. (2023),{" "}
        {REAL_DIST.cobertura_ocupaciones} ocupaciones · {Math.round(REAL_DIST.empleo_cubierto / 1e6)}M
        de empleo. La rutina es un contraste estilizado.
      </div>
    </div>
  );
}
