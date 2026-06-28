# Correcciones al mapa (post-auditoría)

Cambios aplicados a `mapa.json` el **2026-06-16**, en respuesta a los 3 flags de severidad
media del auditor anti-aire (`auditoria.json`). Aplicados por `aplicar-correcciones.py`.

1. **`cnv-robot-to-emppop`** — `from`: `dim-task-exposure` → `dim-robot-density`;
   `kind`: `established` → `hypothesized`. El regresor de Acemoglu-Restrepo 2020 es
   *densidad de robots instalados*, no exposición de tareas; y es una regresión
   reduced-form de un solo periodo (EE.UU. 1990-2007), no una identidad contable.
2. **`cnv-robot-to-wages`** — misma corrección (`from` + `kind`).
3. **`dim-robot-density`** — dimensión nueva (densidad de hardware instalado,
   robots/1000 trabajadores), distinta de la exposición técnica del trabajo.
4. **`bessen2015-tellers`** — `reliability_note` añadida: las cifras (≈21→13 cajeros,
   empleo al alza) vienen de divulgación (AEI/EconTalk), sin verificar contra la primaria
   (Bessen 2015 / IMF F&D). Caso load-bearing → verificar antes de publicar.
   No se borró el nodo: se marcó.

Los 5 flags de severidad **baja** quedan registrados en `auditoria.json` sin cambios al
dataset — son matices de glosa, no errores (ver dossier, sección Auditoría).
