#!/usr/bin/env bash
# Baja las fuentes REALES a fuentes/ (regenerable). Corre build.py después.
# Nota: BLS (download.bls.gov) y FRED bloquean el fetch automático (anti-bot, devuelven challenge);
# usamos el espejo del repo de Eloundou para OEWS+exposición, y la API abierta de World Bank para
# el baseline. Ver FUENTES.md.
set -euo pipefail
cd "$(dirname "$0")/fuentes"

RAW="https://raw.githubusercontent.com/openai/GPTs-are-GPTs/main/data"
curl -fsSL "$RAW/national_May2021_dl.csv" -o oews_national_may2021.csv   # BLS OEWS May 2021 (espejo)
curl -fsSL "$RAW/occ_level.csv" -o eloundou_exposure_occ.csv             # Eloundou 2023 exposición

WB="https://api.worldbank.org/v2/country/USA/indicator"
curl -fsSL "$WB/SL.TLF.CACT.NE.ZS?format=json&date=1990:2024&per_page=100" -o wb_lfpr.json
curl -fsSL "$WB/SL.EMP.TOTL.SP.NE.ZS?format=json&date=1990:2024&per_page=100" -o wb_emppop.json
curl -fsSL "$WB/SL.UEM.TOTL.NE.ZS?format=json&date=1990:2024&per_page=100" -o wb_unemp.json

# Participación del trabajo (labor share, ILO SDG 10.4.1) — OWID (CSV con todos los países; build.py filtra USA)
curl -fsSL -A "Mozilla/5.0 (research)" 'https://ourworldindata.org/grapher/labor-share-of-gdp.csv' -o owid_labor_share.csv

echo "Fuentes bajadas a $(pwd). Ahora: python3 ../build.py"
