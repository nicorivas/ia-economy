import { useState } from "react";
import type { ReactNode } from "react";

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

// Sección colapsable (acordeón). Colapsada muestra el encabezado + un resumen de lo más
// importante; al hacer clic (o en el botón ▸ de la derecha) se despliega con una animación
// rápida y las demás bajan. `always` se muestra en ambos estados (p.ej. los KPI principales).
export function Section({
  title,
  summary,
  always,
  defaultOpen = false,
  className,
  children,
}: {
  title: ReactNode;
  summary?: ReactNode;
  always?: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className={cx("acc", open && "open", className)}>
      <button className="acc-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="acc-title">{title}</span>
        {!open && summary != null && <span className="acc-summary">{summary}</span>}
        <span className="acc-chev" aria-hidden="true" />
      </button>
      {always}
      <div className="acc-body">
        <div className="acc-body-inner">
          <div className="acc-pad">{children}</div>
        </div>
      </div>
    </section>
  );
}
