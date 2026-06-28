#!/usr/bin/env python3
"""Separa el factor físico de la rama 'Recursos físicos' en HABILITANTES (energía/cómputo/tierra).

El motor v1 bundleaba energía+cómputo+tierra en un solo factor con una sola oferta (η) — pero sus
historias se contradicen (la energía: entrega escasa; el cómputo: FLOP barato pero empaquetado escaso;
la tierra: fija). Este patch reparte la evidencia de oferta por habilitante para que cada uno tenga su
propia calibración y su propia dispersión. Idempotente. Luego sincroniza la app.

  python3 aplicar-enablers.py
"""
import json
import pathlib
import shutil

D = pathlib.Path(__file__).resolve().parent
MAPA = D / "mapa.json"
APP_COPY = D.parent / "app" / "src" / "mapa.json"

NEW_DIMS = [
    {
        "id": "dim-oferta-energia",
        "name": "Elasticidad de la oferta de energía (entrega)",
        "definition": "Cuánto responde la electricidad firme/conectada a un alza de precio. Inelástica en el corto plazo (capacidad de generación fija, colas de interconexión de ~5 años, transformadores y turbinas escasos), más elástica a largo plazo. El costo de generación cae, pero la ENTREGA —red, energía firme donde se necesita— es el cuello.",
    },
    {
        "id": "dim-oferta-computo",
        "name": "Elasticidad de la oferta de cómputo (empaquetado de frontera)",
        "definition": "Cuánto responde la capacidad de cómputo de frontera a un alza de precio. Bimodal: el die lógico es relativamente elástico (se redirige capacidad existente pujando precio), pero el empaquetado avanzado (CoWoS) y la memoria (HBM) son el cuello duro e inelástico (fabs nuevas, lead times largos, ~90% consumido por los 4 grandes). El precio por FLOP cae; el del cuello vinculante sube.",
    },
    {
        "id": "dim-oferta-tierra",
        "name": "Elasticidad de la oferta de tierra/materia",
        "definition": "Cuánto responde la tierra/espacio/minerales para datacenters a un alza de precio. El factor genuinamente fijo (Korinek-Suh, Trammell): sin estimación econométrica limpia, inelástico por construcción en el corto plazo.",
    },
]

# Re-ruteo de estimaciones: (study_id, dim vieja) -> dim nueva
RETAG = {
    ("lbnl-queued-up2024", "dim-elasticidad-oferta-fisica"): "dim-oferta-energia",
    ("johnson-supply-elasticity2014", "dim-elasticidad-oferta-fisica"): "dim-oferta-energia",
    ("iea-energy-ai2025", "dim-elasticidad-oferta-fisica"): "dim-oferta-energia",
    ("epoch-chip-supply2025", "dim-elasticidad-oferta-fisica"): "dim-oferta-computo",
}

DROP_DIM = "dim-elasticidad-oferta-fisica"  # ya repartido por habilitante

# Estimaciones nuevas en la dim de teoría, para que las anclas de Tierra (Korinek-Suh/Trammell, ya en
# el mapa) sean miembros coherentes de dim-captura-renta-factor-fijo. Citas verbatim verificadas.
ADD_ESTIMATES = {
    "korinek2024scenarios": {
        "metric": "El factor fijo (materia/energía) es la fuente última de escasez",
        "dimension": "dim-captura-renta-factor-fijo",
        "value": "materia/energía = el factor genuinamente fijo (el cómputo es reproducible)",
        "unit": "cualitativo",
        "horizon": "largo plazo",
        "geography": "—",
        "sector": "—",
        "counterfactual": "ningún factor fijo (reparto estable)",
        "quote": "In the longer-term, matter or, equivalently, energy (E = mc^2) may be the ultimate source of scarcity",
    },
    "korinek-trammell2024-growth-tai": {
        "metric": "El dueño del factor de oferta fija recibe ~todo el producto",
        "dimension": "dim-captura-renta-factor-fijo",
        "value": "tajada del factor fijo → 1 si es complemento (ρ<0)",
        "unit": "cualitativo",
        "horizon": "largo plazo",
        "geography": "—",
        "sector": "—",
        "counterfactual": "factor fijo sustituto (tajada → 0)",
        "quote": "the resource in fixed supply constrains growth and its owners receive approximately all output",
    },
}


def main() -> None:
    m = json.loads(MAPA.read_text())
    rep = []

    # 1) dims nuevas
    have = {d["id"] for d in m["dimensions"]}
    for d in NEW_DIMS:
        if d["id"] not in have:
            m["dimensions"].append(d)
            rep.append(f"+ dim {d['id']}")

    # 2) re-tag de estimaciones
    for s in m["studies"]:
        for e in s.get("estimates", []):
            k = (s["id"], (e.get("dimension") or "").split(" ")[0])
            if k in RETAG:
                e["dimension"] = RETAG[k]
                rep.append(f"~ {s['id']}: {k[1]} → {RETAG[k]}")

    # 3) estimaciones nuevas (anclas de Tierra coherentes)
    by_id = {s["id"]: s for s in m["studies"]}
    for sid, est in ADD_ESTIMATES.items():
        s = by_id.get(sid)
        if not s:
            rep.append(f"✗ {sid} no existe — estimación omitida")
            continue
        if any(x.get("dimension") == est["dimension"] for x in s.get("estimates", [])):
            rep.append(f"= {sid} ya tiene estimación en {est['dimension']}")
            continue
        s.setdefault("estimates", []).append(est)
        rep.append(f"+ estimación {sid} → {est['dimension']}")

    # 4) quitar la dim agregada ya repartida (si quedó sin estimaciones)
    refs = {
        (e.get("dimension") or "").split(" ")[0]
        for s in m["studies"]
        for e in s.get("estimates", [])
    }
    if DROP_DIM not in refs:
        before = len(m["dimensions"])
        m["dimensions"] = [d for d in m["dimensions"] if d["id"] != DROP_DIM]
        if len(m["dimensions"]) < before:
            rep.append(f"- dim {DROP_DIM} (repartida, sin estimaciones)")
    else:
        rep.append(f"⚠ {DROP_DIM} aún referida — no se quita")

    MAPA.write_text(json.dumps(m, ensure_ascii=False, indent=2))
    shutil.copy(MAPA, APP_COPY)
    print("\n".join(rep) or "Sin cambios.")
    print(
        f"\nMapa: {len(m['studies'])} estudios · {len(m['hypotheses'])} hipótesis · "
        f"{len(m['dimensions'])} dimensiones → sincronizado a la app"
    )


if __name__ == "__main__":
    main()
