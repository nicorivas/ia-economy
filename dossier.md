---
titulo: "Mapa del debate: impacto de la IA sobre el empleo"
tipo: dossier-investigacion
estado: semilla
publico: false
---

# Mapa del debate: impacto de la IA sobre el empleo

> Dossier de investigación — **semilla, ronda 1, auditada**. Material de base para la plataforma interactiva y para escritura. Generado desde `datos/mapa.json`; **no editar a mano** — regenerar con `datos/generar-dossier.py`.

**27 hipótesis · 80 estudios · 55 dimensiones · 35 conversiones · 164 aristas estudio↔hipótesis.** Auditoría anti-aire: **aceptable-con-reservas**.

## La tesis: por qué esto no se lee de un titular

El hallazgo central: **no existe función validada que lleve de la exposición técnica al empleo neto.** Hay 8 *puentes ausentes* — pares de dimensiones que el debate público cruza sin tener cómo:

- **Productividad/tiempo por tarea (RCT a nivel trabajador)  ✗→  Empleo: separaciones / rotación de incumbentes** — HALLAZGO: ningún RCT de este campo provee una función de productividad por-trabajador a empleo neto. Brynjolfsson observa que la atrición cayó pero NO la deriva del +15%. El puente requiere elasticidad de demanda de output y de demanda de trabajo, que ningún RCT estima. NO fabricar.
- **Exposición ocupacional  ✗→  Pronóstico de empleo neto (encuesta a empleadores)** — HALLAZGO CENTRAL: NO existe función aceptada de exposición técnica (capacidad) a conteos netos de empleo. Requiere tasa de adopción, respuesta de oferta laboral, ajuste salarial, reinstauración y creación de tareas nuevas — ninguno fijado. ILO/IMF/Frey-Osborne son cuidadosos en NO convertir exposición en pérdidas; las cifras netas de WEF vienen de un instrumento de encuesta DISTINTO. Conflarlos es el error central a evitar.
- **Exposición de tareas  ✗→  Salarios** — HALLAZGO: no existe puente directo exposición→salarios. La exposición es técnica; el efecto salarial pasa por rentabilidad, creación de nuevas tareas, σ y respuesta del capital. Tratar exposición como pérdida salarial es un error de dimensión.
- **Efecto de productividad  ✗→  Cambio en razón empleo-población** — HALLAZGO: una ganancia de productividad NO mapea a un cambio de demanda de trabajo de signo determinado. Explícito en el paper: 'la presunción de que toda tecnología aumenta la demanda agregada de trabajo solo porque sube la productividad es errónea'. El signo depende del balance desplazamiento vs productividad+reinstauración.
- **Modo de colaboración (augment vs automate)  ✗→  Pronóstico de empleo neto (encuesta a empleadores)** — HALLAZGO: el split augment/automate (57/43, luego 52/45) NO se traduce a puestos. Una tarea 'automatizada' en una conversación no es un empleo eliminado; un empleo tiene muchas tareas. Brynjolfsson da DIRECCIÓN (automatización reduce participación/poder del trabajo) pero NINGUNA función cuantitativa grado-de-automatización→Δparticipación. Puente cualitativo, no numérico.
- **Potencial de automatización  ✗→  Demanda laboral realizada (ex-post)** — HALLAZGO: sin puente. OECD documenta que alto potencial (27%) coexiste con impacto realizado 'limitado hasta ahora', condicionado por la tasa de adopción de firmas, escasez laboral y reticencia a despedir. Potencial→realizado requiere la ruta de difusión, que es empírica no derivable.
- **Cambio de participación en el empleo  ✗→  Pronóstico de empleo neto (encuesta a empleadores)** — HALLAZGO: los cambios de PARTICIPACIÓN son suma-cero entre ocupaciones y mudos sobre el nivel de empleo total. Mapear shares a conteos netos requiere un término agregado de demanda de trabajo/reinstauración (tareas nuevas, crecimiento de output) que ninguno de estos papers estima. La descomposición desplazamiento-vs-reinstauración de Acemoglu-Restrepo es el hogar conceptual del término faltante.
- **Productividad/tiempo por tarea (RCT a nivel trabajador)  ✗→  Cambio de participación en el empleo** — HALLAZGO / incomparabilidad dura: una ganancia de productividad de 14-56% en RCT no mapea a participaciones de empleo ocupacional sin supuestos de elasticidad de demanda, agregación tarea→ocupación y ajuste de equilibrio. Autor usa estos RCTs como 'prueba de concepto' de una hipótesis direccional, explícitamente NO como estimación de mercado laboral.

## Los hallazgos

- PUENTE AUSENTE CENTRAL: no existe función validada de exposición técnica (tarea/ocupación/horas) → empleo neto. Confirmado independientemente por ILO, IMF, OECD, Frey-Osborne, Felten, Eloundou, Webb y el marco Autor/Acemoglu-Restrepo. Convertir 'X% de tareas expuestas' en 'X% de empleos perdidos' es el error de dimensión más común del campo. Es la columna vertebral del mapa (cnv-exposure-to-employment-ABSENT, cnv-shareChange-to-netcount-ABSENT).
- PUENTE AUSENTE: productividad → empleo neto. Una ganancia de productividad NO mapea a un cambio de demanda de trabajo de signo determinado (Acemoglu-Restrepo lo afirman: 'la presunción de que toda tecnología aumenta la demanda de trabajo solo porque sube la productividad es errónea'). Ningún RCT de productividad (Copilot, Noy-Zhang, Brynjolfsson) construye el puente a empleo; requiere elasticidad de demanda de output, no estimada (cnv-productivity-to-employment-ABSENT, cnv-time-to-productivity ABSENT).
- PUENTE AUSENTE: modo de colaboración (augment/automate) → empleo neto. El split 57/43→52/45 es modo de interacción en conversaciones, no puestos; Brynjolfsson da DIRECCIÓN (automatización baja participación/poder) pero ninguna función cuantitativa. Una tarea 'automatizada' en una conversación no es un empleo eliminado (cnv-mode-to-employment-ABSENT).
- PUENTE AUSENTE: potencial de automatización → demanda laboral realizada. OECD documenta que 27% en alto riesgo coexiste con impacto 'limitado hasta ahora', condicionado por adopción de firmas (2-23% UE), escasez laboral e inercia. Potencial→realizado es empírico, no derivable (cnv-potential-to-realized-ABSENT).
- INCONMENSURABILIDAD DE CIFRAS-TITULAR que el público confunde rutinariamente: Frey-Osborne 47% (share de EMPLEO en alto riesgo) y Eloundou 80% (trabajadores con ≥10% de tareas expuestas) suenan paralelas pero miden cosas distintas a umbrales distintos — no apilar ni comparar. IMF ~40% (cualquier exposición) y ILO 5.5% (cola de automatización estrecha) NO son contradictorias: denominadores/definiciones distintos.
- CONTROVERSIA REAL por dirección del gradiente de exposición: Frey-Osborne hallan gradiente NEGATIVO (bajo salario más susceptible) vs Webb/Eloundou gradiente POSITIVO (alto salario más expuesto). Tensión genuina y con fuente, explicada en parte porque Frey-Osborne estudian 'computerización' amplia (incl. robots/rutina) y Webb/Eloundou estudian IA/LLM moderna. Es la bisagra entre hyp-routine-polarization y hyp-ai-targets-high-skill.
- NÚMEROS NO PROMEDIABLES SIN ETIQUETA: Acemoglu-Restrepo 2020 reporta TRES cifras de empleos/robot (-6.2 local sin comercio; -5.6 GE con comercio; -3.0 cota inferior) que difieren por supuestos de equilibrio/atribución, no de medición. Igual con la banda de productividad de Anthropic (0.7-2.6 pp/año) que varía por factor ~3 según σ, no identificado empíricamente.
- WEF 2023 vs 2025 NO es serie temporal limpia: el signo neto se invierte (-14M/-2% a +78M/+7%) pero los denominadores difieren (673M vs 1.2B) y cambió la metodología. El hallazgo robusto es 'mucha rotación (~22-23%), neto pequeño e incierto' (hyp-high-churn-small-net), no la magnitud del neto.
- CONTRADICCIÓN DE SIGNO DENTRO DE LA PRODUCTIVIDAD: no existe un 'multiplicador de productividad de IA' escalar. Copilot -55.8% tiempo y Brynjolfsson +15% (greenfield/novatos) vs METR +19% más lento (expertos en repos complejos propios). El signo depende del contexto (hyp-context-reverses-sign), y el auto-reporte invierte el signo medido (METR: +20% percibido vs -19% real).
- La descomposición desplazamiento/productividad/reinstauración (Acemoglu-Restrepo 2019) es el 'hogar conceptual del término faltante' que todos los demás puentes ausentes necesitan: la reinstauración vía nuevas tareas (~mitad del crecimiento del empleo 1980-2015) es el término positivo no recuperable desde la exposición sola.
- CASO HISTÓRICO QUE INVIERTE EL SIGNO INGENUO: Bessen/ATM-cajeros muestra que alta automatización de tareas (manejo de efectivo) coexistió con AUMENTO del empleo ocupacional, porque sucursales más baratas se multiplicaron (~21→13 cajeros/sucursal pero más sucursales). Empleo ocupacional = trabajadores/establecimiento × número de establecimientos; el segundo término es exógeno a la tecnología.
- REZAGO GPT como reconciliador macro: el efecto modesto de Acemoglu (TFP <0.66% a 10 años), la curva-J de Brynjolfsson (subestimación temprana) y el caso de la electrificación (~4 décadas al impacto) son mutuamente consistentes — los efectos agregados grandes pueden llegar con rezago vía co-invención y reorganización, de modo que la ausencia de efectos hoy es evidencia débil sobre el largo plazo.

## Las hipótesis (con su grafo tipado)

### Exposición no es empleo neto
`hyp-exposure-not-employment`

Las medidas de exposición/susceptibilidad técnica (tareas, ocupaciones, horas automatizables) cuantifican el solapamiento entre capacidad de la IA y contenido del trabajo; NO son pronósticos de pérdida neta de empleo. La exposición es direccionalmente agnóstica (puede resolverse en sustitución O en complementación) y su traducción a puestos requiere supuestos no contenidos en el índice: tasa de adopción, elasticidad de demanda del producto, tasa de reinstauración de tareas nuevas, y respuesta de oferta laboral. Tratar 'X% de tareas expuestas' como 'X% de empleos perdidos' es un error de dimensión. Es la columna vertebral del mapa: la mayoría de las controversias del campo son malentendidos de esta distinción.

**Relaciones:**
- `informa` → Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración) — La ambigüedad del signo neto (desplazamiento vs productividad+reinstauración) es la razón teórica de por qué la exposición no determina el empleo.
- `anida` → hyp-automatable-hours-overstate — El caso particular de la dimensión horas: 60-70% del tiempo automatizable no es 60-70% de empleos perdidos.
- `informa` → El potencial está limitado por la adopción y la co-invención — La adopción es uno de los términos faltantes que separan exposición de empleo realizado.

### Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración)
`hyp-task-net-ambiguous`

El efecto neto sobre demanda de trabajo de una tecnología de automatización es a priori de signo ambiguo: equivale al balance de un efecto de DESPLAZAMIENTO (el capital toma tareas, baja la demanda de trabajo) contra un efecto de PRODUCTIVIDAD más un efecto de REINSTAURACIÓN (nuevas tareas que restauran demanda de trabajo). Subir la productividad NO garantiza más demanda de trabajo (Acemoglu-Restrepo lo afirman explícitamente). Es el marco teórico canónico (basado en tareas) que da el vocabulario de descomposición a todo el resto del mapa.

**Relaciones:**
- `anida` → Polarización por sesgo anti-rutina (RBTC) — La polarización es una realización distribucional del mecanismo de balance de tareas (sustitución concentrada en tareas rutinarias/medias).
- `anida` → Reinstauración vía nuevas tareas — La reinstauración vía nuevas tareas es el mecanismo del lado positivo cuya fuerza determina el signo neto.
- `anida` → Desplazamiento domina en el periodo reciente (post-1987) — Es la instancia empírica, específica del periodo, de la tesis de neto ambiguo: afirma que el desplazamiento domina desde ~1987.

### Desplazamiento domina en el periodo reciente (post-1987)
`hyp-displacement-dominant-recent`

Desde ~1987 el efecto de desplazamiento de la automatización se aceleró (de -0.48 a -0.7%/año) mientras la reinstauración se debilitó (de +0.47 a +0.35%/año), produciendo un giro neto del contenido de tareas en contra del trabajo (-0.35%/año, ~-10% acumulado; -1.1%/año y ~-30% en manufactura) y caída de la participación del trabajo. El balance del periodo difiere estructuralmente del balance compensado de 1947-1987.

**Relaciones:**
- `activa` → Robots reducen empleo y salarios locales — Aceptar dominancia del desplazamiento reciente compromete con esperar efectos locales netos-negativos de tecnologías concretas como los robots.

### Robots reducen empleo y salarios locales
`hyp-robots-negative-local`

La adopción de robots industriales reduce causalmente la razón empleo-población y los salarios en mercados laborales locales expuestos en EE.UU.: del orden de -0.34 a -0.18 pp de empleo-población y -0.5 a -0.25% de salarios por robot adicional por mil trabajadores, con efectos negativos que sobreviven a la agregación vía comercio inter-regional (-5.6 vs -6.2 trabajadores/robot).

### Reinstauración vía nuevas tareas
`hyp-reinstatement-new-tasks`

Las nuevas tareas/ocupaciones intensivas en trabajo son el motor histórico que contrarresta la automatización: ~la mitad del crecimiento del empleo en EE.UU. (1980-2015) ocurrió en ocupaciones cuyos títulos/tareas cambiaron. Una recuperación sostenida del empleo ante la IA depende de la TASA de creación de tareas nuevas, no de las ganancias de productividad por sí solas. Es el 'término faltante' cuya ausencia hace que exposición→empleo sea un puente roto.

### Polarización por sesgo anti-rutina (RBTC)
`hyp-routine-polarization`

El cambio técnico sesgado contra tareas rutinarias (RBTC) reduce la participación en el empleo de ocupaciones de salario medio, rutina-intensivas, y eleva las de salario alto (abstractas) y bajo (manuales/servicios) — polariza la distribución ocupacional. Opera dentro de industrias (cambio de mezcla ocupacional) y entre ellas; la intensidad de tarea rutinaria (RTI) predice fuertemente la caída relativa de empleo (−0.90 pp/año por SD), y la offshorabilidad es débil/no significativa una vez controlado RTI. El modelo RBTC+offshoring explica 66-79% del cambio observado en 16 países. Mide CAMBIO DE PARTICIPACIÓN (relativo, suma-cero), no puestos netos.

**Relaciones:**
- `tensiona` → La IA expone trabajo alto-calificado (a diferencia de automatización previa) — RBTC desplazó el medio/bajo rutinario; la evidencia de que la IA expone más lo alto-calificado sugiere un patrón distinto, posiblemente compresor en vez de polarizador.

### La IA expone trabajo alto-calificado (a diferencia de automatización previa)
`hyp-ai-targets-high-skill`

A diferencia de software y robots (que desplazaron tareas rutinarias de calificación media/baja), la exposición a IA generativa/LLM se concentra en ocupaciones de alta calificación, alta educación y salario alto (Webb: pico ~percentil 90, top 1% intacto; Eloundou: empleos de mayor ingreso más expuestos). Esto podría comprimir en vez de ensanchar la desigualdad en el margen 90:10. Hay tensión genuina: Frey-Osborne hallan gradiente NEGATIVO (salarios bajos más susceptibles) por estudiar 'computerización' amplia, no IA moderna.

**Relaciones:**
- `activa` → Nivelación de habilidades (la IA comprime la distribución de productividad) — Si la IA toca lo alto-calificado y nivela hacia arriba a los novatos, ambos describen compresión de la distribución de habilidad.

### Nivelación de habilidades (la IA comprime la distribución de productividad)
`hyp-skill-leveling`

En experimentos de campo/laboratorio la IA generativa eleva más a los trabajadores de baja habilidad/novatos que a los de alta habilidad (que ganan poco o nada): call center +36% quintil inferior vs ~0% top; escritura: correlación de persistencia de calidad cae 0.49→0.25; Copilot beneficia más a menos experimentados. Implica que la amenaza laboral se concentra en el extremo de alta experiencia (cuya habilidad escasa se comoditiza) mientras abre la entrada a novatos. Mide TIEMPO/PRODUCTIVIDAD por tarea, no empleo neto.

**Relaciones:**
- `tensiona` → El contexto invierte el signo (no hay multiplicador único de productividad) — La nivelación predice que los expertos ganan poco; el hallazgo de expertos que se vuelven MÁS LENTOS (METR -19%) empuja más allá: pueden ser dañados netos en contexto complejo familiar.
- `informa` → Brecha de percepción (auto-reporte sobreestima el efecto medido) — Las ganancias auto-reportadas que sostienen narrativas de nivelación pueden estar sesgadas al alza.

### El contexto invierte el signo (no hay multiplicador único de productividad)
`hyp-context-reverses-sign`

El signo y tamaño del efecto de productividad de la IA dependen de la novedad de la tarea y la familiaridad del trabajador con su dominio: grande y positivo en tareas greenfield/estandarizadas y para novatos (Copilot -56% tiempo, escritura -37%, call center +15%), pero puede ser NEGATIVO para expertos en su propio dominio complejo (METR +19% más lento). No existe un 'multiplicador de productividad de IA' escalar.

### Brecha de percepción (auto-reporte sobreestima el efecto medido)
`hyp-perception-gap`

Las ganancias de productividad auto-reportadas sobreestiman sistemáticamente (o incluso invierten) las ganancias medidas: en METR los devs esperaban +24% y aún tras la experiencia creían +20%, mientras lo medido fue -19%. Que trabajadores/empresas perciban a la IA como productiva es evidencia débil de reducción real de contenido laboral; los pronósticos de empleo basados en ganancias percibidas están sesgados al alza.

### Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición
`hyp-macro-modest-vs-extreme`

Bajo el canal de ahorro de costos por tarea (teorema de Hulten), el efecto agregado de la IA generativa actual a 10 años es modesto (TFP <0.66%, PIB <1.6%), porque solo ~20% de tareas están expuestas, ~23% de esas son rentables, con ahorros ~27%. Esto TENSIONA narrativas de disrupción masiva en el mismo horizonte. Pero el efecto depende fuertemente de la elasticidad de sustitución entre tareas σ (banda 0.7-2.6 pp/año), no identificada empíricamente, y los modelos AGI (Korinek) dan resultados extremos (crecimiento 18%/año, colapso salarial) que dependen de un supuesto no observable de cola de tareas. Las tres pueden ser ciertas si miden cosas distintas en horizontes distintos.

**Relaciones:**
- `tensiona` → La distribución de complejidad de tareas decide todo (bifurcación) — El efecto empírico acotado de Acemoglu contrasta con la dependencia extrema de Korinek de un supuesto de cola no observable.
- `tensiona` → hyp-jcurve-mismeasurement — Si la medición a 10 años está en la fase de subestimación de la curva-J, el efecto modesto podría ser un piso, no el efecto verdadero.
- `informa` → Rezago de tecnología de propósito general (GPT) — El rezago GPT (co-invención, reorganización) explica por qué los efectos macro pueden ser modestos hoy aunque grandes a largo plazo.

### La distribución de complejidad de tareas decide todo (bifurcación)
`hyp-distribucion-tareas-bifurcacion`

El destino de empleo y salarios depende casi enteramente de si la distribución de complejidad de tareas humanas es ACOTADA (automatización plena en tiempo finito → colapso salarial al nivel de renta del capital) o NO ACOTADA con cola gruesa (siempre queda trabajo → salarios crecen indefinidamente). Es una bifurcación, no un continuo, y descansa en un supuesto no testeable. Brynjolfsson añade que la frontera de tareas no es exógena: la elección automatizar-vs-aumentar mueve qué rama se materializa.

### Automatización vs aumento (dirección de diseño, Turing Trap)
`hyp-automation-vs-augmentation`

El impacto neto sobre demanda de trabajo y poder de negociación depende de la DIRECCIÓN del diseño de IA (sustituir vs complementar), no solo de su capacidad. Existen incentivos de mercado, fiscales y de investigación sesgados hacia la automatización ('Turing Trap') que reducen la participación del trabajo aunque suba la productividad. En el uso real actual predomina la augmentation/complementariedad (Claude.ai 52-57%; OpenAI Asking 49%>Doing 40%; ILO augmentación 10-13% >> automatización 0.4-5.5%), sugiriendo que por ahora la IA opera más como copiloto que como reemplazo. Brynjolfsson da DIRECCIÓN pero ninguna función cuantitativa grado-de-automatización→Δparticipación.

**Relaciones:**
- `activa` → La IA ensancha (no reduce) la desigualdad — Si la sustitución reduce participación/poder del trabajo, concentra el ingreso en el capital y en pocos: el mecanismo que ensancha la desigualdad.
- `informa` → La distribución de complejidad de tareas decide todo (bifurcación) — La elección automatizar-vs-aumentar mueve la frontera de tareas y por tanto qué rama de la bifurcación se realiza.

### La IA ensancha (no reduce) la desigualdad
`hyp-ia-ensancha-desigualdad`

La IA generativa tiende a ensanchar la brecha capital-trabajo y la desigualdad: la complementariedad se correlaciona con el ingreso (IMF), la carga de transición ocupacional es regresiva (McKinsey: trabajadores de salario bajo hasta 14x más propensos a cambiar de ocupación), y 41-42% de trabajadores de finanzas/manufactura esperan que la IA baje salarios (OECD). Tensión interna no resuelta: Webb/Autor-2024 sugieren posible COMPRESIÓN (la IA nivela hacia arriba a novatos), de modo que el signo distribucional último es disputado y depende de qué dimensión se mire (transición vs productividad de tarea vs participación).

### El potencial está limitado por la adopción y la co-invención
`hyp-potential-gated-adoption`

El impacto laboral realizado de la IA va por detrás del potencial técnico y está limitado por adopción de empresas, escasez de mano de obra, inercia organizacional y un problema de complementariedad innovacional/coordinación ('too little, too late'). A la fecha los efectos observados son limitados aun donde el potencial de automatización es alto (OECD: impacto 'limitado hasta ahora' con 27% en alto riesgo; adopción empresarial 2-23% en la UE).

**Relaciones:**
- `anida` → Rezago de tecnología de propósito general (GPT) — El rezago GPT es la forma histórica/teórica del límite de adopción: realizar las ganancias requiere reorganización y co-invención por sectores usuarios.

### Rezago de tecnología de propósito general (GPT)
`hyp-gpt-lag`

Si la IA es una tecnología de propósito general, mostrará un rezago largo (una década o más) entre despliegue y efectos agregados medibles de productividad/empleo, porque realizar sus ganancias requiere co-invención y reorganización del trabajo, no solo adoptar la herramienta (caso canónico: electrificación, ~4 décadas desde la primera central a 1881 hasta el impacto en productividad manufacturera en los 1920s; <5% del accionamiento mecánico electrificado en 1899 → ~50% a inicios de 1920s; ~mitad de la aceleración de 5pp de TFP 1919-29 atribuida a motores secundarios). La ausencia de efectos grandes a corto plazo es evidencia débil sobre el largo plazo.

### Mucha rotación, neto pequeño e incierto
`hyp-high-churn-small-net`

La IA impulsa una gran reorganización BRUTA de empleos (rotación estructural ~22-23% en cinco años, WEF) con un efecto NETO comparativamente pequeño y de signo incierto (WEF: -14M/-2% en 2023; +78M/+7% en 2025; driver IA-específico +11M/-9M). La carga relevante para política es la transición/reasignación (McKinsey: 12M de transiciones ocupacionales adicionales en EE.UU. a 2030), no el conteo agregado de empleos. OJO: 2023 y 2025 tienen denominadores distintos (673M vs 1.2B) — no es una serie temporal limpia.

**Relaciones:**
- `informa` → Exposición no es empleo neto — Refuerza que el impacto vive en el movimiento (rotación/transiciones), no en una pérdida neta derivable de la exposición.

### El uso real predomina en augmentation
`hyp-augmentation-domina-uso`

Las taxonomías de uso de labs muestran predominio de la colaboración humano-IA sobre la delegación plena (Claude.ai augment 52-57% > automate 43-45%; OpenAI Asking 49% > Doing 40%, y creciendo más rápido), con augmentation/automation siendo MODO DE INTERACCIÓN, no empleo. Una fracción creciente del uso de consumo es no-laboral (ChatGPT 53→73% no-trabajo), de modo que mucho valor es producción doméstica/consumo, no producto laboral medible.

**Relaciones:**
- `informa` → Automatización vs aumento (dirección de diseño, Turing Trap) — El split de uso observado es evidencia del modo de colaboración, distinto de la dirección de diseño y del efecto sobre participación del trabajo.

### La IA erosiona la participación del trabajo (si σ>1)
`hyp-ia-erosiona-participacion`

En el modelo agregado, la IA equivale a capital más productivo/barato: el producto crece, pero la tajada del ingreso que va al trabajo cae SOLO si capital y trabajo son sustitutos brutos (σ>1). Con σ<1 (complementos) el trabajo se vuelve el factor escaso y su tajada puede subir; con σ=1 (Cobb-Douglas) queda fija. El signo de '¿quién se queda con la renta?' depende, entonces, de un parámetro empírico contestado — y, de forma entrelazada, de qué se suponga sobre el sesgo del cambio técnico (Hicks-neutral fuerza σ>1; permitir cambio técnico labor-augmenting admite σ<1).

### El ajuste cae más en el empleo que en el salario (φ bajo)
`hyp-ajuste-cae-en-empleo`

Ante una caída de la demanda de trabajo, los salarios nominales se resisten a bajar (rigidez a la baja: normas de justicia, moral, protección al empleo), así que una fracción grande del ajuste se desvía a la cantidad —despidos, no recortes de sueldo—. Esto empuja φ (la parte del golpe que cae en salarios) hacia abajo: el escenario modal no es 'hay trabajo que paga menos' sino 'se pierden puestos'. La evidencia es de shocks cíclicos en economías desarrolladas; para un shock estructural y permanente de IA, la dirección (φ bajo) es robusta pero el nivel no es trasladable 1:1, y sube con el horizonte (en el largo plazo el salario real sí se ajusta).

### Los weak links acotan el crecimiento y capturan el retorno (Jones)
`hyp-weak-links-acotan-capturan`

En una economía de tareas complementarias (weak link / O-ring), automatizar las tareas fáciles no dispara el crecimiento sin límite: el output queda acotado por las tareas difíciles que aún dependen de humanos. Esos weak links son la fuente de la escasez y capturan el retorno. Mientras sobrevivan, el trabajo es el factor escaso y su tajada se sostiene; si se automatizan todos, el crecimiento se acelera pero la renta del trabajo colapsa. Los weak links hacen DOS cosas: acotan/domestican el crecimiento y deciden quién captura. Es el mecanismo de la lente Crecimiento (cuello de botella).

### La elasticidad de demanda decide si automatizar sube o baja el empleo
`hyp-elasticidad-decide-empleo`

Automatizar una tarea libera trabajo y abarata el bien; si el empleo neto sube o baja depende de la elasticidad de demanda del bien. Elástica (software: Jevons) → la demanda explota y el empleo del resto de tareas sube; inelástica/saciable (comida, petróleo, insulina) → la demanda no responde y el empleo cae. Es la bisagra del modelo de tareas, y la elasticidad agregada nadie la ha medido (Imas: 'necesitamos un proyecto Manhattan de datos').

### El sector relacional puede sostener el empleo (con condiciones)
`hyp-relacional-sostiene-empleo`

Si los humanos prefieren intrínsecamente que un humano esté en el loop (empatía, conexión, autenticidad), queda un sector relacional escaso que sostiene empleo y tajada aunque todo lo demás se automatice. Pero solo se sostiene si la preferencia es fuerte, vale para suficientes sectores, y su variedad crece tanto como la del sector automatizado; si no, su tajada del gasto tiende a cero (Imas-Trammell: el contrafáctico del mongol del 1400 que solo gastaría en cantantes).

### La renta de la IA: ¿electricidad (difusa) o plataforma (concentrada)?
`hyp-captura-electricidad-vs-plataforma`

Quién captura la renta de la IA depende de si se parece a la electricidad (los beneficios fluyen a los usuarios) o a las redes sociales (las rentas van al dueño de la plataforma). La 'indexabilidad' —que la gente común y los países pobres puedan tener una porción del capital que gana— decide si participan; la comoditización de los modelos (open source 6-9 meses detrás) empuja hacia el lado electricidad. Conecta la rama 'escasez' con 'quién se queda con la renta'.

### La escasez se muda del trabajo a los recursos físicos
`hyp-escasez-se-muda-a-fisico`

Cuando la IA vuelve abundante la inteligencia, el cuello de botella del crecimiento se desplaza del trabajo humano a los insumos físicos —energía y cómputo—. La evidencia de corto plazo apunta a un cuello de ritmo y lugar: la demanda eléctrica de los servidores de IA crece ~30%/año, conectar generación toma ~5 años, el empaquetado CoWoS/HBM está agotado. La tensión honesta: a escala global la energía no es escasa (los datacenters son ~1/10 del crecimiento eléctrico, menos que el aire acondicionado o los autos eléctricos; el costo de generación renovable cae ~10%/año), y el factor que hoy aprieta puede ser transitorio (el cómputo es reproducible; solo materia/energía/tierra son genuinamente fijas). El desacuerdo se juega en el horizonte temporal.

### Si son complementos y la oferta es inelástica, los átomos capturan la renta
`hyp-atomos-capturan-renta`

En un modelo de dos factores —inteligencia (abundante) y recursos físicos (escasos)—, si ambos son complementos (σ<1) la tajada de la renta que va al factor físico sube a medida que la inteligencia se abarata; con oferta física inelástica el ajuste va al precio y sus dueños capturan el excedente. Es el teorema de Trammell-Korinek (la tajada del factor fijo tiende a 1 cuando ρ<0) y la 'vuelta de la escasez' de Korinek-Suh, con raíz en Korinek-Stiglitz (los beneficios se acumulan en el factor irreproducible) y el motor Baumol de Aghion-Jones-Jones. El parámetro empírico la respalda en el corto plazo (energía-capital complementos, Berndt-Wood; σ≈0,2–0,5). Se tensiona si σ→1 (sustitución de largo plazo, Koetse) o si la oferta se vuelve elástica (curva de aprendizaje solar, Way-Farmer).

### La oferta de energía y cómputo es inelástica en el horizonte relevante
`hyp-oferta-fisica-inelastica`

Añadir generación eléctrica firme y empaquetado avanzado de chips toma años: la capacidad de corto plazo está fija (curva de oferta vertical, merit-order) y los lead times son largos. La oferta física es entonces marcadamente inelástica en 1–5 años (el horizonte del ciclo de IA actual) y solo moderadamente elástica a largo plazo (>7–10 años). Esa inelasticidad de corto plazo es la condición bajo la cual los dueños del factor físico capturan la renta; su relajación de largo plazo es la salida.

## Capa de medición: dimensiones y conversiones

55 dimensiones (unidades). Las conversiones entre ellas se clasifican en tres clases — y la clase es lo que separa el rigor del aire:

### Ausentes — no hay puente (es un hallazgo, no se fabrica) — 8

- **Productividad/tiempo por tarea (RCT a nivel trabajador) → Empleo: separaciones / rotación de incumbentes** (`cnv-time-to-productivity`)
  - *supuestos:* HALLAZGO: ningún RCT de este campo provee una función de productividad por-trabajador a empleo neto. Brynjolfsson observa que la atrición cayó pero NO la deriva del +15%. El puente requiere elasticidad de demanda de output y de demanda de trabajo, que ningún RCT estima. NO fabricar.
  - *fuente:* brynjolfsson-li-raymond-2023, peng-copilot-2023, noy-zhang-2023
- **Exposición ocupacional → Pronóstico de empleo neto (encuesta a empleadores)** (`cnv-exposure-to-employment-ABSENT`)
  - *supuestos:* HALLAZGO CENTRAL: NO existe función aceptada de exposición técnica (capacidad) a conteos netos de empleo. Requiere tasa de adopción, respuesta de oferta laboral, ajuste salarial, reinstauración y creación de tareas nuevas — ninguno fijado. ILO/IMF/Frey-Osborne son cuidadosos en NO convertir exposición en pérdidas; las cifras netas de WEF vienen de un instrumento de encuesta DISTINTO. Conflarlos es el error central a evitar.
  - *fuente:* imf-cazzaniga-2024, wef-fojr-2023, frey-osborne-2013-future, felten-2021-aioe, eloundou-2023-gpts
- **Exposición de tareas → Salarios** (`cnv-exposure-to-wages-ABSENT`)
  - *supuestos:* HALLAZGO: no existe puente directo exposición→salarios. La exposición es técnica; el efecto salarial pasa por rentabilidad, creación de nuevas tareas, σ y respuesta del capital. Tratar exposición como pérdida salarial es un error de dimensión.
  - *fuente:* acemoglu2024simple, autor2015-jobs
- **Efecto de productividad → Cambio en razón empleo-población** (`cnv-productivity-to-employment-ABSENT`)
  - *supuestos:* HALLAZGO: una ganancia de productividad NO mapea a un cambio de demanda de trabajo de signo determinado. Explícito en el paper: 'la presunción de que toda tecnología aumenta la demanda agregada de trabajo solo porque sube la productividad es errónea'. El signo depende del balance desplazamiento vs productividad+reinstauración.
  - *fuente:* acemoglu-restrepo-2019-newtasks, mckinsey-econ-potential-2023
- **Modo de colaboración (augment vs automate) → Pronóstico de empleo neto (encuesta a empleadores)** (`cnv-mode-to-employment-ABSENT`)
  - *supuestos:* HALLAZGO: el split augment/automate (57/43, luego 52/45) NO se traduce a puestos. Una tarea 'automatizada' en una conversación no es un empleo eliminado; un empleo tiene muchas tareas. Brynjolfsson da DIRECCIÓN (automatización reduce participación/poder del trabajo) pero NINGUNA función cuantitativa grado-de-automatización→Δparticipación. Puente cualitativo, no numérico.
  - *fuente:* anthropic-aei-2025-original, brynjolfsson2022turingtrap
- **Potencial de automatización → Demanda laboral realizada (ex-post)** (`cnv-potential-to-realized-ABSENT`)
  - *supuestos:* HALLAZGO: sin puente. OECD documenta que alto potencial (27%) coexiste con impacto realizado 'limitado hasta ahora', condicionado por la tasa de adopción de firmas, escasez laboral y reticencia a despedir. Potencial→realizado requiere la ruta de difusión, que es empírica no derivable.
  - *fuente:* oecd-emo-2023
- **Cambio de participación en el empleo → Pronóstico de empleo neto (encuesta a empleadores)** (`cnv-shareChange-to-netcount-ABSENT`)
  - *supuestos:* HALLAZGO: los cambios de PARTICIPACIÓN son suma-cero entre ocupaciones y mudos sobre el nivel de empleo total. Mapear shares a conteos netos requiere un término agregado de demanda de trabajo/reinstauración (tareas nuevas, crecimiento de output) que ninguno de estos papers estima. La descomposición desplazamiento-vs-reinstauración de Acemoglu-Restrepo es el hogar conceptual del término faltante.
  - *fuente:* goos-manning-salomons-2014, autor-dorn-2013
- **Productividad/tiempo por tarea (RCT a nivel trabajador) → Cambio de participación en el empleo** (`cnv-rctprod-to-shareChange-ABSENT`)
  - *supuestos:* HALLAZGO / incomparabilidad dura: una ganancia de productividad de 14-56% en RCT no mapea a participaciones de empleo ocupacional sin supuestos de elasticidad de demanda, agregación tarea→ocupación y ajuste de equilibrio. Autor usa estos RCTs como 'prueba de concepto' de una hipótesis direccional, explícitamente NO como estimación de mercado laboral.
  - *fuente:* autor-2024-rebuild-middle-class

### Hipotéticas — cargan supuestos nombrados — 19

- **Exposición ocupacional → Potencial de automatización** (`cnv-occexp-to-automation-potential`)
  - *params:* Split del empleo expuesto en desplazamiento-leaning vs complementariedad vía un índice de complementariedad/shielding (IMF: 'la mitad afectada negativamente')
  - *supuestos:* Requiere el umbral del índice de complementariedad para decidir qué empleos expuestos son riesgo de sustitución vs complemento. El umbral y la construcción del índice son supuestos, no identidades.
  - *fuente:* imf-cazzaniga-2024
- **Tiempo/horas de trabajo automatizable → Potencial de automatización** (`cnv-hours-to-automation-potential`)
  - *params:* Mapeo de % de horas automatizables a % de puestos desplazables
  - *supuestos:* Requiere supuestos sobre cómo se redistribuyen las horas liberadas dentro vs entre puestos, umbral de pérdida de horas que elimina un rol, y reorganización. McKinsey explícitamente NO equipara horas automatizables con pérdida de empleo: enruta vía redistribución y transiciones.
  - *fuente:* mckinsey-econ-potential-2023, mckinsey-us-2023
- **Tiempo/horas de trabajo automatizable → Transiciones ocupacionales requeridas** (`cnv-hours-to-transitions`)
  - *params:* Escenario de adopción/difusión de McKinsey + umbrales de horas dentro-de-ocupación
  - *supuestos:* Dependiente del escenario de velocidad de adopción, re-ponderación de demanda hacia trabajo de mayor salario, y un umbral de horas automatizadas que dispara un cambio de ocupación (el giro 21.5%→29.5% impulsa los +12M).
  - *fuente:* mckinsey-us-2023
- **Efecto de desplazamiento → Cambio en razón empleo-población** (`cnv-displacement-to-emppop`)
  - *params:* El giro de contenido de tareas (% de demanda de trabajo) se reparte entre empleo y salarios según la elasticidad de oferta laboral
  - *supuestos:* REQUIERE la elasticidad de oferta laboral para dividir un cambio de demanda en cantidad (empleo) vs precio (salario). El paper lo afirma; la elasticidad NO está fijada → conversión condicional.
  - *fuente:* acemoglu-restrepo-2019-newtasks
- **Densidad de robots → Cambio en razón empleo-población** (`cnv-robot-to-emppop`)
  - *params:* Coeficiente de regresión (dentro del rango muestral): +1 robot/1000 trabajadores → -0.18 a -0.34 pp empleo-población; -0.34 pp agregado (GE-comercio preferido); -0.18 pp cota inferior
  - *supuestos:* [Corrección auditoría 2026-06-16: origen reasignado de dim-task-exposure → dim-robot-density (el regresor de Acemoglu-Restrepo 2020 es densidad de robots instalados, no exposición de tareas); reclasificada established→hypothesized por ser regresión reduced-form de un solo periodo/tecnología.] Pendiente reducida-forma EMPÍRICAMENTE estimada, válida para zonas de commuting de EE.UU. 1990-2007 sobre el rango observado de robots; 'established' SOLO como coeficiente ajustado, NO como ley estructural. Extrapolar fuera de rango o a otras tecnologías es injustificado.
  - *fuente:* acemoglu-restrepo-2020-robots
- **Densidad de robots → Salarios** (`cnv-robot-to-wages`)
  - *params:* +1 robot/1000 trabajadores → -0.25 a -0.5% salarios (local/GE/cota)
  - *supuestos:* [Corrección auditoría 2026-06-16: origen reasignado de dim-task-exposure → dim-robot-density (el regresor de Acemoglu-Restrepo 2020 es densidad de robots instalados, no exposición de tareas); reclasificada established→hypothesized por ser regresión reduced-form de un solo periodo/tecnología.] Mismos caveats que la pendiente empleo-población: coeficiente ajustado sobre la muestra EE.UU. 1990-2007, no una elasticidad universal.
  - *fuente:* acemoglu-restrepo-2020-robots
- **Exposición de tareas → Potencial de automatización** (`cnv-exposure-to-profitable`)
  - *params:* Tasa de rentabilidad entre tareas expuestas (23% de Svanberg et al. para visión por computador)
  - *supuestos:* Que la tasa de rentabilidad observada en visión por computador se extrapola al resto de tareas expuestas; depende de costos de despliegue y de la curva de costos de cómputo. No es identidad.
  - *fuente:* acemoglu2024simple
- **Productividad / TFP → Crecimiento del PIB** (`cnv-tfp-to-pib`)
  - *params:* Respuesta del stock de capital a la subida de TFP (benchmark ΔK proporcional; o respuesta tipo Acemoglu-Restrepo 2022) → PIB 0.93-1.56%
  - *supuestos:* El PIB excede a la TFP según cuánto crezca el capital; el rango depende del supuesto de inversión. No es identidad: requiere elasticidad de respuesta de capital.
  - *fuente:* acemoglu2024simple
- **Productividad / TFP → Salarios** (`cnv-tfp-to-wages`)
  - *params:* Elasticidad de sustitución σ entre tareas y participación de capital sK (≈0.4 en EE.UU.); regla: ΔAL no sube salarios si σ=sK
  - *supuestos:* Ganancias de productividad NO se traducen mecánicamente en salarios; el signo depende de σ vs sK y de si se crean nuevas tareas. Incluso productividad de baja calificación puede subir la desigualdad.
  - *fuente:* acemoglu2024simple
- **Exposición de tareas → Productividad implícita por uso (sensible a σ)** (`cnv-exposure-to-implicit-prod`)
  - *params:* speedup por tarea × cobertura × tasa de éxito, agregado bajo función CES con σ (σ=0.5→0.7-0.9pp; σ=1→1.2pp; σ=1.5→2.2-2.6pp)
  - *supuestos:* El resultado VARÍA por factor ~3 según σ, que NO está identificado empíricamente. Es el supuesto irreducible que hay que nombrar al pasar de microdatos de uso a una conclusión macro.
  - *fuente:* anthropic-aei-2026-primitives
- **Productividad / TFP → Productividad / TFP** (`cnv-jcurve-mismeasurement`)
  - *params:* Corrección por capital intangible no medido (q de Tobin); +15.9% de nivel a 2017 para software+hardware
  - *supuestos:* TFP medida ≠ TFP verdadera durante la difusión de una GPT (curva-J): subestimación temprana mientras se acumula intangible, sobreestimación tardía. La corrección se infiere de regresiones de valor de mercado, no de medición directa de intangibles.
  - *fuente:* brynjolfsson2021jcurve
- **Tipo de interacción económica (Asking/Doing/Expressing) → Modo de colaboración (augment vs automate)** (`cnv-interaction-to-mode`)
  - *params:* Mapeo Doing≈automation (produce output), Asking≈augmentation (soporte a decisión)
  - *supuestos:* Las dos taxonomías son conceptualmente cercanas pero OpenAI advierte 'correlated but not redundant'. Tratarlas como idénticas introduce error de clasificación.
  - *fuente:* openai-nber-w34255-chatgpt
- **Giro del contenido de tareas (desplazamiento vs reinstauración) → Cambio de participación en el empleo** (`cnv-rti-to-share-change`)
  - *params:* share_change = coef × (RTI en SD) × años; requiere el modelo shift-share CES y la elasticidad de demanda de producto ε=0.42
  - *supuestos:* Estructura CES/shift-share de GMS; retornos constantes impuestos; ε=0.42. Es la maquinaria de predicción de su Tabla 4 — ajuste predicho/actual 66-79%, conversión parcial, no exacta.
  - *fuente:* goos-manning-salomons-2014
- **Intensidad laboral por establecimiento → Cambio de empleo realizado (histórico/correlacional)** (`cnv-laborintensity-to-occemployment`)
  - *params:* empleo ocupacional = (trabajadores por establecimiento) × (número de establecimientos); neto = efecto desplazamiento dentro-establecimiento + efecto conteo-de-establecimientos
  - *supuestos:* Requiere la respuesta del conteo de establecimientos a la reducción de costo (elasticidad de demanda de output, y en el caso de cajeros, desregulación/competencia). Bessen: ~21→13 cajeros/sucursal PERO las sucursales crecieron, así que el empleo total se mantuvo/subió. El término de crecimiento de establecimientos es exógeno y debe suministrarse aparte.
  - *fuente:* bessen2015-tellers
- **Share de difusión (capacidad/adoptantes instalada) → Productividad / TFP** (`cnv-diffusion-to-tfp`)
  - *params:* Regresión de corte transversal de la aceleración de TFP de una industria sobre el aumento proporcional de su capacidad de motores eléctricos secundarios (~mitad de la aceleración de 5pp de TFP 1919-29)
  - *supuestos:* Asociación estadística/transversal, no identidad estructural; específica de manufactura 1919-29 y condicionada a reorganización previa (unit drive). 'Explicado estadísticamente' ≠ causal. No transportable a otras tecnologías sin re-estimar.
  - *fuente:* david1990-dynamo
- **Productividad/tiempo por tarea (RCT a nivel trabajador) → Crecimiento de productividad del trabajo** (`cnv-time-to-output-per-hour`)
  - *params:* Supuesto de relleno de tareas: si se rellena 100% del tiempo liberado con tareas idénticas, -t% tiempo/tarea → +t/(1-t)% output/hora; si no se rellena, la ganancia de productividad es cero
  - *supuestos:* Requiere cola homogénea ilimitada de tareas, calidad constante, sin fatiga, tiempo liberado reasignado al mismo tipo de tarea. Indeterminado fuera de ese supuesto.
  - *fuente:* brynjolfsson-li-raymond-2023, peng-copilot-2023
- **Brecha de percepción (auto-reporte vs medido) → Productividad/tiempo por tarea (RCT a nivel trabajador)** (`cnv-perception-to-time`)
  - *params:* Requiere una estimación del sesgo de auto-reporte; METR da un punto de calibración: +20% percibido vs -19% medido (~39pp)
  - *supuestos:* El sesgo es específico de tarea y población; la brecha de METR no es transportable. No existe función general.
  - *fuente:* metr-2025
- **Cambio de empleo realizado (histórico/correlacional) → Salarios** (`cnv-realized-emp-to-wage`)
  - *params:* Co-movimiento empírico/correlacional (robots: 9-18% empleo / 8-14% salario; software: 7-11% / 2-6%); no hay identidad contable
  - *supuestos:* El tamaño relativo depende de la elasticidad de oferta laboral y del régimen de fijación de salarios (competitivo vs rent-sharing). Requiere nombrar una elasticidad de oferta laboral.
  - *fuente:* webb-2020-ai-labor
- **Exposición ocupacional → Desigualdad salarial** (`cnv-exposure-to-inequality-proj`)
  - *params:* Aplica el coeficiente histórico exposición→cambio-salarial de software/robots a la exposición a IA → proyecta 90:10 -4% (software) / -9% (robots)
  - *supuestos:* Supuestos NOMBRADOS y fuertes (Webb los marca como tales): mapeo lineal constante exposición-salario; el signo/pendiente histórico de software/robots se transfiere sin cambio a la IA pese a su dirección de habilidad distinta; patrones de sustitución de largo plazo persisten; efectos de equilibrio general implícitos.
  - *fuente:* webb-2020-ai-labor

### Establecidas — identidad / contable — 8

- **Exposición de tareas → Exposición ocupacional** (`cnv-task-to-occupation-exposure`)
  - *params:* Agregación ponderada por empleo de scores de tarea al nivel ocupacional
  - *supuestos:* Identidad contable DADA una regla de agregación tarea→ocupación y un peso de importancia de tareas; tanto ILO como IMF ejecutan exactamente este paso. La regla es una elección de modelado pero la operación es definicional, no conductual.
  - *fuente:* ilo-gmyrek-2023, imf-cazzaniga-2024
- **Adopción / intensidad de uso → Exposición de tareas** (`cnv-adoption-to-exposure`)
  - *params:* Clasificación de cada conversación a tarea O*NET y conteo sobre el conjunto de tareas de la ocupación
  - *supuestos:* Identidad contable dentro del dataset del lab: la exposición observada se computa agregando conversaciones clasificadas. Válida solo para la población de usuarios del producto, no para la economía.
  - *fuente:* anthropic-aei-2026-primitives
- **Giro del contenido de tareas (desplazamiento vs reinstauración) → Efecto de desplazamiento** (`cnv-taskcontent-decomp`)
  - *params:* task_content_shift = displacement_effect + reinstatement_effect (identidad de la descomposición)
  - *supuestos:* Descomposición definicional. Los insumos empíricos dependen del supuesto residual-participación-del-trabajo = contenido-de-tareas, pero la identidad aditiva es contable.
  - *fuente:* acemoglu-restrepo-2019-newtasks
- **Cambio en razón empleo-población → Empleos por robot** (`cnv-robot-to-jobs`)
  - *params:* -6.2 trabajadores/robot (local sin comercio); -5.6 (agregado con comercio); -3.0 (cota inferior). Usa denominadores de población de la zona
  - *supuestos:* Conversión contable de pp empleo-población a headcount dada la población; el spread entre las tres cifras viene de supuestos GE/comercio/atribución, no de la aritmética. No promediar sin etiqueta de equilibrio.
  - *fuente:* acemoglu-restrepo-2020-robots
- **Crecimiento de productividad del trabajo → Productividad / TFP** (`cnv-hulten-savings-to-tfp`)
  - *params:* Teorema de Hulten: dTFP = Σ(ahorro de costo de tarea × participación); fracción afectada × ahorro promedio (= 0.27 × 0.535 = 0.144 → TFP <0.66%)
  - *supuestos:* Hulten vale a primer orden en torno a un óptimo competitivo, sin reasignación de gran escala ni nuevas tareas; Acemoglu lo invoca como el puente exacto micro→macro. Es el corazón de su método.
  - *fuente:* acemoglu2024simple
- **Cambio de participación en el empleo → Cambio de participación en el empleo** (`cnv-share-to-pct-relative`)
  - *params:* pct = pp_change / base_share (p.ej. +3.0 pp sobre base 9.9% = ~+30%)
  - *supuestos:* Identidad dada la participación del periodo base. Sin supuesto conductual.
  - *fuente:* autor-dorn-2013
- **Share de difusión (capacidad/adoptantes instalada) → Rezago de difusión** (`cnv-diffusion-to-lag`)
  - *params:* rezago = (fecha en que el share cruza el umbral) − (fecha de disponibilidad inicial). ~5% en 1899 → ~50% a inicios de 1920s ⇒ ~2 décadas (4 desde la primera central)
  - *supuestos:* Contable/definicional una vez elegido el umbral (p.ej. 50%) y la fecha de inicio, que son convenciones con algo de juicio.
  - *fuente:* david1990-dynamo
- **Pronóstico de empleo neto (encuesta a empleadores) → Rotación estructural (bruta)** (`cnv-netforecast-to-churn`)
  - *params:* churn = creados + destruidos; neto = creados − destruidos (mismo instrumento de encuesta)
  - *supuestos:* Identidad contable DENTRO de un mismo dataset/horizonte WEF. NO válida entre 2023 y 2025 (denominadores 673M vs 1.2B).
  - *fuente:* wef-fojr-2023, wef-fojr-2025

<details><summary>Las dimensiones, una a una</summary>

- **Abundancia y costo del cómputo (la oferta de inteligencia)** (`dim-abundancia-computo`): Cuán rápido cae el costo por unidad de capacidad de IA (FLOP por dólar del hardware, precio de inferencia, progreso algorítmico) frente a cuánto escala el cómputo de frontera. Es el lado de la oferta de 'inteligencia' que vuelve barato ese factor — el empuje g del motor. Unidad: tasas de cambio (x/año).
- **Adopción / intensidad de uso** (`dim-ai-adoption-use`): Intensidad de uso de un producto de IA: usuarios activos, mensajes/semana, uso per cápita (OpenAI 18B msg/sem, 700M usuarios; cobertura ocupacional 49% de empleos con uso en ≥25% de tareas). Crecimiento más rápido en países de ingreso bajo-medio; elasticidad-ingreso 0.7. Unidad: usuarios, mensajes o índice per cápita.
- **Potencial de aumento** (`dim-augmentation-potential`): Share de empleo donde la IA complementa/asiste sin sustituir el rol (automatiza algunas tareas, libera tiempo para otras). Explícitamente separado del potencial de automatización por ILO (10-13%) y de desplazamiento por IMF (complementariedad). Unidad: % de empleo.
- **Tiempo/horas de trabajo automatizable** (`dim-automatable-hours`): Share de horas pagadas o tiempo de actividad laboral que la IA actual podría automatizar (McKinsey 60-70% del tiempo de empleados; EE.UU. 21.5%→29.5% de horas a 2030). Medida de contenido-tiempo, NO un conteo de puestos. Unidad: % de horas/tiempo.
- **Potencial de automatización** (`dim-automation-potential`): Share de empleo (o de tiempo de trabajo) que la IA podría en principio SUSTITUIR (la cola del lado-desplazamiento de la exposición). ILO 0.4-5.5%, OECD 27%. Capacidad/potencial, no realizado. Unidad: % de empleo u horas.
- **Autonomía de la IA** (`dim-autonomy`): Grado en que la IA toma decisiones sin intervención humana, escala ordinal 1-5 (Anthropic ~3.5). Unidad: escala 1-5.
- **El factor fijo captura la renta (resultado teórico)** (`dim-captura-renta-factor-fijo`): El resultado de que, cuando los demás factores se vuelven reproducibles/abundantes (la IA convierte la inteligencia y luego el trabajo en factores reproducibles), el factor que queda fijo o escaso captura una tajada creciente —en el límite, toda— de la renta. Formaliza '¿quién hereda el cuello cuando la inteligencia es abundante?'. Condicionado a la complementariedad (σ<1). Unidad: tajada del ingreso (0–1).
- **Modo de colaboración (augment vs automate)** (`dim-collaboration-mode`): Clasificación de cada interacción humano-IA en augmentation (ida y vuelta) vs automation (delegación de tarea completa). Anthropic 52-57% augment; ILO/IMF usan variantes. NO es empleo: una tarea 'automatizada' en una conversación no implica un puesto eliminado. Unidad: % de conversaciones/tareas.
- **La energía como cuello físico de la IA** (`dim-cuello-energetico`): Demanda eléctrica de los datacenters (nivel, crecimiento, concentración geográfica) frente a la capacidad del sistema de entregarla. Mide si la energía se vuelve la restricción de ritmo y lugar de la IA. Caveat: a escala global los datacenters son un actor menor del crecimiento eléctrico — la escasez es local/temporal, no una pared malthusiana. Unidad: TWh, %/año, % del consumo.
- **Elasticidad de demanda (la bisagra empleo↑/↓)** (`dim-demand-elasticity`): Cuánto crece la demanda de un bien cuando su precio cae. Decide el signo del efecto de automatizar una tarea: si la demanda es elástica (software, Jevons) el bien más barato se compra mucho más y el empleo del resto de tareas SUBE; si se sacia (comida, petróleo, insulina) la demanda no responde y el empleo CAE. Imas: 'no tenemos datos' sobre estas elasticidades — la pieza que más falta. Unidad: elasticidad / cualitativo.
- **Rezago de difusión** (`dim-diffusion-lag`): Tiempo entre disponibilidad/breakthrough inicial de una tecnología y la fecha en que alcanza un umbral de difusión (p.ej. 50%) o muestra efectos agregados medibles (electrificación ~2 décadas a 50%, ~4 décadas al impacto en productividad). Magnitud TEMPORAL. Unidad: años.
- **Share de difusión (capacidad/adoptantes instalada)** (`dim-diffusion-share`): Fracción de una base de capital o de adoptantes que incorpora la nueva tecnología (David: <5% del accionamiento mecánico electrificado en 1899; 3% de hogares con luz eléctrica). Penetración tecnológica, no efectos laborales. Unidad: % de capacidad o de adoptantes.
- **Efecto de desplazamiento** (`dim-displacement-effect`): Componente del giro de contenido de tareas por el cual el capital toma tareas antes hechas por trabajo, reduciendo demanda de trabajo. Negativo por construcción. Unidad: %/año o % acumulado.
- **Valor económico de casos de uso (dólares)** (`dim-economic-value`): Valor económico anual potencial de casos de uso de IA generativa (McKinsey $2.6-4.4T/año, 63 casos). NO es conteo de empleo. Unidad: USD/año.
- **Elasticidad-precio de la oferta de insumos físicos (η)** (`dim-elasticidad-oferta-fisica`): Cuánto responde la cantidad ofrecida de electricidad firme o de empaquetado/HBM a un alza de su precio. Inelástica (corto plazo, capacidad fija, lead times largos) → el alza va al PRECIO y los dueños del factor físico capturan la renta; elástica (largo plazo) → la cantidad se expande y la abundancia se traslada. Es la perilla central del motor. Unidad: adimensional (Δ%cantidad / Δ%precio).
- **Elasticidad de sustitución capital–trabajo (σ)** (`dim-elasticidad-sustitucion`): Cuán fácilmente la producción reemplaza trabajo por capital cuando cambian sus precios relativos. σ>1 = sustitutos brutos (el capital barato desplaza trabajo y baja su tajada); σ<1 = complementos (el trabajo se vuelve el factor escaso y su tajada sube); σ=1 = Cobb-Douglas (tajadas fijas). Es el parámetro que decide el signo del efecto de la IA sobre la participación del trabajo en el modelo agregado. Unidad: adimensional.
- **Cambio en razón empleo-población** (`dim-emp-pop-ratio-change`): Cambio en la razón empleo-población, en pp, atribuible a una unidad de exposición tecnológica (p.ej. por robot/1000 trabajadores). Resultado de empleo NETO realizado a una geografía. Unidad: pp.
- **Empleo: separaciones / rotación de incumbentes** (`dim-employment-separations`): Continuidad laboral a nivel trabajador: atrición, retención, separaciones (Brynjolfsson: atrición cae, por retención de novatos). Mide salidas de incumbentes, NO creación/destrucción neta de mercado. Unidad: dirección o % de atrición.
- **Cambio de participación en el empleo** (`dim-employment-share-change`): Cambio en la participación de una ocupación/grupo en el total de horas o empleo, en pp o % proporcional, sobre un periodo y geografía. RELATIVO y suma-cero entre ocupaciones; NO es conteo neto de puestos ni resultado a nivel de trabajador. (Goos-Manning-Salomons, Autor-Dorn.) Unidad: pp o % del share.
- **Gradiente exposición-por-salario/habilidad** (`dim-exposure-skill-gradient`): Signo y forma de la correlación entre una medida de exposición/susceptibilidad y el salario o educación ocupacional (positivo = alto salario más expuesto, Webb/Eloundou; negativo = bajo salario más susceptible, Frey-Osborne). Unidad: cualitativo/signo o coeficiente.
- **Tasa de adopción de IA por firmas** (`dim-firm-adoption`): Share de empresas que han desplegado IA (OECD 2-23% en la UE). Medida de difusión que condiciona si cualquier potencial (exposición/horas) se realiza. Unidad: % de empresas.
- **Tipo de interacción económica (Asking/Doing/Expressing)** (`dim-interaction-type`): Rúbrica OpenAI: Asking = soporte a decisión (no produce output), Doing = produce output enchufable a un proceso, Expressing = sin contenido económico. 49/40/11%. Proxy del canal de valor. Correlacionado pero no redundante con augment/automate. Unidad: % de mensajes.
- **Empleos por robot** (`dim-jobs-per-robot`): Número de trabajadores cuyo empleo se pierde por un robot industrial adicional, en un equilibrio definido (local cerrado -6.2, GE con comercio -5.6, cota inferior -3.0). Unidad: trabajadores/robot.
- **Intensidad laboral por establecimiento** (`dim-labor-intensity-establishment`): Número de trabajadores de un tipo requeridos para operar un establecimiento (Bessen: cajeros por sucursal ~21→13). Medida de desplazamiento dentro-de-establecimiento; puede caer aunque el empleo ocupacional total suba si crece el número de establecimientos. Unidad: trabajadores/establecimiento.
- **Crecimiento de productividad del trabajo** (`dim-labor-productivity-growth`): Aumento anual de output por hora-trabajo atribuible a la IA (McKinsey 0.1-0.6 pp/año a 2040; proxy implícito de uso de Anthropic 0.7-2.6 pp/año según σ). Dimensión de output, ligable a empleo solo con supuestos conductuales adicionales. Unidad: pp/año.
- **Participación del trabajo** (`dim-labor-share`): Fracción del ingreso/valor agregado que va al trabajo (vs capital). Magnitud distinta de salarios o empleo; en declive según Brynjolfsson, con la tecnología como mayor explicación. Unidad: % del ingreso.
- **Pronóstico de empleo neto (encuesta a empleadores)** (`dim-net-employment-forecast`): Cambio NETO esperado en conteos de puestos sobre un horizonte fijo, elicitado por encuesta a empleadores (WEF: -14M/2023, +78M/2025). Dimensión conductual/de expectativa que refleja supuestos de los encuestados sobre TODOS los macrotrends, no solo IA. Unidad: número de puestos y % de una base definida.
- **Exposición ocupacional** (`dim-occupation-exposure`): Índice continuo o share de empleo en ocupaciones expuestas, agregando exposición de tareas al nivel ocupacional y ponderando por headcount (AIOE de Felten: 10 apps IA × 52 habilidades O*NET; IMF ~40%). Direccionalmente AGNÓSTICA: incluye tanto desplazamiento potencial como complementariedad. Unidad: índice estandarizado o % de empleo.
- **Susceptibilidad ocupacional** (`dim-occupation-susceptibility`): Probabilidad modelada de que una ocupación entera sea automatizable dada la tecnología actual/previsible, ponderada por empleo (Frey-Osborne: clasificador de procesos gaussianos, 47% en alto riesgo P>0.7). Probabilidad de factibilidad, no de tiempo ni de realización. Unidad: % de empleo en un bucket de probabilidad.
- **Transiciones ocupacionales requeridas** (`dim-occupational-transitions`): Conteo o share de trabajadores que deben moverse a una ocupación DISTINTA porque la suya se contrae (McKinsey: 12M adicionales en EE.UU. a 2030; salario bajo hasta 14x más propenso). Medida de carga de ajuste, no de pérdida neta. Unidad: número de trabajadores.
- **Calidad del output** (`dim-output-quality`): Calidad del producto del trabajo evaluada externamente, fijando la tarea (Noy-Zhang grados +0.45 SD; NPS de cliente sin cambio significativo). Ortogonal al tiempo/velocidad. Unidad: SD de grado o pp de métrica de cliente.
- **Brecha de percepción (auto-reporte vs medido)** (`dim-perception-gap`): Diferencia entre el efecto de productividad declarado/pronosticado por un trabajador y el efecto externamente medido en la misma tarea (METR: +20% percibido vs -19% medido, ~39pp). Meta-dimensión sobre la fiabilidad del auto-reporte como evidencia. Unidad: pp de diferencia.
- **Crecimiento del PIB** (`dim-pib-crecimiento`): Cambio en el PIB (nivel acumulado a un horizonte, o tasa anual). Difiere de TFP por la respuesta del stock de capital (Acemoglu: PIB 0.93-1.56% vs TFP <0.66%). Unidad: % de nivel o %/año.
- **Dispersión/desigualdad de productividad entre trabajadores** (`dim-productivity-dispersion`): Spread de la distribución de productividad/calidad entre trabajadores: varianza, brecha inter-quintil, o persistencia (correlación grado primera→segunda tarea, Noy-Zhang 0.49→0.25). Captura si la IA comprime o ensancha diferencias por habilidad. Unidad: correlación o brecha.
- **Efecto de productividad** (`dim-productivity-effect`): Aumento de output/demanda de trabajo en tareas no automatizadas porque la automatización sube la productividad y baja costos. Distinto de reinstauración (no requiere tareas nuevas). Unidad: %/año de demanda de trabajo o de masa salarial.
- **Productividad implícita por uso (sensible a σ)** (`dim-productivity-implicit-sigma`): Crecimiento anual de productividad laboral CONSTRUIDO por un lab a partir de datos de uso: speedup × cobertura × tasa de éxito, agregado bajo una función CES con elasticidad de sustitución entre tareas σ (Anthropic: 0.7-0.9 con σ=0.5; 1.2 con σ=1; 2.2-2.6 con σ=1.5). NO es TFP medida ex-post; es proyección con supuestos. Unidad: pp/año.
- **Productividad/tiempo por tarea (RCT a nivel trabajador)** (`dim-productivity-task-rct`): Cambio en tiempo-de-completar o calidad de una tarea definida dado un asistente IA, medido en RCT/experimento de campo (Copilot -55.8% tiempo, Noy-Zhang -37%, Brynjolfsson +15% RPH, METR +19% más lento). Nivel trabajador/tarea, horizonte corto; NO es empleo ni salario y no es agregable a efectos de mercado laboral sin supuestos. Unidad: % de cambio en tiempo/output.
- **Productividad / TFP** (`dim-productivity-tfp`): Cambio en la productividad total de factores (residuo de Solow), nivel acumulado o tasa anual. Distinta de productividad del trabajo. Acemoglu vía Hulten; Brynjolfsson-J-Curve mide el SESGO DE MEDICIÓN de esta dimensión. Unidad: % de nivel o pp/año.
- **Cambio de empleo realizado (histórico/correlacional)** (`dim-realized-employment-change`): Cambio observado (histórico, correlacional o causal según diseño) en empleo o share de empleo dentro-de-industria asociado a un incremento de exposición tecnológica medida (Webb: robots 9-18%, software 7-11%). Distinto de exposición y de share zero-sum. Unidad: % de cambio.
- **Demanda laboral realizada (ex-post)** (`dim-realized-labor-demand`): Cambio observado ex-post en empleo/contratación atribuible a la IA hasta la fecha (OECD: 'limitado hasta ahora'). La única dimensión de resultado directamente medido entre los reportes institucionales; el resto es potencial o pronóstico. Unidad: direccional o % de cambio.
- **Efecto de reinstauración** (`dim-reinstatement-effect`): Componente por el cual nuevas tareas intensivas en trabajo restauran trabajo en la producción, elevando demanda de trabajo. Positivo por construcción. Unidad: %/año o % acumulado.
- **Valor relacional (el humano-en-el-loop como parte del valor)** (`dim-relational-value`): Bienes/servicios donde el hecho de que un humano esté en el loop ES parte del valor para el consumidor (no porque el humano sea un insumo reemplazable, sino por una preferencia intrínseca por empatía/conexión/autenticidad). Su tajada sostiene empleo solo si la preferencia es fuerte, amplia y su variedad crece. Unidad: disposición a pagar / cualitativo.
- **Densidad de robots** (`dim-robot-density`): Robots industriales instalados por cada mil trabajadores en un mercado laboral local (zona de commuting). Es densidad de hardware instalado, NO susceptibilidad técnica del contenido del trabajo (exposición). Unidad: robots/1000 trabajadores.
- **Rotación estructural (bruta)** (`dim-structural-churn`): Rotación bruta = puestos creados MÁS destruidos sobre un horizonte, como share de la fuerza laboral (WEF 22-23%). Distinta del cambio neto; alta rotación es compatible con neto ~cero. Unidad: % de la fuerza laboral.
- **Elasticidad de sustitución energía ↔ otros factores (σ)** (`dim-sustitucion-energia-factores`): Cuán fácil reemplaza la economía energía/insumos físicos por capital, trabajo o inteligencia cuando cambian sus precios relativos. σ<1 (complementos) = la inteligencia abundante vuelve MÁS valioso el factor físico y su tajada de la renta sube; σ>1 (sustitutos) = la inteligencia lo reemplaza y su tajada cae; σ=1 = tajada fija. Es el parámetro que decide el signo de '¿los átomos capturan la renta?'. Análogo físico de dim-elasticidad-sustitucion. Unidad: adimensional.
- **Giro del contenido de tareas (desplazamiento vs reinstauración)** (`dim-task-content-shift`): Cambio en la participación de tareas de producción asignadas a trabajo vs capital (Acemoglu-Restrepo 2019), medido como el cambio residual de la participación del trabajo neto del efecto de sustitución de factores. Se descompone en desplazamiento (negativo) y reinstauración (positivo). Unidad: % por año de demanda de trabajo (o acumulado).
- **Exposición de tareas** (`dim-task-exposure`): Fracción de tareas de una ocupación/economía técnicamente susceptibles de ser realizadas o asistidas por la IA, sobre un umbral definido (p.ej. reduce el tiempo ≥50% a igual calidad — rúbrica Eloundou; o solapamiento patente-tarea — Webb; o scoring GPT-4 — ILO). Medida de susceptibilidad/capacidad del CONTENIDO del trabajo, NO un resultado de empleo. Unidad: % de tareas (o % de trabajadores que cruzan un umbral de tareas).
- **Signo del efecto neto sobre el empleo** (`dim-task-net-ambiguous`): Dirección (no magnitud) del efecto neto de la automatización sobre la demanda de trabajo: el balance cualitativo entre desplazamiento y reinstauración+productividad. Es cualitativo, no se promedia.
- **Tasa de éxito de tarea** (`dim-task-success-rate`): Probabilidad estimada de que la IA complete con éxito una tarea, condicional a complejidad (educación requerida) o duración (horas-humano). Anthropic: 70%→66% por nivel educativo; ~60%→45% por duración. Insumo para ajustar estimaciones de productividad. Unidad: % de éxito.
- **Captura de la renta (electricidad vs plataforma)** (`dim-value-capture`): Adónde van las ganancias de la IA: difusas a los usuarios (como la electricidad: nadie teme a la compañía eléctrica) o concentradas en el dueño (como las redes sociales: las rentas van a la plataforma). La 'indexabilidad' de la economía —si la gente común puede tener una porción del capital que gana— decide si participa. Unidad: concentración / cualitativo.
- **Desigualdad salarial** (`dim-wage-inequality`): Dispersión salarial: SD entre-grupos del log de salarios (Acemoglu 0.35→0.36), o ratio p90/p10 (Webb proyecta -4% a -9%). Magnitud distinta de salarios o participación. Unidad: SD de log-salarios o ratio de percentiles.
- **Rigidez salarial a la baja / margen de ajuste (empleo vs salario)** (`dim-wage-rigidity`): Cuando cae la demanda de trabajo, ¿el ajuste recae en el PRECIO (los salarios bajan) o en la CANTIDAD (se pierden puestos)? La rigidez salarial a la baja (downward nominal/real wage rigidity) mide cuánto se resiste el salario a caer; cuanto más rígido, más del ajuste se desvía al empleo. Informa el parámetro φ del modelo de tareas (φ = fracción del ajuste que cae en salarios; 1−φ en empleo). Unidad: fracción / cualitativo.
- **Salarios** (`dim-wages`): Nivel o tasa de cambio del salario real (medio o por grupo). Magnitud distinta de empleo (puestos) y de participación del trabajo. Acemoglu: incluso ganancias de productividad de baja calificación pueden subir la desigualdad. Korinek: trayectoria sube-luego-colapsa o sube-para-siempre según la cola. Unidad: % de cambio o nivel relativo a renta de capital.
- **Weak links / cuello de botella (tareas que acotan y capturan)** (`dim-weak-links`): Tareas complementarias difíciles de automatizar que quedan con humanos. Como una cadena vale por su eslabón más débil, acotan el output total —aunque las tareas fáciles se automaticen infinito— y, al ser la fuente de la escasez, capturan el retorno (sueldos/tajada). Automatizarlas todas es lo que dispararía el crecimiento, y a la vez lo que borraría la renta del trabajo. Es el primitivo de la lente Crecimiento. Unidad: cualitativo / mecanismo.
- **Expectativa salarial de trabajadores (encuesta)** (`dim-worker-wage-expectation`): Share de trabajadores que esperan que la IA suba/mantenga/baje salarios en su sector (OECD: 41-42% esperan baja en mfg/finanzas). Dimensión subjetiva de expectativa, distinta del cambio salarial realizado. Unidad: % de trabajadores.

</details>

## Los estudios

### David Ricardo (1821)
`ricardo1821-machinery` · On the Principles of Political Economy and Taxation, cap. 31 «On Machinery» (3ª ed.) · [fuente](https://www.econlib.org/library/Ricardo/ricP.html)  ⚠ **Clásico fundacional. Ricardo acertó en que las máquinas automatizarían los trabajos de su época, pero erró el agregado por no anticipar el cambio estructural (la falacia del lump of labor): lo que se abarató liberó gasto hacia servicios y tareas nuevas, y el empleo se mantuvo. La tasa de empleo en edad prima de EE.UU. en 2026 es la más alta desde 2000 — lo contrario de su predicción de desempleo masivo (Imas en el podcast).**

- **predijo desempleo masivo; acertó la automatización tarea-por-tarea, erró el agregado (cambio estructural recreó empleo)** — Efecto neto de la maquinaria sobre el empleo
  *dim:* dim-task-net-ambiguous · *horizonte:* histórico (200 años) · *ámbito:* Reino Unido / general/economía completa
  > the substitution of machinery for human labour, is often very injurious to the interests of the class of labourers (cap. 31)

  *engancha:* `informa` Reinstauración vía nuevas tareas

### Ernst R. Berndt & David O. Wood (1975)
`berndt-wood1975` · Review of Economics and Statistics 57(3): 259–268 · [fuente](https://www.jstor.org/stable/1923910)  ⚠ **Hallazgo canónico de complementariedad capital-energía (el paper más citado de la historia de esa revista). La cita es de la retrospectiva 'Citation Classic' de los propios autores (leída verbatim); el original vía esa síntesis. La complementariedad K-E es el caso que sostiene σ<1 → los átomos capturan; controvertida (depende de series de tiempo vs corte transversal, ver Koetse/Thompson).**

- **energía-capital COMPLEMENTOS (σ<1); energía-trabajo sustitutos; own-price energía −0,5** — Sustitución energía ↔ capital/trabajo
  *dim:* dim-sustitucion-energia-factores · *horizonte:* series de tiempo EE.UU. · *ámbito:* EE.UU./manufactura agregada
  > energy and labor are substitutable while energy and capital are complements

  *engancha:* `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Paul A. David (1990)
`david1990-dynamo` · American Economic Review 80(2):355-361 · [fuente](https://gwern.net/doc/economics/automation/1990-david.pdf)

- **<5% en 1899 → ~50% inicios 1920s** — Difusión de electrificación del accionamiento mecánico fabril
  *dim:* dim-diffusion-share · *horizonte:* 1899 a inicios 1920s · *ámbito:* EE.UU./manufactura
  > less than 5 percent of factory mechanical drive... attain the 50 percent diffusion level... four decades after the first central power station
- **~2 décadas a 50%, ~4 décadas al impacto en productividad** — Rezago de difusión / impacto en productividad
  *dim:* dim-diffusion-lag · *horizonte:* 1881 a inicios 1920s · *ámbito:* EE.UU./manufactura
  > factory electrification did not... have an impact on productivity growth in manufacturing before the early 1920s
- **~mitad de una aceleración de 5pp** — Share de aceleración de TFP manufacturera 1919-29 por motores secundarios
  *dim:* dim-productivity-tfp · *horizonte:* 1919-29 vs 1909-19 · *ámbito:* EE.UU./manufactura
  > approximately half of the 5 percentage point acceleration... is accounted for statistically simply by the growth in manufacturing secondary electric motor capacity

  *engancha:* `confirma` Rezago de tecnología de propósito general (GPT); `confirma` El potencial está limitado por la adopción y la co-invención

### Timothy F. Bresnahan, Manuel Trajtenberg (1995)
`bresnahan-trajtenberg1995-gpt` · Journal of Econometrics 65(1):83-108 (NBER WP 4148, 1992) · [fuente](https://tbres.su.domains/wp-content/uploads/2023/11/Bresnahan-and-Trajtenberg-1995-General-purpose-technologies-%E2%80%98Engines-of-growth.pdf)

- **penetración, dinamismo tecnológico, complementariedades innovacionales** — Características definitorias de una GPT
  *dim:* dim-diffusion-lag (definición conceptual) · *horizonte:* n/a · *ámbito:* n/a/economía completa
  > GPT's are characterized by pervasiveness, inherent potential for technical improvements, and 'innovational complementarities'
- **adopción descentralizada produce subinversión y avance técnico más lento** — Falla de coordinación ('too little, too late')
  *dim:* dim-diffusion-lag (mecanismo) · *horizonte:* n/a · *ámbito:* n/a/economía completa
  > arms-length market transactions between the GPT and its users may result in 'too little, too late' innovation

  *engancha:* `confirma` Rezago de tecnología de propósito general (GPT); `confirma` El potencial está limitado por la adopción y la co-invención

### Truman F. Bewley (1999)
`bewley-1999` · Why Wages Don't Fall During a Recession (Harvard University Press); Marshall Lecture, Cowles DP 1167 · [fuente](https://cowles.yale.edu/sites/default/files/2022-08/d1167.pdf)  ⚠ **Cualitativo: 335 entrevistas a ejecutivos/sindicatos/reclutadores en la recesión de EE.UU. de inicios de los 90. Aporta el MECANISMO y la dirección (φ bajo), no un número — el propio autor advierte que no puede estimar incidencias. Verificado vía la lectura/artículo del propio autor (el libro no fue accesible al fetcher).**

- **cualitativo: despido preferido al recorte salarial para proteger la moral (φ implícito bajo)** — Por qué las firmas eligen despedir antes que recortar sueldos (margen de ajuste = empleo)
  *dim:* dim-wage-rigidity · *horizonte:* recesión · *ámbito:* EE.UU./economía completa
  > the advantage of layoffs over pay reduction was that they 'get the misery out the door'

  *engancha:* `confirma` El ajuste cae más en el empleo que en el salario (φ bajo)

### Pol Antràs (2004)
`antras2004` · B.E. Journal of Macroeconomics 4(1), art. 4 · [fuente](https://scholar.harvard.edu/files/antras/files/cespublished.pdf)  ⚠ **Rango 0,641–0,892 (promedio 0,78) verificado vía cita textual en Lawrence (2015); el PDF original devolvió 403 al fetcher automático. Concluye que σ es 'considerablemente menor que uno y puede incluso ser menor a 0,5'.**

- **0,64–0,89 (promedio ≈0,78)** — Elasticidad de sustitución capital-trabajo (σ)
  *dim:* dim-elasticidad-sustitucion (σ) · *horizonte:* largo plazo · *ámbito:* EE.UU./economía completa

  *engancha:* `tensiona` La IA erosiona la participación del trabajo (si σ>1)

### Dickens, Goette, Groshen, Holden, Messina, Schweitzer, Turunen, Ward (2007)
`dickens-iwfp-2007` · Journal of Economic Perspectives 21(2): 195-214 (International Wage Flexibility Project) · [fuente](https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp697.pdf)  ⚠ **La cifra más directamente traducible a φ. 31 datasets, 16 países, microdatos de cambios salariales individuales. Mide rigidez de salarios de quienes siguen empleados (job stayers); enorme dispersión por país (nominal 4%–58%). Verificado contra ECB WP697 (las versiones AEA bloquean el fetch).**

- **≈28% nominal / ≈26% real (φ implícito ≈0,26–0,28)** — Fracción de recortes salariales impedidos por la rigidez a la baja (nominal y real)
  *dim:* dim-wage-rigidity · *horizonte:* corto-medio plazo · *ámbito:* 16 países desarrollados/economía completa
  > an average of 28 percent of workers are covered by downward nominal rigidity, in the sense that 28 percent of the wage cuts that would have taken place under flexible wage setting are prevented by downward rigidity... an average of 26 percent of workers are covered by downward real rigidity

  *engancha:* `confirma` El ajuste cae más en el empleo que en el salario (φ bajo)

### Robert S. Chirinko (2008)
`chirinko2008` · Journal of Macroeconomics 30(2): 671-686 · [fuente](https://www.ifo.de/DocDL/cesifo1_wp2234.pdf)  ⚠ **Survey de ~75 años de literatura; el peso de la evidencia apunta a σ en 0,40–0,60 y rechaza explícitamente Cobb-Douglas.**

- **0,40–0,60** — Elasticidad de sustitución capital-trabajo (σ), peso de la evidencia
  *dim:* dim-elasticidad-sustitucion (σ) · *horizonte:* largo plazo · *ámbito:* EE.UU. / general/economía completa

  *engancha:* `tensiona` La IA erosiona la participación del trabajo (si σ>1)

### Mark J. Koetse, Henri L.F. de Groot & Raymond J.G.M. Florax (2008)
`koetse-meta2008` · Energy Economics 30(5): 2236–2251 (meta-análisis) · [fuente](https://www.sciencedirect.com/science/article/abs/pii/S0140988307000825)  ⚠ **Abstract primario; las cifras desagregadas (Morishima CP ≈0,2–0,4 / LP ≈0,8–1,1) son cita secundaria consistente entre fuentes (el PDF completo dio 403). Es la cara 'sustituto' del debate (usa Morishima/cross-price, que dan sustituibilidad débil), frente a la Allen de Berndt-Wood que da complementos. La lección: σ energía-factores depende fuerte del horizonte y la agregación.**

- **CP ≈0,2–0,4; LP ≈0,8–1,1 (media reportada ~0,22)** — Elasticidad de sustitución capital-energía (Morishima)
  *dim:* dim-sustitucion-energia-factores · *horizonte:* corto y largo plazo · *ámbito:* Norteamérica / Europa/economía / manufactura
  > the estimated cross-price elasticities suggest capital-energy substitutability without exception

  *engancha:* `informa` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Babecký, Du Caju, Kosma, Lawless, Messina, Rõõm (2010)
`babecky-wdn-2010` · Scandinavian Journal of Economics 112(4): 884-910 (Wage Dynamics Network, ECB) · [fuente](https://www.jsmessina.com/assets/papers/Scandinavian2010.pdf)  ⚠ **Encuesta armonizada a firmas europeas (~15 países). Mide rigidez del salario BASE: el ajuste puede ir a componentes flexibles (bonos), pero el empleo se ajusta antes que el salario base. La rigidez es mayor donde el despido es costoso (protección al empleo).**

- **2,3% de firmas recortó salario base vs 9,6% lo congeló (recortes 'extremely rare' → φ implícito muy bajo)** — Prevalencia de recortes de salario base entre firmas (margen del precio)
  *dim:* dim-wage-rigidity · *horizonte:* 5 años previos a la encuesta · *ámbito:* ~15 países europeos/economía completa
  > Only 2.3% of sampled firms cut base wages of at least some employees during the five-year period prior to the survey, while 9.6% of firms froze base wages

  *engancha:* `confirma` El ajuste cae más en el empleo que en el salario (φ bajo)

### Raj Chetty, Adam Guren, Day Manoli, Andrea Weber (2011)
`chetty-et-al-2011` · American Economic Review P&P 101(3): 471-475 · [fuente](https://rajchetty.com/wp-content/uploads/2021/04/micro_macro_aerpp.pdf)  ⚠ **CONTEXTO del lado de la oferta, no portante para φ. La elasticidad de Frisch mide cuánto mueve el trabajador sus horas/participación ante el salario, no el reparto precio/cantidad de un shock de demanda. Su propio punchline: las fluctuaciones de empleo son 'un orden de magnitud' mayores que lo que la Frisch explica → el reparto lo gobierna la rigidez/fricción, no la preferencia del trabajador.**

- **0,5 intensivo / 0,25 extensivo / 0,75 horas agregadas (no traducible a φ directamente)** — Elasticidad de Frisch de oferta laboral (micro, agregada) — lado cantidad, contexto
  *dim:* dim-wage-rigidity · *horizonte:* estructural · *ámbito:* meta-análisis (EE.UU./Europa)/economía completa
  > we recommend calibrating macro models to match... Frisch elasticities of 0.5 on the intensive and 0.25 on the extensive margin... a Frisch elasticity of aggregate hours of 0.75

  *engancha:* `informa` El ajuste cae más en el empleo que en el salario (φ bajo)

### Carl Benedikt Frey, Michael A. Osborne (2013)
`frey-osborne-2013-future` · Oxford Martin School WP (pub. TFSC 2017) · [fuente](https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf)

- **47% (medio 19%, bajo 33%)** — Empleo EE.UU. en categoría de ALTO riesgo (P>0.7)
  *dim:* dim-occupation-susceptibility · *horizonte:* 'una década o dos' (no especificado) · *ámbito:* EE.UU./economía completa (702 ocupaciones)
  > 47 percent of total US employment is in the high risk category... potentially automatable over some unspecified number of years
- **negativo fuerte (bajo salario/educación más susceptible)** — Gradiente probabilidad-salario/educación
  *dim:* dim-exposure-skill-gradient · *horizonte:* n/a · *ámbito:* EE.UU./economía completa
  > wages and educational attainment exhibit a strong negative relationship with an occupation's probability of computerisation

  *engancha:* `tensiona` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `confirma` Exposición no es empleo neto

### David H. Autor, David Dorn (2013)
`autor-dorn-2013` · American Economic Review 103(5):1553-1597 · [fuente](https://www.ddorn.net/papers/Autor-Dorn-LowSkillServices-Polarization.pdf)

- **+30% (9.9→12.9%); +53% entre no-universitarios** — Crecimiento de la participación de ocupaciones de servicio
  *dim:* dim-employment-share-change · *horizonte:* 1980-2005 · *ámbito:* EE.UU./ocupaciones de servicio
  > the share of US labor hours in service occupations grew by 30 percent between 1980 and 2005
- **contracción rutinaria 1.8 pp/década mayor (80 vs 20 pctil); coef servicios 0.336 (R2=0.27)** — Efecto del share rutinario inicial (RSH) de la CZ sobre cambio de empleo rutinario/servicios
  *dim:* dim-task-content-shift · *horizonte:* 1980-2005 · *ámbito:* zonas de commuting EE.UU./ocupaciones rutinarias/servicio
  > a commuting zone at the 80th percentile of 1980 RSH experienced a 1.8 percentage points larger contraction of the routine occupation share per decade
- **+6.4% por década** — Crecimiento del salario real en ocupaciones de servicio
  *dim:* dim-wages · *horizonte:* 1980-2005 · *ámbito:* EE.UU./ocupaciones de servicio
  > real wage growth in service occupations... averaging 6.4 percent per decade

  *engancha:* `confirma` Polarización por sesgo anti-rutina (RBTC)

### Maarten Goos, Alan Manning, Anna Salomons (2014)
`goos-manning-salomons-2014` · American Economic Review 104(8):2509-2526 · [fuente](https://personal.lse.ac.uk/manning/work/ExplainingJobPolarization.pdf)

- **+5.62 / -9.27 / +3.65 pp** — Cambio de participación: 8 mejor pagadas / 9 medianas / 4 peor pagadas
  *dim:* dim-employment-share-change · *horizonte:* 1993-2010 · *ámbito:* 16 países de Europa Occidental/todas las ocupaciones
  > High-paying occupations... 5.62... Middling occupations... -9.27... lowest-paid... 3.65
- **-0.90 pp/año por SD de RTI; offshorability pequeña, no significativa** — Efecto de RTI sobre crecimiento de empleo (offshorability no significativa)
  *dim:* dim-task-content-shift · *horizonte:* 1993-2010 · *ámbito:* 16 países/todas las industrias
  > one standard deviation more intense in RTI is growing 0.90 percentage points less fast each year... offshorability... not statistically significantly different from zero
- **79% (alto) / 74% (medio) / 66% (bajo)** — Fracción del cambio observado explicada por el modelo RBTC+offshoring
  *dim:* dim-employment-share-change · *horizonte:* 1993-2010 · *ámbito:* 16 países/todas
  > 79 percent (4.45/5.62)... 74 percent (6.86/9.27)... 66 percent (2.41/3.65)

  *engancha:* `confirma` Polarización por sesgo anti-rutina (RBTC)

### Loukas Karabarbounis & Brent Neiman (2014)
`karabarbounis-neiman2014` · Quarterly Journal of Economics 129(1): 61-103 · [fuente](https://www.nber.org/papers/w19136)  ⚠ **σ es ESTIMADA (no calibrada a dedo) y luego usada como input; el mecanismo (la caída del precio de los bienes de inversión reduce la tajada del trabajo) solo opera si σ>1. Lawrence (2015) argumenta que el supuesto de cambio técnico Hicks-neutral 'por construcción' obliga a σ>1.**

- **≈1,25 (promedio de seis estimaciones base 1,28)** — Elasticidad de sustitución capital-trabajo (σ), estimación preferida
  *dim:* dim-elasticidad-sustitucion (σ) · *horizonte:* largo plazo · *ámbito:* global (panel de países)/economía completa
  > our estimate of an elasticity of substitution significantly above one

  *engancha:* `confirma` La IA erosiona la participación del trabajo (si σ>1)

### Mary C. Daly & Bart Hobijn (2014)
`daly-hobijn-2014` · Journal of Money, Credit and Banking 46(S2): 51-93 · [fuente](https://www.frbsf.org/wp-content/uploads/wp2013-08.pdf)  ⚠ **EE.UU., CPS 1986-2011, micro. La rigidez es procíclica: muerde MÁS en recesión y a baja inflación, justo cuando el shock es adverso → φ cae cuando más importaría. El dato crudo robusto es la masa en cero (12%→16%); el 57% es de su modelo calibrado.**

- **12% (2006) → 16% (2011); más vinculante en recesión (φ implícito bajo, procíclico)** — Masa de trabajadores con cambio salarial nominal cero (rigidez a la baja), pico→fondo del ciclo
  *dim:* dim-wage-rigidity · *horizonte:* ciclo · *ámbito:* EE.UU./economía completa
  > In 2006 about 12 percent of workers reported zero wage change; in 2011 the share had risen to about 16 percent... during recessions the rigidities become more binding

  *engancha:* `confirma` El ajuste cae más en el empleo que en el salario (φ bajo)

### Erik Paul Johnson (2014)
`johnson-supply-elasticity2014` · Energy Economics (WP Georgia Tech 2011) — Price Elasticity of Supply of Renewable Electricity Generation · [fuente](https://www.sciencedirect.com/science/article/abs/pii/S0140988314000425)  ⚠ **Estimación IV publicada, identificada con el calendario de los RPS estatales. ES la única estimación econométrica dura de elasticidad de OFERTA que se halló (la literatura mide casi siempre demanda — laguna real). Pero es de capacidad RENOVABLE de LARGO PLAZO en un periodo de costos cayendo → probablemente el TECHO de elasticidad; la generación firme y el corto plazo son mucho más inelásticos.**

- **≈2,7 (preferida 2,714)** — Elasticidad-precio de la oferta de generación renovable (largo plazo)
  *dim:* dim-elasticidad-oferta-fisica · *horizonte:* largo plazo · *ámbito:* EE.UU./generación renovable
  > my preferred estimate of the supply elasticity is 2.7 ... for every 1% increase in the price of RECs, there will [be] approximately a 2.7% increase in renewable generating capacity

  *engancha:* `tensiona` La oferta de energía y cómputo es inelástica en el horizonte relevante

### David H. Autor (2015)
`autor2015-jobs` · Journal of Economic Perspectives 29(3): 3-30 · [fuente](https://www.aeaweb.org/articles?id=10.1257/jep.29.3.3)

- **signo indeterminado / históricamente neto positivo** — Mecanismo cualitativo: la automatización sustituye Y complementa el trabajo; los comentaristas sobreestiman la sustitución
  *dim:* dim-task-net-ambiguous (demanda de trabajo, dirección del efecto) · *horizonte:* décadas-siglos · *ámbito:* general / EE.UU. implícito/economía completa
  > Automation also complements labor, raises output in ways that leads to higher demand for labor... commentators tend to overstate the extent of machine substitution
- **ganancias en extremos no en el medio; polarización 'improbable de continuar'** — Polarización del mercado laboral; afirma que no persistirá
  *dim:* dim-wage-inequality (distribución salarial por percentil de habilidad) · *horizonte:* últimas décadas; prospectivo · *ámbito:* EE.UU./economía completa
  > this polarization is unlikely to continue very far into future

  *engancha:* `confirma` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `confirma` Polarización por sesgo anti-rutina (RBTC); `confirma` Reinstauración vía nuevas tareas

### James Bessen (2015)
`bessen2015-tellers` · 'Learning by Doing' (Yale UP); IMF F&D 52(1); EconTalk 2016 · [fuente](https://www.imf.org/external/pubs/ft/fandd/2015/03/bessen.htm)

- **≈20 → 13 cajeros/sucursal urbana (1988-2004)** — Cajeros por sucursal urbana (efecto del ATM)
  *dim:* dim-labor-intensity-establishment · *horizonte:* ~1988 a ~2004 · *ámbito:* EE.UU. urbano/banca
  > The average bank branch in an urban area required about 21 tellers... cut because of the ATM machine to about 13 tellers
- **empleo FTE de cajeros +2,0%/año desde 2000, más rápido que la fuerza laboral total** — Tendencia de empleo de cajeros tras difusión del ATM
  *dim:* dim-realized-employment-change · *horizonte:* desde 2000 · *ámbito:* EE.UU./banca
  > Since 2000, not only have teller jobs increased, but they've been growing a bit faster than the labor force

### Robert Z. Lawrence (2015)
`lawrence2015` · NBER Working Paper No. 21296 · [fuente](https://www.nber.org/papers/w21296)  ⚠ **Refuta directamente a Karabarbounis-Neiman: la caída de la tajada del trabajo se explica con σ<1 más cambio técnico labor-augmenting rápido, no con σ>1.**

- **≈0,5 (1980–2010 ≈0,54; 1999–2010 ≈0,49; tan baja como 0,19)** — Elasticidad de sustitución capital-trabajo (σ), estimaciones propias
  *dim:* dim-elasticidad-sustitucion (σ) · *horizonte:* largo plazo · *ámbito:* EE.UU./economía completa / manufactura

  *engancha:* `refuta` La IA erosiona la participación del trabajo (si σ>1)

### David H. Autor, Anna Salomons (2018)
`autor-salomons-2018-labor-displacing` · Brookings Papers on Economic Activity, Spring 2018, pp. 1-87 (NBER WP 24871) · [fuente](https://www.brookings.edu/wp-content/uploads/2018/03/1_autorsalomons.pdf)  ⚠ **Cifras verificadas contra el texto primario (borrador BPEA, 27-feb-2018, PDF de Brookings, extraido con pdftotext -layout). TODAS las cifras coinciden con Tablas 3A/3B/4/6B/8 y Figuras 1A/1C/2B. 'TFP' es la medida omnibus de cambio tecnologico (automatizacion), NO una medida directa de exposicion a IA ni IA generativa. Sample principal: 28 industrias, 18 paises OCDE, desde 1970 (hasta 2007, EU KLEMS). IV de patentes: USPTO citas (US y no-US), N=14,942. IV de robots (IFR): 16 industrias agregadas, 1993-2007, sin Canada/Irlanda/Luxemburgo/Japon. Extension 2007-2015 (Tabla 7) usa EUKLEMS 2017, 13 paises, no directamente comparable.**

- **-0.129** — Elasticidad OWN-INDUSTRY del empleo respecto a TFP (col. 1, Tabla 3A): un aumento de 1% en la TFP propia de la industria predice una caida de ~0.13% en el empleo de esa misma industria. Las horas caen 30-40% mas que el empleo (margen extensivo+intensivo). Es el EFECTO DIRECTO antes de derrames. VERIFICADO contra el texto primario (p. ~18).
  *dim:* dim-displacement-effect · *horizonte:*  · *ámbito:* /
- **+0.30 (empleo), +0.30 (horas), +0.63 (salario), +0.93 (masa salarial)** — Efecto de DEMANDA FINAL (NO es el 'efecto de productividad' del marco Acemoglu-Restrepo): elasticidad del empleo/horas/salario/masa-salarial respecto al valor agregado AGREGADO nacional (beta2, col. 3, Tabla 3A). Captura el canal por el que el crecimiento de productividad de una industria, al subir el ingreso agregado, AUMENTA la demanda de trabajo en toda la economia. Es lo que contrarresta el efecto directo de desplazamiento. VERIFICADO (p. ~22). Mapeado a dim-productivity-effect por ser el mecanismo productividad->demanda-laboral; el catalogo solo da nombres de dimension, no definiciones.
  *dim:* dim-productivity-effect · *horizonte:*  · *ámbito:* /
- **directo -0.068; demanda final +0.073; upstream grande positivo; downstream negligible; NETO +0.16/100 anual ≈ +5.92 (~6) log puntos sobre 37 años (1970-2007)** — Descomposicion del efecto NETO de la TFP sobre el EMPLEO AGREGADO en los 4 canales (Figura 1A). El efecto directo (-0.068, ~-2.5% sobre 37 años: 0.068/100*37=2.5) es MAS QUE COMPENSADO por demanda final (+0.073) y derrames upstream hacia industrias clientes. Resultado: automatizacion NO es desplazadora de empleo neto a nivel agregado. VERIFICADO (p. ~26-27).
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **-0.34** — Elasticidad OWN-INDUSTRY de la PARTICIPACION DEL TRABAJO respecto a la TFP (col. 4, panel D, Tabla 3B): un aumento de 1% en TFP predice una caida de 0.34% en la participacion del trabajo en el valor agregado de esa industria. Es el punto-estimado directo; algebraicamente equivale a wagebill-TFP=0.11 menos value-added-TFP=0.45 (=−0.34 en logs, identidad participacion=wagebill/VA). VERIFICADO (p. ~23-24).
  *dim:* dim-labor-share · *horizonte:*  · *ámbito:* /
- **directo -0.23/100 anual; offset upstream +0.12/100 anual (~mitad del directo); demanda final y supplier sin offset; NETO -0.143/100 anual = -5.3 log puntos sobre 1970-2007 (vs -6.3 observado, -0.169/100 anual)** — Descomposicion del efecto NETO de la TFP sobre la PARTICIPACION DEL TRABAJO (Figura 1C). A diferencia del empleo, el efecto directo negativo solo se compensa PARCIALMENTE (~mitad, 0.12/0.23≈0.52) via clientes (upstream); NO hay offset por demanda final ni proveedores. Resultado NETO negativo: automatizacion SI es desplazadora de la participacion del trabajo. El modelo reproduce ~el cambio observado (-5.3 estimado vs -6.3 observado). VERIFICADO (p. ~27).
  *dim:* dim-labor-share · *horizonte:*  · *ámbito:* /
- **-0.14 (1970s) → -0.32 (1980s) → -0.34 (1990s) → -0.47 (2000s)** — Elasticidad participacion-del-trabajo respecto a TFP por decada (Tabla 6B): se vuelve monotonicamente mas negativa. El efecto NETO desplazador de participacion fue 'esencialmente cero' en los 1970s y -4.51 log puntos entre 1980-2007 (Figura 2B). Conducido por la masa-salarial-TFP que cae monotonicamente de 0.17 (1970s) a 0.04 (2000s): debilitamiento de la respuesta de la masa salarial. VERIFICADO (p. ~29-30).
  *dim:* dim-labor-share · *horizonte:*  · *ámbito:* /
- **-0.35** — Efecto de la TFP (INSTRUMENTADA por flujos de citas de patentes extranjeras, 2SLS) sobre la participacion del trabajo (Tabla 8, col. 8 = -0.348**, sig.): muy comparable al OLS de Tabla 4 col. 8 (-0.348), con error estandar mayor. El instrumento de robots (IFR; primera etapa: +1 robot/1000 trab. → +0.175 log TFP, sig.) da segunda etapa cualitativamente igual (own-industry labor share -0.195, 'en el rango' pero imprecisa). Da plausibilidad CAUSAL al vinculo TFP→participacion. VERIFICADO (p. ~32-34).
  *dim:* dim-labor-share · *horizonte:*  · *ámbito:* /
- **0.45 (value-added-TFP); ~-0.40 (precio-TFP; coef. preciso -0.387) → elasticidad de demanda implicita 1.2 (=0.455/0.387)** — Un aumento de 1% en TFP predice +0.45% en valor agregado nominal y ~-0.40% en el deflactor de precios de la industria; implica una elasticidad-demanda de producto de ~1.2. Mecanismo del canal de productividad: la TFP baja precios y expande output, lo que sostiene la demanda de trabajo via clientes. VERIFICADO (p. ~23): el texto dice 'aproximadamente 0.40' y usa -0.387/0.455 para el calculo de 1.2.
  *dim:* dim-productivity-tfp · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` Automatización vs aumento (dirección de diseño, Turing Trap); `confirma` Exposición no es empleo neto; `confirma` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `informa` Desplazamiento domina en el periodo reciente (post-1987); `informa` La IA ensancha (no reduce) la desigualdad

### U.S. Energy Information Administration (2018)
`eia-energy-gdp-share` · EIA — Today in Energy: total energy expenditures as share of GDP · [fuente](https://www.eia.gov/todayinenergy/detail.php?id=36754)  ⚠ **Fuente primaria (EIA, leída directa) para el 5,6% de 2016. El rango oscilante 4,8% (2020) – 6,7% (2022) y el pico >8% en los shocks petroleros de los 70–80 vienen de otras páginas EIA vía búsqueda, no verificados verbatim. Ancla la constante s_P (tajada física actual) del motor, ~0,05–0,08.**

- **5,6% (2016); rango histórico ~5–7%** — Gasto total en energía como % del PIB (EE.UU.)
  *dim:* dim-captura-renta-factor-fijo · *horizonte:* 1970–2023 · *ámbito:* EE.UU./energía
  > Expressed as a percent of gross domestic product (GDP), total energy expenditures were 5.6% in 2016, the lowest since at least 1970.

  *engancha:* `informa` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Daron Acemoglu, Pascual Restrepo (2019)
`acemoglu-restrepo-2019-newtasks` · Journal of Economic Perspectives 33(2): 3-30 (NBER WP 25684) · [fuente](https://shapingwork.mit.edu/wp-content/uploads/2023/10/acemoglu-restrepo-2019-automation-and-new-tasks-how-technology-displaces-and-reinstates-labor.pdf)

- **desplazamiento -0.48%/año; reinstauración +0.47%/año (se compensan)** — Desplazamiento vs reinstauración, posguerra
  *dim:* dim-task-content-shift · *horizonte:* 1947-1987 · *ámbito:* EE.UU./economía completa
  > the displacement effect reduced labor demand at about 0.48 percent per year, but... reinstatement effect... 0.47 percent per year
- **desplazamiento -0.7%/año; reinstauración +0.35%/año; neto -0.35%/año (~-10% acum.; manufactura -1.1%/año, ~-30%)** — Desplazamiento vs reinstauración, periodo reciente
  *dim:* dim-task-content-shift · *horizonte:* 1987-2017 · *ámbito:* EE.UU./economía privada
  > reinstatement increased labor demand only by 0.35 percent per year... displacement reduced labor demand by 0.7 percent per year
- **~50%** — Share del crecimiento del empleo en ocupaciones con tareas nuevas/cambiadas
  *dim:* dim-reinstatement-effect · *horizonte:* 1980-2015 · *ámbito:* EE.UU./economía completa
  > about half of employment growth over 1980-2015 took place in occupations in which job titles or tasks performed by workers changed

  *engancha:* `confirma` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `confirma` Desplazamiento domina en el periodo reciente (post-1987); `confirma` Reinstauración vía nuevas tareas

### Supreet Kaur (2019)
`kaur-2019` · American Economic Review 109(10): 3585-3616 · [fuente](https://www.nber.org/papers/w20770.pdf)  ⚠ **Cuasi-experimental (lluvia como instrumento), mercados rurales en India. Es el LÍMITE de φ→0 (rigidez casi total), no la mediana: alta validez interna, baja validez externa para un shock de IA en economías desarrolladas. Demuestra causalmente que la rigidez desvía el ajuste al empleo.**

- **−9% de empleo por el efecto trinquete; salarios no caen en sequía (φ implícito ≈0, cota inferior)** — Costo en empleo de la rigidez nominal a la baja (el precio atascado → todo el ajuste en cantidad)
  *dim:* dim-wage-rigidity · *horizonte:* 1 año · *ámbito:* India rural/agricultura
  > Nominal wages rise in response to positive shocks but do not fall during droughts... This ratcheting effect generates a 9% reduction in employment levels

  *engancha:* `confirma` El ajuste cae más en el empleo que en el salario (φ bajo)

### Anton Korinek & Joseph E. Stiglitz (2019)
`korinek-stiglitz2019` · The Economics of AI (NBER), cap. 14 / NBER WP 24174 · [fuente](https://www.nber.org/papers/w24174)  ⚠ **Fuente primaria. Es el origen de la tesis: cuando la máquina vuelve al trabajo un factor reproducible, el crecimiento queda limitado por el factor irreproducible que sobrevive, y la renta se acumula en él. No nombra aún el factor físico (lo hace Korinek-Suh).**

- **tesis: toda la renta → el factor irreproducible** — El factor irreproducible captura los beneficios del progreso
  *dim:* dim-captura-renta-factor-fijo · *horizonte:* largo plazo · *ámbito:* —/—
  > in the long run, growth will likely be limited by some other irreproducible factor, and all the benefits of technological progress will accrue to that factor

  *engancha:* `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Philippe Aghion, Benjamin F. Jones & Charles I. Jones (2019)
`aghion-jones-jones2019` · The Economics of AI (NBER), cap. 9 / NBER WP 23928 · [fuente](https://web.stanford.edu/~chadj/AJJ-AIandGrowth.pdf)  ⚠ **Fuente primaria. Aporta el motor Baumol que conecta σ<1 con el cuello: lo esencial y difícil de mejorar gobierna el crecimiento. Su extensión 'natural laws' apunta explícitamente a la física/termodinámica como restricción última — el mecanismo es agnóstico al tipo de factor, aplica a los átomos. Distinto de jones2025 (ya en el mapa); es el paper de 2019.**

- **lo esencial y difícil de mejorar (no lo que se hace bien) limita el crecimiento** — El cuello (Baumol) gobierna el crecimiento
  *dim:* dim-captura-renta-factor-fijo · *horizonte:* largo plazo · *ámbito:* —/—
  > Economic growth may be constrained not by what we do well but rather by what is essential and yet hard to improve

  *engancha:* `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Daron Acemoglu, Pascual Restrepo (2020)
`acemoglu-restrepo-2020-robots` · Journal of Political Economy 128(6): 2188-2244 (NBER WP 23285) · [fuente](https://www.nber.org/system/files/working_papers/w23285/w23285.pdf)

- **-0.18 a -0.34 pp** — Efecto de +1 robot/1000 trabajadores sobre empleo-población
  *dim:* dim-emp-pop-ratio-change · *horizonte:* 1990-2007 · *ámbito:* zonas de commuting EE.UU./todos (manufactura)
  > one more robot per thousand workers reduces the employment to population ratio by about 0.18-0.34 percentage points and wages by 0.25-0.5 percent
- **-6.2 / -5.6 / -3.0** — Empleos desplazados por robot (local sin comercio / GE con comercio / cota inferior)
  *dim:* dim-jobs-per-robot · *horizonte:* 1990-2007 · *ámbito:* EE.UU./todos
  > one more robot in a commuting zone reduces employment by 6.2 workers... 5.6 workers... as low as... 3 workers

  *engancha:* `confirma` Robots reducen empleo y salarios locales; `confirma` Desplazamiento domina en el periodo reciente (post-1987)

### Michael Webb (2020)
`webb-2020-ai-labor` · Stanford job-market paper; SSRN id3482150 · [fuente](https://www.michaelwebb.co/webb_ai.pdf)

- **empleo -9 a -18%; salarios -8 a -14%** — Caída de share de empleo y salarios, 25→75 pctil de exposición a ROBOTS (correlacional)
  *dim:* dim-realized-employment-change · *horizonte:* 1980-2010 · *ámbito:* EE.UU./economía completa
  > moving from the 25th to the 75th percentile of exposure to robots is associated with a decline in within-industry employment shares of between 9 and 18%... wages of between 8 and 14%
- **empleo -7 a -11%; salarios -2 a -6%** — Caída software (25→75 pctil)
  *dim:* dim-realized-employment-change · *horizonte:* 1980-2010 · *ámbito:* EE.UU./economía completa
  > For software... declines of 7-11% and 2-6%
- **-4% (software) / -9% (robot)** — Proyección de desigualdad 90:10 desde IA (coef software / robot)
  *dim:* dim-wage-inequality · *horizonte:* largo plazo (proyección por supuesto) · *ámbito:* EE.UU./economía completa
  > I project a 4% decrease in 90:10 inequality; using the robot coefficient, the decrease is 9%
- **mayor para alta calificación, pico ~pctil 90; top 1% no afectado** — Gradiente de habilidad de la exposición a IA
  *dim:* dim-exposure-skill-gradient · *horizonte:* actual · *ámbito:* EE.UU./economía completa
  > high-skill occupations are most exposed to AI, with exposure peaking at about the ninetieth percentile

  *engancha:* `confirma` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `confirma` Exposición no es empleo neto

### Andrew Atkeson (2020)
`atkeson2020-labor-share` · Review of Economic Dynamics — 'Alternative Facts about the Labor Share' · [fuente](https://sites.google.com/site/andyatkeson/home/publications)  ⚠ **Agregado desde la discusión del podcast + confirmación de abstract; no lectura completa. Verificar contra primaria antes de publicar.**

- **la caída aparente desaparece al mantener constante la metodología contable (capital intangible/IPP)** — Tendencia del labor share de EE.UU.
  *dim:* dim-labor-share · *horizonte:* décadas · *ámbito:* EE.UU./economía completa
  > Alternative Facts about the Labor Share (tesis, vía discusión)

  *engancha:* `tensiona` La IA ensancha (no reduce) la desigualdad; `tensiona` Desplazamiento domina en el periodo reciente (post-1987)

### Michael Knoblach, Martin Roessler & Patrick Zwerschke (2020)
`knoblach2020` · Oxford Bulletin of Economics and Statistics 82(1): 62-82 · [fuente](https://onlinelibrary.wiley.com/doi/10.1111/obes.12312)  ⚠ **Meta-regresión de 2.419 estimaciones (77 estudios). El paper PUBLICADO da un RANGO de largo plazo 0,45–0,87, no un punto central único; el '0,6–0,7' que suele citarse viene del working paper. La ancla en el slider (0,66) es el punto medio del rango.**

- **0,45–0,87 (largo plazo); corto plazo cercano a proporciones fijas** — Meta-elasticidad de sustitución (σ), largo plazo agregado
  *dim:* dim-elasticidad-sustitucion (σ) · *horizonte:* largo plazo · *ámbito:* EE.UU./economía completa

  *engancha:* `tensiona` La IA erosiona la participación del trabajo (si σ>1)

### Erik Brynjolfsson, Daniel Rock, Chad Syverson (2021)
`brynjolfsson2021jcurve` · AEJ: Macroeconomics 13(1):333-372 (NBER WP 25148) · [fuente](https://www.nber.org/system/files/working_papers/w25148/w25148.pdf)

- **+15.9% nivel a 2017; subestimación temprana, sobreestimación tardía** — TFP ajustada por intangibles vs oficial (2017); curva-J
  *dim:* dim-productivity-tfp · *horizonte:* acumulado a 2017 · *ámbito:* EE.UU./economía completa
  > adjusted measure TFP is... 15.9% higher than official measures at the end of 2017... initially be underestimated... Later... overestimates

  *engancha:* `confirma` Rezago de tecnología de propósito general (GPT); `tensiona` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición

### Edward W. Felten, Manav Raj, Robert Seamans (2021)
`felten-2021-aioe` · Strategic Management Journal 42(12):2195-2217 · [fuente](https://ideas.repec.org/a/bla/stratm/v42y2021i12p2195-2217.html)

- **índice continuo por ocupación; sin afirmación de efecto de empleo** — Definición/alcance del AIOE
  *dim:* dim-occupation-exposure · *horizonte:* capacidad ~2019 · *ámbito:* EE.UU./todas las ocupaciones
  > We create and validate a new measure of an occupation's exposure to AI that we call the AI Occupational Exposure (AIOE)

  *engancha:* `confirma` Exposición no es empleo neto

### Ezra Oberfield & Devesh Raval (2021)
`oberfield-raval2021` · Econometrica 89(2): 703-732 · [fuente](https://www.nber.org/papers/w20452)  ⚠ **El número agregado (0,5–0,7) es para el SECTOR MANUFACTURERO de EE.UU., no la economía entera; a nivel de planta σ≈0,3–0,5, la reasignación entre plantas la sube. Lo más cercano a un σ agregado micro-fundado.**

- **≈0,5–0,7 (planta ≈0,3–0,5)** — Elasticidad de sustitución capital-trabajo (σ), agregada
  *dim:* dim-elasticidad-sustitucion (σ) · *horizonte:* estructural · *ámbito:* EE.UU./manufactura

  *engancha:* `tensiona` La IA erosiona la participación del trabajo (si σ>1)

### Erik Brynjolfsson (2022)
`brynjolfsson2022turingtrap` · Daedalus 151(2) · [fuente](https://www.amacad.org/sites/default/files/publication/downloads/Daedalus_Sp22_19_Brynjolfsson.pdf)

- **cualitativo: sustitución reduce poder/participación; aumento los preserva** — Distinción automatización vs aumento (mecanismo de poder de negociación)
  *dim:* dim-collaboration-mode · *horizonte:* n/a · *ámbito:* n/a/n/a
  > when AI... automates existing human capabilities, machines become better substitutes for human labor and workers lose economic and political bargaining power
- **en declive; tecnología es el mayor factor** — Tendencia de la participación del trabajo
  *dim:* dim-labor-share · *horizonte:* ~40 años · *ámbito:* EE.UU./economía completa
  > the labor share of the economy declining... changes in technology deployment are the single biggest explanation

  *engancha:* `confirma` Automatización vs aumento (dirección de diseño, Turing Trap); `confirma` La IA ensancha (no reduce) la desigualdad

### Daron Acemoglu, Pascual Restrepo (2022)
`acemoglu-restrepo-2022-wage-inequality` · Econometrica, Vol. 90, No. 5 (September 2022), pp. 1973-2016 (DOI 10.3982/ECTA19815; NBER w28920) · [fuente](https://economics.mit.edu/sites/default/files/2022-10/Tasks%20Automation%20and%20the%20Rise%20in%20US%20Wage%20Inequality.pdf)  ⚠ **TODAS las cifras verificadas verbatim contra el PDF primario de Econometrica (vol. 90 no. 5, copia abierta alojada en economics.mit.edu): 50-70% (intro, 'direct task displacement explains 50-70%...'); 50%/80% (GE, 'automation —incorporating general equilibrium effects— accounts for 50%... 80% of the rise in the college premium'); -8.8%/-2.3% (GE nivel, verbatim); 3.4% TFP acumulada (verbatim, vs 35% observada verbatim); 45% labor shares 1987-2016 (verbatim); 10% SBTC (verbatim); 13%/un tercio manufactura (verbatim). El verificador NO eliminó ni degradó ninguna cifra. CUIDADO con cifras que suenan iguales: el 50-70% es FORMA REDUCIDA (asociación entre 500 grupos, varianza de salarios relativos); el 50%/80%/-8.8%/-2.3%/3.4% son resultados de EQUILIBRIO GENERAL del ejercicio cuantitativo. El 50-70% mide varianza de salarios relativos entre grupos, NO 'puestos perdidos' ni participación del trabajo; los autores advierten explícitamente (verbatim) que 'task displacement does not need to be associated with job loss'. Única atribución que es inferencia del lector (no textual): el desglose de los 15pp de caída del salario real de hombres sin secundaria en ~8.8pp por automatización.**

- **50-70%** — Fracción de los cambios en la ESTRUCTURA SALARIAL de EE.UU. 1980-2016 que el desplazamiento DIRECTO de tareas explica en forma reducida (regresiones de base sobre 500 grupos demográficos por educación/género/edad/raza/estatus migratorio). Cita verbatim (intro §1): 'direct task displacement explains 50-70% of the changes in wage structure across groups between 1980 and 2016.' El abstract lo fraseado como 'between 50% and 70% of changes in the U.S. wage structure ... are accounted for by relative wage declines of worker groups specialized in routine tasks in industries experiencing rapid automation.' Mide VARIANZA ENTRE GRUPOS de salarios relativos, NO participación del trabajo ni puestos. (En equilibrio general con efectos ripple esta cifra sube a 94%, no usada aquí.)
  *dim:* dim-wage-inequality · *horizonte:*  · *ámbito:* /
- **50%** — Fracción de los cambios en la estructura salarial 1980-2016 atribuida a la automatización incorporando efectos de EQUILIBRIO GENERAL (composición industrial + efectos ripple por reasignación de tareas), distinta de la cifra reducida 50-70%. Cita verbatim: 'automation —incorporating general equilibrium effects— accounts for 50% of the changes in the wage structure during this period' (la conclusión §6 la describe como 'close to 50%').
  *dim:* dim-wage-inequality · *horizonte:*  · *ámbito:* /
- **80%** — Fracción del AUMENTO de la prima universitaria (college premium) 1980-2016 explicada por la automatización en equilibrio general. Cita verbatim: 'explains 80% of the rise in the college premium.' (En el cuerpo: el desplazamiento de tareas genera un alza de 21% en la prima universitaria = 80% del aumento observado.)
  *dim:* dim-wage-inequality · *horizonte:*  · *ámbito:* /
- **-8.8% (hombres) / -2.3% (mujeres)** — Efecto NIVEL en equilibrio general de la automatización sobre el salario real de desertores de secundaria (high-school dropouts) 1980-2016, por género. Cita verbatim: 'automation reduced the real wage of high-school dropout men by 8.8% and high-school dropout women by 2.3%.' (Contexto del paper: el salario real observado de hombres sin secundaria es 15% menor que en 1980 —'now 15% lower than they were in 1980'—; la atribución de ~8.8pp de esos 15 a la automatización es inferencia del lector, no afirmación textual.)
  *dim:* dim-wages · *horizonte:*  · *ámbito:* /
- **3.4% (acumulado)** — Aumento ACUMULADO de la TFP atribuible a la automatización 1980-2016. Cita verbatim: 'automation accounts only for a (cumulative) 3.4% increase in TFP between 1980 and 2016.' Núcleo del argumento 'so-so automation': grandes efectos distributivos con ganancias de productividad modestas. Descomposición del paper: ≈10% del PIB en tareas desplazadas × ~30% de ahorro de costos ≈ 3% ('0.1 × 0.3 ≈ 3%'). Comparar: la TFP OBSERVADA creció 35% en el periodo ('in the data TFP grew by 35% during this period') — confirmado verbatim.
  *dim:* dim-productivity-tfp · *horizonte:*  · *ámbito:* /
- **45%** — Fracción de los cambios OBSERVADOS en la participación del trabajo por industria (1987-2016) que los proxies de automatización (adopción de robots, software especializado y maquinaria dedicada) explican. Cita verbatim: 'These proxies of automation account for 45% of the observed changes in industry labor shares from 1987 to 2016.'
  *dim:* dim-labor-share · *horizonte:*  · *ámbito:* /
- **10%** — Fracción de los cambios en la estructura salarial atribuible a formas estándar de SBTC (productividad de los trabajadores evolucionando por educación/género) — pequeño frente al 50-70% del desplazamiento de tareas. Cita verbatim: 'standard forms of SBTC ... which account for 10% of the changes in the wage structure.'
  *dim:* dim-wage-inequality · *horizonte:*  · *ámbito:* /
- **13% / un tercio** — El desplazamiento de tareas dentro de la manufactura genera una reducción de 13% en la masa salarial (wage bill) del sector, lo que da cuenta de un tercio de la caída de la demanda laboral en manufactura 1980-2016. Cita verbatim: 'task displacement within manufacturing generates a large, 13%, reduction in the wage bill of that sector, accounting for a third of the decline in manufacturing labor demand for 1980-2016.'
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` Desplazamiento domina en el periodo reciente (post-1987); `aplica` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `tensiona` Polarización por sesgo anti-rutina (RBTC); `informa` La IA ensancha (no reduce) la desigualdad; `informa` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `informa` Exposición no es empleo neto

### Marius Hobbhahn & Tamay Besiroglu (2022)
`epoch-gpu-price-perf2022` · Epoch AI — Trends in GPU price-performance · [fuente](https://epoch.ai/blog/trends-in-gpu-price-performance)  ⚠ **Fuente primaria, dataset público de 470 GPUs (2006–2021). Es la cifra ancla canónica del abaratamiento del hardware. Caveat: la serie termina en 2021; el '~40%/año' reciente (2012–2025) viene de una actualización de Epoch que se leyó vía relay, no verbatim.**

- **2,46 años (IC95% 2,24–2,72); GPUs de ML 2,07 años** — FLOP/s por dólar del hardware, tiempo de duplicación
  *dim:* dim-abundancia-computo · *horizonte:* 2006–2021 · *ámbito:* global/hardware de cómputo
  > FLOP/s per dollar doubles every 2.46 years (95% CI: 2.24 to 2.72 years)

  *engancha:* `informa` La escasez se muda del trabajo a los recursos físicos

### Rupert Way, J. Doyne Farmer, et al. (2022)
`way-farmer2022` · Joule 6(9) / INET Oxford WP — Empirically grounded technology forecasts and the energy transition · [fuente](https://www.cell.com/joule/fulltext/S2542-4351(22)00410-X)  ⚠ **Working paper primario (la versión Joule dio paywall). Es la contracara más rigurosa (peer-reviewed, forecasting probabilístico): la energía se ABARATA ~10%/año por la curva de aprendizaje (ley de Wright) → a largo plazo no es el factor escaso. Tensiona directamente la tesis (equivale a η alta y σ→1 de largo plazo).**

- **solar/eólica/baterías caen ~10%/año (solar ~15%); transición rápida = ahorro neto de billones** — Curva de aprendizaje de la energía limpia
  *dim:* dim-cuello-energetico · *horizonte:* largo plazo · *ámbito:* global/energía limpia
  > (roughly) exponentially at a rate near 10% per year

  *engancha:* `refuta` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Tyna Eloundou, Sam Manning, Pamela Mishkin, Daniel Rock (2023)
`eloundou-2023-gpts` · Science 384(6702):1306-1308 (2024); preprint arXiv:2303.10130 (2023) · [fuente](https://www.science.org/doi/10.1126/science.adj0998)

- **~80% / ~19%** — Trabajadores con ≥10% / ≥50% de tareas afectadas por LLMs
  *dim:* dim-task-exposure · *horizonte:* capacidad actual · *ámbito:* EE.UU./economía completa
  > around 80% of the U.S. workforce could have at least 10% of their work tasks affected... 19% of workers may see at least 50% of their tasks impacted
- **~15% (solo) → 47-56% (con software/tooling)** — Tareas completables más rápido: LLM solo vs con tooling
  *dim:* dim-task-exposure · *horizonte:* actual / cercano · *ámbito:* EE.UU./economía completa
  > about 15% of all worker tasks... increases to between 47 and 56%... when incorporating software and tooling
- **positivo (empleos de mayor ingreso más expuestos)** — Gradiente exposición-salario
  *dim:* dim-exposure-skill-gradient · *horizonte:* actual · *ámbito:* EE.UU./economía completa
  > higher-income jobs potentially facing greater exposure

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` La IA expone trabajo alto-calificado (a diferencia de automatización previa)

### Erik Brynjolfsson, Danielle Li, Lindsey R. Raymond (2023)
`brynjolfsson-li-raymond-2023` · Quarterly Journal of Economics 140(2):889-942 (2025), DOI 10.1093/qje/qjae044; preprint NBER WP 31161 / arXiv 2304.11771 · [fuente](https://academic.oup.com/qje/article/140/2/889/7990658)

- **+15% issues resueltos/hora en promedio (QJE 2025)** — Productividad laboral (resoluciones/hora), DiD escalonado, 5.172 agentes de soporte
  *dim:* dim-productivity-task-rct · *horizonte:*  · *ámbito:* /
- **~+30% los menos calificados (+36% el quintil más bajo); ~0% los más calificados** — Heterogeneidad de la ganancia de productividad por habilidad
  *dim:* dim-productivity-dispersion · *horizonte:*  · *ámbito:* /
- **baja (por retención de novatos)** — Atrición de trabajadores
  *dim:* dim-employment-separations · *horizonte:* mismo · *ámbito:* mismo/call center
  > a decrease in worker attrition, which is driven by the retention of newer workers
- **sin cambio económicamente significativo (-0.12 pp)** — Satisfacción del cliente (NPS)
  *dim:* dim-output-quality · *horizonte:* mismo · *ámbito:* mismo/call center
  > no economically significant change in customer satisfaction... -0.12 percentage points

  *engancha:* `confirma` Nivelación de habilidades (la IA comprime la distribución de productividad); `confirma` Exposición no es empleo neto; `confirma` El contexto invierte el signo (no hay multiplicador único de productividad)

### Shakked Noy, Whitney Zhang (2023)
`noy-zhang-2023` · Science 381(6654):187-192 (2023), DOI 10.1126/science.adh2586; preprint MIT/SSRN id4375283 · [fuente](https://www.science.org/doi/10.1126/science.adh2586)

- **−40% tiempo promedio (Science 2024; el WP MIT daba −37%)** — Tiempo en tarea de escritura profesional (RCT, 453 profesionales)
  *dim:* dim-productivity-task-rct · *horizonte:*  · *ámbito:* /
- **+18% calidad del output (Science 2024; el WP daba +0.45 SD — normalización distinta, no equiparar)** — Calidad del output evaluada (RCT)
  *dim:* dim-output-quality · *horizonte:*  · *ámbito:* /
- **correlación de persistencia de calidad cae 0.49→0.25** — Compresión de desigualdad entre trabajadores
  *dim:* dim-productivity-dispersion · *horizonte:* dos tareas · *ámbito:* online/escritura profesional
  > correlation of 0.49... is only 0.25 (p-value on difference in slopes = 0.004)
- **68% envía output sin editar → sustitución** — Sustitución vs complementariedad
  *dim:* dim-collaboration-mode · *horizonte:* tarea única · *ámbito:* online/escritura profesional
  > 68% of treated participants report submitting ChatGPT's initial output without editing it

  *engancha:* `confirma` Nivelación de habilidades (la IA comprime la distribución de productividad); `confirma` Exposición no es empleo neto

### Sida Peng, Eirini Kalliamvakou, Peter Cihon, Mert Demirer (2023)
`peng-copilot-2023` · arXiv 2302.06590 · [fuente](https://arxiv.org/pdf/2302.06590)

- **-55.8% (71.17 vs 160.89 min; p=0.0017)** — Tiempo de completar tarea (RCT greenfield, HTTP server en JS)
  *dim:* dim-productivity-task-rct · *horizonte:* tarea única · *ámbito:* freelancers (India/Pakistán)/desarrollo de software
  > the treated group completed the task 55.8% faster (95% CI: 21-89%)
- **menos experimentados/mayores/más carga se benefician más** — Heterogeneidad por experiencia
  *dim:* dim-productivity-dispersion · *horizonte:* tarea única · *ámbito:* freelancers/software
  > Developers with less programming experience, older programmers... benefited the most

  *engancha:* `confirma` El contexto invierte el signo (no hay multiplicador único de productividad); `confirma` Nivelación de habilidades (la IA comprime la distribución de productividad)

### Pawel Gmyrek, Janine Berg, David Bescond (2023)
`ilo-gmyrek-2023` · ILO Working Paper 96 · [fuente](https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@dgreports/@inst/documents/publication/wcms_890761.pdf)

- **24% alta; 58% media (otros grupos 1-4%)** — Tareas clericales expuestas
  *dim:* dim-task-exposure · *horizonte:* potencial · *ámbito:* global/trabajo clerical
  > 24 per cent of clerical tasks considered highly exposed and an additional 58 percent with medium-level exposure
- **0.4% (LIC) → 5.5% (HIC); mujeres HIC 7.8% vs hombres 2.9%** — Empleo con potencial de automatización (LIC vs HIC)
  *dim:* dim-automation-potential · *horizonte:* potencial · *ámbito:* LIC / HIC/economía completa
  > In low-income countries, only 0.4 per cent... in high-income countries the share rises to 5.5 percent
- **10.4% (LIC) → 13.4% (HIC)** — Empleo con potencial de aumento
  *dim:* dim-augmentation-potential · *horizonte:* potencial · *ámbito:* LIC / HIC/economía completa
  > augmentation... 10.4 percent of employment in low-income countries and 13.4 percent... in high-income countries

  *engancha:* `confirma` Automatización vs aumento (dirección de diseño, Turing Trap); `confirma` Exposición no es empleo neto; `informa` La IA ensancha (no reduce) la desigualdad

### OECD (Employment Outlook 2023; Lane, Williams, Broecke) (2023)
`oecd-emo-2023` · OECD Employment Outlook 2023 · [fuente](https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/07/oecd-employment-outlook-2023_904bcef3/08785bba-en.pdf)

- **limitado hasta ahora** — Impacto realizado de la IA sobre niveles de empleo a la fecha
  *dim:* dim-realized-labor-demand · *horizonte:* a 2023 (realizado) · *ámbito:* OCDE/transversal
  > the impact of AI on job levels has been limited so far
- **27%** — Empleo en ocupaciones de mayor riesgo de automatización
  *dim:* dim-automation-potential · *horizonte:* potencial · *ámbito:* OCDE (muestra)/transversal
  > the occupations at the highest risk of automation account for 27% of employment
- **42% (finanzas) / 41% (manufactura)** — Trabajadores que esperan que la IA baje salarios (finanzas/manufactura)
  *dim:* dim-worker-wage-expectation · *horizonte:* próximos 10 años (expectativa) · *ámbito:* 7 países/finanzas y manufactura
  > 42% of workers surveyed in finance expected that AI would decrease wages... In manufacturing, 41%
- **2-23%** — Adopción de IA por empresas (UE)
  *dim:* dim-firm-adoption · *horizonte:* ~2021-22 (realizado) · *ámbito:* OCDE-UE/transversal
  > enterprise-level AI adoption ranges from 23% in Ireland... to... 2% in Latvia

  *engancha:* `confirma` El potencial está limitado por la adopción y la co-invención; `confirma` La IA ensancha (no reduce) la desigualdad; `confirma` Exposición no es empleo neto

### World Economic Forum (2023)
`wef-fojr-2023` · WEF Future of Jobs Report 2023 · [fuente](https://www3.weforum.org/docs/WEF_Future_of_Jobs_2023.pdf)

- **-83M / +69M / neto -14M (-2%)** — Empleos perdidos/creados/neto, 2023-2027
  *dim:* dim-net-employment-forecast · *horizonte:* 2023-2027 · *ámbito:* 45 economías (673M)/transversal
  > 83 million jobs are projected to be lost and 69 million... created... reduction... of 14 million jobs, or 2%
- **23% (152M)** — Rotación estructural
  *dim:* dim-structural-churn · *horizonte:* 2023-2027 · *ámbito:* 45 economías/transversal
  > structural labour-market churn of 152 million jobs, or 23% of the 673 million

  *engancha:* `confirma` Mucha rotación, neto pequeño e incierto

### McKinsey Global Institute (Chui, Hazan, Roberts et al.) (2023)
`mckinsey-econ-potential-2023` · McKinsey Global Institute (junio 2023) · [fuente](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)

- **$2.6T-$4.4T/año** — Valor económico anual de IA generativa
  *dim:* dim-economic-value · *horizonte:* potencial anual · *ámbito:* global/63 casos de uso
  > generative AI could add the equivalent of $2.6 trillion to $4.4 trillion annually
- **60-70%** — Tiempo de empleados automatizable
  *dim:* dim-automatable-hours · *horizonte:* con IA generativa actual · *ámbito:* global/transversal
  > automate work activities that absorb 60 to 70 percent of employees' time today
- **0.1-0.6 pp/año** — Crecimiento de productividad laboral
  *dim:* dim-labor-productivity-growth · *horizonte:* a 2040 · *ámbito:* global/transversal
  > labor productivity growth of 0.1 to 0.6 percent annually through 2040

  *engancha:* `confirma` Exposición no es empleo neto

### McKinsey Global Institute (Ellingrud, Sanghvi et al.) (2023)
`mckinsey-us-2023` · McKinsey Global Institute (julio 2023) · [fuente](https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america)

- **21.5% → 29.5%** — Horas automatizables a 2030 (sin vs con IA generativa)
  *dim:* dim-automatable-hours · *horizonte:* a 2030 · *ámbito:* EE.UU./transversal
  > Without generative AI... 21.5 percent... With generative AI, that share has jumped to 29.5 percent
- **12M adicionales; salario bajo hasta 14x más propenso** — Transiciones ocupacionales adicionales y carga regresiva
  *dim:* dim-occupational-transitions · *horizonte:* a 2030 · *ámbito:* EE.UU./transversal
  > An additional 12 million occupational transitions may be needed by 2030... lower-wage jobs are up to 14 times more likely to need to change occupations

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` La IA ensancha (no reduce) la desigualdad; `confirma` Mucha rotación, neto pequeño e incierto

### Daron Acemoglu (2024)
`acemoglu2024simple` · NBER Working Paper No. 32487 · [fuente](https://www.nber.org/system/files/working_papers/w32487/w32487.pdf)

- **0.66% (conservador <0.53%)** — Aumento de TFP a 10 años (cota superior)
  *dim:* dim-productivity-tfp · *horizonte:* 10 años · *ámbito:* EE.UU./economía completa
  > no more than a 0.66% increase in total factor productivity (TFP) over 10 years
- **20% de tareas expuestas** — Tareas expuestas a LLMs
  *dim:* dim-task-exposure · *horizonte:*  · *ámbito:* /
- **23% rentables de automatizar; 27% ahorro por tarea; 14.4% ahorro agregado** — Automatización rentable y ahorro de costo por tarea
  *dim:* dim-automation-potential · *horizonte:*  · *ámbito:* /
- **0.93-1.16% (hasta 1.4-1.56%)** — Crecimiento del PIB a 10 años
  *dim:* dim-pib-crecimiento · *horizonte:* 10 años · *ámbito:* EE.UU./economía completa
  > GDP is also estimated to grow by 0.93% − 1.16% over the next 10 years... upper bound... 1.4% − 1.56%
- **0.35 → 0.36; +1.3% para sin-secundaria** — Cambio de desigualdad salarial entre-grupos
  *dim:* dim-wage-inequality · *horizonte:* 10 años · *ámbito:* EE.UU./economía completa
  > the between-group standard deviation of log wages... increases slightly, from 0.35 to 0.36

  *engancha:* `confirma` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `confirma` La IA ensancha (no reduce) la desigualdad; `tensiona` La distribución de complejidad de tareas decide todo (bifurcación)

### Anton Korinek, Donghyun Suh (2024)
`korinek2024scenarios` · NBER WP 32255 / arXiv:2403.12107 · [fuente](https://arxiv.org/pdf/2403.12107)

- **~2%/año vs 18%/año** — Crecimiento de output: business-as-usual vs AGI (distribución acotada)
  *dim:* dim-pib-crecimiento · *horizonte:* estado estacionario · *ámbito:* modelo/economía completa
  > output grows at approximately 2% per year... steady-state growth of 18% per year
- **sube-luego-colapsa (acotada; colapso ~3 años en escenario agresivo) vs sube-para-siempre (no acotada)** — Trayectoria salarial según cola de tareas (acotada vs no acotada)
  *dim:* dim-wages · *horizonte:* transición ~3-20 años / infinito · *ámbito:* modelo/economía completa
  > wages grow slightly during the initial periods but then collapse before full automation is reached... both output and wages rise forever

  *engancha:* `confirma` La distribución de complejidad de tareas decide todo (bifurcación); `tensiona` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `informa` Los weak links acotan el crecimiento y capturan el retorno (Jones); `confirma` La escasez se muda del trabajo a los recursos físicos; `informa` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Cazzaniga, Jaumotte, Li, Melina, Panton, Pizzinelli, Rockall, Tavares (2024)
`imf-cazzaniga-2024` · IMF Staff Discussion Note SDN/2024/001 · [fuente](https://www.imf.org/-/media/files/publications/sdn/2024/english/sdnea2024001.pdf)

- **~40% global; 60% AE; 40% EM; 26% LIC** — Empleo expuesto a IA (global / AE / EM / LIC)
  *dim:* dim-occupation-exposure · *horizonte:* no acotado · *ámbito:* mundo / por grupo de ingreso/transversal
  > Almost 40% percent of global employment is exposed to AI... 60% of AE jobs... 40% in EMs... 26% in LICs
- **~mitad negativa / mitad complementaria** — Split desplazamiento vs complementariedad dentro de expuestos
  *dim:* dim-automation-potential · *horizonte:* n/a · *ámbito:* global/transversal
  > AI may negatively affect half of these jobs; the other half could gain productivity
- **mayor desigualdad probable** — Relación complementariedad-desigualdad
  *dim:* dim-wage-inequality · *horizonte:* n/a · *ámbito:* global/transversal
  > AI may lead to higher income and wealth inequality. AI complementarity is highly correlated with income

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` La IA ensancha (no reduce) la desigualdad; `tensiona` Automatización vs aumento (dirección de diseño, Turing Trap)

### David H. Autor (2024)
`autor-2024-rebuild-middle-class` · NBER Working Paper 32140 · [fuente](https://www.nber.org/system/files/working_papers/w32140/w32140.pdf)

- **+56% más rápido / -40% tiempo con compresión / +14% con ganancias en novatos** — Efectos RCT citados (Copilot / Noy-Zhang / Brynjolfsson)
  *dim:* dim-productivity-task-rct · *horizonte:* experimentos 2023 · *ámbito:* varios/software / escritura / call center
  > about 56% faster... fell across the board by 40%... 14% improvement in productivity... most pronounced among novice workers
- **compresión hacia el medio (hipótesis, baja fiabilidad)** — Tesis: la IA podría revertir la polarización extendiendo expertise a trabajadores ordinarios
  *dim:* dim-productivity-dispersion · *horizonte:* prospectivo · *ámbito:* EE.UU./economía completa
  > the biggest quality improvements were concentrated at the bottom

  *engancha:* `confirma` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `tensiona` Polarización por sesgo anti-rutina (RBTC); `confirma` Exposición no es empleo neto

### Anton Korinek & Philip Trammell (2024)
`korinek-trammell2024-growth-tai` · Annual Review of Economics — 'Economic Growth under Transformative AI' · [fuente](https://philiptrammell.com/static/economic_growth_under_transformative_ai.pdf)  ⚠ **Paper macro canónico de IA-y-crecimiento (marco de la posición de Trammell). Agregado a nivel de marco; verificar cifras específicas contra primaria.**

- **de modesto a explosivo según supuestos (automatización de tareas, cuellos de botella de Baumol, sustituibilidad)** — Crecimiento bajo IA transformadora
  *dim:* dim-pib-crecimiento · *horizonte:* largo plazo · *ámbito:* global/economía completa
  > Economic Growth under Transformative AI (marco)

  *engancha:* `informa` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `informa` Los weak links acotan el crecimiento y capturan el retorno (Jones); `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Xiang Hui, Oren Reshef, Luofeng Zhou (2024)
`hui-reshef-zhou-2024-online-labor` · Organization Science (2024); working paper CESifo 10601 / SSRN 4527336 (2023). Cifras verificadas contra el PDF primario fechado 2024-10-12. · [fuente](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4527336)  ⚠ **VERIFICADO CONTRA EL PDF PRIMARIO (versión 2024-10-12). Las cuatro cifras del cuerpo del paper son: escritura/ChatGPT -2% jobs y -5.2% earnings; imagen (DALL-E 2 abr-2022 + Midjourney jul-2022) -2.1% jobs y -5.2% earnings. CORRECCIÓN IMPORTANTE: las magnitudes de imagen -3.7% jobs / -9.4% earnings que circulan en la nota de prensa de WashU Olin (ago-2023) y en COBS Insights provienen de una versión PREVIA del working paper y FUERON REVISADAS A LA BAJA en el paper publicado, donde imagen y escritura tienen efectos prácticamente IGUALES (~2% jobs, 5.2% earnings). El 'gradiente por tarea' (imagen cae casi el doble que escritura) NO se sostiene en la versión publicada y se eliminó. Los desgloses -1.2% (margen extensivo: prob. de recibir cualquier empleo en el mes) y -4.7% (margen intensivo: nº de trabajos, CONDICIONAL a estar empleado) SÍ están textualmente en el PDF primario; ya no son provisionales. El abstract publicado dice 'reduce overall demand for workers' y NO contiene la frase 'narrow gaps among workers' (esa estaba en el abstract 2023); en el paper la reducción de la brecha de productividad alta-baja calidad aparece solo como explicación ALTERNATIVA, no como hallazgo principal. Plataforma confirmada en el cuerpo: Upwork.**

- **-2%** — Caída en el nº de trabajos mensuales de freelancers de escritura (writing-related) en ocupaciones más afectadas vs. menos afectadas, tras ChatGPT (nov-2022); efecto causal dif-en-dif en Upwork; significativo al 1%. Texto primario: 'decrease of 2% in the number of monthly jobs'
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **-5.2%** — Caída en los ingresos (earnings) mensuales de freelancers de escritura tras ChatGPT (nov-2022) en Upwork; empleo REALIZADO, no exposición. Texto primario: 'decrease of 5.2% in monthly earnings'
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **-2.1%** — Caída en el nº de trabajos mensuales de freelancers de imagen (diseño/edición de imagen/arte) tras DALL-E 2 (abr-2022) y Midjourney (jul-2022). CORREGIDO desde -3.7% (cifra de versión previa). Texto primario publicado: 'number of monthly jobs (reduction of 2.1%)'. Efecto prácticamente igual al de escritura, no mayor
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **-5.2%** — Caída en los ingresos mensuales de freelancers de imagen tras los modelos generativos de imagen. CORREGIDO desde -9.4% (cifra de versión previa). Texto primario publicado: 'total monthly earnings (decrease of 5.2%)'. Es IGUAL a la caída de ingresos en escritura, no el doble: NO hay gradiente por tipo de tarea en la versión publicada
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **-1.2%** — Margen EXTENSIVO: caída en la probabilidad de recibir cualquier empleo en un mes dado (writing-related, post-ChatGPT). Confirmado en el PDF primario: 'Freelancers are 1.2% less likely to receive any employment in a given month'
  *dim:* dim-employment-separations · *horizonte:*  · *ámbito:* /
- **-4.7%** — Margen INTENSIVO: reducción en el nº de trabajos tomados CONDICIONAL a estar empleado (writing-related, post-ChatGPT). Confirmado en el PDF primario: 'take 4.7% fewer jobs, conditional on employment'. (El -2% de jobs combina ambos márgenes)
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **Top freelancers desproporcionadamente afectados (la calidad no protege)** — Heterogeneidad por historial/calidad: NO se halla que el servicio de alta calidad ('top-rated', desempeño y empleo pasados) modere los efectos adversos; evidencia SUGESTIVA (resultados 'slightly weaker') de que los freelancers de más alta calidad/experiencia se ven MÁS perjudicados. Texto primario: 'high-quality workers are not shielded'; 'high-quality freelancers are disproportionately hurt'. Cuantificación de heterogeneidad por earnings pasadas reportada en difusión secundaria (por cada +1% de earnings pasadas, ~0.5% más de caída de empleo y ~1.7% más de caída de ingresos) — NO verificada palabra-por-palabra en el cuerpo del PDF que leí
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /

  *engancha:* `informa` Exposición no es empleo neto; `tensiona` El potencial está limitado por la adopción y la co-invención; `tensiona` Rezago de tecnología de propósito general (GPT); `informa` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `tensiona` Nivelación de habilidades (la IA comprime la distribución de productividad); `informa` La IA expone trabajo alto-calificado (a diferencia de automatización previa)

### Bonney, Breaux, Buffington, Dinlersoz, Foster, Goldschlag, Haltiwanger, Kroff, Savage (2024)
`bonney-btos-2024-tracking` · NBER Working Paper No. 32319 / Census CES-WP-24-16 · [fuente](https://www.nber.org/system/files/working_papers/w32319/w32319.pdf)  ⚠ **Cifras verificadas contra el abstract verbatim (w32319) y el cuerpo del PDF primario CES-WP-24-16. La definición de 'uso de IA' aquí es la pregunta core de uso para FINES DE NEGOCIO con énfasis en producción (más estrecha que 'cualquier función', usada desde nov-2025), por lo que NO es comparable nivel-a-nivel con el 18%/32% del paper 2026. La asociación adopción→empleo es transversal/auto-reportada, no causal. AUTORÍA: el prompt nombra a McElheran como autora; McElheran NO es coautora de este paper (autores confirmados en NBER). McElheran et al. es trabajo relacionado sobre la Annual Business Survey (período 2016–18) citado dentro, no esta fuente.**

- **3.7% → 5.4%** — Tasa de firmas que usaron IA para fines de negocio (pregunta core BTOS, ref. dos semanas previas), de inicio (sept 2023) a fin (feb 2024) de la colección. Estimaciones bi-semanales ponderadas, representativas a nivel nacional/sector/tamaño. VERIFICADO verbatim contra abstract w32319.
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **~6.6%** — Tasa ESPERADA de uso de IA por firmas a inicios de otoño (Fall) 2024 (expectativa BTOS), proyectada desde datos sept2023–feb2024. VERIFICADO verbatim contra abstract ('expected rate of about 6.6% by early Fall 2024').
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **1.4%–18.1%** — Rango del uso ACTUAL de IA por firmas POR SECTOR: bajo 1.4% (Construcción y Agricultura) a alto 18.1% (Información). Esperado a otoño 2024: 1.5% (Agricultura) a 21.5% (Información). VERIFICADO contra cuerpo del PDF primario (CES-WP-24-16, líneas de texto extraídas).
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **7% firmas / 9% trabajadores** — Entre firmas de ≥250 empleados: ~7% de firmas usa IA, pero ~9% de los trabajadores está en firmas que usan IA (tasa ponderada por empleo > tasa por firma). La relación uso-tamaño es U-shaped (las más pequeñas, 1–4 empleados, usan más que las de 5–99); el uso decae con la EDAD de la firma pero ponderado por empleo es U-shaped en edad. VERIFICADO contra cuerpo del PDF primario.
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **1.9% vs 22.3% (empleo-ponderado)** — Brecha sectorial en base PONDERADA POR EMPLEO: ~1.9% de trabajadores en Construcción vs ~22.3% en Información están en firmas que usan IA. Esperado a otoño 2024 (empleo-ponderado): 3.2% y 25.2% respectivamente. VERIFICADO contra cuerpo del PDF primario.
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **pocas / few** — Efecto sobre EMPLEO realizado auto-reportado por adoptantes: las firmas usuarias 'often utilize AI to substitute for worker tasks and equipment/software, but few report reductions in employment due to AI use'; además exhiben mejor desempeño y MAYOR incidencia de EXPANSIÓN de empleo que las no usuarias (correlacional, no causal). Razón más común de no-adopción: la IA no aplica al negocio. VERIFICADO verbatim contra abstract w32319.
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` El potencial está limitado por la adopción y la co-invención; `informa` Exposición no es empleo neto; `informa` El uso real predomina en augmentation

### James Feigenbaum & Daniel P. Gross (2024)
`feigenbaum-gross-2024-operators` · Quarterly Journal of Economics (NBER WP 28061) · [fuente](https://www.nber.org/system/files/working_papers/w28061/w28061.pdf)  ⚠ **Verificado contra el PDF primario (NBER w28061). Análoga histórica robusta, hermana de Bessen (cajeros): muestra el patrón 'agregado sano / incumbentes golpeados' que importa para la IA. Método: enlace censo-genealógico.**

- **el empleo agregado no cayó (compensado por empleo clerical medio y servicios bajos, incl. categorías nuevas), pero las telefonistas incumbentes fueron las más afectadas; las nuevas cohortes simplemente no entraron a la ocupación** — Automatización de telefonistas (AT&T, 1920-1940): empleo agregado vs. incumbentes
  *dim:* dim-realized-employment-change · *horizonte:* 20 años · *ámbito:* EE.UU./telecomunicaciones / clerical
  > the decline in operators was counteracted by employment growth in middle-skill clerical jobs and lower-skill service jobs, including in new categories of work... incumbent telephone operators were most [affected]

  *engancha:* `confirma` Mucha rotación, neto pequeño e incierto

### Jaime Sevilla & Edu Roldán (2024)
`epoch-training-compute2024` · Epoch AI — Training compute of frontier models grows by 4-5x per year · [fuente](https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year)  ⚠ **Fuente primaria, dataset público (GitHub epoch-research). Contraste clave para el motor: el cómputo por modelo crece 4-5x/año mientras el $/FLOP cae solo ~2x cada 2 años → el gasto físico total SUBE. La demanda escala más rápido de lo que el hardware se abarata.**

- **4,1x/año (todos); 5,3x/año (frontera top-10)** — Crecimiento del cómputo de entrenamiento de modelos frontera
  *dim:* dim-abundancia-computo · *horizonte:* 2010–2024 · *ámbito:* global/modelos frontera
  > the compute used to train notable models has grown about 4.1x/year (90% CI: 3.7x to 4.6x) between 2010 to May 2024

  *engancha:* `confirma` La escasez se muda del trabajo a los recursos físicos

### Ben Cottier, et al. (2024)
`epoch-training-cost2024` · Epoch AI / arXiv:2405.21015 — The rising costs of training frontier AI models · [fuente](https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models)  ⚠ **Fuente primaria + arXiv. El número central del lado escasez: el costo del training run sube 2,4x/año pese a que el hardware se abarata, porque la escala (4-5x/año) gana. El gasto físico agregado se vuelve la restricción.**

- **+2,4x/año (IC95% 2,0–3,1); >$1.000M por run hacia 2027** — Costo amortizado de hardware+energía del training run de frontera
  *dim:* dim-abundancia-computo · *horizonte:* desde 2016 · *ámbito:* global/modelos frontera
  > the amortized hardware and energy cost for the final training run of frontier models has grown rapidly, at a rate of 2.4x per year since 2016

  *engancha:* `confirma` La escasez se muda del trabajo a los recursos físicos

### Lawrence Berkeley National Laboratory (EMP) (2024)
`lbnl-queued-up2024` · Berkeley Lab — Queued Up: 2024 Edition (datos a fin de 2023) · [fuente](https://emp.lbl.gov/queues)  ⚠ **Confiabilidad muy alta: dataset de referencia del sector (Berkeley Lab/DOE), datos administrativos de las colas de interconexión de los ISO/RTO. Es la cuantificación más dura de la inelasticidad de la oferta eléctrica: añadir generación tarda ~5 años y casi nada de la cola se construye.**

- **~5 años de solicitud a operación (vs <2 en 2008); solo 19% de proyectos / 14% de capacidad construidos; >70% se retira** — Lead time y tasa de completación de nueva generación
  *dim:* dim-elasticidad-oferta-fisica · *horizonte:* 2000–2023 · *ámbito:* EE.UU./generación eléctrica
  > The typical project built in 2023 took nearly 5 years from the interconnection request to commercial operations, compared to 3 years in 2015 and <2 years in 2008.

  *engancha:* `confirma` La oferta de energía y cómputo es inelástica en el horizonte relevante; `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Joel Becker, Nate Rush, Beth Barnes, David Rein et al. (METR) (2025)
`metr-2025` · METR (arXiv 2507.09089) · [fuente](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)

- **+19% más lento (la IA los ralentiza)** — Tiempo de completar con IA permitida (expertos en repos propios maduros)
  *dim:* dim-productivity-task-rct · *horizonte:* feb-jun 2025, por tarea · *ámbito:* devs OSS experimentados/software (mantenimiento de repos propios 22k+ stars)
  > When developers are allowed to use AI tools, they take 19% longer to complete issues
- **esperaban +24%; creían +20% tras; real -19%** — Brecha percibido vs real
  *dim:* dim-perception-gap · *horizonte:* pre/post · *ámbito:* mismo/software
  > developers expected AI to speed them up by 24%... they still believed AI had sped them up by 20%

  *engancha:* `confirma` El contexto invierte el signo (no hay multiplicador único de productividad); `confirma` Brecha de percepción (auto-reporte sobreestima el efecto medido); `tensiona` Nivelación de habilidades (la IA comprime la distribución de productividad)

### Anthropic Economic Index team (Handa, Tamkin et al.) (2025)
`anthropic-aei-2025-original` · Anthropic (lab report, feb 2025) · [fuente](https://www.anthropic.com/news/the-anthropic-economic-index)

- **56% augment / 41% automate (datos ene-2025)** — Augmentación vs automatización (original)
  *dim:* dim-collaboration-mode · *horizonte:* dic 2024-ene 2025 · *ámbito:* global (Claude.ai)/transversal
  > 57% of tasks being augmented and 43% of tasks being automated
- **~4% (≥75% tareas); ~36% (≥25% tareas)** — Profundidad de adopción por ocupación
  *dim:* dim-task-exposure · *horizonte:* dic 2024-ene 2025 · *ámbito:* global/transversal
  > only approximately 4% of jobs used AI for at least 75% of tasks... 36% of jobs had some use of AI for at least 25%
- **pico en salario medio-alto; bajo en extremos** — Uso por nivel salarial
  *dim:* dim-exposure-skill-gradient · *horizonte:* dic 2024-ene 2025 · *ámbito:* global/transversal
  > occupations in the mid-to-high median salary ranges, like computer programmers and copywriters... among the heaviest users

  *engancha:* `confirma` El uso real predomina en augmentation; `tensiona` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `confirma` Exposición no es empleo neto

### Chatterji, Cunningham, Deming, Hitzig, Ong, Shan, Wadman (2025)
`openai-nber-w34255-chatgpt` · NBER WP 34255 (OpenAI + Harvard) · [fuente](https://www.nber.org/system/files/working_papers/w34255/w34255.pdf)

- **18 mil millones msg/semana; 700M usuarios (~10% adultos)** — Escala de uso
  *dim:* dim-ai-adoption-use · *horizonte:* julio 2025 · *ámbito:* global/consumer
  > 18 billion messages were being sent each week by 700 million users... 10% of the global adult population
- **53% → 73% no laboral** — Share no laboral de mensajes
  *dim:* dim-ai-adoption-use · *horizonte:* jun 2024 → jun 2025 · *ámbito:* global/consumer
  > 53% of messages were not related to work in June 2024, which climbed to 73% by June 2025
- **49% Asking / 40% Doing / 11% Expressing (56% de trabajo es Doing; 40% Writing)** — Clasificación Asking/Doing/Expressing
  *dim:* dim-interaction-type · *horizonte:* julio 2025 · *ámbito:* global/consumer
  > about 49% of messages are Asking, 40% are Doing, and 11% are Expressing
- **valor vía soporte a la decisión, mayor en empleos knowledge-intensive** — Mecanismo de valor económico
  *dim:* dim-interaction-type · *horizonte:* julio 2025 · *ámbito:* global/knowledge work
  > ChatGPT provides economic value through decision support, which is especially important in knowledge-intensive jobs

  *engancha:* `confirma` El uso real predomina en augmentation; `confirma` Exposición no es empleo neto; `informa` La IA expone trabajo alto-calificado (a diferencia de automatización previa)

### World Economic Forum (2025)
`wef-fojr-2025` · WEF Future of Jobs Report 2025 · [fuente](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf)

- **+170M / -92M / neto +78M (+7%)** — Empleos creados/desplazados/neto, 2025-2030
  *dim:* dim-net-employment-forecast · *horizonte:* 2025-2030 · *ámbito:* 1.2B empleos/transversal
  > 170 million jobs are projected to be created and 92 million... displaced... net employment increase of 7%, or 78 [million]
- **+11M creados / -9M desplazados** — Empleos por driver IA específicamente
  *dim:* dim-net-employment-forecast · *horizonte:* 2025-2030 · *ámbito:* 1.2B/transversal
  > AI and information processing technology are expected to create 11 million jobs, while simultaneously displacing 9 million
- **22%** — Rotación estructural
  *dim:* dim-structural-churn · *horizonte:* 2025-2030 · *ámbito:* 1.2B/transversal
  > structural labour market churn of 22% of the 1.2 billion formal jobs

  *engancha:* `confirma` Mucha rotación, neto pequeño e incierto; `tensiona` El uso real predomina en augmentation

### Joshua Gans & Avi Goldfarb (2025)
`gans-goldfarb2025-oring-automation` · NBER WP 34639 — 'O-Ring Automation' · [fuente](https://www.nber.org/papers/w34639)  ⚠ **Agregado desde la discusión del podcast + abstract NBER; no lectura completa. Verificar antes de publicar.**

- **la adopción óptima puede ser discreta/agrupada (no tarea-a-tarea); el ingreso laboral puede SUBIR bajo automatización parcial** — Efecto de la automatización parcial sobre el ingreso laboral
  *dim:* dim-task-net-ambiguous · *horizonte:* — · *ámbito:* —/economía completa
  > O-Ring Automation (NBER w34639), tesis vía discusión

  *engancha:* `informa` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `tensiona` Desplazamiento domina en el periodo reciente (post-1987)

### Erik Brynjolfsson, Bharat Chandar, Ruyu Chen (2025)
`brynjolfsson-chandar-chen-2025-canaries` · Stanford Digital Economy Lab working paper (NBER-affiliated authors), v. 13 Nov 2025 · [fuente](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf)  ⚠ **Figuras verificadas por el revisor contra el PDF primario (versión 13-nov-2025) con pdftotext -layout. CIFRA TITULAR de esta versión = 16% (abstract L15 y conclusión L926: '16% relative employment decline'), derivado de un '15 log-point decline' (intro L166, Fact 4 L686). La traducción 15 log pt -> 16% es de los propios autores: equivale a (e^0.15 - 1) = 16.2% (expresan la brecha entre quintiles como razón). El '13%' que circuló en prensa es del draft de agosto-2025 y NO aparece como cifra de empleo en esta versión; el único '13%' del PDF nov-2025 es el TOPE de la banda de crecimiento 5-13% de los quintiles MENOS expuestos (L553), no la caída titular. El 16% es RELATIVO (quintiles más expuestos vs el menos, condicionado en firm-quintile y firm-time en un event-study de Poisson, t=-1 = octubre 2022), NO una caída absoluta; el comparable crudo absoluto es -6% (Fact 2). Los autores son explícitos en que NO es identificación causal limpia ('our main estimates may be influenced by factors other than generative AI', L935; piden mejores datos de adopción a nivel firma para 'plausible causal effects', L959). El crudo de Fact 2 (-6%) es una caída absoluta de headcount oct-2022->sep-2025 en los dos quintiles más expuestos. Exposición medida con Eloundou et al. 2024 measure GPT-4 β (L434).**

- **16% (de un 15 log-point decline)** — Caída de empleo RELATIVA de trabajadores 22-25 en los quintiles de ocupaciones MÁS expuestos a IA (Eloundou et al. 2024, GPT-4 β) vs el quintil menos expuesto, tras condicionar en efectos firm-quintile y firm-time en un event-study de Poisson (Fact 4). Verbatim: '15 log-point decline in relative employment for the most AI-exposed quintiles compared to the least exposed quintile, a large and statistically significant effect'; abstract/conclusión lo expresan como '16% relative employment decline'. RELATIVA, no absoluta. t=-1 = octubre 2022; datos mensuales hasta septiembre 2025. Las estimaciones para otros grupos de edad son 'much smaller in magnitude and not statistically significant'.
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **-6% (jóvenes 22-25) vs +6-9% (mayores; 35-49 >8%)** — Cambio ABSOLUTO de empleo (headcount) de 'late 2022' (t=-1=oct-2022) a sep-2025 en los DOS quintiles MÁS expuestos a IA: 22-25 cayeron 6% ('declined by 6%'), trabajadores mayores subieron (intro L133 verbatim: '6-9% increase for older workers'; Fact 2 L559: 35-49 'grew by over 8%'). En los TRES quintiles MENOS expuestos el crecimiento fue 5-13% sin orden claro por edad. El empleo agregado de ADP 'remains robust' / sigue creciendo.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **≈ -20%** — Caída de empleo (headcount) de software developers de 22-25 años hacia sep-2025 vs su pico de fines de 2022 (caso de estudio crudo, Figura 1; verbatim L490: 'employment for software developers aged 22-25 declined nearly 20% compared to its peak in late 2022'). Empleo de otros grupos de edad en la misma ocupación siguió creciendo. NO es un estimador de regresión.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **caídas donde AI AUTOMATIZA; sin patrón claro donde AUMENTA** — Fact 3: usando el Anthropic Economic Index (Handa et al. 2025) para clasificar queries a Claude por ocupación como automative (Directive + Feedback Loop) vs augmentative (Task Iteration, Learning, Validation): el empleo de jóvenes 22-25 cae en ocupaciones de mayor share automativo, mientras 'employment changes for young workers are not ordered by augmentation exposure, as the fifth quintile has among the fastest employment growth'. Es una ASOCIACIÓN a nivel ocupación-quintil basada en shares de uso, NO un efecto causal estimado. Verbatim: 'consistent with automative uses of AI substituting for labor while augmentative uses do not'.
  *dim:* dim-collaboration-mode · *horizonte:*  · *ámbito:* /
- **sin divergencia por edad/exposición (posible rigidez salarial)** — Fact 5: el ajuste laboral aparece en el EMPLEO, no en la COMPENSACIÓN. Salario base anual deflactado a dólares 2017 con índice PCE (serie hasta agosto-2025); 'we find little difference in compensation trends by age or exposure quintile'. Interpretación de los autores: posibles efectos compensatorios offsetting (Autor-Thompson 2025) y/o rigidez salarial de corto plazo (Davis-Krolikowski 2025); 'AI may have larger effects on employment than on wages, at least initially'.
  *dim:* dim-wages · *horizonte:*  · *ámbito:* /
- **robusto excluyendo TI y ocupaciones remotables; sin patrón pre-2022 (incl. COVID)** — Fact 6: los resultados se mantienen al excluir ocupaciones de computación (SOC 2010 15-1) y firmas de TI/diseño de sistemas (NAICS 51, 5415), y para ocupaciones no-teletrabajables (Dingel-Neiman 2020). La taxonomía de exposición a IA 'did not meaningfully predict employment outcomes for young workers further back in time, before the widespread use of LLMs, including during the unemployment spike driven by the COVID-19 pandemic'; los patrones aparecen 'most acutely starting in late 2022 and early 2023'.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /

  *engancha:* `tensiona` Exposición no es empleo neto; `informa` Automatización vs aumento (dirección de diseño, Turing Trap); `tensiona` Nivelación de habilidades (la IA comprime la distribución de productividad); `informa` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `tensiona` El potencial está limitado por la adopción y la co-invención; `informa` Mucha rotación, neto pequeño e incierto

### Charles I. Jones (2025)
`jones2025-ai-economic-future` · NBER WP w34779 (Stanford GSB; presentado SF Fed, sep-2025) · [fuente](https://web.stanford.edu/~chadj/AIandEconomicFuture.pdf)  ⚠ **Verificado contra el PDF primario (web.stanford.edu/~chadj/AIandEconomicFuture.pdf). Es teoría de crecimiento (calibra, no decide): los escenarios dependen de un parámetro empírico, no de una postura. Mide GDP, que no distingue valor real de proxy — testigo convergente, no prueba.**

- **el output queda acotado por el eslabón más débil; infinito de una tarea sube el GDP solo en su tajada del GDP** — Los weak links acotan el output: automatizar las tareas fáciles no dispara el crecimiento
  *dim:* dim-weak-links · *horizonte:* largo plazo · *ámbito:* global (teoría)/economía completa
  > even with infinite amounts of some input, overall production remains finite — again because we are limited by the weakest link... output is always constrained by the weakest links that are not yet automated
- **la aceleración del crecimiento queda frenada por los weak links; acelerar requiere automatizar la gran mayoría de ellos** — Los weak links DOMESTICAN el crecimiento: hay que automatizarlos para acelerar
  *dim:* dim-pib-crecimiento · *horizonte:* largo plazo · *ámbito:* global (teoría)/economía completa
  > this acceleration is likely to be slowed by the presence of “weak links”... Accelerating economic growth requires the vast majority of the weak links to be automated away, which delays the large gains

  *engancha:* `confirma` Los weak links acotan el crecimiento y capturan el retorno (Jones); `informa` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Alex Imas et al. (2025)
`imas-art-machine` · «Art and the Machine: Why People Devalue AI-Generated Creative Work» · [fuente](https://doi.org/10.2139/ssrn.4564219)  ⚠ **Existencia confirmada vía Crossref; cifras no verificadas contra primaria (descripción del experimento desde el podcast). Es la evidencia experimental del sector relacional: el valor de lo humano es intrínseco, no solo escasez.**

- **el art-print hecho por humano se valora mucho más que el de IA — pero cuando hay 500 copias la prima humana cae fuerte (se pierde la conexión con el artista), mientras la IA ya se ve como commodity** — Disposición a pagar por arte humano vs. IA, y el rol de la unicidad
  *dim:* dim-relational-value · *horizonte:* experimental · *ámbito:* —/bienes creativos
  > the human-made one... is valued much much higher than the AI version (paráfrasis del podcast)

  *engancha:* `confirma` El sector relacional puede sostener el empleo (con condiciones)

### The Budget Lab at Yale (2025)
`budgetlab-yale-2025` · Budget Lab (Yale) — análisis de exposición ocupacional a IA · [fuente](https://budgetlab.yale.edu/)  ⚠ **Grey-lit institucional, referida por Imas en el podcast (no leída directamente). Rastrea en vivo el supuesto 'white-collar apocalypse'. TENSIONA nuestra lente Empírico: ellos leen la señal de jóvenes como ruido, nosotros como dato.**

- **hay que entrecerrar los ojos para ver algo; los devs junior crecen más LENTO que la tendencia (no una caída de nivel) y la demanda de devs senior sube si acaso** — ¿Hay automatización/desempleo masivo por IA ya (cuello blanco)?
  *dim:* dim-realized-labor-demand · *horizonte:* 2024-2025 · *ámbito:* EE.UU./cuello blanco / software
  > you really have to squint to see anything happening... a bit below trend for juniors, but still growth (Imas, paráfrasis)

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` Brecha de percepción (auto-reporte sobreestima el efecto medido)

### Ben Cottier, Robi Rahman, et al. (2025)
`epoch-inference-prices2025` · Epoch AI — LLM inference prices have fallen rapidly but unequally · [fuente](https://epoch.ai/data-insights/llm-inference-price-trends)  ⚠ **Fuente primaria. Hallazgo de matiz anti-aire: el abaratamiento de inferencia NO es un solo número (el '10x/año' que circula es la versión simplificada); el rango riguroso es 9x–900x/año según el umbral de capacidad. Usar el rango, no el eslogan.**

- **9x–900x por año (mediana ~50x; 200x post-ene-2024)** — Caída del precio de inferencia a igual capacidad
  *dim:* dim-abundancia-computo · *horizonte:* 2022–2025 · *ámbito:* global/modelos de lenguaje
  > prices declining between 9x per year and 900x per year, with a median of 50x per year

  *engancha:* `informa` La escasez se muda del trabajo a los recursos físicos

### International Energy Agency (2025)
`iea-energy-ai2025` · IEA — Energy and AI (flagship report) · [fuente](https://www.iea.org/reports/energy-and-ai)  ⚠ **Fuente primaria, leída verbatim de las páginas oficiales. Las proyecciones a 2030 son escenarios (Base Case), no hechos. Matiz anti-aire central: a escala global los datacenters son ~1/10 del crecimiento eléctrico (menos que A/C, motores industriales o EVs) — el cuello es local (EE.UU./China ~80% del crecimiento) y de ritmo, no una escasez planetaria.**

- **1,5% mundial en 2024 (415 TWh) → ~945 TWh en 2030; IA en servidores acelerados +30%/año** — Consumo eléctrico de datacenters (nivel y proyección)
  *dim:* dim-cuello-energetico · *horizonte:* 2024–2030 · *ámbito:* global (EE.UU. = 45%)/datacenters
  > Data centres accounted for around 1.5% of the world's electricity consumption in 2024, or 415 terawatt-hours (TWh).
- **~20% de los proyectos planificados en riesgo; datacenter 2-3 años vs sistema energético 'longer lead times'** — Riesgo de demora por restricciones de red (oferta inelástica)
  *dim:* dim-elasticidad-oferta-fisica · *horizonte:* a 2030 · *ámbito:* global/red eléctrica
  > unless these risks are addressed, around 20% of planned data centre projects could be at risk of delays

  *engancha:* `confirma` La escasez se muda del trabajo a los recursos físicos; `confirma` La oferta de energía y cómputo es inelástica en el horizonte relevante

### Max Roser (Our World in Data) (2025)
`owid-renewables-cost2025` · Our World in Data — Why did renewables become so cheap so fast? · [fuente](https://ourworldindata.org/cheap-renewables-growth)  ⚠ **Fuente accesible y confiable, pero mide el COSTO DE GENERACIÓN NUEVA (LCOE), no la tarifa que paga un datacenter — conceptos distintos. Es la tensión honesta de la rama: la energía como commodity se ABARATA, así que la escasez no es de stock global. La tarifa mayorista regional (PJM/ERCOT) sería el siguiente paso de verificación.**

- **solar −88% en 15 años; −36% por cada duplicación de capacidad; carbón ~plano (−2% en 2010s)** — Caída del costo de generación (curva de aprendizaje)
  *dim:* dim-cuello-energetico · *horizonte:* 2009–2024 · *ámbito:* global/generación eléctrica
  > Electricity from utility-scale solar photovoltaics cost $496 per MWh in 2009. Within 15 years the price declined by 88%.

  *engancha:* `tensiona` La escasez se muda del trabajo a los recursos físicos; `tensiona` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Epoch AI (2025)
`epoch-chip-supply2025` · Epoch AI — Advanced packaging and HBM were the bottlenecks on AI chip production · [fuente](https://epoch.ai/data-insights/ai-chip-supply-chain-constraints)  ⚠ **Fuente primaria para el hallazgo cualitativo (alto): el cuello de la oferta de chips de IA es bimodal — el empaquetado CoWoS y la memoria HBM son inelásticos (fabs nuevas, lead times largos), mientras el die lógico es relativamente elástico (se redirige capacidad pujando precio). Las cifras puntuales de wafers/lead-times son de prensa de industria (media).**

- **top-4 consumen ~90% del CoWoS y HBM (inelástico); solo 12% del die lógico (elástico)** — Concentración y elasticidad de la oferta de chips de IA
  *dim:* dim-elasticidad-oferta-fisica · *horizonte:* 2025 · *ámbito:* global/semiconductores
  > the four largest AI chip designers collectively consumed around 90% of global CoWoS capacity and HBM supply in 2025, while consuming only 12% of advanced logic die production

  *engancha:* `confirma` La oferta de energía y cómputo es inelástica en el horizonte relevante

### Anthropic Economic Index team (2026)
`anthropic-aei-2026-primitives` · Anthropic (lab report, enero 2026) · [fuente](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report)

- **baseline 1.8→1.2 pp/año (Claude.ai; 1.0 API), ajustado por éxito; banda σ pre-éxito: 0.7-0.9 (σ=0.5) · 2.2-2.6 (σ=1.5); σ=1 reproduce 1.8** — Productividad implícita según σ (banda de complementariedad)
  *dim:* dim-productivity-implicit-sigma · *horizonte:* próxima década · *ámbito:* global (usuarios Claude.ai)/transversal
  > implied productivity growth falls from 1.8 to 1.2 percentage points per year... at σ=0.5... 0.7-0.9... at σ=1.5... 2.2-2.6
- **52% augment / 45% automate (nov-2025); el +5/-4pp es vs ago-2025, no vs el 56/41 original de ene-2025** — Share augmentación vs automatización
  *dim:* dim-collaboration-mode · *horizonte:* nov 2025 · *ámbito:* global (Claude.ai)/transversal
  > augmented jumped 5pp to 52% and the share deemed automated fell 4pp to 45%
- **70%→66% por complejidad-educativa (Claude.ai); ~60%→45% por duración (API)** — Tasa de éxito por complejidad/duración
  *dim:* dim-task-success-rate · *horizonte:* nov 2025 · *ámbito:* global/transversal/enterprise
  > 70% success rate, but this drops to 66% for college-level... 60% for sub-hour tasks to roughly 45% for tasks... 5+ hours
- **49% de empleos con uso en ≥25% de sus tareas (acumulado); vs 36% en el AEI previo** — Cobertura ocupacional de tareas
  *dim:* dim-task-exposure · *horizonte:* nov 2025 · *ámbito:* global/transversal
  > 49% of jobs have seen AI usage for at least a quarter of their tasks

  *engancha:* `confirma` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `confirma` El uso real predomina en augmentation; `confirma` Exposición no es empleo neto; `informa` La IA expone trabajo alto-calificado (a diferencia de automatización previa)

### Scott Galloway (Prof G) (2026)
`galloway2026-apocalypse-no` · No Mercy / No Malice — 'Apocalypse No' (8 may 2026) · [fuente](https://www.profgmedia.com/p/apocalypse-no)  ⚠ **ENSAYO DE OPINIÓN, no peer-reviewed. Posición claramente optimista-de-reinstauración: argumenta que el 'apocalipsis de empleo por IA' es narrativo/de marketing (Shiller), no basado en datos. Varias cifras citadas de segunda mano. Vale como nodo de POSICIÓN articulada de alto perfil, no como medición.**

- **8.7M (2020) → 9.6M (2023), plano desde** — Empleo tecnológico neto en EE.UU.
  *dim:* dim-realized-employment-change · *horizonte:* 2020–2023 · *ámbito:* EE.UU./tecnología
  > Net technology employment in the U.S. grew from 8.7 million in 2020 to 9.6 million in 2023 and has remained flat since then.
- **×4 en 40 años (post-1979)** — Contadores tras la planilla de cálculo (reinstauración)
  *dim:* dim-realized-employment-change · *horizonte:* 1979–~2019 · *ámbito:* EE.UU./contabilidad
  > the number of accountants increased 4x over the next 40 years
- **~94% de tareas teóricamente cubribles** — Cobertura técnica de tareas en negocios/finanzas
  *dim:* dim-task-exposure · *horizonte:* 2026 · *ámbito:* EE.UU./negocios y finanzas
  > in business and finance occupations, AI could theoretically cover 94% of tasks
- **positivo solo >US$200k/año; Gini EE.UU. >0.8** — Sentimiento pro-IA por ingreso y desigualdad
  *dim:* dim-wage-inequality · *horizonte:* 2026 · *ámbito:* EE.UU./economía completa
  > only those earning more than $200,000 per year viewing AI as a net positive ... we're higher than 0.8

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` Reinstauración vía nuevas tareas; `confirma` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `tensiona` Desplazamiento domina en el periodo reciente (post-1987); `informa` La IA ensancha (no reduce) la desigualdad

### Alex Imas & Phil Trammell (Dwarkesh Patel) (2026)
`dwarkesh2026-economia-agi` · Dwarkesh Patel — 'What remains scarce after AGI' (4 jun 2026) · [fuente](https://www.dwarkesh.com/p/alex-imas-phil-trammell)  ⚠ **Leído ENTERO y cruzado contra nuestro trabajo (2026-06-20). Converge fuerte con el marco: método de escenarios (ingeniería inversa > pronóstico), labor share estable (Atkeson), y 'lo escaso captura el valor' (Jones/weak links). Aporta tres mecanismos que integramos: la ELASTICIDAD DE DEMANDA como bisagra, el SECTOR RELACIONAL y la CAPTURA (electricidad vs plataforma). Conversación de economistas (Imas, UChicago Booth; Trammell, Epoch/Stanford), no peer-reviewed; las cifras son paráfrasis de la discusión, no estimaciones.**

- **≈60% del producto, estable; con metodología contable constante ni siquiera ha caído (Atkeson)** — Participación del trabajo en el producto (EE.UU.)
  *dim:* dim-labor-share · *horizonte:* histórico · *ámbito:* EE.UU./economía completa
  > Imas: con metodología constante el labor share ni siquiera ha caído (paráfrasis de la discusión)
- **indeterminado; depende de la elasticidad de demanda (O-ring + Jevons). Software es elástico; petróleo/insulina/comida se sacian** — Signo del efecto sobre el empleo
  *dim:* dim-task-net-ambiguous · *horizonte:* — · *ámbito:* —/economía completa
  > si la demanda es suficientemente elástica, automatizar tareas puede subir el empleo (paráfrasis)

  *engancha:* `confirma` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración); `confirma` Reinstauración vía nuevas tareas; `tensiona` Desplazamiento domina en el periodo reciente (post-1987); `tensiona` La IA ensancha (no reduce) la desigualdad

### Citrini Research (2026)
`citrini2026-2028-gic` · Citrini Research — 'The 2028 Global Intelligence Crisis' (feb 2026) · [fuente](https://www.citriniresearch.com/p/2028gic)  ⚠ **ESCENARIO, no predicción (el propio autor lo subraya). Polo doom del debate; Imas lo usa como ejemplo de supuestos implausibles. Cifras confirmadas por web, no leídas en primaria completa.**

- **10.2% de desempleo y −38% del S&P para jun 2028 (escenario, NO predicción)** — Escenario de crisis por automatización de cuello blanco
  *dim:* dim-net-employment-forecast · *horizonte:* 2028 · *ámbito:* EE.UU. / global/cuello blanco
  > The 2028 Global Intelligence Crisis (escenario)

  *engancha:* `confirma` Desplazamiento domina en el periodo reciente (post-1987); `confirma` La IA ensancha (no reduce) la desigualdad

### Molly Kinder (Brookings) (2026)
`kinder2026-messy-middle` · 'The Messy Middle' (2026) · [fuente](https://mollykinder2.substack.com/p/the-messy-middle)  ⚠ **Ensayo de policy (Brookings). Agregado desde la discusión del podcast + fuente confirmada; no lectura completa.**

- **pérdidas concentradas en la 'laptop class' (empleos mejor pagados); transición larga sin mejora de Pareto** — Distribución del daño en la transición
  *dim:* dim-wage-inequality · *horizonte:* transición (años) · *ámbito:* EE.UU./trabajo de oficina/conocimiento
  > The Messy Middle (tesis, vía discusión)

  *engancha:* `confirma` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `confirma` La IA ensancha (no reduce) la desigualdad

### Bonney, Breaux, Dinlersoz, Foster, Haltiwanger, Pande (2026)
`bonney-btos-2026-microstructure` · Census CES-WP-26-25 / NBER Working Paper No. 35141 (abril 2026) · [fuente](https://www.nber.org/papers/w35141)  ⚠ **Cifras verificadas verbatim contra el abstract/highlights del CES-WP-26-25 y la página NBER w35141 (título y autores confirmados; publicado abril 2026). Las asociaciones de la regresión son CORRELACIONALES (transversales, auto-reporte de efectos de empleo por la firma respondente, no del trabajador); no son estimaciones causales. La medida de adopción ('cualquier función de negocio') es más amplia que la de 2024 — el salto 5.4%→18% mezcla difusión real con cambio de definición (NO es una serie temporal limpia). McElheran no es autora.**

- **18% (32% empleo-ponderado)** — Tasa de firmas que usaron IA en una FUNCIÓN DE NEGOCIO (medida ampliada del suplemento, ref. dos semanas previas), período nov-2025–ene-2026; 18% por firma, 32% ponderado por empleo. Esperado: 22% dentro de seis meses. VERIFICADO verbatim contra abstract/highlights CES-WP-26-25.
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **50%–60% (60%–70% empleo-ponderado)** — Tasa de uso de IA en firmas MUY GRANDES de sectores Información, Servicios Profesionales y Finanzas: 50–60% (60–70% ponderado por empleo). VERIFICADO verbatim contra abstract CES-WP-26-25.
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **57% / 52% / 45% / 41%** — Estrechez del alcance entre ADOPTANTES: 57% integra IA en tres o menos funciones de negocio; funciones más comunes Ventas y Marketing 52%, Estrategia y Desarrollo de Negocio 45%, TI 41%. VERIFICADO verbatim contra abstract CES-WP-26-25.
  *dim:* dim-firm-adoption · *horizonte:*  · *ámbito:* /
- **66% solo aumentan** — Modo de uso a nivel firma: la mayoría de usuarios (66%) usa la IA SOLO para AUMENTAR tareas (augment-only). VERIFICADO verbatim ('Most users (66%) rely on AI solely to augment tasks'). Nota: el dato adicional '23% de firmas (41% empleo-ponderado) tienen trabajadores usando IA en tareas' es una medida de PENETRACIÓN a nivel trabajador (más cercana a adopción que a modo augment/automate); no se mezcla aquí.
  *dim:* dim-collaboration-mode · *horizonte:*  · *ámbito:* /
- **2% de firmas** — PUENTE adopción→empleo realizado: 'AI-related employment decreases are rare, occurring in only 2% of firms' (VERIFICADO verbatim). Auto-reportado por las firmas en el suplemento BTOS; no causal.
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /
- **amplitud funcional e inversión: + ; tarea-trabajador: n.s.** — Regresión transversal a nivel firma: 'Functional breadth and operational investment are positively associated with employment decreases, whereas worker-task integration shows no significant link to headcount reduction once functional integration and operational investment are taken into account' (VERIFICADO verbatim). También: correlación positiva entre desempeño comercial y amplitud de integración de IA. CORRELACIONAL, no causal.
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` El potencial está limitado por la adopción y la co-invención; `informa` Exposición no es empleo neto; `confirma` El uso real predomina en augmentation; `informa` Automatización vs aumento (dirección de diseño, Turing Trap)

### Charles I. Jones & Christopher Tonetti (2026)
`jones-tonetti2026` · «Past Automation and Future A.I.: How Weak Links Tame the Growth Explosion» · [fuente](https://web.stanford.edu/~chadj/)  ⚠ **Verificado vía la cita verbatim DENTRO de Jones (2025) (PDF primario); el paper directo no fue accesible al fetcher. La tesis del título —los weak links domestican la explosión de crecimiento— está confirmada por esa cita. Cifras específicas: sin verificar.**

- **la presencia de weak links limita el crecimiento que emerge de la IA (domestica la explosión)** — Los weak links domestican la explosión de crecimiento de la IA
  *dim:* dim-pib-crecimiento · *horizonte:* largo plazo · *ámbito:* global (teoría)/economía completa
  > Jones and Tonetti (2026) use the weak link framework to explain how the presence of weak links can limit the growth that emerges from artificial intelligence

  *engancha:* `confirma` Los weak links acotan el crecimiento y capturan el retorno (Jones)

### Andrew B. Hall (2026)
`hall2026-politics-agi` · Ensayo sobre la política de la AGI (referido en el podcast) · [fuente]()  ⚠ **Grey-lit, referido por Imas (no leído). Aporta la economía POLÍTICA que falta en los modelos económicos: el umbral político, no el económico, es lo que dispara la crisis.**

- **un alza de solo 2-3% en el desempleo cambia por completo el viento político (emergencia nacional); los modelos económicos de IA no tienen economía política** — Umbral político del desempleo
  *dim:* dim-realized-employment-change · *horizonte:* — · *ámbito:* EE.UU./—
  > if there's a 2% increase in unemployment, the political winds completely change (paráfrasis del podcast)

  *engancha:* `informa` Mucha rotación, neto pequeño e incierto

### Fradkin et al. (atribución por transcribir) (2026)
`fradkin-etal-2026-forecast` · Post sobre el desacuerdo de pronósticos de economistas · [fuente]()  ⚠ **LEAD por confirmar: los nombres ('Andre Fredkin, Brian DeBerry, Andrew Coe') vienen de la transcripción de voz y casi seguro están mal escritos (probable Andrei Fradkin, MIT, que trabaja en mercados de predicción). Verificar antes de citar en público. Vale como fuente de nuestra meta-tesis.**

- **los pronósticos discrepan en TODA dirección → mejor agregar vía mercados de predicción (sabiduría de la multitud) que confiar en un pronóstico individual** — Acuerdo entre pronósticos de economistas sobre el mercado laboral con IA
  *dim:* dim-task-net-ambiguous · *horizonte:* — · *ámbito:* —/—
  > there's a ton of disagreement, like in every single direction (Imas, paráfrasis)

  *engancha:* `informa` Exposición no es empleo neto

### SemiAnalysis (Dylan Patel et al.) (2026)
`semianalysis-silicon2026` · SemiAnalysis — The Great AI Silicon Shortage · [fuente](https://newsletter.semianalysis.com/p/the-great-ai-silicon-shortage)  ⚠ **Análisis de industria de boutique, la fuente más respetada en silicio, pero no peer-reviewed y con proyecciones (utilización >100% en 2H2026, etc.). La síntesis 'silicio corto plazo / energía largo plazo' es la mejor descripción de la migración del cuello físico.**

- **IA toma ~60% del output N3 de TSMC (2026); sin alivio por ~2 años** — Cuello de botella físico de la IA, corto vs largo plazo
  *dim:* dim-cuello-energetico · *horizonte:* 2026–2028 · *ámbito:* global/semiconductores / energía
  > Silicon is the binding short-term constraint. Power is the binding long-term constraint.

  *engancha:* `confirma` La escasez se muda del trabajo a los recursos físicos; `confirma` La oferta de energía y cómputo es inelástica en el horizonte relevante

## Auditoría anti-aire

**Veredicto: aceptable-con-reservas.**

El mapa es notablemente sólido en su tesis central y en su higiene de dimensiones: verifiqué contra fuente primaria Eloundou (80%/19%), METR (-19% medido vs +20% percibido), Acemoglu 2024 (TFP <0.66%, conservador <0.53%), Webb (90:10 baja 4%/9%, pico p90, top 1% intacto), Korinek-Suh (colapso/sube-para-siempre según cola) y la existencia del reporte Anthropic enero-2026, y todos respaldan los números y los rótulos del mapa. El gran acierto es que NO confunde exposición con empleo destruido: lo eleva a hallazgo y lo blinda con seis puentes 'absent' bien razonados. El aire residual no está en los números sino en el tipado: una conversión clave (robots) cuelga de la dimensión 'exposición de tareas' siendo densidad de hardware, y dos coeficientes de regresión de un solo periodo van marcados 'established' junto a identidades contables, mezclando dos sentidos de rigor. El caso Bessen/cajeros (load-bearing para invertir el signo ingenuo) descansa en fuente de divulgación sin verificación primaria.

Flags (8). Los 3 de severidad media fueron **corregidos** en el dataset (ver `datos/correcciones.md`):

- **[medio]** cnv-robot-to-emppop (from: dim-task-exposure) — Error de tipado de dimensión: usa dim-task-exposure como origen, pero el regresor de Acemoglu-Restrepo 2020 es densidad de robots (robots por 1000 trabajadores), NO exposición de tareas. Densidad de hardware instalado y susceptibilidad técnica del contenido del trabajo son magnitudes distintas. La conversión hereda el rótulo equivocado, lo que enturbia la columna vertebral del mapa (exposición no es empleo): aquí un coeficiente empleo-por-robot queda colgado de la dimensión 'exposición'.
- **[medio]** cnv-robot-to-emppop / cnv-robot-to-wages (kind: established) — Marcadas 'established' siendo pendientes reducidas-forma estimadas sobre una muestra concreta (zonas de commuting EE.UU. 1990-2007). El texto de assumptions lo reconoce honestamente ('no es ley estructural, no extrapolar'), pero etiquetar una regresión correlacional-causal de un solo periodo/tecnología como 'established' al mismo nivel que identidades contables (Hulten, agregación tarea-ocupación) confunde dos sentidos de rigor. Es aire disfrazado de identidad.
- **[bajo]** cnv-hulten-savings-to-tfp (kind: established) — El teorema de Hulten es identidad solo a primer orden en torno a un óptimo competitivo y BAJO supuestos fuertes (sin reasignación de gran escala, sin nuevas tareas). Marcarla 'established' empuja al lector a tratarla como contable cuando carga supuestos económicos no triviales; las propias críticas a Acemoglu 2024 atacan precisamente esos supuestos. Los assumptions están nombrados, por eso es bajo y no medio.
- **[bajo]** anthropic-aei-2026-primitives (productividad implícita: 'baseline 1.8 a 1.2 pp/año ajustado por éxito') — El reporte da 1.8 pp/año como baseline con sigma=1; el '1.2 ajustado por éxito' es un reencuadre del mapa que mezcla el ajuste-por-tasa-de-éxito con el escenario sigma. Verificado que el reporte existe y las bandas (0.7-0.9 / 1.2 / 2.2-2.6) son correctas, pero la glosa 'baseline 1.8 a 1.2' puede leerse como una caída temporal que el reporte no afirma así. Riesgo menor de tergiversación de matiz.
- **[bajo]** wef-fojr-2023 vs wef-fojr-2025 (uso conjunto del neto) — El mapa ya marca correctamente que no es serie temporal limpia (denominadores 673M vs 1.2B, metodología distinta). No es un fallo del mapa; lo señalo como riesgo persistente de que un lector apile -14M y +78M como tendencia. El mapa lo neutraliza bien con hyp-high-churn-small-net, pero la cifra +78M/+7% es un pronóstico de encuesta a empleadores (todos los macrotrends), no un efecto IA: el driver IA aislado es solo +11M/-9M.
- **[bajo]** autor-2024-rebuild-middle-class (cita RCT: '+56% / -40% / +14%') — Cifras citadas de SEGUNDA mano por Autor, que difieren de las primarias ya presentes como nodos propios (Peng -55.8% no +56%; Noy-Zhang -37% en WP / -40% redondeo; Brynjolfsson +15% no +14%). El mapa reconoce el problema en gaps ('sin reconciliar a una cifra canónica') pero deja conviviendo dos versiones numéricas del mismo experimento dentro del dataset, lo que invita a doble conteo o a citar la cifra secundaria como si fuera medición.
- **[medio]** bessen2015-tellers (url: aei.org; cifras 21 a 13 cajeros y 'empleo subió') — El estudio se ancla en una URL de divulgación (AEI/EconTalk), no en la fuente primaria (libro 'Learning by Doing' / IMF F&D). El propio mapa lo admite en gaps ('solo en paráfrasis secundarias'). Las cifras 21 a 13 y la tendencia de empleo no están verificadas contra primaria; descansan en paráfrasis. Caso load-bearing (es el ejemplo que invierte el signo ingenuo), por lo que la debilidad de fuente importa.
- **[bajo]** cnv-exposure-to-implicit-prod y banda 0.7-2.6 pp/año (sigma no identificado) — Correctamente marcada 'hypothesized', pero conviene reforzar: el resultado varía por factor ~3 según un parámetro (sigma) que el propio lab declara no identificado empíricamente. Es el supuesto irreducible. No es un fallo (está bien etiquetado), pero es el punto donde un número aparentemente preciso (p.ej. 2.6 pp/año) es casi enteramente un artefacto del supuesto elegido.

## Enriquecimiento pendiente — los 9 gaps de la ronda 2

La ronda 2 leyó estas fuentes pero no se integró (tope de 64K en el reconciliador). Pendiente para una pasada futura, dirigida por lo que pida la visualización:

- No leído: Autor, Mindel, Reynolds 'The Work of the Future' (MIT Task Force, 2020) — flagged en la primera ronda, ningún número incluido.
- Evidencia de empleo REALIZADO (Hui-Reshef-Zhou, Brynjolfsson-Canaries, BTOS) recién integrada: es temprana, correlacional y por subpoblación; NO es una función validada exposición→empleo neto. Los puentes-ausentes pasan de vacíos a poblados-con-señal-direccional, no resueltos.

## Procedencia

Built the map from empty across five reader batches (foundational task-based theory; macro/growth; exposure/susceptibility indices; productivity RCTs; lab usage indices; institutional reports ILO/IMF/OECD/WEF/McKinsey; GPT-diffusion history; polarization/RBTC). Deduplicated 25 distinct studies (no paper appeared twice across batches, but acemoglu2024 reused third-party RCTs that ARE separate nodes here: Noy-Zhang, Peng-Copilot, Brynjolfsson-Li-Raymond). Unified ~30 proposed hypotheses into 13 by fusing cross-language duplicates: the single most important fusion is the 'exposure is not net employment' idea, stated independently in all five batches (H-task-net-ambiguous, exposure-is-not-displacement, H-tareas-no-empleos, H-task-exposure-not-net-employment, exposure_is_not_displacement, H-task-not-occupation) — all collapsed into hyp-exposure-not-employment as the spine of the map. Built the typed graph so that lighting one cell teaches the inferential structure. The central structural finding: NO validated conversion exists from any technical-exposure measure (task/occupation/hours) to net employment — registered as multiple 'absent' bridges and elevated to findings.

Construido por un workflow multiagente (2026-06-15/16): lectores en paralelo extraen evidencia verificada contra fuente por cluster; un reconciliador converge el mapa por rondas; un auditor escéptico caza aire. Ronda 1 completa y auditada; ronda 2 leída pero no integrada (límite de salida de 64K — arreglo conocido: que el reconciliador emita solo estructura y la tabla de estudios la ensamble el script). Números verificados contra fuente primaria por el auditor.

## Referido por

<!-- AUTO-GENERADO por claude/grafo-backlinks.py · no editar a mano · el «por qué» vive en el origen (## Conexiones) -->

- `profundiza` ← [Rama "Recursos físicos": el motor de los átomos](recursos-fisicos.md)
- `profundiza` ← [Lentes: elegir el modelo, no solo los parámetros](roadmap-lentes.md)
- `usa-molde-de` ← [Natalidad Chile — dossier (proyecto en PAUSA)](../natalidad/dossier.md)
- `tensiona` ← [Inside YC's AI Playbook — nota](../../referencia/artículos/2026-05-27-yc-ai-playbook/nota.md)
