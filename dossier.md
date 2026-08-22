---
titulo: "Mapa del debate: impacto de la IA sobre el empleo"
tipo: dossier-investigacion
estado: semilla
publico: false
---

# Mapa del debate: impacto de la IA sobre el empleo

> Dossier de investigación — **semilla, ronda 1, auditada**. Material de base para la plataforma interactiva y para escritura. Generado desde `datos/mapa.json`; **no editar a mano** — regenerar con `datos/generar-dossier.py`.

**37 hipótesis · 108 estudios · 73 dimensiones · 35 conversiones · 253 aristas estudio↔hipótesis.** Auditoría anti-aire: **aceptable-con-reservas**.

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

### El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA
`hyp-entry-level-remoto-o-ciclo`

El patrón descriptivo del golpe a jóvenes en ocupaciones expuestas es real y replica entre datasets, pero su ATRIBUCIÓN a la IA está en disputa: la exposición a GenAI correlaciona fuerte con la exposición al trabajo remoto (otro shock post-pandemia) y las ocupaciones expuestas tienen una ciclicidad distinta, así que el mismo patrón es compatible con al menos tres causas (IA, remoto, ciclo macro) que los datos existentes no separan. Es la pregunta de identificación central del debate 2026.

### La IA expande el offshoring en vez de repatriarlo (telemigración)
`hyp-ia-expande-telemigracion`

La IA generativa abarata y estandariza justo lo que hace transable un servicio —traducir, resumir, documentar, controlar calidad a distancia—, así que su primer efecto sobre el trabajo remoto internacional es AMPLIARLO, no eliminarlo: baja el costo de coordinar a un trabajador barato y lejano por debajo de lo que baja el costo de reemplazarlo por una máquina. Bajo esta hipótesis, parte del daño al empleo local que se atribuye a la IA es arbitraje laboral internacional habilitado por la IA, y el margen donde primero se ve no es el desempleo doméstico sino el comercio de servicios. Corolario incómodo: el shock 'remoto' y el shock 'IA' de la disputa de atribución entry-level no son rivales, son el mismo shock en dos monedas.

### La base gravable se erosiona con la participación del trabajo
`hyp-base-gravable-erosiona-con-participacion`

La capacidad de un Estado para repartir no es una decisión política independiente del shock: es una función de la participación del trabajo, porque la recaudación descansa sobre la nómina. En EE.UU., el 84% de los ingresos federales de 2024 vino de impuesto a la renta personal más contribuciones sociales, y solo el 11% de las utilidades corporativas. Bajo esta hipótesis, si la IA reduce la tajada del trabajo, la recaudación cae ANTES de que nadie decida nada, y la fuente que tendría que reemplazarla es hoy ocho veces menor. El corolario incómodo: el mismo shock que crea la necesidad de redistribuir destruye el instrumento para hacerlo, y el momento de máxima demanda de transferencias coincide con el de mínima capacidad de financiarlas.

### El sistema tributario subsidia la automatización (no solo la compensa después)
`hyp-sistema-tributario-subsidia-automatizacion`

El Estado no entra al problema al final, repartiendo: ya está adentro al principio, inclinando la cancha. El código tributario de EE.UU. grava el trabajo a una tasa efectiva en torno a 25,5% y el equipo y software —el capital que automatiza— a cerca del 10% en la década de 2010, que cayó a ~5% tras la reforma de 2017. Esa brecha es un subsidio implícito a sustituir personas por máquinas, y empuja la automatización más allá del nivel socialmente eficiente, incluyendo tareas donde la máquina apenas mejora la productividad pero sí desplaza al trabajador. Bajo esta hipótesis, parte del desplazamiento que se atribuye a la tecnología es política fiscal, y la primera palanca del Estado no es un impuesto nuevo sino dejar de pagar por el resultado que después lamenta.

### El impuesto al robot es el instrumento equivocado
`hyp-impuesto-robot-instrumento-equivocado`

El debate público pide gravar a los robots; la literatura de tributación óptima converge, desde tres modelos distintos, en que ese no es el instrumento. Guerreiro-Rebelo-Teles: es óptimo gravarlos solo mientras siga activa la generación de trabajadores rutinarios que ya no puede recolocarse — cuando se jubila, el impuesto óptimo es cero. Costinot-Werning: la magnitud del impuesto óptimo DECRECE a medida que la automatización se profundiza y la desigualdad crece, justo al revés de la intuición. Thuemmel: en el modelo calibrado, casi todas las ganancias de bienestar vienen de ajustar el impuesto a la renta (1.000–4.000 USD per cápita al año), mientras que gravar robots distinto del resto del equipo capital aporta ganancias cercanas a cero. Bajo esta hipótesis, el instrumento correcto es el impuesto a la renta y la corrección del sesgo pro-capital; el impuesto al robot es una respuesta simbólica a un problema real.

### Lo que se puede gravar es lo que no se puede mover
`hyp-fuga-limita-gravar-capital`

La capacidad fiscal sobre el capital está acotada por la movilidad de la base, no por la voluntad política. Cerca del 36-40% de los beneficios multinacionales se declaran en paraísos fiscales, y el capital de la IA es del tipo más móvil que existe: intangible, sin arraigo físico, con la propiedad intelectual reubicable por contrato. La primera prueba coordinada a escala mundial —el impuesto mínimo global del 15%— dio menos de lo prometido: la propia OCDE recortó su estimación de recaudación adicional desde 6,5-8,1% del impuesto corporativo global (evaluación de enero de 2024) a 3,2-5,4% anual (evaluación de julio de 2026). Bajo esta hipótesis el eje que decide quién captura la renta decide también a quién se le puede cobrar: lo inmóvil —energía, tierra, redes físicas, presencia local— es gravable; el beneficio de intangibles se fuga. Es el mismo principio de escasez visto desde el fisco, no una historia aparte.

### Repartir no restaura el ingreso laboral (y el diseño decide cuánto se pierde)
`hyp-transferencia-no-restaura-ingreso`

Una transferencia no reconstituye el ingreso que el trabajo dejó de generar: parte de ella se compensa con menos trabajo propio. En el mayor experimento aleatorizado de renta garantizada, 12.000 USD al año durante tres años redujeron el ingreso individual propio en unos 1.800 USD al año y la participación laboral en 4,1 puntos porcentuales, sin mejorar la calidad del empleo. Pero el diseño manda: el dividendo universal y permanente de Alaska, pagado a todos y desde 1982, no redujo el empleo agregado y aumentó el trabajo a tiempo parcial en 1,8 puntos. La diferencia entre focalizado-temporal y universal-permanente —y el efecto de equilibrio general de gastar el dinero en la economía local— cambia el signo del resultado. Bajo esta hipótesis, la pregunta útil no es «¿UBI sí o no?» sino cuánto ingreso se recupera por cada punto transferido, y bajo qué diseño.

### La desigualdad de la IA se juega entre empresas, no solo entre trabajadores
`hyp-brecha-entre-firmas`

El debate sobre desigualdad y IA se plantea casi siempre entre personas —quién sabe usarla y quién no—, pero la evidencia causal a nivel de firma sitúa la brecha un nivel más arriba: entre empresas. La adopción está estratificada por tamaño (45% de las firmas grandes contra 24% de las pequeñas en la UE) y por desarrollo financiero del país, y las ganancias de productividad se concentran en las medianas y grandes, en regiones financieramente avanzadas y en sectores intensivos en tecnología. Bajo esta hipótesis, la IA ensancha primero la dispersión de productividad ENTRE empresas —y con ella la de salarios, porque quien paga mejor es la firma que adoptó—, y la desigualdad entre trabajadores es en parte un efecto derivado de en qué empresa se trabaja. El corolario de política es distinto al habitual: no basta con capacitar personas si las firmas chicas no alcanzan la masa crítica para adoptar.

### La IA generativa se comporta distinto de la ola predictiva que la precedió
`hyp-generativa-rompe-con-ola-previa`

Bajo la misma etiqueta —«exposición a IA»— hay dos tecnologías con efectos laborales de signo opuesto sobre la misma población. En la ola predictiva de los 2010, las ocupaciones más expuestas GANARON participación en el empleo en Europa, y el efecto fue más fuerte justo donde había más trabajadores jóvenes y calificados; a nivel de firma, invertir en IA venía con más ventas, más empleo y más valor de mercado. Después de noviembre de 2022 la evidencia sobre la misma población se invierte: el empleo de los jóvenes en ocupaciones expuestas se separa a la baja y la brecha se profundiza año a año. Bajo esta hipótesis, la diferencia no es de medición ni de país sino de tecnología: la IA predictiva complementaba al analista que la operaba, mientras la generativa produce directamente el entregable con que ese analista entraba al mercado. El corolario metodológico es duro: casi toda la literatura de exposición ocupacional que se sigue citando —Webb, Felten, Frey-Osborne— está construida sobre la ola que se comportó al revés.

### La paradoja del junior: la IA lo hace más productivo justo donde lo dejan de contratar
`hyp-paradoja-junior`

Las dos evidencias más sólidas sobre trabajadores jóvenes apuntan en direcciones opuestas y el debate rara vez las pone juntas. Del lado de la productividad, la IA nivela hacia arriba: en el centro de contacto los agentes novatos ganan cerca de 30% y el quintil más bajo 36%, y en un experimento de campo con un asistente de código el output sube más de 50% con ganancias estadísticamente significativas SOLO entre programadores junior. Del lado del empleo, son esos mismos perfiles los que pierden: la brecha de los 22-25 en ocupaciones expuestas llega a 19% y opera por menor contratación. Si la IA vuelve más valioso al novato, contratarlo debería ser mejor negocio, no peor. Tres mecanismos podrían reconciliarlo, y ninguno está medido: que lo que sube sea el producto por junior y no el número de juniors que la empresa necesita; que la herramienta capture el valor que antes justificaba pagar el aprendizaje de alguien; o que la ganancia sea real pero se materialice para quien ya está adentro, no para quien intenta entrar. Bajo esta hipótesis, el problema del primer empleo no es que la IA haga inútil al novato, sino que hace innecesario contratarlo para obtener lo que el novato producía.

## Capa de medición: dimensiones y conversiones

73 dimensiones (unidades). Las conversiones entre ellas se clasifican en tres clases — y la clase es lo que separa el rigor del aire:

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
- **Atribución del deterioro entry-level (IA vs remoto vs ciclo)** (`dim-atribucion-entry-level`): 
- **Potencial de aumento** (`dim-augmentation-potential`): Share de empleo donde la IA complementa/asiste sin sustituir el rol (automatiza algunas tareas, libera tiempo para otras). Explícitamente separado del potencial de automatización por ILO (10-13%) y de desplazamiento por IMF (complementariedad). Unidad: % de empleo.
- **Tiempo/horas de trabajo automatizable** (`dim-automatable-hours`): Share de horas pagadas o tiempo de actividad laboral que la IA actual podría automatizar (McKinsey 60-70% del tiempo de empleados; EE.UU. 21.5%→29.5% de horas a 2030). Medida de contenido-tiempo, NO un conteo de puestos. Unidad: % de horas/tiempo.
- **Potencial de automatización** (`dim-automation-potential`): Share de empleo (o de tiempo de trabajo) que la IA podría en principio SUSTITUIR (la cola del lado-desplazamiento de la exposición). ILO 0.4-5.5%, OECD 27%. Capacidad/potencial, no realizado. Unidad: % de empleo u horas.
- **Autonomía de la IA** (`dim-autonomy`): Grado en que la IA toma decisiones sin intervención humana, escala ordinal 1-5 (Anthropic ~3.5). Unidad: escala 1-5.
- **Brecha acumulada de empleo de jóvenes en ocupaciones expuestas (medida «kept-pace»)** (`dim-brecha-acumulada-jovenes-expuestos`): Cuánto por debajo está el empleo de trabajadores de 22-25 años en ocupaciones expuestas a IA respecto de dónde estaría si hubiera seguido el ritmo de sus pares menos expuestos. Es un nivel acumulado y relativo, no una tasa de cambio ni una caída absoluta de dotación: hay que leerla como distancia respecto de un contrafactual construido, y no es comparable con las cifras de cambio de headcount ni con las variaciones interanuales.
- **Brecha de adopción de IA por tamaño de empresa y por país** (`dim-brecha-adopcion-por-tamano`): Diferencia en la tasa de adopción de IA entre firmas grandes y pequeñas, y entre países según su desarrollo financiero. Es el margen por el que la desigualdad de la IA se juega entre empresas antes que entre personas.
- **El factor fijo captura la renta (resultado teórico)** (`dim-captura-renta-factor-fijo`): El resultado de que, cuando los demás factores se vuelven reproducibles/abundantes (la IA convierte la inteligencia y luego el trabajo en factores reproducibles), el factor que queda fijo o escaso captura una tajada creciente —en el límite, toda— de la renta. Formaliza '¿quién hereda el cuello cuando la inteligencia es abundante?'. Condicionado a la complementariedad (σ<1). Unidad: tajada del ingreso (0–1).
- **Modo de colaboración (augment vs automate)** (`dim-collaboration-mode`): Clasificación de cada interacción humano-IA en augmentation (ida y vuelta) vs automation (delegación de tarea completa). Anthropic 52-57% augment; ILO/IMF usan variantes. NO es empleo: una tarea 'automatizada' en una conversación no implica un puesto eliminado. Unidad: % de conversaciones/tareas.
- **Comercio de servicios offshore (BPO/back-office): exportaciones como termómetro del desplazamiento** (`dim-comercio-servicios-offshore`): 
- **Composición de la base gravable: qué fracción de la recaudación descansa sobre el trabajo** (`dim-composicion-base-gravable`): Participación de cada fuente en los ingresos fiscales (impuesto a la renta personal, contribuciones sociales/nómina, impuesto corporativo, otros). Mide de qué depende la caja del Estado y, por lo tanto, cuánto de ella está expuesta a una caída de la participación del trabajo. Caveat: el impuesto a la renta personal no es puramente laboral — grava también dividendos, ganancias de capital, intereses y rentas de sociedades transparentes, así que la fracción estrictamente laboral es algo menor que la suma personal+nómina.
- **Concentración industrial asociada a la difusión de la IA** (`dim-concentracion-industrial-ia`): Grado en que las ganancias de la adopción de IA se acumulan en las empresas más grandes de cada industria y elevan la concentración del sector. Es el margen por el que la IA produce firmas superestrella, y el puente hacia la pregunta de si la renta se difunde o se concentra.
- **Crecimiento de la firma asociado a invertir en IA (ventas, empleo, valor de mercado)** (`dim-crecimiento-firma-inversion-ia`): Cambio en ventas, dotación y valuación de una empresa asociado a aumentar su inversión en IA, medida por la composición de talento de su planilla. A diferencia de la productividad por trabajador, mide si la empresa crece — y por lo tanto si contrata o no.
- **La energía como cuello físico de la IA** (`dim-cuello-energetico`): Demanda eléctrica de los datacenters (nivel, crecimiento, concentración geográfica) frente a la capacidad del sistema de entregarla. Mide si la energía se vuelve la restricción de ritmo y lugar de la IA. Caveat: a escala global los datacenters son un actor menor del crecimiento eléctrico — la escasez es local/temporal, no una pared malthusiana. Unidad: TWh, %/año, % del consumo.
- **Elasticidad de demanda (la bisagra empleo↑/↓)** (`dim-demand-elasticity`): Cuánto crece la demanda de un bien cuando su precio cae. Decide el signo del efecto de automatizar una tarea: si la demanda es elástica (software, Jevons) el bien más barato se compra mucho más y el empleo del resto de tareas SUBE; si se sacia (comida, petróleo, insulina) la demanda no responde y el empleo CAE. Imas: 'no tenemos datos' sobre estas elasticidades — la pieza que más falta. Unidad: elasticidad / cualitativo.
- **Desigualdad de ingresos entre hogares asociada a la actividad en IA (panel de países)** (`dim-desigualdad-ingresos-paises-ia`): Relación entre la inversión y actividad económica en IA de un país y la distribución del ingreso entre sus hogares, por deciles. Es el nivel más agregado en que el mapa mira la desigualdad: ni entre trabajadores ni entre empresas, sino entre hogares de una economía.
- **Rezago de difusión** (`dim-diffusion-lag`): Tiempo entre disponibilidad/breakthrough inicial de una tecnología y la fecha en que alcanza un umbral de difusión (p.ej. 50%) o muestra efectos agregados medibles (electrificación ~2 décadas a 50%, ~4 décadas al impacto en productividad). Magnitud TEMPORAL. Unidad: años.
- **Share de difusión (capacidad/adoptantes instalada)** (`dim-diffusion-share`): Fracción de una base de capital o de adoptantes que incorpora la nueva tecnología (David: <5% del accionamiento mecánico electrificado en 1899; 3% de hogares con luz eléctrica). Penetración tecnológica, no efectos laborales. Unidad: % de capacidad o de adoptantes.
- **Efecto de desplazamiento** (`dim-displacement-effect`): Componente del giro de contenido de tareas por el cual el capital toma tareas antes hechas por trabajo, reduciendo demanda de trabajo. Negativo por construcción. Unidad: %/año o % acumulado.
- **Valor económico de casos de uso (dólares)** (`dim-economic-value`): Valor económico anual potencial de casos de uso de IA generativa (McKinsey $2.6-4.4T/año, 63 casos). NO es conteo de empleo. Unidad: USD/año.
- **Fuga de la base gravable: fracción del beneficio que se desplaza o desaparece al gravarlo** (`dim-elasticidad-fuga-base`): Cuánta base imponible se traslada a jurisdicciones de baja tributación, o deja de declararse, en respuesta a un diferencial de tasas. Se mide por la fracción de beneficios multinacionales declarada en paraísos y por la brecha entre la recaudación proyectada de una reforma y la efectivamente obtenida.
- **Elasticidad de sustitución capital–trabajo (σ)** (`dim-elasticidad-sustitucion`): Cuán fácilmente la producción reemplaza trabajo por capital cuando cambian sus precios relativos. σ>1 = sustitutos brutos (el capital barato desplaza trabajo y baja su tajada); σ<1 = complementos (el trabajo se vuelve el factor escaso y su tajada sube); σ=1 = Cobb-Douglas (tajadas fijas). Es el parámetro que decide el signo del efecto de la IA sobre la participación del trabajo en el modelo agregado. Unidad: adimensional.
- **Cambio en razón empleo-población** (`dim-emp-pop-ratio-change`): Cambio en la razón empleo-población, en pp, atribuible a una unidad de exposición tecnológica (p.ej. por robot/1000 trabajadores). Resultado de empleo NETO realizado a una geografía. Unidad: pp.
- **Cambio de participación en el empleo de ocupaciones expuestas, ola pre-generativa** (`dim-empleo-expuestas-ola-previa`): Variación de la participación en el empleo de las ocupaciones más expuestas a IA durante la ola de aprendizaje automático predictivo, antes de la difusión de los modelos generativos. Es la línea de base contra la que se lee lo que ocurre después de noviembre de 2022; no es una medición de la IA generativa.
- **Empleo: separaciones / rotación de incumbentes** (`dim-employment-separations`): Continuidad laboral a nivel trabajador: atrición, retención, separaciones (Brynjolfsson: atrición cae, por retención de novatos). Mide salidas de incumbentes, NO creación/destrucción neta de mercado. Unidad: dirección o % de atrición.
- **Cambio de participación en el empleo** (`dim-employment-share-change`): Cambio en la participación de una ocupación/grupo en el total de horas o empleo, en pp o % proporcional, sobre un periodo y geografía. RELATIVO y suma-cero entre ocupaciones; NO es conteo neto de puestos ni resultado a nivel de trabajador. (Goos-Manning-Salomons, Autor-Dorn.) Unidad: pp o % del share.
- **Gradiente exposición-por-salario/habilidad** (`dim-exposure-skill-gradient`): Signo y forma de la correlación entre una medida de exposición/susceptibilidad y el salario o educación ocupacional (positivo = alto salario más expuesto, Webb/Eloundou; negativo = bajo salario más susceptible, Frey-Osborne). Unidad: cualitativo/signo o coeficiente.
- **Tasa de adopción de IA por firmas** (`dim-firm-adoption`): Share de empresas que han desplegado IA (OECD 2-23% en la UE). Medida de difusión que condiciona si cualquier potencial (exposición/horas) se realiza. Unidad: % de empresas.
- **Impuesto óptimo a la automatización: signo, magnitud y trayectoria** (`dim-impuesto-optimo-automatizacion`): Tasa de impuesto (o subsidio) sobre el capital que automatiza que maximiza el bienestar en modelos de tributación óptima, y cómo cambia esa tasa a medida que cae el precio de la máquina y se profundiza la automatización. Incluye la comparación de su ganancia de bienestar contra la de ajustar el impuesto a la renta.
- **Tipo de interacción económica (Asking/Doing/Expressing)** (`dim-interaction-type`): Rúbrica OpenAI: Asking = soporte a decisión (no produce output), Doing = produce output enchufable a un proceso, Expressing = sin contenido económico. 49/40/11%. Proxy del canal de valor. Correlacionado pero no redundante con augment/automate. Unidad: % de mensajes.
- **Retorno marginal de las inversiones complementarias a la IA** (`dim-inversiones-complementarias-ia`): Cuánto aumenta el efecto de la adopción de IA sobre la productividad por cada punto porcentual adicional invertido en activos complementarios: software y datos, capacitación de la plantilla, infraestructura. Mide la co-invención — la parte del rendimiento de la IA que no viene de la herramienta sino de lo que la empresa construye alrededor.
- **Empleos por robot** (`dim-jobs-per-robot`): Número de trabajadores cuyo empleo se pierde por un robot industrial adicional, en un equilibrio definido (local cerrado -6.2, GE con comercio -5.6, cota inferior -3.0). Unidad: trabajadores/robot.
- **Intensidad laboral por establecimiento** (`dim-labor-intensity-establishment`): Número de trabajadores de un tipo requeridos para operar un establecimiento (Bessen: cajeros por sucursal ~21→13). Medida de desplazamiento dentro-de-establecimiento; puede caer aunque el empleo ocupacional total suba si crece el número de establecimientos. Unidad: trabajadores/establecimiento.
- **Crecimiento de productividad del trabajo** (`dim-labor-productivity-growth`): Aumento anual de output por hora-trabajo atribuible a la IA (McKinsey 0.1-0.6 pp/año a 2040; proxy implícito de uso de Anthropic 0.7-2.6 pp/año según σ). Dimensión de output, ligable a empleo solo con supuestos conductuales adicionales. Unidad: pp/año.
- **Participación del trabajo** (`dim-labor-share`): Fracción del ingreso/valor agregado que va al trabajo (vs capital). Magnitud distinta de salarios o empleo; en declive según Brynjolfsson, con la tecnología como mayor explicación. Unidad: % del ingreso.
- **Pronóstico de empleo neto (encuesta a empleadores)** (`dim-net-employment-forecast`): Cambio NETO esperado en conteos de puestos sobre un horizonte fijo, elicitado por encuesta a empleadores (WEF: -14M/2023, +78M/2025). Dimensión conductual/de expectativa que refleja supuestos de los encuestados sobre TODOS los macrotrends, no solo IA. Unidad: número de puestos y % de una base definida.
- **Exposición ocupacional** (`dim-occupation-exposure`): Índice continuo o share de empleo en ocupaciones expuestas, agregando exposición de tareas al nivel ocupacional y ponderando por headcount (AIOE de Felten: 10 apps IA × 52 habilidades O*NET; IMF ~40%). Direccionalmente AGNÓSTICA: incluye tanto desplazamiento potencial como complementariedad. Unidad: índice estandarizado o % de empleo.
- **Susceptibilidad ocupacional** (`dim-occupation-susceptibility`): Probabilidad modelada de que una ocupación entera sea automatizable dada la tecnología actual/previsible, ponderada por empleo (Frey-Osborne: clasificador de procesos gaussianos, 47% en alto riesgo P>0.7). Probabilidad de factibilidad, no de tiempo ni de realización. Unidad: % de empleo en un bucket de probabilidad.
- **Transiciones ocupacionales requeridas** (`dim-occupational-transitions`): Conteo o share de trabajadores que deben moverse a una ocupación DISTINTA porque la suya se contrae (McKinsey: 12M adicionales en EE.UU. a 2030; salario bajo hasta 14x más propenso). Medida de carga de ajuste, no de pérdida neta. Unidad: número de trabajadores.
- **Elasticidad de la oferta de cómputo (empaquetado de frontera)** (`dim-oferta-computo`): Cuánto responde la capacidad de cómputo de frontera a un alza de precio. Bimodal: el die lógico es relativamente elástico (se redirige capacidad existente pujando precio), pero el empaquetado avanzado (CoWoS) y la memoria (HBM) son el cuello duro e inelástico (fabs nuevas, lead times largos, ~90% consumido por los 4 grandes). El precio por FLOP cae; el del cuello vinculante sube.
- **Elasticidad de la oferta de energía (entrega)** (`dim-oferta-energia`): Cuánto responde la electricidad firme/conectada a un alza de precio. Inelástica en el corto plazo (capacidad de generación fija, colas de interconexión de ~5 años, transformadores y turbinas escasos), más elástica a largo plazo. El costo de generación cae, pero la ENTREGA —red, energía firme donde se necesita— es el cuello.
- **Elasticidad de la oferta de tierra/materia** (`dim-oferta-tierra`): Cuánto responde la tierra/espacio/minerales para datacenters a un alza de precio. El factor genuinamente fijo (Korinek-Suh, Trammell): sin estimación econométrica limpia, inelástico por construcción en el corto plazo.
- **Calidad del output** (`dim-output-quality`): Calidad del producto del trabajo evaluada externamente, fijando la tarea (Noy-Zhang grados +0.45 SD; NPS de cliente sin cambio significativo). Ortogonal al tiempo/velocidad. Unidad: SD de grado o pp de métrica de cliente.
- **Brecha de percepción (auto-reporte vs medido)** (`dim-perception-gap`): Diferencia entre el efecto de productividad declarado/pronosticado por un trabajador y el efecto externamente medido en la misma tarea (METR: +20% percibido vs -19% medido, ~39pp). Meta-dimensión sobre la fiabilidad del auto-reporte como evidencia. Unidad: pp de diferencia.
- **Crecimiento del PIB** (`dim-pib-crecimiento`): Cambio en el PIB (nivel acumulado a un horizonte, o tasa anual). Difiere de TFP por la respuesta del stock de capital (Acemoglu: PIB 0.93-1.56% vs TFP <0.66%). Unidad: % de nivel o %/año.
- **Efecto causal de la adopción de IA sobre la productividad laboral de la firma** (`dim-productividad-firma-ia`): Cambio en el nivel de productividad laboral atribuible a que una empresa adopte IA, estimado con identificación causal (no correlación entre adoptantes y no adoptantes). Se distingue de las mediciones de productividad por tarea en experimentos con trabajadores: aquí la unidad es la firma y el resultado incorpora la reorganización, la inversión y el equilibrio interno de la empresa.
- **Dispersión/desigualdad de productividad entre trabajadores** (`dim-productivity-dispersion`): Spread de la distribución de productividad/calidad entre trabajadores: varianza, brecha inter-quintil, o persistencia (correlación grado primera→segunda tarea, Noy-Zhang 0.49→0.25). Captura si la IA comprime o ensancha diferencias por habilidad. Unidad: correlación o brecha.
- **Efecto de productividad** (`dim-productivity-effect`): Aumento de output/demanda de trabajo en tareas no automatizadas porque la automatización sube la productividad y baja costos. Distinto de reinstauración (no requiere tareas nuevas). Unidad: %/año de demanda de trabajo o de masa salarial.
- **Productividad implícita por uso (sensible a σ)** (`dim-productivity-implicit-sigma`): Crecimiento anual de productividad laboral CONSTRUIDO por un lab a partir de datos de uso: speedup × cobertura × tasa de éxito, agregado bajo una función CES con elasticidad de sustitución entre tareas σ (Anthropic: 0.7-0.9 con σ=0.5; 1.2 con σ=1; 2.2-2.6 con σ=1.5). NO es TFP medida ex-post; es proyección con supuestos. Unidad: pp/año.
- **Productividad/tiempo por tarea (RCT a nivel trabajador)** (`dim-productivity-task-rct`): Cambio en tiempo-de-completar o calidad de una tarea definida dado un asistente IA, medido en RCT/experimento de campo (Copilot -55.8% tiempo, Noy-Zhang -37%, Brynjolfsson +15% RPH, METR +19% más lento). Nivel trabajador/tarea, horizonte corto; NO es empleo ni salario y no es agregable a efectos de mercado laboral sin supuestos. Unidad: % de cambio en tiempo/output.
- **Productividad / TFP** (`dim-productivity-tfp`): Cambio en la productividad total de factores (residuo de Solow), nivel acumulado o tasa anual. Distinta de productividad del trabajo. Acemoglu vía Hulten; Brynjolfsson-J-Curve mide el SESGO DE MEDICIÓN de esta dimensión. Unidad: % de nivel o pp/año.
- **Cambio de empleo realizado (histórico/correlacional)** (`dim-realized-employment-change`): Cambio observado (histórico, correlacional o causal según diseño) en empleo o share de empleo dentro-de-industria asociado a un incremento de exposición tecnológica medida (Webb: robots 9-18%, software 7-11%). Distinto de exposición y de share zero-sum. Unidad: % de cambio.
- **Demanda laboral realizada (ex-post)** (`dim-realized-labor-demand`): Cambio observado ex-post en empleo/contratación atribuible a la IA hasta la fecha (OECD: 'limitado hasta ahora'). La única dimensión de resultado directamente medido entre los reportes institucionales; el resto es potencial o pronóstico. Unidad: direccional o % de cambio.
- **Efecto de reinstauración** (`dim-reinstatement-effect`): Componente por el cual nuevas tareas intensivas en trabajo restauran trabajo en la producción, elevando demanda de trabajo. Positivo por construcción. Unidad: %/año o % acumulado.
- **Valor relacional (el humano-en-el-loop como parte del valor)** (`dim-relational-value`): Bienes/servicios donde el hecho de que un humano esté en el loop ES parte del valor para el consumidor (no porque el humano sea un insumo reemplazable, sino por una preferencia intrínseca por empatía/conexión/autenticidad). Su tajada sostiene empleo solo si la preferencia es fuerte, amplia y su variedad crece. Unidad: disposición a pagar / cualitativo.
- **Respuesta de la oferta laboral a una transferencia incondicional** (`dim-respuesta-oferta-laboral-transferencia`): Cambio en participación, horas e ingreso laboral propio provocado por una transferencia de efectivo sin contraprestación. Determina cuánto del ingreso transferido se traduce en ingreso adicional neto para el hogar y cuánto se compensa con menos trabajo. Se distingue por diseño: focalizada y temporal frente a universal y permanente.
- **Densidad de robots** (`dim-robot-density`): Robots industriales instalados por cada mil trabajadores en un mercado laboral local (zona de commuting). Es densidad de hardware instalado, NO susceptibilidad técnica del contenido del trabajo (exposición). Unidad: robots/1000 trabajadores.
- **Sesgo tributario capital–trabajo: brecha entre la tasa efectiva sobre el trabajo y sobre el capital que automatiza** (`dim-sesgo-tributario-capital-trabajo`): Diferencia entre la tasa efectiva de impuesto sobre el trabajo y la que recae sobre equipo y software, incorporando depreciación acelerada, tasas corporativas efectivas y tributación de los dueños del capital. Es el precio relativo que el Estado le pone a sustituir una persona por una máquina.
- **Rotación estructural (bruta)** (`dim-structural-churn`): Rotación bruta = puestos creados MÁS destruidos sobre un horizonte, como share de la fuerza laboral (WEF 22-23%). Distinta del cambio neto; alta rotación es compatible con neto ~cero. Unidad: % de la fuerza laboral.
- **Elasticidad de sustitución energía ↔ otros factores (σ)** (`dim-sustitucion-energia-factores`): Cuán fácil reemplaza la economía energía/insumos físicos por capital, trabajo o inteligencia cuando cambian sus precios relativos. σ<1 (complementos) = la inteligencia abundante vuelve MÁS valioso el factor físico y su tajada de la renta sube; σ>1 (sustitutos) = la inteligencia lo reemplaza y su tajada cae; σ=1 = tajada fija. Es el parámetro que decide el signo de '¿los átomos capturan la renta?'. Análogo físico de dim-elasticidad-sustitucion. Unidad: adimensional.
- **Giro del contenido de tareas (desplazamiento vs reinstauración)** (`dim-task-content-shift`): Cambio en la participación de tareas de producción asignadas a trabajo vs capital (Acemoglu-Restrepo 2019), medido como el cambio residual de la participación del trabajo neto del efecto de sustitución de factores. Se descompone en desplazamiento (negativo) y reinstauración (positivo). Unidad: % por año de demanda de trabajo (o acumulado).
- **Exposición de tareas** (`dim-task-exposure`): Fracción de tareas de una ocupación/economía técnicamente susceptibles de ser realizadas o asistidas por la IA, sobre un umbral definido (p.ej. reduce el tiempo ≥50% a igual calidad — rúbrica Eloundou; o solapamiento patente-tarea — Webb; o scoring GPT-4 — ILO). Medida de susceptibilidad/capacidad del CONTENIDO del trabajo, NO un resultado de empleo. Unidad: % de tareas (o % de trabajadores que cruzan un umbral de tareas).
- **Signo del efecto neto sobre el empleo** (`dim-task-net-ambiguous`): Dirección (no magnitud) del efecto neto de la automatización sobre la demanda de trabajo: el balance cualitativo entre desplazamiento y reinstauración+productividad. Es cualitativo, no se promedia.
- **Tasa de éxito de tarea** (`dim-task-success-rate`): Probabilidad estimada de que la IA complete con éxito una tarea, condicional a complejidad (educación requerida) o duración (horas-humano). Anthropic: 70%→66% por nivel educativo; ~60%→45% por duración. Insumo para ajustar estimaciones de productividad. Unidad: % de éxito.
- **Vacantes de IA y de no-IA a nivel de establecimiento** (`dim-vacantes-ia-establecimiento`): Composición de los avisos de empleo publicados por un establecimiento: cuántos piden habilidades de IA, cuántos dejan de pedir habilidades antes listadas, y qué pasa con la contratación en posiciones no relacionadas con IA. Mide la reorganización de la demanda de trabajo dentro del empleador, un margen anterior al empleo observado.
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
  *dim:* dim-oferta-energia · *horizonte:* largo plazo · *ámbito:* EE.UU./generación renovable
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

### EIA (U.S. Energy Information Administration) (2018)
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

  *engancha:* `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta; `tensiona` Repartir no restaura el ingreso laboral (y el diseño decide cuánto se pierde); `tensiona` La base gravable se erosiona con la participación del trabajo

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

### Daron Acemoglu, Andrea Manera & Pascual Restrepo (2020)
`acemoglu-manera-restrepo-2020-tax` · Brookings Papers on Economic Activity, Spring 2020 / NBER Working Paper 27052 · [fuente](https://www.nber.org/papers/w27052)  ⚠ **Publicado en BPEA (conferencia con discusión formal) y con working paper NBER. Verificado sobre el PDF primario extraído localmente: abstract y sección de tasas efectivas leídos verbatim. Las tasas efectivas son estimaciones propias de los autores y son MÁS BAJAS que las del CBO (2014) por dos razones que ellos mismos declaran: incorporan la depreciación acelerada (bonus depreciation), que el CBO omite, y usan la tasa corporativa efectiva en vez de la estatutaria. Un lector que compare contra cifras del CBO verá números distintos por esa razón, no por error.**

- **25,5% (referencia); rango 25,5–33,5% según el tratamiento de programas focalizados** — Tasa efectiva de impuesto sobre el trabajo en EE.UU.
  *dim:* dim-sesgo-tributario-capital-trabajo · *horizonte:* 1981–2018 · *ámbito:* EE.UU./economía completa
  > Our benchmark effective tax on labor ... hovers around 25.5%.
- **≈20% en 2000 → ≈10% en la década de 2010 → ≈5% tras la reforma de 2017** — Tasa efectiva sobre el capital que automatiza (equipo y software)
  *dim:* dim-sesgo-tributario-capital-trabajo · *horizonte:* 2000–2018 · *ámbito:* EE.UU./equipo y software
  > effective taxes on equipment and software decreased further, to about 5%, following the 2017 tax reform
- **empleo +4,02%; participación del trabajo +0,78 pp; se restaura el nivel óptimo de automatización** — Efecto de pasar del sistema tributario de la década de 2010 a la tributación óptima de capital y trabajo
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* estado estacionario · *ámbito:* EE.UU./economía completa
  > Moving from the US tax system in the 2010s to optimal taxation of capital and labor would raise employment by 4.02% and the labor share by 0.78 percentage points
- **empleo +1,14–1,96%, pero entonces conviene añadir un impuesto a la automatización para bajar su nivel de equilibrio** — Reformas más modestas (si la tributación óptima es inviable)
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* estado estacionario · *ámbito:* EE.UU./economía completa
  > more modest reforms can still increase employment by 1.14–1.96%, but in this case efficiency can be increased by imposing an additional automation tax
- **las tareas automatizadas en el margen aportan poca productividad y sí desplazan trabajadores** — Mecanismo: por qué el sesgo produce automatización excesiva
  *dim:* dim-sesgo-tributario-capital-trabajo · *horizonte:* — · *ámbito:* EE.UU./economía completa
  > marginal automated tasks do not bring much productivity gains but displace workers, reducing employment below its socially optimal level
- **≈18,6% del PIB (25,5% × ingreso laboral + 10% × ingreso neto de capital), coincidente con 18,7% observado en NIPA 1981–2018** — Tamaño de la caja que producen esos instrumentos
  *dim:* dim-composicion-base-gravable · *horizonte:* 1981–2018 · *ámbito:* EE.UU./economía completa
  > the net tax revenue collected by the government with these instruments is roughly 18.6% of GDP

  *engancha:* `informa` La base gravable se erosiona con la participación del trabajo; `confirma` El sistema tributario subsidia la automatización (no solo la compensa después); `informa` Desplazamiento domina en el periodo reciente (post-1987); `informa` Efecto neto de signo ambiguo (desplazamiento/productividad/reinstauración)

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

### Joao Guerreiro, Sergio Rebelo & Pedro Teles (2022)
`guerreiro-rebelo-teles-2022-robots` · The Review of Economic Studies 89(1): 279–311 / NBER Working Paper 23806 · [fuente](https://academic.oup.com/restud/article-abstract/89/1/279/6219962)  ⚠ **Revisado por pares en una de las cinco revistas principales. Abstract verificado en la primaria (NBER w23806). El resultado es de un modelo cuantitativo con elección endógena de habilidad calibrado a EE.UU.; su fuerza es la estructura del argumento (el impuesto óptimo es transitorio porque compensa a una cohorte que no puede recolocarse), no una cifra puntual de tasa, que el abstract no reporta.**

- **positivo mientras siga activa la cohorte de trabajadores rutinarios que ya no puede moverse a ocupaciones no rutinarias; cero una vez que se jubila** — Signo y duración del impuesto óptimo a los robots
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* una generación laboral · *ámbito:* EE.UU. (modelo calibrado)/economía completa
  > it is optimal to tax robots while the current generations of routine workers ... are active in the labor force. Once these workers retire, optimal robot taxes are zero.
- **una caída sostenida del costo de automatizar puede producir un alza masiva de la desigualdad de ingresos** — Riesgo distributivo bajo el sistema tributario vigente
  *dim:* dim-sesgo-tributario-capital-trabajo · *horizonte:* décadas · *ámbito:* EE.UU./economía completa
  > given the current U.S. tax system, a sustained fall in automation costs can lead to a massive rise in income inequality

  *engancha:* `confirma` El sistema tributario subsidia la automatización (no solo la compensa después); `informa` El impuesto al robot es el instrumento equivocado

### Damon Jones & Ioana Marinescu (2022)
`jones-marinescu-2022-alaska` · American Economic Journal: Economic Policy 14(2): 315–340 · [fuente](https://www.aeaweb.org/articles?id=10.1257/pol.20190299)  ⚠ **Revisado por pares; abstract verificado en la primaria (AEA). No es un experimento: usa control sintético sobre la Current Population Survey, así que la identificación depende de la calidad del contrafactual construido. Es el mejor caso disponible de transferencia UNIVERSAL y PERMANENTE, que es justamente el diseño que el debate sobre IA suele proponer y que los pilotos focalizados no prueban.**

- **sin efecto sobre el empleo agregado; trabajo a tiempo parcial +1,8 pp (+17%)** — Efecto del dividendo universal y permanente de Alaska sobre el empleo
  *dim:* dim-respuesta-oferta-laboral-transferencia · *horizonte:* desde 1982 · *ámbito:* EE.UU. (Alaska)/población completa del estado
  > the dividend had no effect on employment and increased part-time work by 1.8 percentage points (17 percent)
- **efecto de equilibrio general: el efectivo estimula la economía local; los sectores no transables responden con más empleo que los transables** — Mecanismo que explica la ausencia de caída del empleo
  *dim:* dim-respuesta-oferta-laboral-transferencia · *horizonte:* décadas · *ámbito:* EE.UU. (Alaska)/transables vs no transables
  > Nontradable sectors have a more positive employment response than tradable sectors

  *engancha:* `tensiona` Repartir no restaura el ingreso laboral (y el diseño decide cuánto se pierde)

### Daron Acemoglu, David Autor, Jonathon Hazell & Pascual Restrepo (2022)
`acemoglu-autor-hazell-restrepo-2022-vacantes` · Journal of Labor Economics 40(S1): S293-S340 ('Artificial intelligence and jobs: evidence from online vacancies'); working paper NBER 28257 (diciembre de 2020, revisado enero de 2021) · [fuente](https://www.nber.org/papers/w28257)  ⚠ **Revisado por pares; verificado sobre el PDF primario del working paper NBER revisado. ⚠ Datos 2010-2018, con «exposición a IA» definida por compatibilidad de tareas con las capacidades de la IA DE ENTONCES: no habla de modelos generativos. La fuente son avisos de empleo en línea (Burning Glass), que capturan la demanda publicada y no la contratación efectiva, y sobrerrepresentan ocupaciones que se reclutan por ese canal. Las estimaciones a nivel de establecimiento son asociaciones diferenciales, no efectos causales.**

- **los establecimientos expuestos eliminan diferencialmente avisos que listaban habilidades antes publicadas y a la vez publican requisitos que antes no listaban; reducen la contratación en posiciones NO relacionadas con IA mientras expanden la contratación en IA** — Reorganización de la demanda de trabajo dentro del establecimiento expuesto
  *dim:* dim-vacantes-ia-establecimiento · *horizonte:* 2010-2018 · *ámbito:* EE.UU./casi la totalidad de las vacantes en línea
  > AI-exposed establishments are reducing hiring in non-AI positions even as they expand AI hiring
- **ningún impacto discernible sobre empleo o salarios: la IA sustituía humanos en un subconjunto de tareas sin consecuencias agregadas detectables todavía** — Efecto agregado, a nivel de ocupación e industria
  *dim:* dim-realized-labor-demand · *horizonte:* 2010-2018 · *ámbito:* EE.UU./ocupaciones e industrias
  > we find no discernible impact of AI exposure on employment or wages at the occupation or industry level

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` Mucha rotación, neto pequeño e incierto; `tensiona` La IA generativa se comporta distinto de la ola predictiva que la precedió; `informa` La desigualdad de la IA se juega entre empresas, no solo entre trabajadores

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

  *engancha:* `confirma` Nivelación de habilidades (la IA comprime la distribución de productividad); `confirma` Exposición no es empleo neto; `confirma` El contexto invierte el signo (no hay multiplicador único de productividad); `confirma` La paradoja del junior: la IA lo hace más productivo justo donde lo dejan de contratar

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

### Arnaud Costinot & Iván Werning (2023)
`costinot-werning-2023-luddism` · The Review of Economic Studies / NBER Working Paper 25103 ('Robots, Trade, and Luddism: A Sufficient Statistic Approach to Optimal Technology Regulation') · [fuente](https://www.nber.org/papers/w25103)  ⚠ **Revisado por pares. Abstract verificado en la primaria (NBER). Aporta la forma del problema —una fórmula de estadística suficiente que se puede implementar con evidencia sobre el impacto distributivo observado— más que una tasa calibrada. El resultado contraintuitivo (la magnitud del impuesto óptimo decrece a medida que la automatización se profundiza) es comparativa estática del modelo, no una predicción empírica.**

- **estadística suficiente: la evidencia sobre el impacto distributivo de la tecnología entre hogares** — Qué hace falta para fijar el impuesto óptimo a la tecnología
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* — · *ámbito:* general/robots y comercio
  > sufficient statistics that can be implemented using evidence on the distributional impact of new technologies, such as robots and trade
- **no cero, pero su magnitud puede DECRECER a medida que la automatización y la globalización se profundizan y la desigualdad aumenta** — Trayectoria de la magnitud del impuesto óptimo
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* largo plazo · *ámbito:* general/robots y comercio
  > while distributional concerns create a rationale for non-zero taxes on robots and trade, the magnitude of these taxes may decrease as the process of automation and globalization deepens

  *engancha:* `informa` El impuesto al robot es el instrumento equivocado

### Uwe Thuemmel (2023)
`thuemmel-2023-robots` · Journal of the European Economic Association 21(3): 1154–1190 · [fuente](https://academic.oup.com/jeea/article/21/3/1154/6798383)  ⚠ **Revisado por pares, acceso abierto (CC-BY). Verificado sobre el PDF primario extraído localmente: abstract e introducción cuantitativa leídos verbatim. Es el más útil de los tres para decidir instrumentos porque compara magnitudes de bienestar entre reformas, no solo signos. Las cifras en USD per cápita son del modelo calibrado a EE.UU., no observaciones.**

- **con robots caros, lo óptimo es SUBSIDIARLOS; a medida que se abaratan, pasa a ser óptimo gravarlos** — Signo del impuesto óptimo a los robots según su precio
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* — · *ámbito:* EE.UU. (modelo calibrado)/economía completa
  > when robots are expensive, a robot subsidy is optimal. As robots get cheaper, it becomes optimal to tax them.
- **impuesto a la renta óptimo: 1.000–4.000 USD per cápita al año · afinar impuestos al capital (con robots y equipo gravados igual): 2–20 USD adicionales · gravar robots distinto del equipo: ganancias adicionales casi nulas** — Ganancia de bienestar por instrumento (reforma desde el status quo)
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* estado estacionario · *ámbito:* EE.UU. (modelo calibrado)/economía completa
  > Additional gains between 2 and 20 USD can be achieved by optimally setting taxes on capital ... Allowing for differential taxation of robots and equipment leads to almost no additional welfare gains.
- **siempre positivo y mayor que el impuesto al robot; llega a un máximo de cerca de 2% y luego declina. El capital en estructuras no debería gravarse** — Nivel del impuesto óptimo al capital en la calibración
  *dim:* dim-impuesto-optimo-automatizacion · *horizonte:* trayectoria con precio de robots decreciente · *ámbito:* EE.UU. (modelo calibrado)/capital
  > always positive and larger than the robot tax, peaking at about 2% and then declining

  *engancha:* `confirma` El impuesto al robot es el instrumento equivocado; `tensiona` El sistema tributario subsidia la automatización (no solo la compensa después)

### Thomas R. Tørsløv, Ludvig S. Wier & Gabriel Zucman (2023)
`torslov-wier-zucman-2023-missing-profits` · The Review of Economic Studies ('The Missing Profits of Nations') / NBER Working Paper 24701; cifras actualizadas en missingprofits.world · [fuente](https://missingprofits.world/)  ⚠ **Revisado por pares; el sitio de los autores mantiene la serie actualizada. La cifra de 2015 (36%) es la del paper; la de ~40% y ~1 billón de USD corresponde a 2019 en la actualización de los autores. Metodología macro basada en estadísticas de filiales extranjeras: mide beneficios declarados, no evasión probada, y el propio ejercicio es contrafactual (dónde estarían los beneficios si todos los países tuvieran la misma tasa efectiva). Nota relevante para el mapa: la OCDE sostiene en 2026 que el desplazamiento de beneficios ha caído desde entonces, lo que reduce tanto la recaudación potencial como el diagnóstico original.**

- **36% en 2015; cerca de 40% en 2019 (≈1 billón de USD)** — Fracción de los beneficios multinacionales desplazada a paraísos fiscales
  *dim:* dim-elasticidad-fuga-base · *horizonte:* 2015–2019 · *ámbito:* global/multinacionales
  > close to 40% of multinational profits ... are shifted to tax havens each year
- **más de 200 mil millones de USD, ≈10% de la recaudación corporativa global** — Recaudación perdida por el desplazamiento de beneficios
  *dim:* dim-elasticidad-fuga-base · *horizonte:* 2019 · *ámbito:* global/multinacionales
  > reduces corporate income tax revenue by more than $200 billion, or 10% of global corporate tax receipts

  *engancha:* `confirma` Lo que se puede gravar es lo que no se puede mover; `informa` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### Giulio Cornelli, Jon Frost & Saurabh Mishra (2023)
`cornelli-frost-mishra-2023-desigualdad` · BIS Working Papers No 1135 ('Artificial intelligence, services globalisation and income inequality') · [fuente](https://www.bis.org/publ/work1135.pdf)  ⚠ **Working paper de banco central, no revisado por pares; verificado sobre el PDF primario. ⚠ Panel de 86 países 2010-2019, o sea la ola previa. Los resultados son ASOCIACIONES en panel, no efectos causales, y a un nivel de agregación —país-año— donde conviven muchos otros procesos (globalización financiera, cambio sectorial, ciclo de commodities). Su valor está en ser el único nodo del mapa que mira la desigualdad entre hogares a escala internacional y en conectar el canal de servicios con la distribución del ingreso.**

- **asociada a mayor desigualdad: suben los ingresos reales y la participación del decil superior, mientras cae la participación de los hogares del quinto decil y del inferior** — Inversión en IA y distribución del ingreso entre hogares
  *dim:* dim-desigualdad-ingresos-paises-ia · *horizonte:* 2010-2019 · *ámbito:* 86 países/economía completa
  > AI investment is tied to higher real incomes and income shares for households in the top decile, while households in the fifth and bottom decile see a decline in their income shares
- **contracción del empleo total, desplazamiento de roles de calificación media hacia roles gerenciales de alta calificación, y REDUCCIÓN de la participación del trabajo en el ingreso; además, asociación positiva con las exportaciones de servicios modernos ligados a IA** — Efectos en el mercado laboral y en el comercio de servicios
  *dim:* dim-labor-share · *horizonte:* 2010-2019 · *ámbito:* 86 países/economía completa y comercio de servicios
  > there is a contraction in overall employment, a shift from mid-skill to high-skill managerial roles and a reduced labour share of income

  *engancha:* `confirma` La IA ensancha (no reduce) la desigualdad; `confirma` La IA erosiona la participación del trabajo (si σ>1); `confirma` La IA expande el offshoring en vez de repatriarlo (telemigración); `tensiona` La IA generativa se comporta distinto de la ola predictiva que la precedió; `confirma` Polarización por sesgo anti-rutina (RBTC)

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
- **materia/energía = el factor genuinamente fijo (el cómputo es reproducible)** — El factor fijo (materia/energía) es la fuente última de escasez
  *dim:* dim-captura-renta-factor-fijo · *horizonte:* largo plazo · *ámbito:* —/—
  > In the longer-term, matter or, equivalently, energy (E = mc^2) may be the ultimate source of scarcity

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
- **tajada del factor fijo → 1 si es complemento (ρ<0)** — El dueño del factor de oferta fija recibe ~todo el producto
  *dim:* dim-captura-renta-factor-fijo · *horizonte:* largo plazo · *ámbito:* —/—
  > the resource in fixed supply constrains growth and its owners receive approximately all output

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

### LBNL (Lawrence Berkeley National Laboratory, EMP) (2024)
`lbnl-queued-up2024` · Berkeley Lab — Queued Up: 2024 Edition (datos a fin de 2023) · [fuente](https://emp.lbl.gov/queues)  ⚠ **Confiabilidad muy alta: dataset de referencia del sector (Berkeley Lab/DOE), datos administrativos de las colas de interconexión de los ISO/RTO. Es la cuantificación más dura de la inelasticidad de la oferta eléctrica: añadir generación tarda ~5 años y casi nada de la cola se construye.**

- **~5 años de solicitud a operación (vs <2 en 2008); solo 19% de proyectos / 14% de capacidad construidos; >70% se retira** — Lead time y tasa de completación de nueva generación
  *dim:* dim-oferta-energia · *horizonte:* 2000–2023 · *ámbito:* EE.UU./generación eléctrica
  > The typical project built in 2023 took nearly 5 years from the interconnection request to commercial operations, compared to 3 years in 2015 and <2 years in 2008.

  *engancha:* `confirma` La oferta de energía y cómputo es inelástica en el horizonte relevante; `confirma` Si son complementos y la oferta es inelástica, los átomos capturan la renta

### CBO (Congressional Budget Office) (2024)
`cbo-2024-receipts` · Monthly Budget Review: September 2024 (publicación 60730) — cifras preliminares del año fiscal 2024, Tabla 2 'Receipts, October–September' · [fuente](https://www.cbo.gov/publication/60730/html)  ⚠ **Estadística oficial. Leída directamente en la tabla del CBO (el fetch automático da 403; se leyó el HTML en navegador). Las cifras del año fiscal 2024 son PRELIMINARES en esta publicación (basadas en el Monthly Treasury Statement de agosto y los Daily Treasury Statements de septiembre). Caveat conceptual que importa para no sobreleer el 84%: el impuesto a la renta personal no grava solo trabajo — incluye dividendos, ganancias de capital, intereses y rentas de sociedades transparentes; la fracción estrictamente laboral es algo menor.**

- **total 4.918 mil millones USD: renta personal 2.425 (49,3%), nómina/seguridad social 1.709 (34,7%), corporativo 529 (10,8%), otros 255 (5,2%)** — Composición de los ingresos federales de EE.UU., año fiscal 2024
  *dim:* dim-composicion-base-gravable · *horizonte:* año fiscal 2024 · *ámbito:* EE.UU. (gobierno federal)/economía completa
  > Receipts totaled $4.9 trillion during fiscal year 2024
- **84,1% (4.134 de 4.918 mil millones USD) frente a 10,8% del impuesto corporativo: la caja depende ~8 veces más de la base personal/laboral que de las utilidades** — Fracción de la recaudación federal que descansa sobre personas y nóminas
  *dim:* dim-composicion-base-gravable · *horizonte:* año fiscal 2024 · *ámbito:* EE.UU. (gobierno federal)/economía completa
  > Combined Individual Income and Payroll Taxes ... Total 4,134

  *engancha:* `confirma` La base gravable se erosiona con la participación del trabajo; `informa` La IA erosiona la participación del trabajo (si σ>1)

### OECD (Inclusive Framework on BEPS) (2024)
`oecd-2024-gmt-eia` · Economic Impact Assessment of the Global Minimum Tax (enero de 2024), resumen ejecutivo · [fuente](https://www.oecd.org/content/dam/oecd/en/topics/policy-issues/cross-border-and-international-tax/summary-economic-impact-assessment-global-minimum-tax-january-2024.pdf)  ⚠ **Informe oficial de la OCDE, verificado sobre el PDF primario extraído localmente. Es una PROYECCIÓN ex ante, no recaudación observada: su valor en el mapa es servir de par al informe de 2026 y hacer visible cuánto se corrigió la estimación al llegar los datos.**

- **155.000–192.000 millones de USD al año, equivalentes a 6,5–8,1% de la recaudación corporativa global; un tercio de esa ganancia proviene de menor desplazamiento de beneficios** — Recaudación adicional proyectada del impuesto mínimo global del 15%
  *dim:* dim-elasticidad-fuga-base · *horizonte:* anual, régimen establecido · *ámbito:* global/multinacionales con ingresos ≥750 millones de euros
  > The GMT is estimated to raise additional CIT revenues of USD 155-192 billion globally each year or between 6.5% and 8.1% of global CIT revenues
- **el beneficio global gravado por debajo del 15% cae de 36% a ~7% del beneficio total (reducción de ~80%)** — Reducción proyectada del beneficio poco gravado
  *dim:* dim-elasticidad-fuga-base · *horizonte:* régimen establecido (escenario año diez) · *ámbito:* global/multinacionales
  > The GMT is estimated to reduce global low-taxed profit by about 80%; from 36% of all profit globally to about 7%.

  *engancha:* `tensiona` Lo que se puede gravar es lo que no se puede mover

### Tania Babina, Anastassia Fedyk, Alex He & James Hodson (2024)
`babina-etal-2024-firm-growth` · Journal of Financial Economics 151: 103745 ('Artificial intelligence, firm growth, and product innovation') · [fuente](https://alexxihe.github.io/jfe.pdf)  ⚠ **Revisado por pares en una revista de primer nivel; verificado sobre el PDF publicado. ⚠ PERÍODO 2010-2018, anterior a los modelos generativos: mide la ola de aprendizaje automático, no la actual. La medida de inversión en IA es indirecta —la composición de talento de la planilla, construida con currículums de empleados—, así que capta contratación de perfiles de IA antes que uso desplegado. La identificación se apoya en instrumentar con la exposición de cada firma a la oferta universitaria de graduados en IA, un supuesto de exclusión razonable pero discutible. Las magnitudes son por una desviación estándar de la medida sobre ocho años, no efectos anuales.**

- **+19,5% de ventas, +18,1% de EMPLEO y +22,3% de valor de mercado** — Crecimiento de la firma por una desviación estándar más de inversión en IA (2010-2018)
  *dim:* dim-crecimiento-firma-inversion-ia · *horizonte:* 2010-2018 · *ámbito:* EE.UU./firmas cotizadas, todos los sectores
  > a one-standard-deviation increase in the resume-based measure of AI investments over the 8-year period corresponds to a 19.5% increase in sales, a 18.1% increase in employment, and a 22.3% increase in market valuation
- **principalmente por mayor innovación de PRODUCTO, no por reducción de costos ni por eficiencia de procesos** — Por dónde llega el crecimiento
  *dim:* dim-crecimiento-firma-inversion-ia · *horizonte:* 2010-2018 · *ámbito:* EE.UU./firmas cotizadas
  > This growth comes primarily through increased product innovation.
- **el crecimiento impulsado por IA se concentra en las firmas MÁS GRANDES y viene asociado a mayor concentración industrial: la IA contribuye a producir empresas superestrella** — Dónde se acumulan las ganancias y qué le hace a la industria
  *dim:* dim-concentracion-industrial-ia · *horizonte:* 2010-2018 · *ámbito:* EE.UU./por tamaño de firma e industria
  > AI-powered growth concentrates among larger firms and is associated with higher industry concentration.

  *engancha:* `confirma` La IA generativa se comporta distinto de la ola predictiva que la precedió; `confirma` La desigualdad de la IA se juega entre empresas, no solo entre trabajadores; `confirma` Reinstauración vía nuevas tareas; `tensiona` Mucha rotación, neto pequeño e incierto; `informa` La renta de la IA: ¿electricidad (difusa) o plataforma (concentrada)?

### Leonardo Gambacorta, Han Qiu, David Rees & Shu Shan (2024)
`gambacorta-etal-2024-codefuse` · BIS Working Papers No 1208 ('Generative AI and labour productivity: a field experiment on coding') · [fuente](https://www.bis.org/publ/work1208.pdf)  ⚠ **Working paper de banco central, no revisado por pares; verificado sobre el PDF primario. Experimento de campo aprovechando la introducción de CodeFuse en Ant Group (septiembre de 2023): un grupo de programadores usó el LLM y otros equipos no fueron informados de su existencia, y se emparejaron empleados comparables. Límites: una sola empresa y un solo país, la medida de producto es cantidad de código —no calidad ni valor del software—, y el diseño es cuasi-experimental con emparejamiento, no aleatorización.**

- **más de 50% de aumento del output de código (≈55%, con cerca de un tercio atribuible directamente al código generado por el modelo)** — Efecto de un asistente de código basado en LLM sobre la producción de código
  *dim:* dim-productivity-task-rct · *horizonte:* desde septiembre de 2023 · *ámbito:* China (Ant Group)/programación
  > the use of gen AI increased code output by more than 50%
- **las ganancias son estadísticamente significativas SOLO entre el personal de entrada o junior; en los empleados más senior el impacto es menos pronunciado, y los autores lo atribuyen a menor uso y no a que la herramienta les sirva menos (las tasas de aceptación son parecidas entre niveles de experiencia)** — Quién captura la ganancia de productividad
  *dim:* dim-productivity-dispersion · *horizonte:* desde septiembre de 2023 · *ámbito:* China (Ant Group)/programación
  > productivity gains are statistically significant only among entry-level or junior staff, while the impact on more senior employees is less pronounced

  *engancha:* `confirma` La paradoja del junior: la IA lo hace más productivo justo donde lo dejan de contratar; `confirma` Nivelación de habilidades (la IA comprime la distribución de productividad); `informa` Automatización vs aumento (dirección de diseño, Turing Trap)

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
`brynjolfsson-chandar-chen-2025-canaries` · Stanford Digital Economy Lab working paper (NBER-affiliated authors), v. 13 Nov 2025 · [fuente](https://digitaleconomy.stanford.edu/wp-content/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf)  ⚠ **Figuras verificadas por el revisor contra el PDF primario (versión 13-nov-2025) con pdftotext -layout. CIFRA TITULAR de esta versión = 16% (abstract L15 y conclusión L926: '16% relative employment decline'), derivado de un '15 log-point decline' (intro L166, Fact 4 L686). La traducción 15 log pt -> 16% es de los propios autores: equivale a (e^0.15 - 1) = 16.2% (expresan la brecha entre quintiles como razón). El '13%' que circuló en prensa es del draft de agosto-2025 y NO aparece como cifra de empleo en esta versión; el único '13%' del PDF nov-2025 es el TOPE de la banda de crecimiento 5-13% de los quintiles MENOS expuestos (L553), no la caída titular. El 16% es RELATIVO (quintiles más expuestos vs el menos, condicionado en firm-quintile y firm-time en un event-study de Poisson, t=-1 = octubre 2022), NO una caída absoluta; el comparable crudo absoluto es -6% (Fact 2). Los autores son explícitos en que NO es identificación causal limpia ('our main estimates may be influenced by factors other than generative AI', L935; piden mejores datos de adopción a nivel firma para 'plausible causal effects', L959). El crudo de Fact 2 (-6%) es una caída absoluta de headcount oct-2022->sep-2025 en los dos quintiles más expuestos. Exposición medida con Eloundou et al. 2024 measure GPT-4 β (L434). ▶ VERSIÓN VIGENTE: existe una actualización con datos hasta junio de 2026 (brynjolfsson-chandar-chen-2026-canaries-ago), donde la brecha «kept-pace» de los jóvenes llegó a 19%. Las cifras de este nodo corresponden a su propia versión y no son directamente comparables con esa: miden cosas distintas.**

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
- **robusto excluyendo TI y ocupaciones remotables; sin patrón pre-2022 (incl. COVID) ⚠ REVISADO POR SUS PROPIOS AUTORES: la versión de agosto de 2026 del mismo estudio (brynjolfsson-chandar-chen-2026-canaries-ago) reconoce que las ocupaciones más y menos expuestas SÍ muestran tendencias divergentes previas a ChatGPT, particularmente alrededor de la pandemia, y las cuantifica. La afirmación de ausencia de patrón pre-2022 quedó superada.** — Fact 6: los resultados se mantienen al excluir ocupaciones de computación (SOC 2010 15-1) y firmas de TI/diseño de sistemas (NAICS 51, 5415), y para ocupaciones no-teletrabajables (Dingel-Neiman 2020). La taxonomía de exposición a IA 'did not meaningfully predict employment outcomes for young workers further back in time, before the widespread use of LLMs, including during the unemployment spike driven by the COVID-19 pandemic'; los patrones aparecen 'most acutely starting in late 2022 and early 2023'.
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
`budgetlab-yale-2025` · Budget Lab (Yale) — análisis de exposición ocupacional a IA · [fuente](https://budgetlab.yale.edu/)  ⚠ **Grey-lit institucional, referida por Imas en el podcast (no leída directamente). Rastrea en vivo el supuesto 'white-collar apocalypse'. TENSIONA nuestra lente Empírico: ellos leen la señal de jóvenes como ruido, nosotros como dato. SUPERADO COMO EVIDENCIA (2026-07-08): ver budgetlab-yale-2026-sdid — la versión econométrica de esta misma postura (SDID sobre CPS, 7-may-2026), leída contra primaria. Este nodo queda como registro de cómo entró la postura al mapa (vía Imas, de oídas).**

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

### IEA (International Energy Agency) (2025)
`iea-energy-ai2025` · IEA — Energy and AI (flagship report) · [fuente](https://www.iea.org/reports/energy-and-ai)  ⚠ **Fuente primaria, leída verbatim de las páginas oficiales. Las proyecciones a 2030 son escenarios (Base Case), no hechos. Matiz anti-aire central: a escala global los datacenters son ~1/10 del crecimiento eléctrico (menos que A/C, motores industriales o EVs) — el cuello es local (EE.UU./China ~80% del crecimiento) y de ritmo, no una escasez planetaria.**

- **1,5% mundial en 2024 (415 TWh) → ~945 TWh en 2030; IA en servidores acelerados +30%/año** — Consumo eléctrico de datacenters (nivel y proyección)
  *dim:* dim-cuello-energetico · *horizonte:* 2024–2030 · *ámbito:* global (EE.UU. = 45%)/datacenters
  > Data centres accounted for around 1.5% of the world's electricity consumption in 2024, or 415 terawatt-hours (TWh).
- **~20% de los proyectos planificados en riesgo; datacenter 2-3 años vs sistema energético 'longer lead times'** — Riesgo de demora por restricciones de red (oferta inelástica)
  *dim:* dim-oferta-energia · *horizonte:* a 2030 · *ámbito:* global/red eléctrica
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
  *dim:* dim-oferta-computo · *horizonte:* 2025 · *ámbito:* global/semiconductores
  > the four largest AI chip designers collectively consumed around 90% of global CoWoS capacity and HBM supply in 2025, while consuming only 12% of advanced logic die production

  *engancha:* `confirma` La oferta de energía y cómputo es inelástica en el horizonte relevante

### Eva Vivalt, Elizabeth Rhodes, Alexander Bartik, David Broockman, Patrick Krause & Sarah Miller (2025)
`vivalt-etal-2025-guaranteed-income` · 'The Employment Effects of a Guaranteed Income: Experimental Evidence from Two U.S. States', versión del 31 de diciembre de 2025 (NBER Working Paper 32719; programa de OpenResearch) · [fuente](https://www.nber.org/papers/w32719)  ⚠ **Experimento aleatorizado, pre-registrado (AEARCTR-0006750), con datos de encuesta, registros administrativos y una app; el mayor de su tipo. Verificado sobre el PDF de la versión del 31-dic-2025, no sobre resúmenes: OJO, las cifras de la versión de julio de 2024 que circulan ampliamente son distintas de las actuales. Límites que importan para no sobreleerlo: la muestra es de personas de BAJOS INGRESOS (no población general), la transferencia dura tres años (no es permanente) y el grupo de control recibe 50 USD al mes. Es evidencia sobre una transferencia focalizada y temporal — el par natural es Alaska, que es universal y permanente.**

- **ingreso individual excluyendo la transferencia −1.800 USD/año; participación laboral −4,1 pp; horas trabajadas −1 a −2 h/semana (y las parejas reducen horas en magnitud comparable)** — Efecto de 1.000 USD/mes durante 3 años sobre el ingreso propio y la participación
  *dim:* dim-respuesta-oferta-laboral-transferencia · *horizonte:* 3 años · *ámbito:* EE.UU. (dos estados)/personas de bajos ingresos
  > The transfer caused total individual income excluding the transfers to fall by about $1,800/year relative to the control group and a 4.1 percentage point decrease in labor market participation.
- **sin efecto sobre la calidad del empleo (los intervalos de confianza descartan incluso mejoras pequeñas); el mayor aumento de uso del tiempo fue en ocio; el bienestar subjetivo sube el primer año y luego vuelve al nivel del control** — Calidad del empleo y uso del tiempo liberado
  *dim:* dim-respuesta-oferta-laboral-transferencia · *horizonte:* 3 años · *ámbito:* EE.UU. (dos estados)/personas de bajos ingresos
  > we find no impact on quality of employment, and our confidence intervals can rule out even small improvements

  *engancha:* `confirma` Repartir no restaura el ingreso laboral (y el diseño decide cuánto se pierde); `informa` La elasticidad de demanda decide si automatizar sube o baja el empleo

### Stefania Albanesi, António Dias da Silva, Juan F. Jimeno, Ana Lamo & Alena Wabitsch (2025)
`albanesi-etal-2025-europa-empleo` · Economic Policy 40(121): 71-139 ('New technologies and jobs in Europe'); working paper NBER 31357 (junio de 2023, revisado julio de 2023), también IZA DP 16227 y CEPR DP18220 · [fuente](https://www.nber.org/papers/w31357)  ⚠ **Revisado por pares (Economic Policy); verificado sobre el PDF primario del working paper NBER. ⚠ EL PERÍODO ES LO QUE MÁS IMPORTA DE ESTE NODO: 2011-2019, o sea íntegramente anterior a la difusión de los modelos generativos. NO es evidencia sobre lo que hace la IA generativa, y usarlo así sería exactamente el error que la clasificación por olas existe para evitar. Su valor está en ser la mitad «antes» del contraste con el Canaries, que mide la misma población después de 2022 y encuentra lo opuesto. Otros límites: la exposición es POTENCIAL (índices ocupacionales), no adopción observada; el resultado es una asociación entre participaciones de empleo y exposición, sin identificación causal; y los propios autores encuentran heterogeneidad entre países ligada a la velocidad de difusión, la educación, la regulación del mercado de productos y la protección del empleo.**

- **AUMENTÓ en promedio, y particularmente en las ocupaciones con mayor proporción de trabajadores jóvenes y calificados — consistente con cambio técnico sesgado por habilidad** — Participación en el empleo de las ocupaciones más expuestas a IA, Europa 2011-2019
  *dim:* dim-empleo-expuestas-ola-previa · *horizonte:* 2011-2019 · *ámbito:* 16 países europeos/ocupaciones a 3 dígitos
  > on average employment shares have increased in occupations more exposed to AI. This is particularly the case for occupations with a relatively higher proportion of younger and skilled workers.
- **muy pocos países muestran caída de la participación en las ocupaciones más expuestas; la heterogeneidad se asocia al ritmo de difusión tecnológica y a la educación, pero también al nivel de regulación del mercado de productos (competencia) y a las leyes de protección del empleo** — Heterogeneidad entre países y qué la explica
  *dim:* dim-empleo-expuestas-ola-previa · *horizonte:* 2011-2019 · *ámbito:* 16 países europeos/economía completa
  > only very few countries show a decline in employment shares of occupations more exposed to AI-enabled automation
- **poca evidencia de relación entre salarios y exposición potencial a las nuevas tecnologías — el ajuste, si lo hubo, no pasó por el precio** — Salarios frente a exposición
  *dim:* dim-wages · *horizonte:* 2011-2019 · *ámbito:* 16 países europeos/ocupaciones a 3 dígitos
  > In contrast to the findings for employment, we find little evidence for a relationship between wages and potential exposures to new technologies.

  *engancha:* `confirma` La IA generativa se comporta distinto de la ola predictiva que la precedió; `tensiona` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `tensiona` Polarización por sesgo anti-rutina (RBTC); `informa` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA; `confirma` El ajuste cae más en el empleo que en el salario (φ bajo)

### Francesco Filippucci, Peter Gal, Katharina Laengle & Matthias Schief (2025)
`filippucci-etal-2025-macro-g7` · OECD Artificial Intelligence Paper No. 41, resumido por los propios autores en SUERF Policy Brief No 1283 (octubre de 2025); continúa la línea de 'Miracle or myth?' (OECD AI Paper No. 29, 2024), que es la versión que cita el BIS · [fuente](https://www.suerf.org/wp-content/uploads/2025/10/SUERF-Policy-Brief-1283_Filippucci-Gal-Laengle-Schief.pdf)  ⚠ **⚠ Lo verificado es el POLICY BRIEF firmado por los propios autores, no el documento completo: el sitio de la OCDE bloquea el acceso automatizado. Las cifras citadas son las del brief. Es una PROYECCIÓN, no una medición: adapta el marco de tareas de Acemoglu (2024) a un contexto sectorial y combina estimaciones micro de desempeño con exposición y supuestos de adopción futura, en tres escenarios de velocidad. Hereda por tanto la incertidumbre de sus insumos micro, muchos de los cuales son experimentos de tarea única. Nota de trazabilidad: el BIS 1325 cita la versión de 2024 (AI Paper 29), cuyas cifras para EE.UU. eran algo menores.**

- **0,4 a 1,3 puntos porcentuales anuales en países de alta exposición, por su especialización en servicios intensivos en conocimiento (finanzas, TIC) y su mayor adopción — EE.UU. y Reino Unido; 0,2 a 0,8 puntos donde esos determinantes son menos favorables, como Italia y Japón** — Crecimiento anual proyectado de la productividad laboral agregada por IA, G7
  *dim:* dim-labor-productivity-growth · *horizonte:* próxima década, en tres escenarios de adopción (lenta, media, rápida) · *ámbito:* economías del G7/economía completa, con estructura sectorial
  > the projected annual aggregate labour productivity growth ranges between 0.4-1.3 percentage points in countries with high AI exposure
- **la estructura sectorial (cuánto pesan los servicios intensivos en conocimiento) y el ritmo de adopción; no la capacidad técnica de la tecnología, que se supone común** — Qué decide en qué punto del rango cae un país
  *dim:* dim-diffusion-share · *horizonte:* próxima década · *ámbito:* G7/economía completa
  > stronger specialisation in highly AI-exposed knowledge intensive services such as finance and ICT and more widespread adoption

  *engancha:* `confirma` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `confirma` El potencial está limitado por la adopción y la co-invención; `informa` Exposición no es empleo neto

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
`bonney-btos-2026-microstructure` · Census CES-WP-26-25 / NBER Working Paper No. 35141 (abril 2026) · [fuente](https://www.nber.org/papers/w35141)  ⚠ **Cifras verificadas verbatim contra el abstract/highlights del CES-WP-26-25 y la página NBER w35141 (título y autores confirmados; publicado abril 2026). Las asociaciones de la regresión son CORRELACIONALES (transversales, auto-reporte de efectos de empleo por la firma respondente, no del trabajador); no son estimaciones causales. La medida de adopción ('cualquier función de negocio') es más amplia que la de 2024 — el salto 5.4%→18% mezcla difusión real con cambio de definición (NO es una serie temporal limpia). McElheran no es autora. QUIEBRE DE SERIE (para cualquier gráfico): el Census cambió la redacción de la pregunta central de IA el 17-nov-2025 ('in producing goods or services' → 'in any of its business functions'); se observó un salto de nivel ~10%→~17% coincidente y el Census abrió una serie temporal NUEVA desde el release del 4-dic-2025 (nota metodológica 'AI Question Wording Updates', census.gov/hfp/btos). Parte del salto a 17-20% es definicional, no adopción real; corroborado por FEDS Note 3-abr-2026 y St. Louis Fed jun-2026. La serie núcleo (olas dic-2025→may-2026, Census story 26-may-2026) da uso 17-20% con fuerte gradiente por tamaño (250+ empleados: 37%; ≤4: <20%).**

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
- **intensidad al alza: 'large number' de tareas 2,5% → 7% (small: 85% → 71%)** — Señal direccional NUEVA del 2º suplemento: aunque la sustitución sigue rara (~2% de firmas reduce empleo por IA), su INTENSIDAD sube — entre firmas que sustituyen tareas, las que reportan reemplazar un 'large number' pasaron de 2,5% (1er suplemento, inicios 2024) a 7%, y 'small number' cayó de 85% a 71% (Sección 5.1, Pregunta 26, Figura 16). VERIFICADO verbatim contra el executive summary del CES-WP-26-25. La redacción de ESTA pregunta no cambió entre olas (footnote 4), aunque otras del suplemento sí (footnote 29). Condicional a firmas sustituyentes (subconjunto chico). ¿Curva en J de adopción→desplazamiento o artefacto de cuestionario? La 3ª ola es el test.
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

### Brynjolfsson, Chandar, Chen (Stanford DEL) + ADP Research (2026)
`sdel-adp-2026-canaries-dashboard` · Canaries Dashboard + Research Note No. 1 'AI Economic Indicators: June 2026 Update' (Stanford Digital Economy Lab × ADP Research; serie mensual, 10-jun-2026) · [fuente](https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/)  ⚠ **La continuación VIVA de Canaries (ver brynjolfsson-chandar-chen-2025-canaries): dashboard actualizado mensualmente (última actualización verificada: 1-jul-2026; datos hasta abril 2026) + Research Note No. 1 (PDF: digitaleconomy.stanford.edu/app/uploads/2026/06/AIEI_SDEL_Research_Note_01.pdf). Panel BALANCEADO de 25.000 firmas ADP (ventana rodante de 5 años) que en nov-2022 empleaban 4,6M de trabajadores matcheados a ocupación (730+ ocupaciones, SOC 2018; exposición Eloundou et al. 2024). El propio sitio aclara que el panel NO es representativo de todo el mercado laboral de EE.UU. y que mide CORRELACIÓN, no causalidad. Cifras verificadas verbatim contra el PDF y el dashboard (fetch 2026-07-08); el dato YoY −4,2/−1,7 tuvo verificación adversarial 2-1, el resto 3-0. ▶ VERSIÓN VIGENTE: existe una actualización con datos hasta junio de 2026 (brynjolfsson-chandar-chen-2026-canaries-ago), donde la brecha «kept-pace» de los jóvenes llegó a 19%. Las cifras de este nodo corresponden a su propia versión y no son directamente comparables con esa: miden cosas distintas.**

- **−3,8%/año (22-25 en más expuestas) vs +2,0%/año (menos expuestas)** — Tasa ANUALIZADA de cambio de empleo desde nov-2022 (datos a abril 2026), trabajadores 22-25: 'employment in AI-exposed occupations is contracting at 3.8% per year, compared to the least exposed, which are growing at 2.0% per year'. La nota: 'declines in exposed occupations not only persist, but deepen', con 'muted evidence of similar patterns for workers up to age 34'. Descriptivo/correlacional.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **22-25: −4,2% vs −1,7% YoY · todas las edades: −0,2% vs +0,1% YoY** — Interanual a abril 2026 (Figura 1 de la Research Note): para 22-25, las más expuestas −4,2% vs −1,7% las menos expuestas (brecha 2,5pp); para TODAS las edades, −0,2% vs +0,1% (brecha 0,3pp). Las dos hipótesis del mapa a la vez: el agregado casi no se mueve mientras el margen joven/expuesto diverge.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **caídas donde el uso AUTOMATIZA; sin relación clara donde AUMENTA** — Cruce del empleo ADP con el tipo de uso del Anthropic Economic Index (Figura 5): 'automation-related usage is correlated with employment trends, while augmentation-related usage is not'; matiz exacto: 'no clear monotonic relationship' para aumentación y 'declines or more muted increases' (no caída uniforme) para automatización. Asociación a nivel ocupación, no causal. Persiste en el dashboard actualizado a julio (verificación 2-1).
  *dim:* dim-collaboration-mode · *horizonte:*  · *ámbito:* /

  *engancha:* `tensiona` Exposición no es empleo neto; `informa` Automatización vs aumento (dirección de diseño, Turing Trap); `tensiona` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA; `informa` Mucha rotación, neto pequeño e incierto

### Peter John Lambert, Yannick Schindler (2026)
`lambert-schindler-2026-broken-ladder` · LSE Centre for Economic Performance DP2193 / SSRN 6787638 (10-jun-2026) · [fuente](https://cep-serviceaddress.lse.ac.uk/_NEW/PUBLICATIONS/abstract.asp?index=12306)  ⚠ **La crítica más seria a la lectura causal de Canaries hasta la fecha. Working paper NO revisado por pares. 243M contrataciones + 407M avisos, EE.UU./UK/Canadá/Australia, 2017-2025, diseños diff-in-diff sobre medidas de exposición. Autores y abstract verificados contra el espejo LSE CEP y SSRN (2026-07-08; verificación adversarial 3-0 en tres claims). OJO con la lectura: la correlación GenAI↔WFH es tan alta (~0,77) que la regresión conjunta plantea un problema de IDENTIFICACIÓN más que una exoneración de la IA — el paper no prueba que 'no es la IA', prueba que los datos existentes no la separan del remoto. Robustez: medidas alternativas de exposición, residualización, controles no paramétricos, adopción real de WFH como tratamiento. Sin réplica de Brynjolfsson et al. al 2026-07-08.**

- **~−5pp share junior de contrataciones (cada shock, por separado)** — Estimados POR SEPARADO, +2 desviaciones estándar de exposición a GenAI o a WFH predicen cada una, a 2025, '~a fall of around 5pp in the junior-share of new hires' y ~3pp en el share de avisos que piden poca experiencia — es decir, la correlación descriptiva de Canaries SÍ replica en 4 países.
  *dim:* dim-atribucion-entry-level · *horizonte:*  · *ámbito:* /
- **conjunto: WFH persiste; GenAI se atenúa a ~0** — Estimados CONJUNTAMENTE: 'the WFH effect remains, while the GenAI coefficient attenuates sharply and is often statistically indistinguishable from zero' (verbatim del abstract). Crítica de variable omitida a la atribución IA del deterioro entry-level; consistente entre múltiples diseños.
  *dim:* dim-atribucion-entry-level · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA; `informa` Exposición no es empleo neto

### Natalia Emanuel, Emma Harrington, Amanda Pallais (2026)
`emanuel-harrington-pallais-2026-remote` · NY Fed Liberty Street Economics (1-jun-2026) + SSRN 6863238; datos CPS · [fuente](https://libertystreeteconomics.newyorkfed.org/2026/06/remote-work-leaves-younger-workers-sidelined/)  ⚠ **Segunda línea INDEPENDIENTE pro-remoto (blog de staff NY Fed + paper SSRN; el trío tiene historial de investigación causal sobre trabajo remoto y mentoría). Descomposición correlacional (back-of-the-envelope), NO causal. Citas verificadas verbatim contra el post (2026-07-08; verificación adversarial 3-0). Los autores conceden que 'generative AI and other factors may play a more primary role... going forward'. OJO definicional: su 3,7% es desempleo de graduados <29 PROMEDIO 2022-25 — NO comparable con el 5,7% del tracker NY Fed de recién graduados (22-27, puntual Q1-2026).**

- **graduados <29: 3,1% → 3,7% · experimentados: 1,9% → 1,8%** — Desempleo de graduados universitarios jóvenes (<29): 3,1% promedio 2017-19 → 3,7% en 2022-25 (~+20%), MIENTRAS el de graduados experimentados BAJÓ de 1,9% a 1,8% — la brecha es específica a la entrada, no general.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **el remoto explica ~64% del alza** — Cálculo back-of-the-envelope: 'remote work can explain 64 percent of the increase in unemployment for all young college graduates between 2017−19 and 2022−24' (mecanismo: pérdida de entrenamiento/mentoría presencial). Además, el timing empuja contra la IA: 'the uptick in youth unemployment rates predates the rapid diffusion of AI', y la brecha joven/viejo persiste en ocupaciones remotables Y no remotables aun controlando exposición a IA.
  *dim:* dim-atribucion-entry-level · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA

### OECD (2026)
`oecd-eo-2026-jovenes` · OECD Employment Outlook 2026, sección 1.3 (7-jul-2026) · [fuente](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_7e710f54-en.html)  ⚠ **El árbitro institucional del período: examen directo de la tesis Canaries con datos de 6 economías (Australia, Canadá, UE, Nueva Zelanda, Reino Unido, EE.UU.). Su explicación alternativa es CICLO MACRO (las ocupaciones expuestas son más sensibles a shocks agregados y en downturns se corta primero la contratación entry-level), distinta del remoto de Lambert-Schindler/Emanuel — o sea, hay ya TRES atribuciones rivales en juego. Cita a ambos bandos (Brynjolfsson et al. vs Humlum-Vestergaard, Gimbel et al.). Fechan el uso intensivo de LLMs (vía LinkedIn) en mediados-2023 a inicios-2024. Conclusión y evidencia verificadas contra el PDF del reporte (fetch 2026-07-08).**

- **'the role of LLMs... appears to be limited'** — Conclusión textual (§1.3.1): 'So far, the role of LLMs in explaining the difficulties encountered by young people entering the labour market appears to be limited'. Evidencia: (1) el gap de desempleo de graduados jóvenes sube desde ANTES de la pandemia, mucho antes del uso intensivo de LLMs, sin punto de quiebre en ningún país analizado; (2) para jóvenes SIN título el patrón es inconsistente entre países (EE.UU. sube desde 2024, Australia BAJA desde mediados de 2024, Canadá/eurozona planos) — incompatible con una causa tecnológica común.
  *dim:* dim-atribucion-entry-level · *horizonte:*  · *ámbito:* /
- **vacantes junior expuestas: sin caída desproporcionada (fines 2023)** — Box 1.6 (Lightcast × exposición Felten-Raj-Seamans): las vacantes JUNIOR en ocupaciones de alta exposición a LLM en EE.UU. no cayeron desproporcionadamente al final de 2023; las ocupaciones expuestas sí son más sensibles a shocks macro (cita Curto Millet & Iscenko 2026 y la literatura de que en downturns se recorta primero la contratación entry-level).
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA; `informa` Exposición no es empleo neto

### The Budget Lab at Yale (Ryan Nunn; paper técnico: Martha Gimbel et al.) (2026)
`budgetlab-yale-2026-sdid` · Budget Lab (Yale), 'AI Is Probably Not (Yet) the Reason for Labor Market Weakening' + paper técnico (7-may-2026) · [fuente](https://budgetlab.yale.edu/research/ai-probably-not-yet-reason-labor-market-weakening)  ⚠ **La versión ECONOMÉTRICA de la postura escéptica de Yale (reemplaza como evidencia al nodo budgetlab-yale-2025, que era grey-lit referida de oídas): synthetic differences-in-differences (Arkhangelsky et al. 2021) sobre microdata CPS, ocupaciones tercil superior de exposición vs tercil inferior. Citas verificadas verbatim contra el post (fetch directo 2026-07-08). Dos límites que los PROPIOS autores declaran (paper técnico): el SDID no puede separar la IA de eventos correlacionados con la exposición — citan explícitamente el trabajo remoto como confusor — y la CPS está subpoderada para el grupo 22-27, así que este resultado NO refuta Canaries: mide el agregado, no el margen joven. Contexto que fija: payrolls ~+20.000/mes en el último año; desempleo 3,4% (abr-2023) → 4,3% (mar-2026).**

- **efecto IA sobre empleo de expuestas ≈ 0 (indistinguible de cero)** — SDID sobre CPS: 'we find no strong evidence of impacts as of yet... The estimate is close to zero and cannot be distinguished from it, statistically speaking' — y lo mismo para salarios reales por hora. El paper técnico reporta que el desempleo de expuestos subió ~0,5pp más que su control sintético (más en 16-34) pero NO significativo a Q1-2026. Complementa su análisis previo de rotación ocupacional (sin alza inusual de churn).
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **las expuestas eran MENOS cíclicas pre-pandemia** — Hallazgo metodológico con carga para toda la literatura: 'prior to the pandemic, AI-exposed occupation employment is considerably less cyclical than unexposed employment' — las comparaciones crudas expuesto/no-expuesto están sesgadas por ciclicidad diferencial; cualquier atribución necesita un diseño que la acomode.
  *dim:* dim-atribucion-entry-level · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` Exposición no es empleo neto; `informa` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA

### Massenkoff, McCrory (Anthropic) (2026)
`massenkoff-mccrory-2026-cps` · Anthropic research report 'AI and labor market impacts' (5-mar-2026); datos CPS · [fuente](https://www.anthropic.com/research/labor-market-impacts)  ⚠ **CONFLICTO DE INTERÉS a la vista: investigación de Anthropic sobre el impacto de su propia categoría de producto (igual que el AEI). Publicado 5-mar-2026 (antes de la ventana de la ronda 3; se integra porque no estaba en el mapa). Diff-in-diff sobre CPS: cuartil superior de 'observed exposure' vs el ~30% con exposición cero. Correlacional/descriptivo, no causal. Citas verificadas verbatim (verificación adversarial 3-0). Crítica publicada (Forbes 8-mar-2026, PIIE): el error de medición en la exposición sesga el DiD hacia CERO — el null agregado es débil como evidencia de 'no efecto'. Valor para el mapa: convergencia INDEPENDIENTE (CPS, hogares) con el patrón joven de Canaries (ADP, nóminas), por el margen de contratación.**

- **agregado: brecha ≈ 0 ('small and insignificant')** — DiD post-ChatGPT sobre desempleo de trabajadores expuestos (todas las edades): 'The average change in the gap since the release of ChatGPT is small and insignificant' — sin aumento sistemático de desempleo para expuestos desde fines de 2022.
  *dim:* dim-realized-employment-change · *horizonte:*  · *ámbito:* /
- **job finding rate 22-25 en expuestas: −14% vs 2022** — 'a 14% drop in the job finding rate compared to that in 2022 in the exposed occupations, although this is just barely statistically significant. (There is no such decrease for workers older than 25.)' — de ~2%/mes a ~1,5%/mes, series que 'visually diverge in 2024', por el margen de CONTRATACIÓN y no de separaciones. El reporte dice explícitamente que 'echoes' a Canaries.
  *dim:* dim-realized-labor-demand · *horizonte:*  · *ámbito:* /

  *engancha:* `informa` Exposición no es empleo neto

### Ilse Lindenlaub, Ryungha Oh, Maria Alejandra Rodriguez, Laura Veldkamp (2026)
`lindenlaub-etal-2026-beyond-exposure` · NBER Working Paper 35271 (mayo 2026) · [fuente](https://www.nber.org/papers/w35271)  ⚠ **Working paper (no peer-reviewed). Encuesta alemana de empleados (DiWaBe) enlazada a datos de establecimiento. Abstract y cifras verificados contra la página NBER (fetch 2026-07-08). Evidencia directa para la espina del mapa: la EXPOSICIÓN técnica predice mal la ADOPCIÓN real — el eslabón que falta entre 'la IA puede hacer la tarea' y cualquier efecto de empleo.**

- **ventaja comparativa explica ~60% de la adopción; solo-exposición 14%** — Correlación DÉBIL entre exposición predicha y uso reportado de IA. Su índice alternativo (adopción por ventaja comparativa: ganancia de productividad de la IA vs costos de implementación relativos a productividad y salario del trabajador) explica 'almost 60% of cross-occupation variation in observed AI adoption, compared to 14% for an exposure-only model'; ambos enfoques divergen sustancialmente para ~30% de los trabajadores.
  *dim:* dim-ai-adoption-use · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` Exposición no es empleo neto; `confirma` El potencial está limitado por la adopción y la co-invención

### Hassan Afrouzi, Andres Blanco, Andrés Drenik, Erik Hurst (2026)
`afrouzi-etal-2026-learning-careers` · NBER Working Paper 35157 (abril 2026) · [fuente](https://www.nber.org/papers/w35157)  ⚠ **TEORÍA (modelo de equilibrio general en tiempo continuo), no evidencia empírica. Abstract verificado contra la página NBER (fetch 2026-07-08). Formaliza el mecanismo 'escalera rota': si los trabajadores adquieren habilidad HACIENDO las tareas, automatizar las tareas de entrada destruye el canal de aprendizaje — con equilibrios múltiples.**

- **equilibrios duales; tecnología más barata puede ser trampa** — En economías con alta capacidad de aprendizaje hay PARES de equilibrios estacionarios ordenados por la tasa agregada de aprendizaje, y 'cheaper technology has opposite effects across the two': en el equilibrio de alto aprendizaje sube el bienestar vía el propio canal de aprendizaje; en el de bajo aprendizaje 'it tips the economy into a human-capital trap'. First-best del planificador: impuesto a los beneficios de automatización + subsidio a mantener la frontera de tareas, a una tasa común.
  *dim:* dim-task-content-shift · *horizonte:*  · *ámbito:* /

  *engancha:* `informa` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA; `informa` Automatización vs aumento (dirección de diseño, Turing Trap)

### Anthropic Economic Index team (2026)
`anthropic-aei-2026-cadences` · Anthropic (lab report 'Cadences', 26-jun-2026) · [fuente](https://www.anthropic.com/research/economic-index-june-2026-report)  ⚠ **Actualización de la serie AEI (ver anthropic-aei-2026-primitives). Encuesta a ~9.700 usuarios de Claude LINKEADA a su uso real (campo: abril–principios de junio 2026). Muestra NO representativa (usuarios activos de Claude; Computer & Mathematical 30% vs 4% del empleo de EE.UU.). Mide exposición PERCIBIDA y EXPECTATIVAS, no resultados de empleo; el propio reporte reconoce que 'reported exposure systematically exceeds observed exposure'. Conflicto de interés: Anthropic sobre su propio producto. Citas verificadas verbatim (verificación adversarial 3-0). Baseline del footnote 23: tasa de layoffs-and-discharges de JOLTS ~13,4% anualizada (NO separaciones totales).**

- **~10pp menos exposición percibida con 15+ años de experiencia** — La exposición PERCIBIDA se concentra en juniors: 'People with at least 15 years of experience put that share of tasks AI can do roughly 10 percentage points lower than those in their first year of work'.
  *dim:* dim-perception-gap · *horizonte:*  · *ámbito:* /
- **10% ve probable perder su empleo en 12m; >1/3 da >60% a que lo pierda un colega junior** — Expectativas de pérdida de empleo: '10% rated losing their own jobs as likely or very likely' (de esos, 38% lo atribuye a IA — COTA SUPERIOR: la pregunta mezclaba cambio y pérdida de empleo), pero concentradas en colegas junior: 'over one third stating that the probability of a junior colleague losing their job in the next year was over 60%'. Además, >1/3 espera que la IA pueda hacer 'most or nearly all' de sus tareas en 12 meses y ~6 de 10 eligió una banda de exposición mayor para el año próximo.
  *dim:* dim-perception-gap · *horizonte:*  · *ámbito:* /

  *engancha:* `confirma` Brecha de percepción (auto-reporte sobreestima el efecto medido)

### Richard Baldwin (2026)
`baldwin-2026-obs-booming` · Substack 'Factful Friday' (rbaldwin.substack.com) + LinkedIn Pulse, 31-jul-2026. Baldwin es profesor de economía internacional en IMD (Lausana) y autor de 'The Globotics Upheaval' (2019). · [fuente](https://rbaldwin.substack.com/p/the-jobs-ai-was-supposed-to-eliminate)  ⚠ **GREY LIT de autor de primer nivel, no revisada por pares ni working paper: es una columna con gráficos propios sobre estadísticas oficiales. Datos: WTO quarterly/monthly commercial services statistics, línea 'other business services', sumas móviles de 4 trimestres (BoP bruta, partner World) indexadas a Q4-2022=100, 9 economías (India, RU, EE.UU., Alemania, Singapur, Francia, China, Bélgica, Filipinas), con RBI BoP para el trimestre indio más reciente; excluye Irlanda, Países Bajos y Luxemburgo por distorsiones fiscales. TRES CAVEATS QUE PESAN. (1) ⚠ MAGNITUD NO RECONCILIADA: su cifra de India (185 mil millones USD de 'other business services' en 2025) no calza con la fuente oficial india — el gobierno reporta para FY2025-26 exportaciones de servicios por 421,3 mil millones, de los cuales 206,6 en 'telecommunications, computer and information services' y 124,2 en 'business services' (PIB/Ministerio de Comercio, sobre datos RBI). No pude consultar stats.wto.org directamente para cerrar la brecha; puede ser diferencia de frontera entre la OBS del WTO y la 'business services' del RBI, o año calendario vs fiscal. El ARGUMENTO no depende del nivel (se sostiene sobre tasas y sobre 'ninguna de las nueve se contrae'), pero la cifra no se debe citar sin este asterisco. (2) LÍMITE CONCEPTUAL: 'other business services' EXCLUYE computación e información, que es ~49% de las exportaciones de servicios de India y donde vive el grueso del trabajo de software; el artículo argumenta sobre empleos que incluyen programación con una serie que deja fuera el software. (3) MIDE FACTURACIÓN, NO EMPLEO — el propio autor lo dice y da el contraejemplo (TCS). Sesgo de encuadre a declarar: Baldwin es el autor de la tesis de la telemigración; el resultado le confirma su marco. Crítica publicada (M. Nunes, Substack, sin datos nuevos): la categoría mezcla consultoría/legal/ingeniería con trabajo rutinario y podría estar ocultando un vaciamiento del medio; los contratos de outsourcing plurianuales generan inercia; la tendencia base 2015-2022 incluye la pandemia; y la aceleración es de solo 1,6pp.**

- **India: 121 → 185 mil millones USD (2022 → 2025) ⚠ magnitud sin reconciliar** — Exportaciones indias de 'other business services' (WTO), de 2022 (año del lanzamiento de ChatGPT) a 2025. Es la cifra ancla del artículo y la que no cuadra contra la fuente oficial india (ver reliability_note): tratarla como orden de magnitud, no como dato citable.
  *dim:* dim-comercio-servicios-offshore · *horizonte:*  · *ámbito:* /
- **15,1%/año post-ChatGPT vs 13,5%/año antes (+1,6pp)** — Crecimiento anual compuesto de las exportaciones indias de OBS: 2022-2025 contra la tendencia log-lineal ajustada sobre 2015-2022. El artículo reporta además que a marzo 2026 India va ~27% por encima de esa tendencia pre-IA. La aceleración es real pero modesta, y la base incluye el salto pandémico de digitalización.
  *dim:* dim-comercio-servicios-offshore · *horizonte:*  · *ámbito:* /
- **nueve de nueve creciendo (Q4-2022 = 100): India 153 · Francia y Alemania 139 · China 126 · EE.UU. 123 · Filipinas 120** — Índices a los últimos datos disponibles (mayo 2026 para EE.UU./China/Francia, abril para Alemania, marzo para Filipinas). Ninguna de las nueve economías del panel muestra contracción 42 meses después de ChatGPT. Es el hallazgo central y el más robusto del artículo: no depende del nivel absoluto de ninguna serie.
  *dim:* dim-comercio-servicios-offshore · *horizonte:*  · *ámbito:* /
- **Filipinas +3,2% interanual — el más bajo del panel** — Interanual a marzo 2026, contra +10,9% de China, +9,6% de Alemania, +8,9% de Francia y +4,7% de EE.UU. Filipinas es la economía del panel más concentrada en centros de contacto por voz, lo más directamente sustituible por IA conversacional. El artículo no subraya el contraste; es la señal más parecida a desplazamiento selectivo que hay dentro de sus propios datos, y la lectura de que ahí está el margen que se mueve es una inferencia sobre su gráfico, no una afirmación suya.
  *dim:* dim-comercio-servicios-offshore · *horizonte:*  · *ámbito:* /
- **TCS: −12.000 empleos (~2% de la plantilla) con exportaciones creciendo ~17%** — El contraejemplo que el propio autor ofrece: el ingreso por empleado sube, no es que la industria se preserve. Verificado por fuera del artículo: TCS anunció el recorte a fines de julio de 2025 para el año fiscal 2026 (~12.000, 2% de la dotación global, concentrado en grados medios y senior) y en enero de 2026 declaró el proceso a mitad de camino. La cifra es correcta; el año que le pone el artículo es el fiscal, no el calendario.
  *dim:* dim-comercio-servicios-offshore · *horizonte:*  · *ámbito:* /

  *engancha:* `informa` La IA expande el offshoring en vez de repatriarlo (telemigración); `confirma` El potencial está limitado por la adopción y la co-invención; `confirma` Rezago de tecnología de propósito general (GPT); `informa` Exposición no es empleo neto; `informa` La elasticidad de demanda decide si automatizar sube o baja el empleo; `informa` Mucha rotación, neto pequeño e incierto; `informa` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA

### OECD (Inclusive Framework on BEPS); análisis complementario de Felix Hugger, Pierce O'Reilly & Laura Contreras ('MNE Responses to the Global Minimum Tax', OECD Taxation Working Papers) (2026)
`oecd-2026-gmt-eia` · Economic Impact Assessment of the Global Minimum Tax 2026, publicada el 15 de julio de 2026 · [fuente](https://www.oecd.org/en/about/news/announcements/2026/07/oecd-publishes-new-analysis-on-the-economic-impacts-of-the-global-minimum-tax.html)  ⚠ **Anuncio oficial de la OCDE leído en su fuente (el fetch automático lo bloquea Cloudflare; se leyó en navegador). Las cifras citadas son las del anuncio, que resume el informe y el working paper; NO se accedió al working paper completo. La evidencia post-implementación es del PRIMER AÑO y se basa en estados financieros consolidados de 2024: los propios autores la presentan como preliminar. El dato de recaudación efectiva del primer año que circula en prensa (79.000–109.000 millones de euros, 2,4–3,4% del impuesto corporativo global) NO aparece en el anuncio oficial y quedó fuera del mapa por eso; lo que sí es primario, y dice lo mismo, es que la propia estimación de la OCDE bajó de 6,5–8,1% a 3,2–5,4%.**

- **+3,2–5,4% de la recaudación corporativa global al año — cerca de la mitad de lo proyectado en enero de 2024 (6,5–8,1%), con más datos y mejor modelación** — Recaudación adicional estimada del impuesto mínimo global (estimación revisada, 2026)
  *dim:* dim-elasticidad-fuga-base · *horizonte:* anual · *ámbito:* global/multinacionales en alcance
  > Global CIT revenues are estimated to rise by 3.2-5.4% per year.
- **22,6–44,6% (frente a la reducción a la mitad que estimaba la evaluación de 2024)** — Reducción estimada del desplazamiento de beneficios
  *dim:* dim-elasticidad-fuga-base · *horizonte:* régimen establecido · *ámbito:* global/multinacionales
  > The GMT is estimated to reduce profit-shifting substantially with an estimated reduction of between 22.6-44.6%.
- **tasas efectivas +2,8–3,7 pp promedio (+5,5–6,9 pp en hubs de inversión); sin evidencia estadísticamente significativa de caídas de inversión o empleo en las empresas alcanzadas durante el primer año** — Alza de tasas efectivas y efecto sobre inversión y empleo en el primer año
  *dim:* dim-elasticidad-fuga-base · *horizonte:* primer año de implementación (datos 2024) · *ámbito:* global/multinacionales en alcance vs. fuera de alcance
  > finding no statistically significant evidence of reductions in investment or employment among in-scope firms during the first year

  *engancha:* `confirma` Lo que se puede gravar es lo que no se puede mover; `informa` La renta de la IA: ¿electricidad (difusa) o plataforma (concentrada)?

### Erik Brynjolfsson, Bharat Chandar & Ruyu Chen (2026)
`brynjolfsson-chandar-chen-2026-canaries-ago` · Stanford Digital Economy Lab / SIEPR working paper, versión de agosto de 2026 ('Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence'), con datos de nómina ADP hasta junio de 2026 · [fuente](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf)  ⚠ **Working paper, no revisado por pares; verificado sobre el PDF primario extraído localmente. Los propios autores marcan el límite con claridad: «this work does not estimate a causal impact of AI: these are descriptive facts». La muestra es el panel de nómina de ADP, que puede diferir del mercado laboral estadounidense: los autores reconocen que la divergencia es direccionalmente consistente pero MÁS PRONUNCIADA en ADP que en las encuestas nacionales. Ojo con la unidad: el 19% es una brecha ACUMULADA respecto de un contrafactual («si hubiera seguido el ritmo de los menos expuestos»), no comparable con el −6% de cambio de dotación de la versión de noviembre-2025 ni con las variaciones interanuales del dashboard. Los coeficientes por panel de control no se transcriben aquí: la tabla no se pudo leer con confianza desde el PDF extraído, así que solo se registra lo que el texto afirma en prosa.**

- **19% por debajo a junio de 2026 (era 15% en la versión de julio de 2025); los trabajadores con experiencia no muestran brecha comparable** — Brecha de empleo de jóvenes (22-25) en ocupaciones expuestas, medida «kept-pace», y su evolución entre versiones del estudio
  *dim:* dim-brecha-acumulada-jovenes-expuestos · *horizonte:* nov-2022 a jun-2026 · *ámbito:* EE.UU./ocupaciones expuestas a IA vs menos expuestas
  > employment of young workers (ages 22–25) in AI-exposed occupations now stands 19% below where it would be had it kept pace with that of their less-exposed peers
- **−0,179 (≈18 puntos porcentuales), significativo al 1%; las estimaciones para grupos de mayor edad son menores** — Estimación de regresión ocupacional: quintil más expuesto vs menos expuesto, 22-25 años, sin controles
  *dim:* dim-atribucion-entry-level · *horizonte:* nov-2022 a jun-2026 · *ámbito:* EE.UU. (panel ADP, firmas balanceadas desde ene-2018)/quintil 5 vs quintil 1 de exposición
  > employment in the most exposed quintile declined by about 18 percentage points relative to the least exposed quintile (Panel A; −0.179)
- **opera principalmente por MENOR CONTRATACIÓN de jóvenes, no por más separaciones; y el ajuste ocurre vía empleo, no vía compensación base** — Mecanismo del ajuste: por dónde se produce la caída
  *dim:* dim-atribucion-entry-level · *horizonte:* nov-2022 a jun-2026 · *ámbito:* EE.UU./ocupaciones expuestas
  > It operates primarily through reduced hiring of young workers rather than increased separations.
- **las caídas se concentran donde el uso de IA SUSTITUYE tareas humanas; donde COMPLEMENTA, el empleo es plano o creciente, especialmente para trabajadores con experiencia** — Dirección de uso: dónde se concentran las caídas
  *dim:* dim-collaboration-mode · *horizonte:* nov-2022 a jun-2026 · *ámbito:* EE.UU./por tipo de uso de IA en la ocupación
  > Declines are concentrated in occupations where AI usage primarily substitutes for human tasks; where usage primarily complements workers, employment is flat or rising
- **la divergencia persiste al excluir firmas tecnológicas y ocupaciones de computación, al controlar por exposición ocupacional a las alzas de tasas de interés y por trabajo remoto, y con cinco medidas alternativas de exposición a IA** — Robustez frente a las explicaciones rivales (la disputa de atribución)
  *dim:* dim-atribucion-entry-level · *horizonte:* nov-2022 a jun-2026 · *ámbito:* EE.UU./economía completa
  > The divergence is not explained by several prominent alternative factors: it persists when excluding technology firms and computer occupations, when controlling for exposure to interest-rate increases and for remote work
- **siguiendo la especificación de Lambert-Schindler lo más cerca posible, la exposición a IA sigue prediciendo una caída de la participación junior en las nuevas contrataciones tras controlar por trabajo desde casa; los autores atribuyen la diferencia de resultados a los datos (nómina administrativa contra perfiles y avisos de empleo en línea)** — Réplica directa a Lambert-Schindler siguiendo SU especificación
  *dim:* dim-atribucion-entry-level · *horizonte:* hasta jun-2026 · *ámbito:* EE.UU./nuevas contrataciones
  > AI exposure continues to predict a decline in the junior share of new hires after accounting for work-from-home
- **(1) hay tendencias divergentes entre ocupaciones más y menos expuestas que PREDATAN ChatGPT, sobre todo alrededor de la pandemia; (2) las estimaciones se atenúan al controlar por nivel educativo de la ocupación —la educación es el único control que las atenúa—, lo que puede ser una explicación alternativa o el canal mismo por el que opera la IA; (3) la divergencia es más pronunciada en el panel ADP que en las encuestas nacionales** — Los tres patrones de la propia evidencia que los autores marcan como debilidades
  *dim:* dim-atribucion-entry-level · *horizonte:* 2018-2026 · *ámbito:* EE.UU./economía completa
  > Education is the one control that attenuates these estimates
- **la divergencia siguió ampliándose hasta mediados de 2026, mucho después del pico de tasas; para noviembre de 2022 las ocupaciones expuestas ya habían vuelto a su posición relativa prepandemia, así que la caída posterior lleva la brecha POR DEBAJO de esa línea base en vez de devolverla a ella; las caídas cargan específicamente sobre el uso de IA para automatizar y con gradiente de edad, un patrón que las historias de tasas, educación y remoto no predicen; y los datos administrativos del gobierno muestran patrones crudos consistentes** — Los cuatro argumentos con que los autores contrapesan esas debilidades
  *dim:* dim-atribucion-entry-level · *horizonte:* 2022-2026 · *ámbito:* EE.UU./economía completa
  > the declines load specifically on AI usage for automation with a clear age gradient, a pattern that interest-rate, education, and remote-work stories do not predict

  *engancha:* `tensiona` El deterioro entry-level lo explican el remoto o el ciclo, no (solo) la IA; `confirma` La IA expone trabajo alto-calificado (a diferencia de automatización previa); `confirma` Automatización vs aumento (dirección de diseño, Turing Trap); `confirma` El ajuste cae más en el empleo que en el salario (φ bajo); `informa` Exposición no es empleo neto; `confirma` Desplazamiento domina en el periodo reciente (post-1987); `confirma` Mucha rotación, neto pequeño e incierto; `confirma` La paradoja del junior: la IA lo hace más productivo justo donde lo dejan de contratar

### Iñaki Aldasoro, Leonardo Gambacorta, Rozalia Pal, Debora Revoltella, Christoph Weiss & Marcin Wolski (2026)
`bis-2026-wp1325-firmas-europeas` · BIS Working Papers No 1325 (Bank for International Settlements, Monetary and Economic Department), enero de 2026; publicado también como EIB Working Paper 2026/02 y CEPR DP21082 · [fuente](https://www.bis.org/publ/work1325.pdf)  ⚠ **Working paper de banco central, no revisado por pares; verificado sobre el PDF primario. Datos: encuesta EIBIS (~12.000 firmas no financieras de la UE y ~800 de EE.UU.) emparejada con estados financieros de ORBIS, corte transversal agrupado 2019-2024. LÍMITES QUE PESAN. (1) La identificación descansa en un instrumento fuerte: se asigna a cada firma europea la tasa de adopción de sus pares estadounidenses, lo que exige suponer que esa adopción externa afecta la productividad europea SOLO a través de la propia adopción; es un supuesto de exclusión discutible en sectores con cadenas de suministro compartidas. (2) La adopción se mide por autorreporte en encuesta, no por uso observado. (3) ⚠ EL RESULTADO DE SALARIOS NO TIENE EL MISMO ESTATUS QUE EL DE PRODUCTIVIDAD: el +4% es el estimador causal, mientras que los salarios se reportan como comparación entre firmas adoptantes y no adoptantes con controles y efectos fijos, y los propios autores lo fraseán como algo que ocurre «hasta ahora» y queda por ver en el mediano plazo. Los resúmenes de prensa suelen presentar ambas cifras con el mismo peso. (4) ⚠ LA DESIGUALDAD MEDIDA ES ENTRE EMPRESAS, no entre trabajadores: que los beneficios vayan desproporcionadamente a trabajadores calificados que coordinan flujos aumentados por IA es una conjetura que los autores dejan planteada en una nota, no un resultado estimado. (5) Todos los efectos de empleo son de CORTO PLAZO y los autores declaran que el largo plazo sigue incierto.**

- **+4%** — Efecto causal de adoptar IA sobre el nivel de productividad laboral de la firma
  *dim:* dim-productividad-firma-ia · *horizonte:* corto plazo (muestra 2019-2024) · *ámbito:* Unión Europea/empresas no financieras
  > AI adoption increases the level of labor productivity by 4%
- **sin efecto significativo. La especificación ingenua asocia la IA con +8% de empleo, y esa relación DESAPARECE al usar la adopción instrumentada: el dato bruto exagera a favor de la IA y la corrección va hacia abajo** — Efecto sobre el empleo de la firma, y cuánto exagera la correlación cruda
  *dim:* dim-realized-labor-demand · *horizonte:* corto plazo; los autores declaran incierto el largo plazo · *ámbito:* Unión Europea/empresas no financieras
  > While our naïve specifications associate AI with 8% higher employment, the relationship vanishes after using predicted AI adoption.
- **intensificación de capital (capital deepening): la firma aumenta el producto por trabajador sin reducir la dotación. Los autores lo leen como aumento del output del trabajador antes que reemplazo del trabajo, en el corto plazo** — Mecanismo: por qué sube la productividad sin caer el empleo
  *dim:* dim-collaboration-mode · *horizonte:* corto plazo · *ámbito:* Unión Europea/empresas no financieras
  > Productivity gains are due to capital deepening, as we find no adverse effects on firm-level employment.
- **las firmas que adoptan IA muestran salarios más altos —masa salarial total y salario medio por empleado— controlando por edad, tamaño y efectos fijos país-sector-ola. Los autores lo presentan como que las ganancias han beneficiado a los empleados «hasta ahora», y advierten que queda por ver si se sostiene en el mediano y largo plazo** — Salarios en firmas adoptantes (comparación con controles, NO el estimador causal)
  *dim:* dim-wages · *horizonte:* 2019-2024 · *ámbito:* Unión Europea/empresas no financieras
  > AI-adopting firms are more innovative and their workers earn higher wages
- **concentradas en empresas medianas y grandes, regiones financieramente desarrolladas y sectores intensivos en tecnología, con riesgo de mayor polarización económica** — Concentración de los beneficios: dónde caen las ganancias de productividad
  *dim:* dim-brecha-adopcion-por-tamano · *horizonte:* 2019-2024 · *ámbito:* Unión Europea/por tamaño, región y sector
  > productivity benefits of AI adoption are unevenly distributed and concentrate in medium and large firms
- **45% de las firmas grandes (más de 250 empleados) despliega IA contra 24% de las pequeñas (10-49). Por país: Suecia 52%, EE.UU. 34%, Rumania 22%** — Estratificación de la adopción por tamaño de firma y por país
  *dim:* dim-brecha-adopcion-por-tamano · *horizonte:* muestra 2019-2024 · *ámbito:* UE y EE.UU./empresas no financieras
  > 45% of large firms (more than 250 employees) deploy AI, compared to only 24% of small firms (10 to 49 employees)
- **un punto porcentual adicional gastado en software y datos aumenta el efecto de la adopción sobre la productividad en ~2,4%; un punto adicional en capacitación, en ~5,9%. La inversión en edificios e infraestructura también multiplica el efecto, pero con magnitudes pequeñas en comparación** — Retorno marginal de las inversiones complementarias (la co-invención, cuantificada)
  *dim:* dim-inversiones-complementarias-ia · *horizonte:* 2019-2024 · *ámbito:* Unión Europea/empresas no financieras
  > An extra percentage point spent on software and data increases the effect of AI adoption on labor productivity by around 2.4%, and an extra percentage point spent on training by 5.9%.
- **califican el +4% como una ganancia sustancial pero mesurada, alineada con las proyecciones macroeconómicas de rango medio y no con las estimaciones más transformadoras; y sostienen que sus hallazgos ponen en duda las afirmaciones de destrucción dramática de empleo por IA, mientras subrayan la preocupación por su impacto desigual** — Cómo se sitúan los autores en el debate macro
  *dim:* dim-productivity-tfp · *horizonte:* corto plazo · *ámbito:* Unión Europea/economía completa
  > Our findings cast some doubts on claims of dramatic AI-driven job destruction, while underscoring pressing concerns about its uneven economic impact.

  *engancha:* `confirma` La desigualdad de la IA se juega entre empresas, no solo entre trabajadores; `confirma` Mucha rotación, neto pequeño e incierto; `confirma` Automatización vs aumento (dirección de diseño, Turing Trap); `confirma` El potencial está limitado por la adopción y la co-invención; `tensiona` Desplazamiento domina en el periodo reciente (post-1987); `confirma` La IA ensancha (no reduce) la desigualdad; `informa` Exposición no es empleo neto; `confirma` Macro modesto (Hulten) vs extremo (AGI), reconciliables por horizonte/medición; `informa` La IA erosiona la participación del trabajo (si σ>1); `informa` Brecha de percepción (auto-reporte sobreestima el efecto medido)

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
