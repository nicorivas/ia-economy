#!/usr/bin/env python3
"""Marca cada estudio con la OLA tecnológica que mide. Idempotente.

    python3 aplicar-olas.py [--no-build]

POR QUÉ EXISTE. El mapa mezclaba bajo la misma etiqueta «exposición a IA» dos cosas
distintas: el aprendizaje automático predictivo de los 2010 (Webb con patentes hasta 2010,
Felten con capacidades a 2019, Frey-Osborne 2013) y los modelos generativos posteriores a
noviembre de 2022. Nada en el dataset permitía notarlo, y hay afirmaciones del sitio que se
apoyaban en las dos a la vez sin decirlo. Marcar la ola vuelve auditable esa mezcla.

REGLA DE USO: un estudio `pre-generativa` NO sostiene por sí solo una afirmación sobre IA
generativa. Entra como línea de base de la ola anterior o como contraste — y el contraste es
producto, no ruido: que en Europa 2011-2019 el empleo subiera en las ocupaciones expuestas y
después de 2022 caiga en la misma población es la mejor demostración de que la generativa
hace algo distinto.

LOS SEIS VALORES:
  generativa      evidencia sobre modelos generativos; datos desde ~nov-2022
  pre-generativa  etiquetado «IA» o automatización digital, con datos anteriores
  mixta           la muestra cruza noviembre de 2022 y no se puede separar
  historica       tecnologías de propósito general previas, usadas como analogía declarada
  teoria          modelos y marcos sin período de datos propio
  contexto        no mide IA: parámetros estructurales, política fiscal, energía, cómputo
"""
import json
import pathlib
import subprocess
import sys

D = pathlib.Path(__file__).resolve().parent
MAPA = D / "mapa.json"

OLAS = {
    # ── Generativa: modelos generativos, datos desde ~nov-2022 ────────────────────────────
    "eloundou-2023-gpts": "generativa",
    "brynjolfsson-li-raymond-2023": "generativa",
    "noy-zhang-2023": "generativa",
    "peng-copilot-2023": "generativa",
    "metr-2025": "generativa",
    "anthropic-aei-2026-primitives": "generativa",
    "anthropic-aei-2025-original": "generativa",
    "anthropic-aei-2026-cadences": "generativa",
    "openai-nber-w34255-chatgpt": "generativa",
    "ilo-gmyrek-2023": "generativa",
    "imf-cazzaniga-2024": "generativa",
    "wef-fojr-2023": "generativa",
    "wef-fojr-2025": "generativa",
    "mckinsey-econ-potential-2023": "generativa",
    "mckinsey-us-2023": "generativa",
    "autor-2024-rebuild-middle-class": "generativa",
    "citrini2026-2028-gic": "generativa",
    "kinder2026-messy-middle": "generativa",
    "hui-reshef-zhou-2024-online-labor": "generativa",
    "brynjolfsson-chandar-chen-2025-canaries": "generativa",
    "brynjolfsson-chandar-chen-2026-canaries-ago": "generativa",
    "sdel-adp-2026-canaries-dashboard": "generativa",
    "bonney-btos-2024-tracking": "generativa",
    "bonney-btos-2026-microstructure": "generativa",
    "imas-art-machine": "generativa",
    "budgetlab-yale-2025": "generativa",
    "budgetlab-yale-2026-sdid": "generativa",
    "fradkin-etal-2026-forecast": "generativa",
    "lambert-schindler-2026-broken-ladder": "generativa",
    "emanuel-harrington-pallais-2026-remote": "generativa",
    "oecd-eo-2026-jovenes": "generativa",
    "massenkoff-mccrory-2026-cps": "generativa",
    "lindenlaub-etal-2026-beyond-exposure": "generativa",
    "baldwin-2026-obs-booming": "generativa",
    # ── Pre-generativa: dice «IA» pero mide la ola anterior ───────────────────────────────
    "webb-2020-ai-labor": "pre-generativa",
    "felten-2021-aioe": "pre-generativa",
    "frey-osborne-2013-future": "pre-generativa",
    "acemoglu-restrepo-2020-robots": "pre-generativa",
    "acemoglu-restrepo-2019-newtasks": "pre-generativa",
    "acemoglu-restrepo-2022-wage-inequality": "pre-generativa",
    "autor-salomons-2018-labor-displacing": "pre-generativa",
    "autor-dorn-2013": "pre-generativa",
    "goos-manning-salomons-2014": "pre-generativa",
    "autor2015-jobs": "pre-generativa",
    "brynjolfsson2021jcurve": "pre-generativa",
    # ── Mixta: la muestra cruza noviembre de 2022 ─────────────────────────────────────────
    "bis-2026-wp1325-firmas-europeas": "mixta",
    "oecd-emo-2023": "mixta",
    "galloway2026-apocalypse-no": "mixta",
    # ── Histórica: GPTs anteriores, como analogía declarada ───────────────────────────────
    "david1990-dynamo": "historica",
    "bessen2015-tellers": "historica",
    "ricardo1821-machinery": "historica",
    "feigenbaum-gross-2024-operators": "historica",
    # ── Teoría: modelos y marcos sin período de datos propio ──────────────────────────────
    "acemoglu2024simple": "teoria",
    "korinek2024scenarios": "teoria",
    "korinek-trammell2024-growth-tai": "teoria",
    "korinek-stiglitz2019": "teoria",
    "aghion-jones-jones2019": "teoria",
    "jones2025-ai-economic-future": "teoria",
    "jones-tonetti2026": "teoria",
    "brynjolfsson2022turingtrap": "teoria",
    "bresnahan-trajtenberg1995-gpt": "teoria",
    "dwarkesh2026-economia-agi": "teoria",
    "gans-goldfarb2025-oring-automation": "teoria",
    "hall2026-politics-agi": "teoria",
    "afrouzi-etal-2026-learning-careers": "teoria",
    "guerreiro-rebelo-teles-2022-robots": "teoria",
    "costinot-werning-2023-luddism": "teoria",
    "thuemmel-2023-robots": "teoria",
    # ── Contexto: no mide IA ──────────────────────────────────────────────────────────────
    "karabarbounis-neiman2014": "contexto",
    "oberfield-raval2021": "contexto",
    "antras2004": "contexto",
    "knoblach2020": "contexto",
    "chirinko2008": "contexto",
    "lawrence2015": "contexto",
    "atkeson2020-labor-share": "contexto",
    "dickens-iwfp-2007": "contexto",
    "daly-hobijn-2014": "contexto",
    "babecky-wdn-2010": "contexto",
    "kaur-2019": "contexto",
    "bewley-1999": "contexto",
    "chetty-et-al-2011": "contexto",
    "epoch-gpu-price-perf2022": "contexto",
    "epoch-inference-prices2025": "contexto",
    "epoch-training-compute2024": "contexto",
    "epoch-training-cost2024": "contexto",
    "epoch-chip-supply2025": "contexto",
    "semianalysis-silicon2026": "contexto",
    "iea-energy-ai2025": "contexto",
    "eia-energy-gdp-share": "contexto",
    "owid-renewables-cost2025": "contexto",
    "lbnl-queued-up2024": "contexto",
    "johnson-supply-elasticity2014": "contexto",
    "berndt-wood1975": "contexto",
    "koetse-meta2008": "contexto",
    "way-farmer2022": "contexto",
    "acemoglu-manera-restrepo-2020-tax": "contexto",
    "cbo-2024-receipts": "contexto",
    "torslov-wier-zucman-2023-missing-profits": "contexto",
    "oecd-2024-gmt-eia": "contexto",
    "oecd-2026-gmt-eia": "contexto",
    "vivalt-etal-2025-guaranteed-income": "contexto",
    "jones-marinescu-2022-alaska": "contexto",
}


def main() -> None:
    m = json.loads(MAPA.read_text())
    ids = {s["id"] for s in m["studies"]}
    puestos, ya = 0, 0
    for s in m["studies"]:
        ola = OLAS.get(s["id"])
        if not ola:
            continue
        if s.get("ola") == ola:
            ya += 1
            continue
        s["ola"] = ola
        puestos += 1

    faltan = sorted(ids - set(OLAS))
    sobran = sorted(set(OLAS) - ids)

    if puestos:
        MAPA.write_text(json.dumps(m, ensure_ascii=False, indent=2) + "\n")

    print(f"~ {puestos} estudios marcados · {ya} ya estaban al día")
    if faltan:
        print(f"\n⚠ {len(faltan)} estudio(s) SIN clasificar — agrégalos al diccionario:")
        for f in faltan:
            print(f"    {f}")
    if sobran:
        print(f"\n⚠ {len(sobran)} id(s) del diccionario que ya no existen en el mapa:")
        for f in sobran:
            print(f"    {f}")
    reparto = {}
    for s in m["studies"]:
        reparto[s.get("ola", "SIN MARCAR")] = reparto.get(s.get("ola", "SIN MARCAR"), 0) + 1
    print("\nReparto:", " · ".join(f"{k} {v}" for k, v in sorted(reparto.items(), key=lambda x: -x[1])))

    if puestos and "--no-build" not in sys.argv:
        subprocess.run([sys.executable, str(D / "generar-dossier.py")], check=True)
        (D.parent / "app" / "src" / "mapa.json").write_text(MAPA.read_text())
        print("→ dossier regenerado · sincronizado a app/src/mapa.json")


if __name__ == "__main__":
    main()
