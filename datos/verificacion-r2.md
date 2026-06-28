# Verificación contra primaria (ronda 2)

Cambios aplicados a `mapa.json` el **2026-06-16** por `verificacion-r2.py`. Dos nodos
*load-bearing* que descansaban en fuentes secundarias (AEI/EconTalk) o en un resumen web
fueron verificados **contra la primaria** por dos verificadores en paralelo. Cierra dos de
los `gaps` registrados en el dossier.

## 1. Bessen — cajeros bancarios / ATM (`bessen2015-tellers`)

Primarias alcanzadas: **Bessen, "Toil and Technology", IMF F&D 52(1), marzo 2015**
(<https://www.imf.org/external/pubs/ft/fandd/2015/03/bessen.htm>) y su working paper
**"How Computer Automation Affects Occupations"** (BU Law, 2015,
<https://www.bu.edu/law/files/2015/11/NewTech-2.pdf>), ambos remitiendo al libro
*Learning by Doing* (Yale UP 2015, pp. 107-9).

- **`≈21 → 13` → `≈20 → 13` (1988-2004).** La cifra **escrita** por Bessen (IMF) es
  **20**; el 21 proviene de él **hablando** en EconTalk (recogido por AEI). Se usa 20 y se
  fija el periodo.
- **Empleo de cajeros al alza → magnitud primaria:** **+2,0%/año (FTE) desde 2000**, más
  rápido que la fuerza laboral total (datos Census/ACS del working paper). Es FTE, no
  headcount bruto.
- El **+43% de sucursales urbanas** y el **13 cajeros/sucursal** son la **misma ventana
  1988-2004**, no dos periodos distintos (la aritmética del mecanismo es coherente).
- **URL** del nodo: AEI → IMF F&D (primaria). **`reliability_note` eliminada**: el caso
  queda verificado y *más sólido* — la tesis "automatizar una tarea puede coexistir con más
  empleo ocupacional" está respaldada por la primaria del propio Bessen.

## 2. Anthropic Economic Index, enero 2026 (`anthropic-aei-2026-primitives`)

Primaria: el **PDF oficial del reporte** (publicado 2026-01-15, datos de noviembre 2025),
leído por número de línea. Verificado contra el post y el PDF de respaldo.

- **Productividad implícita 1.8→1.2 pp/año** confirmada — pero es **solo Claude.ai**; con
  tráfico **API el ajuste por éxito da 1.0**. Añadido.
- **Banda σ** (0.7-0.9 a σ=0.5; 2.2-2.6 a σ=1.5) confirmada — rotulada **pre-ajuste de
  éxito** (es una corrección distinta de la del baseline) y se anota que **σ=1 reproduce el
  1.8**.
- **52/45 augment/automate** (nov-2025) confirmado, pero el **comparador estaba mal**: el
  original era **56/41 de enero-2025** (no 57/43 de febrero), y el **+5/-4pp se mide vs
  agosto-2025, no vs el reporte original** (52% < 56%: encadenarlo al original engañaría).
- **Tasas de éxito** confirmadas, con la fuente rotulada: educación = **Claude.ai**,
  duración = **API** (son dos datasets distintos).
- **49% de empleos con ≥25% de tareas** confirmado; es **acumulado** ("combining across
  reports") y mide *aparición*, no impacto efectivo. El "feb 2025" del 36% era atribución
  nuestra (el reporte no lo fecha) → suavizado a "el AEI previo".

## 3. Anthropic Economic Index, feb-2025 (`anthropic-aei-2025-original`)

- **`57% augment / 43% automate` → `56% / 41%` (datos ene-2025).** La cifra correcta del
  reporte original, confirmada por la cita textual del reporte de enero 2026.

---

## 4. Integración de fuentes nuevas (workflow de 6 lectores + 6 verificadores)

El mismo 2026-06-16, un workflow multiagente leyó e integró las fuentes pendientes (un lector
por fuente contra primaria → un verificador adversarial). Specs en `datos/nodos/r2-*.json`;
integrados con `agregar-nodo.py` (adiciones) y `aplicar-reconcile-r2.py` (correcciones).
**Mapa: 38 → 44 estudios · 87 → 117 aristas.** Todos los specs con confianza "alta".

**Nuevos estudios (6):**
- **Autor & Salomons 2018** (BPEA) — automatización (TFP) → empleo y participación del trabajo:
  empleo neto agregado *positivo* pese a desplazamiento own-industry; participación del trabajo
  *negativa* y crecientemente (−0.34, IV de patentes −0.35). Llena con número el puente
  productividad→empleo (que la literatura deja de signo ambiguo).
- **Acemoglu & Restrepo 2022** (Econometrica) — la pieza salarial: ~50-70% del cambio en la
  estructura salarial de EE.UU. 1980-2016 por desplazamiento de tareas.
- **Hui, Reshef & Zhou 2024** (Upwork) — empleo *realizado*: −2.1% trabajos / −5.2% ingresos en
  freelancers de escritura tras ChatGPT. (El verificador corrigió las cifras de imagen que el
  lector había sacado de una versión previa: −3.7%/−9.4% → −2.1%/−5.2%.)
- **Brynjolfsson, Chandar & Chen 2025** ("Canaries", nómina ADP) — empleo realizado *con
  dirección*: −16% relativo en jóvenes 22-25 de ocupaciones expuestas; mayores y ocupaciones
  menos expuestas planos/al alza.
- **Bonney et al., BTOS 2024 y 2026** (US Census) — adopción de IA a nivel firma (3.7%→5.4%→~6.6%
  en 2024; 18-32% en 2026), poblando el puente adopción→demanda laboral.

**El verificador adversarial ganó su sueldo:** además de las cifras de imagen de Upwork, refutó
un "relato de versiones" inventado en el reconciliador (un supuesto arXiv v2 con cifras
distintas que no existía) y bajó varias aristas sobre-afirmadas (confirma → informa).

## 5. Reconciliación de nodos existentes a su versión de registro

`aplicar-reconcile-r2.py` (12 correcciones):
- **Eloundou "GPTs are GPTs"**: cifras (80%/19%; 15%→47-56%) *sobreviven intactas* la revisión por
  pares; url/venue → Science 2024.
- **Noy-Zhang**: canonizado a Science 2024 (−40% tiempo, no −37% del WP; +18% calidad, no +0.45 SD —
  normalizaciones distintas, no equiparar); venue corregido (estaba con volumen/número errados).
- **Brynjolfsson-Li-Raymond**: canonizado a QJE 2025 (+15% promedio; ~+30% menos calificados /
  +36% quintil inferior; ~0% más calificados).
- Se separaron las **estimaciones con dimensión compuesta** (`dim-A / dim-B`) de Noy-Zhang y
  Brynjolfsson en estimaciones simples (el compuesto rompe la vista de dispersión).

## 6. Higiene de integridad (problemas PRE-EXISTENTES hallados, no de esta ronda)

`aplicar-limpieza-r2.py`: 3 aristas apuntaban a hipótesis inexistentes (no renderizaban) →
remapeadas (`hyp-jcurve-mismeasurement`→`hyp-gpt-lag`; `hyp-automatable-hours-overstate`→
`hyp-exposure-not-employment`). 2 dimensiones compuestas más (Acemoglu-2024, Turing-Trap)
separadas/reasignadas. **Chequeo final: 0 aristas colgando, 0 dimensiones compuestas, 0 refs rotas.**

## Decisión abierta — los "puentes ausentes"

Tres fuentes de empleo *realizado* (Upwork, Canaries, BTOS) llevan los puentes-ausentes centrales
(exposición/potencial → empleo neto) de **vacíos a poblados con señal direccional** — pero la
evidencia es temprana, correlacional y por subpoblación, **no una función validada**. Por eso las
aristas a la columna `hyp-exposure-not-employment` quedaron como `informa`/`tensiona`, no
`confirma`/`refuta`, y las conversiones siguen marcadas `absent`. Si esto debe reflejarse como un
cambio de estatus de esos puentes (toca la tesis central del mapa) es una decisión de Nico.
