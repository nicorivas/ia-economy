#!/usr/bin/env python3
"""Ronda 3 (2026-07-08) — parches a nodos EXISTENTES (agregar-nodo.py solo agrega, no muta).

1. bonney-btos-2026-microstructure: + estimación de intensidad de sustitución (2,5%→7% "large
   number") y el caveat del QUIEBRE de la serie BTOS (cambio de redacción 17-nov-2025).
2. budgetlab-yale-2025: nota apuntando al nodo nuevo budgetlab-yale-2026-sdid (la versión
   econométrica, leída contra primaria) — el viejo era grey-lit referida de oídas.

Idempotente. Regenera dossier y sincroniza la app (como agregar-nodo.py).
"""
import json
import pathlib
import subprocess

D = pathlib.Path(__file__).resolve().parent
MAPA = D / "mapa.json"
APP_COPY = D.parent / "app" / "src" / "mapa.json"

m = json.loads(MAPA.read_text())
by_id = {s["id"]: s for s in m["studies"]}
report = []

# ── 1. BTOS: intensidad de sustitución + quiebre de serie ────────────────────────────────────
btos = by_id["bonney-btos-2026-microstructure"]
EST_ID = "intensidad de sustitución: 'large number' 2,5% → 7%"
if not any(e["value"].startswith("intensidad") for e in btos["estimates"]):
    btos["estimates"].append(
        {
            "value": "intensidad al alza: 'large number' de tareas 2,5% → 7% (small: 85% → 71%)",
            "metric": "Señal direccional NUEVA del 2º suplemento: aunque la sustitución sigue rara (~2% de firmas reduce empleo por IA), su INTENSIDAD sube — entre firmas que sustituyen tareas, las que reportan reemplazar un 'large number' pasaron de 2,5% (1er suplemento, inicios 2024) a 7%, y 'small number' cayó de 85% a 71% (Sección 5.1, Pregunta 26, Figura 16). VERIFICADO verbatim contra el executive summary del CES-WP-26-25. La redacción de ESTA pregunta no cambió entre olas (footnote 4), aunque otras del suplemento sí (footnote 29). Condicional a firmas sustituyentes (subconjunto chico). ¿Curva en J de adopción→desplazamiento o artefacto de cuestionario? La 3ª ola es el test.",
            "dimension": "dim-realized-labor-demand",
        }
    )
    report.append("+ estimación intensidad de sustitución en bonney-btos")
else:
    report.append("= estimación intensidad ya existe — omitida")

BREAK_NOTE = (
    " QUIEBRE DE SERIE (para cualquier gráfico): el Census cambió la redacción de la pregunta"
    " central de IA el 17-nov-2025 ('in producing goods or services' → 'in any of its business"
    " functions'); se observó un salto de nivel ~10%→~17% coincidente y el Census abrió una serie"
    " temporal NUEVA desde el release del 4-dic-2025 (nota metodológica 'AI Question Wording"
    " Updates', census.gov/hfp/btos). Parte del salto a 17-20% es definicional, no adopción real;"
    " corroborado por FEDS Note 3-abr-2026 y St. Louis Fed jun-2026. La serie núcleo (olas"
    " dic-2025→may-2026, Census story 26-may-2026) da uso 17-20% con fuerte gradiente por tamaño"
    " (250+ empleados: 37%; ≤4: <20%)."
)
if "QUIEBRE DE SERIE" not in btos["reliability_note"]:
    btos["reliability_note"] += BREAK_NOTE
    report.append("+ caveat de quiebre de serie en bonney-btos")
else:
    report.append("= caveat de quiebre ya existe — omitido")

# ── 2. Yale viejo → puntero al nuevo ─────────────────────────────────────────────────────────
yale = by_id["budgetlab-yale-2025"]
POINTER = (
    " SUPERADO COMO EVIDENCIA (2026-07-08): ver budgetlab-yale-2026-sdid — la versión"
    " econométrica de esta misma postura (SDID sobre CPS, 7-may-2026), leída contra primaria."
    " Este nodo queda como registro de cómo entró la postura al mapa (vía Imas, de oídas)."
)
if "SUPERADO COMO EVIDENCIA" not in yale["reliability_note"]:
    yale["reliability_note"] += POINTER
    report.append("+ puntero al nodo nuevo en budgetlab-yale-2025")
else:
    report.append("= puntero ya existe — omitido")

MAPA.write_text(json.dumps(m, ensure_ascii=False, indent=2))
print("\n".join(report))

subprocess.run(["python3", str(D / "generar-dossier.py")], check=True)
APP_COPY.write_text(MAPA.read_text())
print("→ dossier regenerado · sincronizado a app/src/mapa.json")
