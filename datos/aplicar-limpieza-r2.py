#!/usr/bin/env python3
"""Higiene de integridad hallada durante la ronda 2 (problemas PRE-EXISTENTES, no de los
nodos nuevos). One-shot, idempotente.

(a) 3 aristas apuntaban a hipótesis inexistentes (no renderizaban): se remapean al destino
    que su propio `why` y los findings del mapa indican.
(b) 2 estimaciones con dimensión compuesta (`dim-A / dim-B`), smell que rompe la dispersión:
    la numérica (Acemoglu) se separa; la cualitativa cross-dimensional (Turing Trap) se
    reasigna a su eje primario en vez de duplicarse."""
import json
import pathlib
import subprocess

D = pathlib.Path(__file__).resolve().parent
m = json.loads((D / "mapa.json").read_text())
dids = {d["id"] for d in m["dimensions"]}
hids = {h["id"] for h in m["hypotheses"]}
changes = []

# --- (a) Remapear aristas huérfanas a hipótesis válidas (dedup si el destino ya existe). ---
REMAP = {
    ("brynjolfsson2021jcurve", "hyp-jcurve-mismeasurement"): "hyp-gpt-lag",
    ("mckinsey-econ-potential-2023", "hyp-automatable-hours-overstate"): "hyp-exposure-not-employment",
    ("mckinsey-us-2023", "hyp-automatable-hours-overstate"): "hyp-exposure-not-employment",
}
seen = {(e["study_id"], e["hypothesis"], e["type"]) for e in m["study_hypothesis_edges"]}
new_edges = []
for e in m["study_hypothesis_edges"]:
    tgt = REMAP.get((e["study_id"], e["hypothesis"]))
    if not tgt:
        new_edges.append(e)
        continue
    assert tgt in hids, f"destino inválido {tgt}"
    k = (e["study_id"], tgt, e["type"])
    if k in seen:
        changes.append(f"arista {e['study_id']}→{e['hypothesis']} eliminada (ya existía hacia {tgt})")
        continue
    changes.append(f"arista {e['study_id']}: {e['hypothesis']} → {tgt}")
    e["hypothesis"] = tgt
    seen.add(k)
    new_edges.append(e)
m["study_hypothesis_edges"] = new_edges

# --- (b) Dimensiones compuestas restantes. ---
by_id = {s["id"]: s for s in m["studies"]}


def replace_estimate(sid, compound, new_estimates):
    s = by_id[sid]
    idx = next((i for i, e in enumerate(s["estimates"]) if e["dimension"] == compound), None)
    if idx is None:
        return
    for ne in new_estimates:
        assert ne["dimension"] in dids, f"dim inexistente {ne['dimension']}"
    s["estimates"][idx:idx + 1] = new_estimates
    changes.append(f"{sid}: «{compound}» → " + " + ".join(e["dimension"] for e in new_estimates))


# Acemoglu 2024: separar exposición (cantidad) de potencial/rentabilidad (otro eje).
replace_estimate("acemoglu2024simple", "dim-task-exposure / dim-automation-potential", [
    {"value": "20% de tareas expuestas",
     "metric": "Tareas expuestas a LLMs",
     "dimension": "dim-task-exposure"},
    {"value": "23% rentables de automatizar; 27% ahorro por tarea; 14.4% ahorro agregado",
     "metric": "Automatización rentable y ahorro de costo por tarea",
     "dimension": "dim-automation-potential"},
])
# Turing Trap: claim cualitativo único; reasignar al eje primario (modo de colaboración),
# no duplicar. El efecto sobre la participación queda en sus aristas a hipótesis.
tt = by_id["brynjolfsson2022turingtrap"]
for e in tt["estimates"]:
    if e["dimension"] == "dim-collaboration-mode / dim-labor-share":
        e["dimension"] = "dim-collaboration-mode"
        changes.append("brynjolfsson2022turingtrap: «dim-collaboration-mode / dim-labor-share» → dim-collaboration-mode")

(D / "mapa.json").write_text(json.dumps(m, ensure_ascii=False, indent=2))
print("Limpieza de integridad r2 aplicada:\n")
for ch in changes:
    print("  -", ch)
if not changes:
    print("  (sin cambios — ya estaba aplicado)")

subprocess.run(["python3", str(D / "generar-dossier.py")], check=True)
(D.parent / "app" / "src" / "mapa.json").write_text((D / "mapa.json").read_text())
print("\n→ dossier regenerado · sincronizado a app/src/mapa.json")
