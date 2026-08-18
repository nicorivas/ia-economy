#!/usr/bin/env python3
"""Parche a los nodos de la ronda 5 (los Estados): cómo se CITAN las instituciones.

    python3 aplicar-r5.py [--no-build]

`surname()` (app/src/data.ts) arma la cita corta a partir del campo `authors`: para una
institución devuelve su primer token, y solo la reconoce como institución si el nombre
matchea su lista. Con lo que escribió el nodo original salían citas equivocadas —
«Office 2024» para el CBO y «BEPS 2024» para la OCDE—, así que el campo se reordena para
que el primer token sea la sigla. El contenido no cambia: es cómo se lee la firma.
"""
import json
import pathlib
import subprocess
import sys

D = pathlib.Path(__file__).resolve().parent
MAPA = D / "mapa.json"

# id → nuevo campo `authors`. La sigla va primero para que la cita corta sea la sigla.
RENOMBRES = {
    "cbo-2024-receipts": "CBO (Congressional Budget Office)",
    "oecd-2024-gmt-eia": "OECD (Inclusive Framework on BEPS)",
    "oecd-2026-gmt-eia": (
        "OECD (Inclusive Framework on BEPS); análisis complementario de Felix Hugger, "
        "Pierce O'Reilly & Laura Contreras ('MNE Responses to the Global Minimum Tax', "
        "OECD Taxation Working Papers)"
    ),
}


def main() -> None:
    m = json.loads(MAPA.read_text())
    tocados = []
    for s in m["studies"]:
        nuevo = RENOMBRES.get(s["id"])
        if nuevo and s.get("authors") != nuevo:
            tocados.append(f"{s['id']}: «{s['authors'][:40]}…» → «{nuevo[:40]}…»")
            s["authors"] = nuevo
    if not tocados:
        print("= nada que cambiar (idempotente)")
        return
    MAPA.write_text(json.dumps(m, ensure_ascii=False, indent=2) + "\n")
    for t in tocados:
        print("~ " + t)
    if "--no-build" not in sys.argv:
        subprocess.run([sys.executable, str(D / "generar-dossier.py")], check=True)
        (D.parent / "app" / "src" / "mapa.json").write_text(MAPA.read_text())
        print("→ dossier regenerado · sincronizado a app/src/mapa.json")


if __name__ == "__main__":
    main()
