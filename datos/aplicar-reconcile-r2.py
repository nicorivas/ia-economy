#!/usr/bin/env python3
"""Aplica las 12 correcciones de reconciliación (ronda 2) a nodos EXISTENTES del mapa.

No agrega estudios: corrige tres nodos cuyas cifras venían del preprint y ahora se
canonizan a la versión de registro revisada por pares, y separa dos estimaciones que
tenían una dimensión compuesta (`dim-A / dim-B`) — un smell que rompe la dispersión.
Fuente: datos/nodos/r2-reconcile-eloundou-rcts.json (verificado contra primaria por el
workflow). Los `value` se redactan tight (no se vuelca el texto verboso del verificador).
One-shot, idempotente. Ver verificacion-r2.md / dossier para el detalle. """
import json
import pathlib
import subprocess

D = pathlib.Path(__file__).resolve().parent
m = json.loads((D / "mapa.json").read_text())
by_id = {s["id"]: s for s in m["studies"]}
changes = []


def set_field(sid, field, value):
    s = by_id[sid]
    if s.get(field) != value:
        changes.append(f"{sid}.{field}: «{s.get(field)}» → «{value}»")
        s[field] = value


def split_compound(sid, compound_marker, new_estimates):
    """Reemplaza la estimación cuyo dimension == compound_marker por new_estimates."""
    s = by_id[sid]
    idx = next((i for i, e in enumerate(s["estimates"]) if e["dimension"] == compound_marker), None)
    if idx is None:
        return  # ya separada (idempotente)
    s["estimates"][idx:idx + 1] = new_estimates
    changes.append(f"{sid}: estimación compuesta «{compound_marker}» separada en "
                   + " + ".join(e["dimension"] for e in new_estimates))


# --- Eloundou "GPTs are GPTs": las cifras SOBREVIVEN intactas a la revisión por pares;
# solo se canoniza la fuente (arXiv → Science). Los value no cambian (ya correctos). ---
set_field("eloundou-2023-gpts", "url", "https://www.science.org/doi/10.1126/science.adj0998")
set_field("eloundou-2023-gpts", "venue",
          "Science 384(6702):1306-1308 (2024); preprint arXiv:2303.10130 (2023)")

# --- Noy-Zhang: canonizar a Science 2024 y separar tiempo / calidad. ---
split_compound("noy-zhang-2023", "dim-productivity-task-rct / dim-output-quality", [
    {"value": "−40% tiempo promedio (Science 2024; el WP MIT daba −37%)",
     "metric": "Tiempo en tarea de escritura profesional (RCT, 453 profesionales)",
     "dimension": "dim-productivity-task-rct"},
    {"value": "+18% calidad del output (Science 2024; el WP daba +0.45 SD — normalización distinta, no equiparar)",
     "metric": "Calidad del output evaluada (RCT)",
     "dimension": "dim-output-quality"},
])
set_field("noy-zhang-2023", "url", "https://www.science.org/doi/10.1126/science.adh2586")
set_field("noy-zhang-2023", "venue",
          "Science 381(6654):187-192 (2023), DOI 10.1126/science.adh2586; preprint MIT/SSRN id4375283")

# --- Brynjolfsson-Li-Raymond: canonizar a QJE 2025 y separar promedio / heterogeneidad. ---
split_compound("brynjolfsson-li-raymond-2023", "dim-productivity-task-rct / dim-productivity-dispersion", [
    {"value": "+15% issues resueltos/hora en promedio (QJE 2025)",
     "metric": "Productividad laboral (resoluciones/hora), DiD escalonado, 5.172 agentes de soporte",
     "dimension": "dim-productivity-task-rct"},
    {"value": "~+30% los menos calificados (+36% el quintil más bajo); ~0% los más calificados",
     "metric": "Heterogeneidad de la ganancia de productividad por habilidad",
     "dimension": "dim-productivity-dispersion"},
])
set_field("brynjolfsson-li-raymond-2023", "url", "https://academic.oup.com/qje/article/140/2/889/7990658")
set_field("brynjolfsson-li-raymond-2023", "venue",
          "Quarterly Journal of Economics 140(2):889-942 (2025), DOI 10.1093/qje/qjae044; preprint NBER WP 31161 / arXiv 2304.11771")

(D / "mapa.json").write_text(json.dumps(m, ensure_ascii=False, indent=2))
print("Reconciliación r2 aplicada a mapa.json:\n")
for ch in changes:
    print("  -", ch)
if not changes:
    print("  (sin cambios — ya estaba aplicado)")

subprocess.run(["python3", str(D / "generar-dossier.py")], check=True)
(D.parent / "app" / "src" / "mapa.json").write_text((D / "mapa.json").read_text())
print("\n→ dossier regenerado · sincronizado a app/src/mapa.json")
