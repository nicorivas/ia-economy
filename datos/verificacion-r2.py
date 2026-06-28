#!/usr/bin/env python3
"""Aplica al mapa.json las correcciones de la verificación contra primaria (ronda 2).

Dos nodos load-bearing que hasta ahora descansaban en fuentes secundarias / resumen web
fueron verificados contra la primaria por dos agentes (2026-06-16). Ver verificacion-r2.md
para el detalle de cada cifra. One-shot, idempotente (fija valores absolutos)."""
import json
import pathlib
import subprocess

D = pathlib.Path(__file__).resolve().parent
m = json.loads((D / "mapa.json").read_text())
by_id = {s["id"]: s for s in m["studies"]}
changes = []


def set_estimate(sid: str, dim: str, value: str) -> None:
    s = by_id[sid]
    for e in s["estimates"]:
        if e["dimension"] == dim:
            if e["value"] != value:
                changes.append(f"{sid} [{dim}]:\n      «{e['value']}»\n   →  «{value}»")
            e["value"] = value
            return
    raise SystemExit(f"No encontré estimación {sid}/{dim}")


# --- Bessen (cajeros/ATM): verificado contra IMF F&D 2015 + working paper BU. ---
# La cifra escrita en la primaria es 20 (el 21 viene de Bessen hablando en EconTalk);
# el 13 cajeros/sucursal y el +43% de sucursales son la MISMA ventana 1988-2004.
set_estimate("bessen2015-tellers", "dim-labor-intensity-establishment",
             "≈20 → 13 cajeros/sucursal urbana (1988-2004)")
# El working paper de Bessen da la magnitud con datos Census/ACS: FTE, no headcount.
set_estimate("bessen2015-tellers", "dim-realized-employment-change",
             "empleo FTE de cajeros +2,0%/año desde 2000, más rápido que la fuerza laboral total")
bessen = by_id["bessen2015-tellers"]
if bessen.get("url") != "https://www.imf.org/external/pubs/ft/fandd/2015/03/bessen.htm":
    bessen["url"] = "https://www.imf.org/external/pubs/ft/fandd/2015/03/bessen.htm"
    changes.append("bessen2015-tellers: url AEI → IMF F&D (primaria)")
if "reliability_note" in bessen:
    bessen.pop("reliability_note")
    changes.append("bessen2015-tellers: reliability_note eliminada (verificado contra primaria)")

# --- Anthropic Economic Index, enero 2026: verificado contra el PDF primario. ---
set_estimate("anthropic-aei-2026-primitives", "dim-productivity-implicit-sigma",
             "baseline 1.8→1.2 pp/año (Claude.ai; 1.0 API), ajustado por éxito; "
             "banda σ pre-éxito: 0.7-0.9 (σ=0.5) · 2.2-2.6 (σ=1.5); σ=1 reproduce 1.8")
# Corrección de comparador: el +5/-4pp es vs agosto-2025, no vs el reporte original;
# y el original fue 56/41 de enero-2025, no 57/43 de febrero.
set_estimate("anthropic-aei-2026-primitives", "dim-collaboration-mode",
             "52% augment / 45% automate (nov-2025); el +5/-4pp es vs ago-2025, "
             "no vs el 56/41 original de ene-2025")
set_estimate("anthropic-aei-2026-primitives", "dim-task-success-rate",
             "70%→66% por complejidad-educativa (Claude.ai); ~60%→45% por duración (API)")
set_estimate("anthropic-aei-2026-primitives", "dim-task-exposure",
             "49% de empleos con uso en ≥25% de sus tareas (acumulado); vs 36% en el AEI previo")

# --- Anthropic Economic Index, feb-2025 (nodo original): la cifra correcta es 56/41. ---
set_estimate("anthropic-aei-2025-original", "dim-collaboration-mode",
             "56% augment / 41% automate (datos ene-2025)")

(D / "mapa.json").write_text(json.dumps(m, ensure_ascii=False, indent=2))
print("Verificación r2 aplicada a mapa.json:\n")
for ch in changes:
    print("  -", ch)
if not changes:
    print("  (sin cambios — ya estaba aplicado)")

# Regenerar dossier + sincronizar a la app (igual que agregar-nodo.py).
subprocess.run(["python3", str(D / "generar-dossier.py")], check=True)
(D.parent / "app" / "src" / "mapa.json").write_text((D / "mapa.json").read_text())
print("\n→ dossier regenerado · sincronizado a app/src/mapa.json")
