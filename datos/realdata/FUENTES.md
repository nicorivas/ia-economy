# Datos reales de empleo — fuentes y método

Datos **reales** (el terreno del empleo), distintos de los *estudios* del grafo (`mapa.json`, que son
hallazgos). Acá vive empleo y sueldo por ocupación, exposición a la IA por ocupación, y series macro
de baseline. Producto: `empleo-real.json` (lo lee la app). Reconstruir: `fetch.sh` → `build.py`.

## Fuentes

| Dato | Fuente | Vía |
|------|--------|-----|
| Empleo + sueldo por ocupación (≈800 SOC, nacional EE.UU.) | **BLS OEWS, May 2021** | espejo `openai/GPTs-are-GPTs/data/national_May2021_dl.csv` (GitHub) |
| Exposición a la IA por ocupación (rating humano β) | **Eloundou, Manning, Mishkin & Rock (2023), «GPTs are GPTs»** | `openai/GPTs-are-GPTs/data/occ_level.csv` |
| Participación laboral · empleo/población (EE.UU., anual) | **World Bank / ILO modelled** (`SL.TLF.CACT.NE.ZS`, `SL.EMP.TOTL.SP.NE.ZS`) | API abierta World Bank |

**Por qué espejos/World Bank y no BLS/FRED directo:** `download.bls.gov` y FRED bloquean el fetch
automático (protección anti-bot, devuelven una página de challenge). El OEWS May-2021 está espejado
verbatim en el repo de Eloundou (mismas columnas BLS); World Bank expone las series macro vía API
abierta. Si en el futuro hace falta OEWS más nuevo, hay que bajarlo a mano del navegador (no lo
bloquea a un humano) y dejarlo en `fuentes/`.

## Método (la exposición β)

- **β** (Eloundou) = fracción de tareas de una ocupación **expuestas** si la IA (LLM) cuenta con
  software/herramientas complementarias — el «E1+E2» del paper. Rating **humano** (no el del modelo).
- Se promedia de O\*NET-SOC (924 ocupaciones) a SOC de 6 dígitos para cruzar con OEWS.
- Cruce final: **750 ocupaciones, ~130M de empleo** (de 140,9M total EE.UU.). Terciles por sueldo
  ponderados por empleo → exposición media por tercil.

## Resultado clave (verificación de la capa Distribución)

La exposición sube monótona con el sueldo — **confirma con datos reales** la inversión que la capa
asumía con terciles estilizados:

| Tercil de sueldo | Exposición β (rel al promedio) | Estilizado previo |
|---|---|---|
| Alto ($61k–$202k) | **1.38** | 1.30 |
| Medio ($37k–$61k) | **0.98** | 1.10 |
| Bajo ($24k–$37k) | **0.62** | 0.60 |

Más expuestas: Survey Researchers, Traductores, Escritores, PR (cognitivas). Menos: lavaplatos,
cocineros, cambia-neumáticos (manuales).

## Advertencia anti-aire

Estos datos describen el **terreno** (quién está expuesto, dónde está el empleo), **no** el efecto
causal de la IA. **Exposición ≠ daño neto**: una ocupación expuesta puede ser *asistida*, no
reemplazada. La capa Distribución reparte un Δ que viene de las lentes; estos pesos solo dicen *dónde*
se concentra la exposición.

## `fuentes/` es regenerable

Los CSV/JSON crudos en `fuentes/` se rebajan con `fetch.sh`; no son la fuente de verdad, lo es el
pipeline. `empleo-real.json` es el producto versionado.
