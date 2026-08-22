// Vista Síntesis: las grandes preguntas de fondo, respondidas navegando el grafo y los datos.
// Es la capa editorial sobre toda la maquinaria del Explorador — lo que de verdad se concluye,
// con su rastro de evidencia. Anti-aire: sin cifras falsas, evidencia nombrada, supuesto rotulado
// como supuesto. Voz neutra (proyecto abierto); se redactan navegando el grafo y se guardan acá
// (versionadas); `cites` son
// studyId reales del mapa (la vista los resuelve a "apellido 'año"). Actualizar con la fecha al editar.

export const SINTESIS_FECHA = "2026-08-21";

// ── Charts hechos a medida (sin librería) que ejemplifican una respuesta. Anclados a datos reales.
export type ChartTone = "accent" | "neg" | "pos" | "neutral";
// `value`: la cifra impresa junto al marcador. Solo donde es un dato publicado tal cual —
// las posiciones que son colocación curada (p.ej. las anclas de φ) van sin valor, a propósito.
export type ScalePoint = { at: number; label: string; tone?: ChartTone; value?: string };

export type Chart =
  // Recta numérica: estimaciones de varios estudios sobre un mismo eje, con umbral y/o banda.
  | {
      type: "scale";
      title: string;
      min: number;
      max: number;
      minLabel?: string;
      maxLabel?: string;
      zero?: boolean; // marca el 0
      threshold?: { at: number; label: string };
      band?: { from: number; to: number; label: string }; // región "informada" (verde)
      points: ScalePoint[];
      caption?: string;
    }
  // Dos series de barras por categoría (p.ej. exposición IA vs rutina por nivel de habilidad).
  | {
      type: "gradient";
      title: string;
      aLabel: string;
      bLabel: string;
      buckets: { label: string; a: number; b: number }[];
      caption?: string;
    }
  // Barras con signo desde un cero central (p.ej. el mismo escenario leído por cada lente).
  | {
      type: "lenses";
      title: string;
      sub?: string;
      unit: string;
      rows: { lens: string; value: number }[];
      caption?: string;
    };

export interface SintesisItem {
  id: string;
  q: string; // la pregunta
  verdict: string; // el veredicto honesto, en una línea
  answer: string[]; // párrafos
  chart?: Chart; // visual opcional que ejemplifica la respuesta
  cites: string[]; // studyId del mapa (se resuelven a apellido 'año y son clicables → Fuentes)
  lentes?: string[]; // lentes/capas que alimentan la respuesta
}

export const SINTESIS: SintesisItem[] = [
  {
    id: "empleo-neto",
    q: "¿Va la IA a destruir empleo neto?",
    verdict: "No está determinado: el dato no fija ni el signo. Depende de la reinstauración, que nadie ha medido para la IA.",
    answer: [
      "La respuesta honesta es un rango que cruza el cero, no un número. La descomposición de tareas (desplazamiento − reinstauración + productividad) deja la conclusión en manos de cuántas tareas nuevas crea la IA — la reinstauración —, y eso nadie lo ha medido para la IA. Históricamente, cerca de la mitad del crecimiento del empleo vino de tareas que antes no existían (Acemoglu & Restrepo); si la IA repite eso, el empleo aguanta; si no, cae.",
      "La evidencia realizada es temprana y apunta a lados distintos según dónde mires. En la rebanada más expuesta hay efectos reales: −2% de trabajos en freelancers de escritura tras ChatGPT (Hui-Reshef-Zhou, causal), −6% de empleo en jóvenes de ocupaciones top-expuestas con datos a septiembre de 2025 (Brynjolfsson, «Canaries») — una brecha que sigue profundizándose: la versión de agosto de 2026 del mismo estudio la sitúa 19% por debajo del contrafactual de sus pares menos expuestos, contra 15% un año antes. Pero a nivel de firma no aparece el desplazamiento: las reducciones por IA siguen raras en el autorreporte —solo ~2% de las empresas las declaran (Census BTOS)—, y la primera estimación causal europea, sobre 12.000 empresas con la adopción instrumentada, encuentra que adoptar IA sube la productividad 4% sin efecto sobre el empleo, por intensificación de capital antes que por reemplazo (BIS). Ese mismo trabajo deja una advertencia de método que conviene llevarse: la correlación cruda asociaba la IA con 8% MÁS empleo, y esa relación se desvanece al instrumentar — el dato bruto exagera, y la corrección va hacia abajo. El empleo agregado sigue creciendo, y con el método que corrige por la ciclicidad distinta de las ocupaciones expuestas, el efecto agregado de la IA es indistinguible de cero (Budget Lab de Yale).",
      "Hay un margen que casi nadie mira y que da la señal más limpia de rezago: el internacional. A 42 meses de ChatGPT, las exportaciones de servicios de oficina —el trabajo que la IA supuestamente barrería primero, ya deslocalizado y sin fricción de despido de por medio— siguen creciendo en las nueve economías exportadoras principales, con India acelerando respecto de su propia tendencia previa (Baldwin). Ahí el desplazamiento tenía el camino más barato disponible: rescindir un contrato es mucho más fácil que despedir, y aun así los contratos se siguen firmando. El límite del dato es que mide facturación, no dotación — el mismo trabajo registra a una de las grandes indias recortando 12.000 puestos mientras sus exportaciones crecen, que es ingreso por empleado subiendo, no industria preservada.",
      "El veredicto, entonces: el agregado todavía no muestra destrucción neta, pero las rebanadas expuestas sí — y hasta la firma de ese golpe joven está ahora en disputa (ver la pregunta siguiente). Que eso se generalice o no depende de una apuesta —la reinstauración— que la evidencia no resuelve.",
    ],
    chart: {
      type: "scale",
      title: "Efecto de empleo realizado, por estudio",
      min: -8,
      max: 2,
      minLabel: "−8%",
      maxLabel: "+2%",
      zero: true,
      points: [
        { at: 0, label: "Firmas · BTOS", tone: "neutral", value: "≈0" },
        { at: -2, label: "Upwork · Hui", tone: "neg", value: "−2%" },
        { at: -6, label: "Jóvenes · ADP", tone: "neg", value: "−6%" },
      ],
      caption: "El agregado apenas se mueve; las rebanadas más expuestas, claramente negativas.",
    },
    cites: [
      "acemoglu-restrepo-2019-newtasks",
      "hui-reshef-zhou-2024-online-labor",
      "brynjolfsson-chandar-chen-2025-canaries",
      "sdel-adp-2026-canaries-dashboard",
      "bonney-btos-2026-microstructure",
      "budgetlab-yale-2026-sdid",
      "bis-2026-wp1325-firmas-europeas",
      "baldwin-2026-obs-booming",
    ],
    lentes: ["Tareas", "Empírico"],
  },
  {
    id: "jovenes-atribucion",
    q: "¿Lo que se ve en los jóvenes ya es la IA?",
    verdict:
      "El patrón es real y ya llega a 19%; la firma se estrechó sin resolverse — hay réplica al rival del trabajo remoto, y a la vez tendencias previas que los propios autores reconocen.",
    answer: [
      "El patrón descriptivo está fuera de duda y ahora es una serie mensual: en el panel de nóminas de ADP (Stanford), el empleo de 22-25 años en las ocupaciones más expuestas se contrae 3,8% al año desde fines de 2022 mientras en las menos expuestas crece 2,0% — y la brecha se profundiza en vez de cerrarse. Un dataset independiente (CPS) converge: la tasa a la que los jóvenes consiguen empleo en ocupaciones expuestas cayó 14% respecto de 2022. Y el mecanismo asoma: el empleo cae donde el uso de la IA es tipo automatización; donde es aumentación, no.",
      "Lo que 2026 puso en disputa es la firma del golpe. La exposición a la IA está tan entrelazada con la exposición al trabajo remoto —otro shock post-pandemia; correlacionan ~0,77— que, estimadas juntas, el efecto del remoto persiste y el de la IA se atenúa a menudo hasta cero (Lambert-Schindler, 243M de contrataciones en 4 países). Una línea independiente calcula que el remoto explica ~64% del alza de desempleo de graduados jóvenes, con un timing que precede a la difusión de la IA (NY Fed). Y la OCDE, mirando seis economías, concluye que «el papel de los LLMs parece limitado»: el deterioro viene desde antes de los LLMs, no tiene punto de quiebre en ningún país, y las ocupaciones expuestas son más sensibles al ciclo.",
      "Hay una lectura que ordena la disputa sin resolverla: esa correlación entre las dos exposiciones no es ruido — miden casi la misma propiedad del trabajo, que sea codificable y viaje por una pantalla. El teletrabajo fue la prueba de que un empleo no depende del lugar; el LLM es el paso siguiente: que deje de depender de la persona. Bajo esa lectura, los shocks son etapas secuenciales de una misma exposición — el remoto debilitó la escalera de entrada (se llevó la mentoría presencial), la IA compone sobre ese margen debilitado — y preguntar «¿cuál de los dos fue?» es, en parte, preguntar mal. Lo que sí discrimina entre un shock que ya pasó y una tecnología en difusión es la pendiente: la divergencia joven se acelera (sobre 4% anual desde abril de 2024) y se ordena por el tipo de uso — cae donde la IA automatiza, no donde aumenta —, una huella que ni las tasas ni el remoto producen con facilidad. Dos hechos, eso sí, mantienen la disputa abierta: el patrón aparece también en ocupaciones expuestas que no se pueden hacer remoto (la IA tiene componente propio), y la brecha joven persiste incluso en las no remotables controlando exposición (algo más ancho también opera). Lo que la adjudicaría: si la brecha se extiende a los 26-34 en los próximos meses de la serie, la tercera ola del suplemento del Census, o una réplica que use adopción real a nivel de firma —no exposición— como tratamiento.",
      "Y hay una contradicción que el debate rara vez pone junta, aunque las dos mitades están medidas. Donde la IA más sube la productividad es justamente en los novatos: cerca de 30% en los agentes nuevos de un centro de contacto y 36% en el quintil más bajo, y en un experimento de campo con un asistente de código el output sube más de 50% con ganancias estadísticamente significativas solo entre programadores junior. Donde más cae la contratación es en ese mismo perfil. Si la herramienta vuelve más valioso al que recién entra, contratarlo debería ser mejor negocio y no peor. Tres explicaciones lo reconciliarían y ninguna está medida: que suba el producto por junior y no el número de juniors que la empresa necesita; que la herramienta capture el valor que antes justificaba pagar un aprendizaje; o que la ganancia sea real pero solo para quien ya está adentro. Dicho de otro modo, el problema del primer empleo quizá no sea que la IA vuelva inútil al novato, sino que vuelva innecesario contratarlo para obtener lo que el novato producía.",
      "Hay un argumento que no depende de ninguno de los dos bandos y que la clasificación por olas deja ver: antes esto no pasaba. En 16 países europeos entre 2011 y 2019, las ocupaciones más expuestas a la IA GANARON participación en el empleo, y el efecto fue más fuerte justo donde había más trabajadores jóvenes y calificados (Albanesi et al.). Es la misma población que hoy se separa a la baja, medida con la misma clase de índice de exposición, en la ola inmediatamente anterior. Eso no prueba que la causa actual sea la IA generativa, pero descarta que el deterioro venga arrastrándose desde antes: si la exposición a la IA fuera una desventaja estructural para los jóvenes calificados, se habría visto en esa década y se vio lo contrario. Con una salvedad que conviene no saltarse, porque la evidencia de esa misma ola la trae: no todo era expansión. Los establecimientos estadounidenses expuestos a la IA ya reducían entonces sus contrataciones en posiciones no relacionadas con IA, aunque el efecto no llegara a verse en la ocupación ni en la industria (Acemoglu, Autor, Hazell y Restrepo), y en un panel de 86 países la actividad en IA venía asociada a contracción del empleo total y a menor participación del trabajo (Cornelli, Frost y Mishra). Lo que cambió con la generativa parece ser la magnitud y a quién alcanza, no el signo de todos los márgenes a la vez.",
      "El lado Canaries respondió en agosto de 2026, y su respuesta movió la disputa sin cerrarla. Con nóminas hasta junio, replica la especificación de Lambert-Schindler lo más cerca que puede y encuentra que la exposición a la IA sigue prediciendo la caída de la participación junior en las nuevas contrataciones después de controlar por trabajo desde casa; atribuye la discrepancia a los datos, nómina administrativa contra perfiles y avisos en línea. La brecha además se profundizó: los de 22-25 en ocupaciones expuestas están 19% por debajo de donde estarían si hubieran seguido el ritmo de sus pares menos expuestos, contra 15% un año antes, y el ajuste ocurre por menor contratación antes que por despidos. En la misma versión los autores conceden tres cosas que antes no estaban: hay tendencias divergentes que predatan ChatGPT, sobre todo alrededor de la pandemia; la educación de la ocupación es el único control que atenúa sus estimaciones, y puede ser tanto una explicación alternativa como el canal mismo por el que opera la IA; y la divergencia es más pronunciada en su panel que en las encuestas nacionales. Ellos insisten en que son hechos descriptivos y no estimaciones causales. Y mientras tanto, el desempleo joven agregado incluso mejoró en el año (7,1% en junio de 2026 contra 8,2% un año antes, CPS): los desplazados parecen reasignarse, no quedar fuera, y el costo migra del desempleo a la calidad — el subempleo de recién graduados sigue en 41,5% (NY Fed) y los roles de entrada se redefinen hacia arriba, exigiendo habilidades que eran de senior (la «seniorización» que documenta PwC). Ahí las dos causas convergen sobre el mismo activo: el primer empleo era, de contrabando, el mecanismo con que la economía producía trabajadores expertos. El remoto le quitó la mentoría; la IA automatiza las tareas con las que se aprendía. Sea cual sea la firma del golpe, el primer peldaño quedó más alto — y la pregunta que casi nadie está midiendo no es quién lo subió, sino qué produce ahora al experto.",
    ],
    chart: {
      type: "scale",
      title: "Empleo interanual a abril 2026, panel ADP, por exposición a IA",
      min: -5,
      max: 1,
      minLabel: "−5%",
      maxLabel: "+1%",
      zero: true,
      points: [
        { at: -4.2, label: "22-25 · expuestas", tone: "neg", value: "−4,2%" },
        { at: -1.7, label: "22-25 · no expuestas", tone: "neg", value: "−1,7%" },
        { at: -0.2, label: "todas · expuestas", tone: "neutral", value: "−0,2%" },
        { at: 0.1, label: "todas · no expuestas", tone: "pos", value: "+0,1%" },
      ],
      caption:
        "La brecha joven (2,5pp) contra la brecha agregada (0,3pp): el patrón es nítido; la causa, disputada.",
    },
    cites: [
      "brynjolfsson-chandar-chen-2026-canaries-ago",
      "albanesi-etal-2025-europa-empleo",
      "acemoglu-autor-hazell-restrepo-2022-vacantes",
      "cornelli-frost-mishra-2023-desigualdad",
      "gambacorta-etal-2024-codefuse",
      "brynjolfsson-li-raymond-2023",
      "sdel-adp-2026-canaries-dashboard",
      "lambert-schindler-2026-broken-ladder",
      "emanuel-harrington-pallais-2026-remote",
      "oecd-eo-2026-jovenes",
      "massenkoff-mccrory-2026-cps",
      "budgetlab-yale-2026-sdid",
      "afrouzi-etal-2026-learning-careers",
    ],
    lentes: ["Empírico", "capa Distribución"],
  },
  {
    id: "puestos-o-sueldos",
    q: "¿El riesgo es «no hay trabajo» o «hay trabajo que paga menos»?",
    verdict: "Corto plazo: menos puestos. Largo plazo: el golpe migra al sueldo.",
    answer: [
      "La escasez del trabajo se mide en el precio, no solo en la cantidad: el escenario a temer no es «no hay trabajo» sino «hay trabajo que paga menos». El reparto entre ambos —el parámetro φ— lo informa, sin fijarlo, la rigidez salarial a la baja.",
      "Esa evidencia es robusta en su dirección: los salarios se resisten a caer. Dickens et al. estiman que ~28% de los recortes que ocurrirían bajo flexibilidad son impedidos por la rigidez; los recortes de salario base son «extremely rare» (Babecký, Wage Dynamics Network); las firmas prefieren despedir antes que recortar (Bewley). Así que, en el corto plazo, el ajuste cae más en el empleo que en el sueldo —φ tiende bajo, cerca de 0,30—. Y, de hecho, ADP encuentra que hasta ahora el efecto de la IA aparece en el empleo, no en la compensación.",
      "Pero la rigidez es nominal y de corto plazo. Con los años —contratos renegociados, inflación que erosiona el salario real— el ajuste de precio se materializa. El golpe, si persiste, migra del puesto al sueldo.",
    ],
    chart: {
      type: "scale",
      title: "φ implícito por la rigidez salarial (0 = todo en empleo · 1 = todo en sueldos)",
      min: 0,
      max: 1,
      minLabel: "todo en empleo",
      maxLabel: "todo en sueldos",
      band: { from: 0.2, to: 0.45, label: "rango informado" },
      points: [
        { at: 0.03, label: "Kaur", tone: "accent" },
        { at: 0.11, label: "Babecký", tone: "accent" },
        { at: 0.2, label: "Daly", tone: "accent" },
        { at: 0.28, label: "Dickens", tone: "accent" },
      ],
      caption: "Las estimaciones se agrupan abajo: el ajuste cae más en el empleo que en el sueldo.",
    },
    cites: ["dickens-iwfp-2007", "babecky-wdn-2010", "bewley-1999", "brynjolfsson-chandar-chen-2025-canaries"],
    lentes: ["Tareas"],
  },
  {
    id: "quien-renta",
    q: "¿Quién se queda con la renta? ¿Cae la participación del trabajo?",
    verdict: "Lo más dependiente del modelo. El peso empírico (σ<1) inclina, contra la intuición, a que la tajada del trabajo suba.",
    answer: [
      "Aquí la respuesta depende menos de los datos que del modelo. En la lente agregada (CES), la suerte de la tajada del trabajo la decide un solo número: σ, la elasticidad de sustitución entre capital y trabajo. Si σ>1 (sustitutos), el capital barato —la IA— se lleva una tajada creciente; si σ<1 (complementos), el trabajo se vuelve el factor escaso y su tajada sube.",
      "Y el centro de gravedad empírico está BAJO 1: Chirinko (0,4–0,6), Oberfield-Raval (0,5–0,7), Antràs (~0,78), el meta-análisis de Knoblach. Solo Karabarbounis-Neiman (~1,25) sostiene σ>1, y Lawrence argumenta que ese resultado viene del supuesto, no del dato. Tomado en serio, el modelo agregado predice por defecto que la participación del trabajo SUBE — lo contrario de la intuición de que «el capital se queda con todo».",
      "La lente de tareas, en cambio, da desplazamiento neto puro: la tajada cae con las tareas que pasan al capital. Y la de crecimiento dice que depende de los «weak links» —las tareas que la IA no puede hacer, que son la fuente de la escasez y capturan el retorno (Jones). Es la pregunta donde el marco pesa más que el dato.",
    ],
    chart: {
      type: "scale",
      title: "Elasticidad de sustitución σ, por estudio",
      min: 0.3,
      max: 1.4,
      minLabel: "0,3",
      maxLabel: "1,4",
      threshold: { at: 1, label: "σ=1 · tajada fija" },
      points: [
        { at: 0.5, label: "Chirinko", tone: "accent", value: "0,5" },
        { at: 0.6, label: "Oberfield-Raval", tone: "accent", value: "0,6" },
        { at: 0.66, label: "Knoblach", tone: "accent", value: "0,66" },
        { at: 0.78, label: "Antràs", tone: "accent", value: "0,78" },
        { at: 1.25, label: "K-Neiman", tone: "neg", value: "1,25" },
      ],
      caption: "El centro empírico cae bajo 1 (complementos): el modelo predice que la tajada del trabajo SUBE. Solo K-N queda sobre 1.",
    },
    cites: [
      "chirinko2008",
      "oberfield-raval2021",
      "antras2004",
      "knoblach2020",
      "karabarbounis-neiman2014",
      "lawrence2015",
      "atkeson2020-labor-share",
      "dwarkesh2026-economia-agi",
    ],
    lentes: ["Agregado·CES", "Tareas", "Crecimiento"],
  },
  {
    id: "para-quien",
    q: "¿Para quién? ¿A qué trabajadores golpea?",
    verdict: "Golpea hacia arriba: medio-alto y jóvenes. La primera ola que toca de lleno el trabajo cognitivo.",
    answer: [
      "A diferencia de la automatización rutinaria —que vació el MEDIO de la escala de habilidades y respetó los extremos (Autor & Dorn)—, la exposición a la IA apunta hacia ARRIBA. Los empleos de mayor ingreso están más expuestos (Eloundou et al., sobre capacidades de GPT-4) y el Anthropic Economic Index ubica el pico de uso real en el salario medio-alto. El índice de Webb apunta en la misma dirección —la exposición trepa con la calificación, hace pico cerca del percentil 90 y el top 1% queda más protegido—, con una salvedad que conviene tener presente: está construido sobre patentes de la ola anterior, con datos hasta 2010, así que coincide con la generativa sin ser evidencia sobre ella.",
      "La evidencia realizada lo confirma en su margen más nítido: los más golpeados son los jóvenes en ocupaciones expuestas —caídas de empleo de hasta ~20% en programadores de 22-25 años (Brynjolfsson, «Canaries»), una brecha que a abril de 2026 sigue profundizándose (−3,8% al año en la serie mensual ADP)—, mientras los trabajadores mayores crecen. Es la primera ola tecnológica que toca de lleno el trabajo cognitivo y de cuello blanco. La atribución de ese golpe joven a la IA, eso sí, quedó en disputa en 2026 (ver «¿Lo que se ve en los jóvenes ya es la IA?»).",
      "Hay un «para quién» que la discusión suele saltarse, y que la evidencia europea sitúa un nivel más arriba: entre empresas antes que entre personas. La adopción está estratificada —45% de las firmas grandes contra 24% de las pequeñas en la UE, y 52% en Suecia contra 22% en Rumania—, y las ganancias de productividad se concentran en las medianas y grandes, en regiones financieramente desarrolladas y en sectores intensivos en tecnología (BIS). Buena parte de lo que se vive como desigualdad entre trabajadores puede ser, en realidad, en qué empresa se trabaja. Y lo que decide el rendimiento no es la herramienta sino lo que se construye alrededor: cada punto porcentual adicional invertido en software y datos suma ~2,4% al efecto de adoptar, y cada punto en capacitación ~5,9%. Esa brecha entre empresas es lo más estable que tiene el mapa: ya estaba en la ola anterior, cuando invertir en IA venía con 19,5% más ventas y 18,1% más empleo, con las ganancias concentradas en las firmas grandes y una industria que se concentraba con ellas (Babina et al.).",
      "El «para quién», entonces, se invierte: no el obrero rutinario del medio, sino el profesional de habilidad media-alta y el que recién entra al mercado — y, un nivel más arriba, la empresa que no alcanza la masa crítica para adoptar.",
    ],
    chart: {
      type: "gradient",
      title: "Exposición relativa por nivel de habilidad (promedio = 1)",
      aLabel: "exposición IA",
      bLabel: "automatización rutinaria",
      buckets: [
        { label: "habilidad alta", a: 1.3, b: 0.7 },
        { label: "habilidad media", a: 1.1, b: 1.45 },
        { label: "habilidad baja", a: 0.6, b: 0.85 },
      ],
      caption: "La IA trepa con la habilidad; la rutina hizo pico en el medio. El golpe se mueve hacia arriba.",
    },
    cites: [
      "bis-2026-wp1325-firmas-europeas",
      "babina-etal-2024-firm-growth",
      "autor-dorn-2013",
      "eloundou-2023-gpts",
      "webb-2020-ai-labor",
      "anthropic-aei-2026-primitives",
      "brynjolfsson-chandar-chen-2025-canaries",
      "sdel-adp-2026-canaries-dashboard",
    ],
    lentes: ["capa Distribución"],
  },
  {
    id: "distinta-a-olas-previas",
    q: "¿Es esta ola distinta a las anteriores (electricidad, computador)?",
    verdict: "El mecanismo es el mismo; lo nuevo, si algo, es que golpea hacia arriba y quizás más rápido.",
    answer: [
      "El mecanismo no es nuevo: las tecnologías de propósito general previas —electricidad, computador— también desplazaron tareas, recrearon otras y tardaron décadas en difundirse. El empleo de cajeros creció después del cajero automático, porque abarató abrir sucursales (Bessen); la productividad de las TI siguió una curva-J, subestimada al inicio (Brynjolfsson, Rock & Syverson). El marco de desplazamiento-reinstauración describe esta ola igual que las anteriores.",
      "Lo que podría ser distinto son dos cosas. Una, la DIRECCIÓN: golpea hacia arriba (cognitivo), no al medio rutinario. Dos, en el extremo especulativo, que la IA automatice la producción de IDEAS y acelere el crecimiento mismo (Aghion-Jones; Korinek-Suh dan de 2% a 18% al año según los supuestos). Pero incluso ahí los «weak links» —las tareas que la IA no puede hacer— domestican la explosión y deciden si el trabajo captura la renta o colapsa (Jones). Es la cota más incierta, no un pronóstico.",
      "El veredicto sobrio: tratar la IA como una tecnología de propósito general más es el punto de partida correcto; la novedad hay que demostrarla, no asumirla.",
    ],
    cites: [
      "bessen2015-tellers",
      "feigenbaum-gross-2024-operators",
      "ricardo1821-machinery",
      "brynjolfsson2021jcurve",
      "acemoglu-restrepo-2019-newtasks",
      "korinek2024scenarios",
      "jones2025-ai-economic-future",
    ],
    lentes: ["Crecimiento"],
  },
  {
    id: "depende-del-modelo",
    q: "¿Tu conclusión depende del modelo, no solo de los datos?",
    verdict: "Sí. No hay una respuesta — hay una respuesta por marco, y el marco pesa tanto como el dato.",
    answer: [
      "Es la lección más profunda de toda la herramienta. Corre el mismo escenario —el mismo empuje de IA— por las cuatro lentes y el signo se da vuelta. La de tareas dice que el empleo y los salarios bajan un poco; la agregada (CES, con σ<1) dice que suben; la empírica se inclina a un negativo leve; la de crecimiento dice que todo depende del cuello de botella humano.",
      "El campo discute como si su modelo fuera el mundo, y casi nadie lo dice. Pero la conclusión depende del marco con que respondes tanto como de los datos que metes: el desacuerdo ENTRE modelos es tan grande como el desacuerdo dentro de cualquiera de ellos.",
      "Por eso la herramienta deja elegir la lente y no esconde que la respuesta es, en rigor, una respuesta por marco — no un número único. Esa es la honestidad llevada a su conclusión.",
    ],
    chart: {
      type: "lenses",
      title: "Un mismo escenario (IA al 8%), leído por cada lente",
      sub: "Δ empleo a 5 años",
      unit: "%",
      rows: [
        { lens: "Tareas", value: -1.0 },
        { lens: "Agregado·CES", value: 1.9 },
        { lens: "Empírico", value: -1.0 },
        { lens: "Crecimiento", value: -1.5 },
      ],
      caption: "El mismo empuje: solo el modelo agregado (σ<1) da positivo. El signo depende del marco, no del dato.",
    },
    cites: [
      "chirinko2008",
      "karabarbounis-neiman2014",
      "korinek2024scenarios",
      "hui-reshef-zhou-2024-online-labor",
      "dwarkesh2026-economia-agi",
      "fradkin-etal-2026-forecast",
    ],
    lentes: ["Tareas", "Agregado·CES", "Empírico", "Crecimiento"],
  },
  {
    id: "que-no-sabemos",
    q: "¿Qué NO sabemos? (los puentes ausentes)",
    verdict: "El puente clave —exposición → empleo neto— no existe validado. La dispersión y los puentes ausentes SON el producto.",
    answer: [
      "El hueco mayor: no existe una función validada que lleve de «la IA puede hacer esta tarea» a «se pierden o se crean estos empleos netos». Es el puente ausente central del mapa. Y la parte que parecía firme lo es menos de lo que suena: de los tres índices de exposición que sostienen el mapa, solo el de Eloundou está construido sobre capacidades generativas; los de Felten y Webb miden la ola anterior de aprendizaje automático, con datos hasta 2019 y 2010. Que coincidan en la dirección es un argumento; que se citen juntos como si midieran lo mismo, un error. El empleo neto que resulta de esa exposición no se mide bien en ninguna de las dos olas — faltan la adopción real, las tareas nuevas y la respuesta de los salarios.",
      "La evidencia realizada que sí existe es temprana y correlacional: los propios autores del estudio de ADP advierten que no es identificación causal limpia — y 2026 lo confirmó por la vía dura: ni siquiera el golpe joven que sí se ve tiene firma resuelta (IA, remoto y ciclo compiten por el mismo patrón, y la exposición ni siquiera predice bien la adopción real). La reinstauración para la IA no está medida. σ está en disputa. φ está informado, no fijado. Cada una de esas piezas es un supuesto rotulado, no un dato cerrado. Y hay un canal entero que ninguna de estas medidas toca: el internacional. Si la IA abarata coordinar trabajo a distancia más rápido de lo que abarata reemplazarlo, parte del empleo que se pierde localmente no se automatiza — se muda; las series de comercio de servicios, que hoy crecen en las nueve economías offshore principales, registran el flujo pero no separan una cosa de la otra, y ninguna medida de exposición ocupacional incluye la transabilidad.",
      "Por eso el producto honesto de todo esto no es un pronóstico: es el RANGO y los puentes que faltan. Mostrar dónde se acaba el conocimiento es la mitad del trabajo. Y la pregunta abierta más nueva (2026): si el primer empleo era el mecanismo con que la economía producía expertos —aprender haciendo, con mentoría al lado— y ese peldaño está subiendo, ¿qué lo reemplaza? La teoría ya formalizó qué se juega ahí (una trampa de capital humano, si el canal de aprendizaje se rompe); la medición todavía no empieza.",
    ],
    cites: [
      "eloundou-2023-gpts",
      "felten-2021-aioe",
      "webb-2020-ai-labor",
      "brynjolfsson-chandar-chen-2025-canaries",
      "lambert-schindler-2026-broken-ladder",
      "lindenlaub-etal-2026-beyond-exposure",
      "afrouzi-etal-2026-learning-careers",
      "acemoglu-restrepo-2019-newtasks",
    ],
    lentes: ["Empírico"],
  },
  {
    id: "sector-relacional",
    q: "¿Puede el sector relacional sostener el empleo?",
    verdict: "Puede, pero es frágil: depende de una preferencia por lo humano fuerte, amplia y de variedad creciente — y eso nadie lo ha medido.",
    answer: [
      "Si lo abundante se abarata, lo escaso es el humano. Queda un «sector relacional»: servicios donde el hecho de que un humano esté en el loop ES parte del valor —el terapeuta, el maestro, el cuidado, lo creativo, la atención—. La pregunta no es si existe, sino si puede ser una parte grande de la economía o apenas una propina.",
      "La evidencia apunta a que el valor de lo humano es intrínseco, no solo escasez: en el experimento de Imas, un arte hecho por una persona se valora mucho más que el de una IA — pero la prima se desploma cuando hay 500 copias, porque se pierde la conexión con el artista. La preferencia es real, pero condicional a la unicidad.",
      "El límite es la variedad (Trammell): aunque la gente prefiera humanos, si el sector automatizado inventa variedades nuevas más rápido que el relacional, la tajada del gasto que va a lo humano tiende a cero — como el mongol del 1400 que, mirando solo lo que conocía, habría predicho que gastaríamos todo en cantantes, y no fue así. El sector relacional sostiene empleo solo si crece en variedad tan rápido como el resto.",
    ],
    cites: ["imas-art-machine", "dwarkesh2026-economia-agi", "jones2025-ai-economic-future", "korinek-trammell2024-growth-tai"],
    lentes: ["rama «Lo relacional»"],
  },
  {
    id: "captura-renta",
    q: "¿Quién captura la renta de la IA — electricidad o plataforma?",
    verdict: "Depende de si la IA se difunde como la electricidad o se concentra como las redes sociales — y de si la gente común puede tener una porción del capital que gana.",
    answer: [
      "Aunque la IA genere abundancia, ¿quién se queda con la renta? La analogía decide. La electricidad transformó todo, pero sus beneficios fluyeron a los usuarios: nadie teme a la compañía eléctrica. Las redes sociales también están en todas partes, pero las rentas se las llevó la plataforma. Si la IA se parece a la electricidad, la ganancia se difunde; si se parece a las redes, se concentra.",
      "La bisagra práctica es la «indexabilidad»: si la gente común —y los países sin fábricas de chips— puede tener una porción del capital que gana (comprar el índice), participa; si el valor se concentra en unas pocas empresas privadas, no. La comoditización de los modelos (los abiertos van 6-9 meses detrás de la frontera) empuja hacia el lado electricidad.",
      "Por eso las propuestas de reparto giran sobre esto: el capital básico universal (una porción de propiedad, no un cheque del que dependés) y gravar el consumo para comprar y repartir acciones (la idea de Autor) buscan hacer la economía indexable. El problema es el targeting —¿qué pones en la cartera si la empresa ganadora aún no existe?—. Es la rama de «quién se queda con la renta», y enlaza el empleo con la propiedad del capital.",
    ],
    cites: ["dwarkesh2026-economia-agi", "autor-2024-rebuild-middle-class", "karabarbounis-neiman2014", "galloway2026-apocalypse-no"],
    lentes: ["rama «Las plataformas»"],
  },
  {
    id: "estado-compensacion",
    q: "¿Puede el Estado compensar lo que el trabajo pierda?",
    verdict:
      "En teoría sí; los tres instrumentos disponibles fallan por lados distintos. Y la caja se achica sola justo cuando más se la necesita.",
    answer: [
      "La promesa teórica es firme y viene del mismo linaje que el resto de este mapa: Korinek y Stiglitz muestran que, bajo condiciones plausibles, existe una tributación no distorsionaria capaz de compensar a quienes pierden con el progreso técnico. La discusión útil no está ahí, sino un paso más abajo, en el instrumento con que se cobra.",
      "Empieza por un hecho que rara vez entra al debate: la caja del Estado descansa sobre la base que el shock erosiona. En el año fiscal 2024, el 84% de los ingresos federales de EE.UU. vino de impuesto a la renta personal y contribuciones sociales, y el 11% de las utilidades corporativas (CBO). Como el código grava el trabajo a una tasa efectiva de 25,5% y el equipo y software a cerca del 10% (Acemoglu-Manera-Restrepo), cada punto de participación que migra del trabajo al capital le cuesta al fisco unos 0,155 puntos del producto, sin que nadie cambie ninguna ley. El momento de máxima demanda de transferencias coincide con el de mínima capacidad de financiarlas.",
      "El instrumento que el debate público más pide —gravar al robot— es el que la literatura de tributación óptima acota o descarta, y lo hace desde tres modelos independientes. Guerreiro, Rebelo y Teles lo encuentran óptimo solo mientras siga activa la cohorte de trabajadores rutinarios que ya no puede recolocarse: cuando se jubila, la tasa óptima es cero. Costinot y Werning muestran que su magnitud decrece a medida que la automatización se profundiza y la desigualdad crece, al revés de la intuición. Thuemmel, en un modelo calibrado, encuentra que gravar robots distinto del resto del equipo capital aporta ganancias de bienestar cercanas a cero, mientras que ajustar el impuesto a la renta rinde entre 1.000 y 4.000 dólares por persona al año. La palanca fiscal con evidencia más sólida es más aburrida: dejar de subsidiar la automatización. Corregir el sesgo del código sube el empleo 4,02% y la participación del trabajo 0,78 puntos (Acemoglu-Manera-Restrepo).",
      "Gravar directamente al capital choca con la movilidad de su base. Cerca del 36% de los beneficios multinacionales se declaraba en paraísos en 2015 y alrededor del 40% en 2019 (Tørsløv, Wier y Zucman), y el capital de la IA es del tipo más móvil que existe: intangible, reubicable por contrato. La prueba a escala mundial ya corrió, y su resultado está en el gráfico. Lo que no se puede mover —energía, tierra, presencia física— se deja gravar casi sin pérdida, pero es una base varias veces menor. Ese es el intercambio de fondo: lo que se puede gravar es lo que no se puede mover, y resulta ser el mismo eje que decide quién captura la renta.",
      "Queda el último tramo, el reparto, y tampoco es de uno a uno. En el mayor experimento aleatorizado de renta garantizada, 12.000 dólares al año durante tres años redujeron el ingreso propio en unos 1.800 al año y la participación laboral en 4,1 puntos, sin mejorar la calidad del empleo (Vivalt et al.). Pero el diseño manda: el dividendo de Alaska, universal y permanente desde 1982, no redujo el empleo agregado y aumentó el trabajo a tiempo parcial en 1,8 puntos (Jones y Marinescu), y sus autores lo atribuyen a que el efectivo estimula la economía local. La pregunta útil no es si repartir, sino cuánto ingreso se recupera por punto transferido y bajo qué diseño.",
      "El veredicto que queda: la compensación es posible en el papel y difícil en el instrumento. La base se erosiona sola, la parte grande de lo que queda se fuga, la parte que no se fuga es chica, y lo que se reparte llega recortado. Nada de eso dice que no se pueda; dice dónde hay que trabajar.",
    ],
    chart: {
      type: "scale",
      title: "Lo que promete un piso fiscal global, antes y después de los datos",
      min: 0,
      max: 10,
      minLabel: "0",
      maxLabel: "10% del impuesto corporativo global",
      points: [
        { at: 7.3, label: "Proyección '24", tone: "neutral", value: "6,5–8,1%" },
        { at: 4.3, label: "Con datos '26", tone: "accent", value: "3,2–5,4%" },
      ],
      caption:
        "La misma reforma —el impuesto mínimo global del 15%—, estimada dos veces por la misma institución: la recaudación esperada se redujo cerca de la mitad cuando llegaron los datos del primer año.",
    },
    cites: [
      "korinek-stiglitz2019",
      "cbo-2024-receipts",
      "acemoglu-manera-restrepo-2020-tax",
      "guerreiro-rebelo-teles-2022-robots",
      "costinot-werning-2023-luddism",
      "thuemmel-2023-robots",
      "torslov-wier-zucman-2023-missing-profits",
      "oecd-2026-gmt-eia",
      "vivalt-etal-2025-guaranteed-income",
      "jones-marinescu-2022-alaska",
    ],
    lentes: ["rama «Los Estados»"],
  },
];
