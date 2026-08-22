#!/usr/bin/env python3
"""Normaliza la geografía de cada estimación a un código. Idempotente.

    python3 aplicar-geografia.py [--no-build]

POR QUÉ. El campo `geography` es prosa libre para el lector —53 valores distintos— y mezcla
lugares con métodos y con poblaciones: junto a «EE.UU.» y «Unión Europea» conviven «modelo»,
«online», «1.2B» y «devs OSS experimentados». Sirve para leer una ficha y no sirve para saber
de dónde viene la evidencia del mapa en conjunto, que es justo lo que hay que saber antes de
hablar de otro país.

QUÉ HACE. Agrega un campo `geo` con un código de un vocabulario cerrado, SIN tocar
`geography`: la prosa se conserva porque tiene detalle que el código pierde («panel ADP»,
«Ant Group», «zonas de commuting»). El código es el eje; la prosa es la nota.

EL VOCABULARIO incluye a propósito dos códigos que hoy tienen CERO estimaciones —`latam` y
`cl`—. Están para que el cero se vea: el mapa no tiene una sola medición latinoamericana.
"""
import json
import pathlib
import subprocess
import sys

D = pathlib.Path(__file__).resolve().parent
MAPA = D / "mapa.json"

CODIGOS = {
    "us": "Estados Unidos",
    "eu": "Europa",
    "us-eu": "Estados Unidos y Europa",
    "cn": "China",
    "multi": "panel multipaís identificable",
    "global": "global, sin desagregación por país",
    "otro": "otra geografía específica",
    "latam": "América Latina",
    "cl": "Chile",
    "na": "no es una geografía",
}

# La prosa exacta → código. Todo lo que no esté aquí queda sin clasificar y el script lo grita.
MAPEO = {
    # Estados Unidos, en todas sus formas
    "EE.UU.": "us",
    "EE.UU. (modelo calibrado)": "us",
    "EE.UU. (Alaska)": "us",
    "EE.UU. (dos estados)": "us",
    "EE.UU. (gobierno federal)": "us",
    "EE.UU. (panel ADP, firmas balanceadas desde ene-2018)": "us",
    "EE.UU. urbano": "us",
    "zonas de commuting EE.UU.": "us",
    "EE.UU. / general": "us",
    "general / EE.UU. implícito": "us",
    # Europa
    "Unión Europea": "eu",
    "16 países europeos": "eu",
    "16 países": "eu",
    "16 países de Europa Occidental": "eu",
    "~15 países europeos": "eu",
    "OCDE-UE": "eu",
    "Reino Unido / general": "eu",
    # Ambos
    "UE y EE.UU.": "us-eu",
    "Norteamérica / Europa": "us-eu",
    "meta-análisis (EE.UU./Europa)": "us-eu",
    "EE.UU. / global": "us-eu",
    # China
    "China (Ant Group)": "cn",
    # Paneles multipaís identificables
    "86 países": "multi",
    "45 economías": "multi",
    "45 economías (673M)": "multi",
    "7 países": "multi",
    "16 países desarrollados": "multi",
    "G7": "multi",
    "economías del G7": "multi",
    "OCDE": "multi",
    "OCDE (muestra)": "multi",
    "LIC / HIC": "multi",
    "mundo / por grupo de ingreso": "multi",
    "global (panel de países)": "multi",
    "global (EE.UU. = 45%)": "multi",
    # Global sin desagregación
    "global": "global",
    "global (teoría)": "global",
    "global (Claude.ai)": "global",
    "global (usuarios Claude.ai)": "global",
    "1.2B": "global",
    "1.2B empleos": "global",
    # Otra geografía concreta
    "India rural": "otro",
    "freelancers (India/Pakistán)": "otro",
    # No es geografía: método, población o vacío
    "—": "na",
    "n/a": "na",
    "mismo": "na",
    "modelo": "na",
    "online": "na",
    "general": "na",
    "varios": "na",
    "freelancers": "na",
    "devs OSS experimentados": "na",
    "«vacío»": "na",
}


def main() -> None:
    m = json.loads(MAPA.read_text())
    puestos = ya = 0
    faltan = {}
    for s in m["studies"]:
        for e in s.get("estimates", []):
            g = (e.get("geography") or "«vacío»").strip()
            cod = MAPEO.get(g)
            if not cod:
                faltan[g] = faltan.get(g, 0) + 1
                continue
            if e.get("geo") == cod:
                ya += 1
                continue
            e["geo"] = cod
            puestos += 1

    if puestos:
        MAPA.write_text(json.dumps(m, ensure_ascii=False, indent=2) + "\n")

    print(f"~ {puestos} estimaciones codificadas · {ya} ya estaban al día")
    if faltan:
        print(f"\n⚠ {len(faltan)} valor(es) de `geography` SIN mapear — agrégalos al diccionario:")
        for g, n in sorted(faltan.items(), key=lambda x: -x[1]):
            print(f"    {n:3}  {g}")

    reparto = {}
    total = 0
    for s in m["studies"]:
        for e in s.get("estimates", []):
            reparto[e.get("geo", "SIN CODIGO")] = reparto.get(e.get("geo", "SIN CODIGO"), 0) + 1
            total += 1
    print(f"\nReparto de las {total} estimaciones:")
    for k, v in sorted(reparto.items(), key=lambda x: -x[1]):
        print(f"    {v:4}  {k:9} {CODIGOS.get(k, '')}")
    for k in ("latam", "cl"):
        if k not in reparto:
            print(f"       0  {k:9} {CODIGOS[k]}  ← el mapa no tiene NINGUNA medición aquí")
    conlugar = total - reparto.get("na", 0)
    if conlugar:
        print(f"\nDe las {conlugar} estimaciones con lugar declarado, {reparto.get('us',0)} son de EE.UU. "
              f"({reparto.get('us',0)*100//conlugar}%).")

    if puestos and "--no-build" not in sys.argv:
        subprocess.run([sys.executable, str(D / "generar-dossier.py")], check=True)
        (D.parent / "app" / "src" / "mapa.json").write_text(MAPA.read_text())
        print("→ dossier regenerado · sincronizado a app/src/mapa.json")


if __name__ == "__main__":
    main()
