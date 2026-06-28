// Estado del Explorador serializado al hash de la URL → escenarios compartibles.
// Cada componente sincroniza SU rebanada (lee/parchea/escribe = merge, nunca sobrescribe el
// resto), y "Compartir" simplemente copia el link actual. El hash no viaja al servidor.

export function readParams(): URLSearchParams {
  if (typeof location === "undefined") return new URLSearchParams();
  return new URLSearchParams(location.hash.replace(/^#/, ""));
}

// Parchea las claves dadas en el hash (valor null/"" = borrar la clave) sin tocar las demás.
export function writeParams(patch: Record<string, string | null | undefined>) {
  if (typeof location === "undefined") return;
  const p = readParams();
  for (const [k, v] of Object.entries(patch)) {
    if (v == null || v === "") p.delete(k);
    else p.set(k, v);
  }
  const s = p.toString();
  history.replaceState(null, "", s ? `#${s}` : location.pathname + location.search);
}
