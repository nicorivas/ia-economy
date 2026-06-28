#!/usr/bin/env python3
"""Genera dossier.md (legible) a partir de mapa.json + auditoria.json.
Re-ejecutable: no editar dossier.md a mano, regenerar con este script."""
import json
import pathlib

base = pathlib.Path(__file__).resolve().parent.parent
m = json.loads((base / "datos/mapa.json").read_text())
a = json.loads((base / "datos/auditoria.json").read_text())

dims = {d["id"]: d for d in m["dimensions"]}
hyp_names = {h["id"]: h["name"] for h in m["hypotheses"]}


def dname(did):
    d = dims.get(did)
    return d["name"] if d else did


out = []
W = out.append

W("---")
W('titulo: "Mapa del debate: impacto de la IA sobre el empleo"')
W("tipo: dossier-investigacion")
W("estado: semilla")
W("publico: false")
W("---")
W("")
W("# Mapa del debate: impacto de la IA sobre el empleo")
W("")
W("> Dossier de investigación — **semilla, ronda 1, auditada**. Material de base para la "
  "plataforma interactiva y para escritura. Generado desde `datos/mapa.json`; **no editar a "
  "mano** — regenerar con `datos/generar-dossier.py`.")
W("")
W(f"**{len(m['hypotheses'])} hipótesis · {len(m['studies'])} estudios · "
  f"{len(m['dimensions'])} dimensiones · {len(m['conversions'])} conversiones · "
  f"{len(m['study_hypothesis_edges'])} aristas estudio↔hipótesis.** "
  f"Auditoría anti-aire: **{a['verdict']}**.")
W("")

# --- Tesis + puentes ausentes
absent = [c for c in m["conversions"] if c["kind"] == "absent"]
W("## La tesis: por qué esto no se lee de un titular")
W("")
W(f"El hallazgo central: **no existe función validada que lleve de la exposición técnica al "
  f"empleo neto.** Hay {len(absent)} *puentes ausentes* — pares de dimensiones que el debate "
  f"público cruza sin tener cómo:")
W("")
for c in absent:
    W(f"- **{dname(c['from'])}  ✗→  {dname(c['to'])}** — {c.get('assumptions','')}")
W("")

# --- Hallazgos
W("## Los hallazgos")
W("")
for f in m["findings"]:
    W(f"- {f}")
W("")

# --- Hipótesis con grafo
W("## Las hipótesis (con su grafo tipado)")
W("")
for h in m["hypotheses"]:
    W(f"### {h['name']}")
    W(f"`{h['id']}`")
    W("")
    W(h["statement"])
    W("")
    edges = h.get("edges", [])
    if edges:
        W("**Relaciones:**")
        for e in edges:
            W(f"- `{e['type']}` → {hyp_names.get(e['target'], e['target'])} — {e.get('why','')}")
        W("")

# --- Dimensiones y conversiones
W("## Capa de medición: dimensiones y conversiones")
W("")
W(f"{len(m['dimensions'])} dimensiones (unidades). Las conversiones entre ellas se clasifican "
  "en tres clases — y la clase es lo que separa el rigor del aire:")
W("")
for kind, label in [
    ("absent", "Ausentes — no hay puente (es un hallazgo, no se fabrica)"),
    ("hypothesized", "Hipotéticas — cargan supuestos nombrados"),
    ("established", "Establecidas — identidad / contable"),
]:
    cs = [c for c in m["conversions"] if c["kind"] == kind]
    W(f"### {label} — {len(cs)}")
    W("")
    for c in cs:
        W(f"- **{dname(c['from'])} → {dname(c['to'])}** (`{c['id']}`)")
        if c.get("params"):
            W(f"  - *params:* {c['params']}")
        if c.get("assumptions"):
            W(f"  - *supuestos:* {c['assumptions']}")
        if c.get("source"):
            W(f"  - *fuente:* {c['source']}")
    W("")
W("<details><summary>Las dimensiones, una a una</summary>")
W("")
for d in sorted(m["dimensions"], key=lambda x: x["id"]):
    W(f"- **{d['name']}** (`{d['id']}`): {d.get('definition','')}")
W("")
W("</details>")
W("")

# --- Estudios
W("## Los estudios")
W("")
edges_by_study = {}
for e in m["study_hypothesis_edges"]:
    edges_by_study.setdefault(e["study_id"], []).append(e)
for s in sorted(m["studies"], key=lambda x: str(x.get("year", ""))):
    rel = f"  ⚠ **{s['reliability_note']}**" if s.get("reliability_note") else ""
    W(f"### {s['authors']} ({s.get('year','')})")
    W(f"`{s['id']}` · {s.get('venue','')} · [fuente]({s.get('url','')}){rel}")
    W("")
    for est in s.get("estimates", []):
        W(f"- **{est.get('value','')}** — {est.get('metric','')}")
        meta = (f"  *dim:* {est.get('dimension','')} · *horizonte:* {est.get('horizon','')} · "
                f"*ámbito:* {est.get('geography','')}/{est.get('sector','')}")
        W(meta)
        if est.get("quote"):
            W(f"  > {est['quote']}")
    he = edges_by_study.get(s["id"], [])
    if he:
        W("")
        W("  *engancha:* " + "; ".join(
            f"`{e['type']}` {hyp_names.get(e['hypothesis'], e['hypothesis'])}" for e in he))
    W("")

# --- Auditoría
W("## Auditoría anti-aire")
W("")
W(f"**Veredicto: {a['verdict']}.**")
W("")
W(a["health"])
W("")
W(f"Flags ({len(a['flags'])}). Los 3 de severidad media fueron **corregidos** en el dataset "
  "(ver `datos/correcciones.md`):")
W("")
for fl in a["flags"]:
    W(f"- **[{fl['severity']}]** {fl['target']} — {fl['issue']}")
W("")

# --- Gaps
W("## Enriquecimiento pendiente — los 9 gaps de la ronda 2")
W("")
W("La ronda 2 leyó estas fuentes pero no se integró (tope de 64K en el reconciliador). "
  "Pendiente para una pasada futura, dirigida por lo que pida la visualización:")
W("")
for g in m["gaps"]:
    W(f"- {g}")
W("")

# --- Procedencia
W("## Procedencia")
W("")
W(m.get("round_summary", ""))
W("")
W("Construido por un workflow multiagente (2026-06-15/16): lectores en paralelo extraen "
  "evidencia verificada contra fuente por cluster; un reconciliador converge el mapa por rondas; "
  "un auditor escéptico caza aire. Ronda 1 completa y auditada; ronda 2 leída pero no integrada "
  "(límite de salida de 64K — arreglo conocido: que el reconciliador emita solo estructura y la "
  "tabla de estudios la ensamble el script). Números verificados contra fuente primaria por el "
  "auditor.")

(base / "dossier.md").write_text("\n".join(out) + "\n")
print(f"dossier.md generado: {len(out)} líneas, {sum(len(x) for x in out)} chars")
