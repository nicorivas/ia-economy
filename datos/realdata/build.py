#!/usr/bin/env python3
"""Construye empleo-real.json desde datos REALES (no estudios): el terreno del empleo de EE.UU.

Cruza el empleo y sueldo por ocupación (BLS OEWS) con la exposición a la IA por ocupación
(Eloundou et al. 2023) para producir la distribución real de exposición por nivel de sueldo —
con qué se aterriza la capa Distribución, en vez de terciles estilizados. Suma series macro
de baseline (World Bank). Fuentes y método en FUENTES.md.

    python3 build.py        # lee fuentes/ → escribe empleo-real.json (acá y en app/src/)

ADVERTENCIA ANTI-AIRE: estos datos describen el TERRENO (quién está expuesto, dónde está el
empleo), NO el efecto causal de la IA. Exposición ≠ daño neto.
"""
import csv
import json
import statistics as st
from collections import defaultdict
from datetime import datetime
from pathlib import Path

D = Path(__file__).resolve().parent
SRC = D / "fuentes"
ROOT = D.parent.parent  # ia-empleo/
APP = ROOT / "app" / "src" / "empleo-real.json"
OUT = D / "empleo-real.json"


def num(s):
    s = (s or "").strip().strip('"').replace(",", "")
    if s in ("", "*", "**", "#", "~"):
        return None
    try:
        return float(s)
    except ValueError:
        return None


def load_oews():
    """Empleo + sueldo mediano por ocupación detallada (6 dígitos SOC), nacional."""
    out = {}
    with open(SRC / "oews_national_may2021.csv", encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            if r.get("O_GROUP", "").strip() != "detailed":
                continue
            emp, wage = num(r["TOT_EMP"]), num(r["A_MEDIAN"])
            if emp and wage:
                out[r["OCC_CODE"].strip()] = {"emp": emp, "wage": wage, "title": r["OCC_TITLE"].strip()}
    return out


def load_exposure():
    """Exposición β humana (LLM + herramientas) por O*NET-SOC → promediada a 6 dígitos SOC."""
    acc = defaultdict(list)
    with open(SRC / "eloundou_exposure_occ.csv", encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            soc = r["O*NET-SOC Code"].strip()[:7]  # "11-1011.00" -> "11-1011"
            b = num(r["human_rating_beta"])
            if b is not None:
                acc[soc].append(b)
    return {k: st.mean(v) for k, v in acc.items()}


def wb_series(fname):
    """Serie anual {year: value} desde el JSON de la API World Bank."""
    data = json.loads((SRC / fname).read_text())[1]
    rows = [{"year": int(o["date"]), "value": round(o["value"], 2)} for o in data if o["value"] is not None]
    return sorted(rows, key=lambda x: x["year"])


def reparto(lfpr, emppop):
    """Reparto de la población 16+ en el último año común: empleados / desempleados / fuera de la
    fuerza laboral. Es el visual que explica por qué el desempleo es bajo y a la vez solo ~60% trabaja:
    los 'fuera' (jubilados, estudiantes, cuidado, desalentados) no cuentan como desempleados."""
    lf = {x["year"]: x["value"] for x in lfpr}
    ep = {x["year"]: x["value"] for x in emppop}
    y = max(set(lf) & set(ep))
    empleados = ep[y]
    fuera = round(100 - lf[y], 1)
    desempleados = round(max(0.0, lf[y] - ep[y]), 1)
    return {"year": y, "empleados": empleados, "desempleados": desempleados, "fuera": fuera}


def labor_share_usa():
    """Participación del trabajo en el PIB (labor share), EE.UU., desde el CSV de OWID (ILO 10.4.1)."""
    rows = []
    with open(SRC / "owid_labor_share.csv", encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            if r.get("Code", "").strip() != "USA":
                continue
            val = num(list(r.values())[-1])  # última columna = el valor
            if val is not None:
                rows.append({"year": int(r["Year"]), "value": round(val, 1)})
    return sorted(rows, key=lambda x: x["year"])


def main():
    oews, expo = load_oews(), load_exposure()
    rows = [
        (soc, d["title"], d["emp"], d["wage"], expo[soc])
        for soc, d in oews.items()
        if soc in expo
    ]
    totemp = sum(r[2] for r in rows)
    gmean = sum(r[4] * r[2] for r in rows) / totemp

    # Terciles por sueldo, ponderados por empleo
    rows.sort(key=lambda r: r[3])
    bounds = [totemp / 3, 2 * totemp / 3]
    tiers, ti, cum = [[], [], []], 0, 0.0
    for r in rows:
        cum += r[2]
        while ti < 2 and cum > bounds[ti]:
            ti += 1
        tiers[ti].append(r)
    niveles = ["bajo", "medio", "alto"]
    terciles = []
    for i, T in enumerate(tiers):
        e = sum(x[2] for x in T)
        exp = sum(x[4] * x[2] for x in T) / e
        terciles.append({
            "nivel": niveles[i],
            "exposicion": round(exp, 3),
            "rel": round(exp / gmean, 3),
            "empleo": int(e),
            "sueldo_min": int(min(x[3] for x in T)),
            "sueldo_max": int(max(x[3] for x in T)),
        })

    top = sorted(rows, key=lambda r: -r[4])[:6]
    bot = sorted(rows, key=lambda r: r[4])[:6]
    occ = lambda r: {"titulo": r[1], "exposicion": round(r[4], 2), "sueldo": int(r[3]), "empleo": int(r[2])}

    out = {
        "meta": {
            "construido": datetime.now().strftime("%Y-%m-%d"),
            "fuentes": {
                "empleo": "BLS OEWS, nacional, May 2021 (espejo: openai/GPTs-are-GPTs)",
                "exposicion": "Eloundou, Manning, Mishkin & Rock (2023), «GPTs are GPTs» — rating humano β (fracción de tareas expuestas con LLM + software/herramientas)",
                "baseline": "Participación del trabajo (labor share): OWID / ILO SDG 10.4.1. Participación de la fuerza laboral y empleo/población: World Bank / ILO modelled (SL.TLF.CACT.NE.ZS, SL.EMP.TOTL.SP.NE.ZS).",
            },
            "nota": "Describe el TERRENO (quién está expuesto, dónde está el empleo), no el efecto causal de la IA. Exposición ≠ daño neto: una ocupación expuesta puede ser asistida, no reemplazada.",
        },
        "distribucion": {
            "cobertura_ocupaciones": len(rows),
            "empleo_cubierto": int(totemp),
            "empleo_total_eeuu": 140886310,
            "exposicion_global": round(gmean, 3),
            "terciles": terciles,
            "mas_expuestas": [occ(r) for r in top],
            "menos_expuestas": [occ(r) for r in bot],
        },
        "baseline": {
            # La "renta": qué tajada del INGRESO (PIB) va al trabajo. NO son personas.
            "tajada_ingreso_trabajo": labor_share_usa(),
            # Cuántas PERSONAS trabajan / buscan / están sin empleo (la cantidad).
            "fuerza_laboral": wb_series("wb_lfpr.json"),
            "empleo_poblacion": wb_series("wb_emppop.json"),
            "desempleo": wb_series("wb_unemp.json"),
            # Reparto de la población 16+ en el último año común (empleados / desempleados / fuera).
            # Hace visible por qué el desempleo es bajo y a la vez solo ~60% tiene empleo.
            "reparto_poblacion": reparto(wb_series("wb_lfpr.json"), wb_series("wb_emppop.json")),
        },
    }

    txt = json.dumps(out, ensure_ascii=False, indent=2)
    OUT.write_text(txt)
    APP.write_text(txt)
    d = out["distribucion"]
    print(f"empleo-real.json: {d['cobertura_ocupaciones']} ocupaciones · {d['empleo_cubierto']/1e6:.1f}M empleo")
    print(f"  exposición global β = {d['exposicion_global']}")
    for t in d["terciles"]:
        print(f"  {t['nivel']:6s} exp {t['exposicion']:.3f} (rel {t['rel']}) · ${t['sueldo_min']:,}–${t['sueldo_max']:,}")
    b = out["baseline"]
    rp = b["reparto_poblacion"]
    print(
        f"  baseline: tajada-ingreso {len(b['tajada_ingreso_trabajo'])}a · fuerza-laboral "
        f"{len(b['fuerza_laboral'])}a · empleo/pob {len(b['empleo_poblacion'])}a · desempleo "
        f"{len(b['desempleo'])}a"
    )
    print(f"  reparto {rp['year']}: empleados {rp['empleados']}% · desempleados {rp['desempleados']}% · fuera {rp['fuera']}%")
    print(f"→ {OUT}  +  {APP}")


if __name__ == "__main__":
    main()
