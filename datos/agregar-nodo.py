#!/usr/bin/env python3
"""Agrega nodos al mapa desde un spec JSON (reemplaza los scripts one-off por nodo).

    python3 agregar-nodo.py nodos/<algo>.json [--no-build]

El spec es JSON con cualquiera de estas claves (todas opcionales, mismas formas que
mapa.json): studies, study_hypothesis_edges, hypotheses, dimensions, conversions.
Cada item se mergea por 'id' (las aristas por la tripleta), de forma idempotente.
Valida referencias cruzadas y avisa de lo dudoso. Por defecto regenera el dossier y
sincroniza la app; --no-build lo omite."""
import json
import sys
import subprocess
import pathlib

D = pathlib.Path(__file__).resolve().parent  # datos/
ROOT = D.parent  # ia-empleo/
MAPA = D / "mapa.json"
APP_COPY = ROOT / "app" / "src" / "mapa.json"

VALID_EDGE = {"confirma", "tensiona", "refuta", "informa", "aplica", "reencuadra"}
SINGULAR = {
    "hypotheses": "hipótesis",
    "dimensions": "dimensión",
    "conversions": "conversión",
    "studies": "estudio",
}


def norm_dim(s: str) -> str:
    return s.strip().split(" ")[0].split("(")[0]


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    flags = {a for a in sys.argv[1:] if a.startswith("--")}
    if not args:
        print("uso: agregar-nodo.py <spec.json> [--no-build]")
        sys.exit(1)

    spec = json.loads(pathlib.Path(args[0]).read_text())
    m = json.loads(MAPA.read_text())
    hyp_ids = {h["id"] for h in m["hypotheses"]}
    dim_ids = {d["id"] for d in m["dimensions"]}
    report = []

    # Nodos con id propio. El orden importa: hipótesis/dimensiones antes que estudios,
    # para que las validaciones de referencia vean lo recién agregado.
    for key in ("hypotheses", "dimensions", "conversions", "studies"):
        existing = {x["id"] for x in m.get(key, [])}
        for item in spec.get(key, []):
            if item["id"] in existing:
                report.append(f"=  {SINGULAR[key]} '{item['id']}' ya existe — omitido")
                continue
            m.setdefault(key, []).append(item)
            existing.add(item["id"])
            if key == "hypotheses":
                hyp_ids.add(item["id"])
            if key == "dimensions":
                dim_ids.add(item["id"])
            report.append(f"+  {SINGULAR[key]} '{item['id']}'")

    # Avisar de dimensiones referidas por estimaciones que no existen.
    for s in spec.get("studies", []):
        for e in s.get("estimates", []):
            nd = norm_dim(e.get("dimension", ""))
            if nd and nd not in dim_ids:
                report.append(f"   ⚠ '{s['id']}' usa dimensión desconocida '{nd}' (agrégala o revísala)")

    # Aristas estudio↔hipótesis (dedupe por la tripleta study/hyp/type).
    seen = {(x["study_id"], x["hypothesis"], x["type"]) for x in m["study_hypothesis_edges"]}
    for e in spec.get("study_hypothesis_edges", []):
        k = (e["study_id"], e["hypothesis"], e["type"])
        if e["type"] not in VALID_EDGE:
            report.append(f"   ⚠ tipo de arista raro '{e['type']}' ({e['study_id']}→{e['hypothesis']})")
        if e["hypothesis"] not in hyp_ids:
            report.append(f"   ✗ arista a hipótesis inexistente '{e['hypothesis']}' — omitida")
            continue
        if k in seen:
            report.append(f"=  arista {e['type']} {e['study_id']}→{e['hypothesis']} ya existe")
            continue
        m["study_hypothesis_edges"].append(e)
        seen.add(k)
        report.append(f"+  arista {e['type']} {e['study_id']}→{e['hypothesis']}")

    MAPA.write_text(json.dumps(m, ensure_ascii=False, indent=2))
    print("\n".join(report) or "Sin cambios.")
    print(
        f"\nMapa: {len(m['studies'])} estudios · {len(m['study_hypothesis_edges'])} aristas · "
        f"{len(m['hypotheses'])} hipótesis · {len(m['dimensions'])} dimensiones"
    )

    if "--no-build" not in flags:
        subprocess.run(["python3", str(D / "generar-dossier.py")], check=True)
        APP_COPY.write_text(MAPA.read_text())
        print(f"→ dossier regenerado · sincronizado a {APP_COPY.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
