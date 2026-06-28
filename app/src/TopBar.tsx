// Barra superior: título a la izquierda, iconos minimalistas a la derecha que cambian de vista.
// Inactivo = solo el icono (tenue); activo = icono + etiqueta (brillante). Tooltip en todos.
// Íconos = Lucide vía CDN (mask), igual que el chevron del acordeón — convención del repo.
export type View = "portada" | "explorador" | "sintesis" | "realidad" | "fuentes";

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

const ICONS: { key: View; label: string }[] = [
  { key: "explorador", label: "Explorar" }, // brújula
  { key: "sintesis", label: "Síntesis" }, // destello
  { key: "realidad", label: "Realidad" }, // serie / pulso
  { key: "fuentes", label: "Fuentes" }, // biblioteca
];

export function TopBar({ view, onView }: { view: View; onView: (v: View) => void }) {
  return (
    <div className="topbar">
      <button
        className="tb-title"
        onClick={() => onView("portada")}
        title="Inicio"
        aria-label="Inicio"
      >
        IA y empleo<span className="tb-sub">un mapa del debate</span>
      </button>
      <nav className="tb-nav">
        {ICONS.map((it) => (
          <button
            key={it.key}
            className={cx("tb-icon", `tb-${it.key}`, view === it.key && "sel")}
            onClick={() => onView(it.key)}
            title={it.label}
            aria-label={it.label}
            aria-current={view === it.key}
          >
            <span className="tb-ico" aria-hidden="true" />
            <span className="tb-label">{it.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
