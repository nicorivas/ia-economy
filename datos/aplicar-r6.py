#!/usr/bin/env python3
"""Parche de la ronda 6: las versiones viejas del «Canaries» apuntan a la de agosto de 2026.

    python3 aplicar-r6.py [--no-build]

El mapa registra el estado del debate, así que las afirmaciones superadas NO se borran: se
marcan, con el puntero al nodo que las revisa. Aquí hay una que importa especialmente,
porque la revisaron sus propios autores: la versión de noviembre de 2025 afirmaba que la
taxonomía de exposición no predecía nada antes de los LLMs («sin patrón pre-2022, incl.
COVID»), y la de agosto de 2026 reconoce tendencias divergentes que predatan ChatGPT,
sobre todo alrededor de la pandemia. Un estudio que se corrige a sí mismo es información
sobre el debate, no una errata que convenga tapar.

Idempotente: si el texto ya lleva la marca, no la repite.
"""
import json
import pathlib
import subprocess
import sys

D = pathlib.Path(__file__).resolve().parent
MAPA = D / "mapa.json"

NUEVO = "brynjolfsson-chandar-chen-2026-canaries-ago"

MARCA_PRETENDENCIAS = (
    " ⚠ REVISADO POR SUS PROPIOS AUTORES: la versión de agosto de 2026 del mismo estudio "
    f"({NUEVO}) reconoce que las ocupaciones más y menos expuestas SÍ muestran tendencias "
    "divergentes previas a ChatGPT, particularmente alrededor de la pandemia, y las cuantifica. "
    "La afirmación de ausencia de patrón pre-2022 quedó superada."
)

PUNTERO = (
    " ▶ VERSIÓN VIGENTE: existe una actualización con datos hasta junio de 2026 "
    f"({NUEVO}), donde la brecha «kept-pace» de los jóvenes llegó a 19%. "
    "Las cifras de este nodo corresponden a su propia versión y no son directamente "
    "comparables con esa: miden cosas distintas."
)


def marcar(obj: dict, campo: str, texto: str) -> bool:
    """Agrega `texto` al final de obj[campo] si no está ya. Devuelve si cambió algo."""
    actual = obj.get(campo) or ""
    if texto.strip()[:40] in actual:
        return False
    obj[campo] = actual + texto
    return True


def main() -> None:
    m = json.loads(MAPA.read_text())
    tocados = []

    for st in m["studies"]:
        if st["id"] == "brynjolfsson-chandar-chen-2025-canaries":
            for e in st.get("estimates", []):
                if "sin patrón pre-2022" in str(e.get("value", "")):
                    if marcar(e, "value", MARCA_PRETENDENCIAS):
                        tocados.append(f"{st['id']}: estimate de pre-tendencias marcado como revisado")
            if marcar(st, "reliability_note", PUNTERO):
                tocados.append(f"{st['id']}: puntero a la versión de agosto de 2026")
        elif st["id"] == "sdel-adp-2026-canaries-dashboard":
            if marcar(st, "reliability_note", PUNTERO):
                tocados.append(f"{st['id']}: puntero a la versión de agosto de 2026")

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
