#!/usr/bin/env python3
"""Aplica al mapa.json las 3 correcciones de severidad media del auditor anti-aire.
One-shot, idempotente. Documenta qué cambió y por qué (ver correcciones.md)."""
import json
import pathlib

D = pathlib.Path(__file__).resolve().parent
m = json.loads((D / "mapa.json").read_text())
changes = []

# --- Flags 1 y 2: las conversiones de robots colgaban de la dimensión equivocada
# y estaban marcadas 'established' siendo regresiones reduced-form de un solo periodo.
nota = ("[Corrección auditoría 2026-06-16: origen reasignado de dim-task-exposure "
        "→ dim-robot-density (el regresor de Acemoglu-Restrepo 2020 es densidad de "
        "robots instalados, no exposición de tareas); reclasificada "
        "established→hypothesized por ser regresión reduced-form de un solo "
        "periodo/tecnología.] ")
for c in m["conversions"]:
    if c["id"] in ("cnv-robot-to-emppop", "cnv-robot-to-wages"):
        old = (c.get("from"), c.get("kind"))
        c["from"] = "dim-robot-density"
        c["kind"] = "hypothesized"
        if not c.get("assumptions", "").startswith("[Corrección"):
            c["assumptions"] = nota + c.get("assumptions", "")
        changes.append(f"{c['id']}: from {old[0]}→dim-robot-density · kind {old[1]}→hypothesized")

# Crear la dimensión de densidad de robots (no existía; sí existía dim-jobs-per-robot)
if not any(d["id"] == "dim-robot-density" for d in m["dimensions"]):
    m["dimensions"].append({
        "id": "dim-robot-density",
        "name": "Densidad de robots",
        "definition": ("Robots industriales instalados por cada mil trabajadores en un "
                       "mercado laboral local (zona de commuting). Es densidad de hardware "
                       "instalado, NO susceptibilidad técnica del contenido del trabajo "
                       "(exposición). Unidad: robots/1000 trabajadores."),
    })
    changes.append("dimensions += dim-robot-density")

# --- Flag 3: el caso Bessen (load-bearing) descansa en divulgación, sin verificar primaria.
for s in m["studies"]:
    if s["id"] == "bessen2015-tellers":
        s["reliability_note"] = ("FUENTE SECUNDARIA: las cifras (≈21→13 cajeros/sucursal; "
                                 "empleo de cajeros al alza desde 2000) provienen de divulgación "
                                 "(AEI/EconTalk), NO verificadas contra la primaria (Bessen, "
                                 "'Learning by Doing', Yale UP 2015; IMF F&D 52(1) 2015). Caso "
                                 "load-bearing (invierte el signo ingenuo): verificar contra "
                                 "primaria antes de publicar.")
        changes.append("bessen2015-tellers: + reliability_note (fuente secundaria)")

(D / "mapa.json").write_text(json.dumps(m, ensure_ascii=False, indent=2))
print("Correcciones aplicadas a mapa.json:")
for ch in changes:
    print("  -", ch)
