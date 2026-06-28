// Mapa de fase σ×η de la rama recursos: las DOS perillas → quién captura la renta (Δ tajada).
// El resultado no es un número sino una región: a la izquierda de σ=1 (complementos) los átomos
// capturan; a la derecha (sustitutos) no; la oferta inelástica (η baja, abajo) lo intensifica. La
// esquina inferior-izquierda = corto plazo; la diagonal hacia arriba-derecha = la relajación de
// largo plazo. Custom SVG (Recharts no hace heatmap). Reacciona al habilitante activo y al escenario.
import { recDecompose, HORIZON } from "./model";
import type { Vals, EnablerCfg } from "./model";
import { studyById, surname } from "./data";
import { C } from "./chartTheme";
import { HELP_PHASEMAP } from "./help";
import type { HelpEntry } from "./help";

const NX = 30; // celdas en σ
const NY = 24; // celdas en η
// caja de dibujo (viewBox)
const X0 = 44,
  X1 = 312,
  Y0 = 12,
  Y1 = 176;

export function PhaseMap({
  cfg,
  vals,
  onHelp,
}: {
  cfg: EnablerCfg;
  vals: Vals;
  onHelp?: (e: HelpEntry | null) => void;
}) {
  const sP = cfg.params.find((p) => p.key === "sigma")!;
  const eP = cfg.params.find((p) => p.key === "eta")!;
  const sMin = sP.min,
    sMax = sP.max,
    eMin = eP.min,
    eMax = eP.max;

  const taj = (sigma: number, eta: number) =>
    recDecompose("tajada", { g: vals.g, sigma, eta }, HORIZON[5], cfg.sP).tajada;

  // grilla + máximo absoluto (normaliza el color → el mapa se ve igual muevas o no g: es la FORMA)
  const cells: { x: number; y: number; w: number; h: number; v: number }[] = [];
  let maxAbs = 0.0001;
  const cw = (X1 - X0) / NX;
  const ch = (Y1 - Y0) / NY;
  for (let j = 0; j < NY; j++) {
    for (let i = 0; i < NX; i++) {
      const sigma = sMin + ((i + 0.5) / NX) * (sMax - sMin);
      const eta = eMin + ((j + 0.5) / NY) * (eMax - eMin);
      const v = taj(sigma, eta);
      maxAbs = Math.max(maxAbs, Math.abs(v));
      cells.push({ x: X0 + i * cw, y: Y1 - (j + 1) * ch, w: cw + 0.6, h: ch + 0.6, v });
    }
  }

  const sx = (s: number) => X0 + ((s - sMin) / (sMax - sMin)) * (X1 - X0);
  const ey = (e: number) => Y1 - ((e - eMin) / (eMax - eMin)) * (Y1 - Y0);
  const color = (v: number) => (v >= 0 ? C.teal : C.peach);
  const op = (v: number) => Math.min(0.82, (Math.abs(v) / maxAbs) * 0.9);

  const sigmaCite = (id: string) => {
    const s = studyById.get(id);
    return s ? `${surname(s.authors)} '${String(s.year).slice(2)}` : id;
  };
  const dotX = sx(vals.sigma);
  const dotY = ey(vals.eta);
  const oneInRange = sMin < 1 && sMax > 1;

  return (
    <div
      className="phasemap"
      onMouseEnter={() => onHelp?.(HELP_PHASEMAP)}
      onMouseLeave={() => onHelp?.(null)}
    >
      <div className="chart-title">Mapa de fase · quién captura, según σ y η</div>
      <svg viewBox="0 0 324 196" className="phasemap-svg" preserveAspectRatio="xMidYMid meet">
        {/* heatmap */}
        {cells.map((c, k) => (
          <rect key={k} x={c.x} y={c.y} width={c.w} height={c.h} fill={color(c.v)} fillOpacity={op(c.v)} />
        ))}
        {/* marco */}
        <rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} fill="none" stroke={C.surface2} />
        {/* línea σ=1 (la frontera: tajada = 0) */}
        {oneInRange && (
          <>
            <line x1={sx(1)} y1={Y0} x2={sx(1)} y2={Y1} stroke={C.overlay2} strokeDasharray="3 3" />
            <text x={sx(1)} y={Y0 - 3} fill={C.overlay2} fontSize="8.5" textAnchor="middle">
              σ=1 · sin cambio
            </text>
          </>
        )}
        {/* anclas de σ (eje x, abajo) */}
        {sP.anchors.map((a) => (
          <g key={`s-${a.studyId}`}>
            <line x1={sx(a.at)} y1={Y1} x2={sx(a.at)} y2={Y1 + 4} stroke={C.subtext0} />
            <text x={sx(a.at)} y={Y1 + 13} fill={C.subtext0} fontSize="8" textAnchor="middle">
              {sigmaCite(a.studyId)}
            </text>
          </g>
        ))}
        {/* anclas de η (eje y, izquierda) */}
        {eP.anchors.map((a) => (
          <g key={`e-${a.studyId}`}>
            <line x1={X0 - 4} y1={ey(a.at)} x2={X0} y2={ey(a.at)} stroke={C.subtext0} />
            <text x={X0 - 6} y={ey(a.at) + 3} fill={C.subtext0} fontSize="8" textAnchor="end">
              {sigmaCite(a.studyId)}
            </text>
          </g>
        ))}
        {/* escenario actual */}
        <circle cx={dotX} cy={dotY} r={4} fill={C.mantle} stroke={C.lavender} strokeWidth={1.6} />
        <text x={dotX} y={dotY - 7} fill={C.lavender} fontSize="8.5" textAnchor="middle">
          tu escenario
        </text>
        {/* etiquetas de ejes */}
        <text x={(X0 + X1) / 2} y={193} fill={C.overlay1} fontSize="9" textAnchor="middle">
          σ — sustitución inteligencia↔{cfg.label.toLowerCase()} →
        </text>
        <text
          x={11}
          y={(Y0 + Y1) / 2}
          fill={C.overlay1}
          fontSize="9"
          textAnchor="middle"
          transform={`rotate(-90 11 ${(Y0 + Y1) / 2})`}
        >
          η — elasticidad de oferta →
        </text>
      </svg>
      <div className="phasemap-legend">
        <span className="pm-k">
          <span className="pm-sw" style={{ background: C.teal }} /> los átomos capturan (σ&lt;1)
        </span>
        <span className="pm-k">
          <span className="pm-sw" style={{ background: C.peach }} /> la inteligencia retiene (σ&gt;1)
        </span>
      </div>
      <div className="chart-cap">
        Abajo-izquierda (complementos + oferta inelástica) = el corto plazo, donde el cuello se muda a
        los átomos. La diagonal hacia arriba-derecha (sustitución + oferta elástica) = la relajación de
        largo plazo. El color es la dirección; g solo escala la magnitud.
      </div>
    </div>
  );
}
