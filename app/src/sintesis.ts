// Vista Síntesis: las grandes preguntas de fondo, respondidas navegando el grafo y los datos.
// Es la capa editorial sobre toda la maquinaria del Explorador — lo que de verdad se concluye,
// con su rastro de evidencia. Anti-aire: sin cifras falsas, evidencia nombrada, supuesto rotulado
// como supuesto. Voz neutra (proyecto abierto); se redactan navegando el grafo y se guardan acá
// (versionadas); `cites` son
// studyId reales del mapa (la vista los resuelve a "apellido 'año"). Actualizar con la fecha al editar.

export const SINTESIS_FECHA = "2026-06-20";

// ── Charts hechos a medida (sin librería) que ejemplifican una respuesta. Anclados a datos reales.
export type ChartTone = "accent" | "neg" | "pos" | "neutral";
export type ScalePoint = { at: number; label: string; tone?: ChartTone };

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
      "La evidencia realizada es temprana y apunta a lados distintos según dónde mires. En la rebanada más expuesta hay efectos reales: −2% de trabajos en freelancers de escritura tras ChatGPT (Hui-Reshef-Zhou, causal), −6% de empleo en jóvenes de ocupaciones top-expuestas (Brynjolfsson, «Canaries»). Pero a nivel de firma las reducciones por IA son raras —solo 2% de las empresas las reportan (Census BTOS)— y el empleo agregado sigue creciendo.",
      "El veredicto, entonces: el agregado todavía no muestra destrucción neta, pero las rebanadas expuestas sí. Que eso se generalice o no depende de una apuesta —la reinstauración— que la evidencia no resuelve.",
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
        { at: 0, label: "Firmas · BTOS", tone: "neutral" },
        { at: -2, label: "Upwork · Hui", tone: "neg" },
        { at: -6, label: "Jóvenes · ADP", tone: "neg" },
      ],
      caption: "El agregado apenas se mueve; las rebanadas más expuestas, claramente negativas.",
    },
    cites: [
      "acemoglu-restrepo-2019-newtasks",
      "hui-reshef-zhou-2024-online-labor",
      "brynjolfsson-chandar-chen-2025-canaries",
      "bonney-btos-2026-microstructure",
      "budgetlab-yale-2025",
    ],
    lentes: ["Tareas", "Empírico"],
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
        { at: 0.5, label: "Chirinko", tone: "accent" },
        { at: 0.6, label: "Oberfield-Raval", tone: "accent" },
        { at: 0.66, label: "Knoblach", tone: "accent" },
        { at: 0.78, label: "Antràs", tone: "accent" },
        { at: 1.25, label: "K-Neiman", tone: "neg" },
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
      "A diferencia de la automatización rutinaria —que vació el MEDIO de la escala de habilidades y respetó los extremos (Autor & Dorn)—, la exposición a la IA apunta hacia ARRIBA. Los empleos de mayor ingreso están más expuestos (Eloundou et al.); la exposición trepa con la calificación y hace pico cerca del percentil 90, con el top 1% más protegido (Webb); el Anthropic Economic Index ubica el pico en el salario medio-alto.",
      "La evidencia realizada lo confirma en su margen más nítido: los más golpeados son los jóvenes en ocupaciones expuestas —caídas de empleo de hasta ~20% en programadores de 22-25 años (Brynjolfsson, «Canaries»)—, mientras los trabajadores mayores crecen. Es la primera ola tecnológica que toca de lleno el trabajo cognitivo y de cuello blanco.",
      "El «para quién», entonces, se invierte: no el obrero rutinario del medio, sino el profesional de habilidad media-alta y el que recién entra al mercado.",
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
      "autor-dorn-2013",
      "eloundou-2023-gpts",
      "webb-2020-ai-labor",
      "anthropic-aei-2026-primitives",
      "brynjolfsson-chandar-chen-2025-canaries",
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
        { lens: "Tareas", value: -0.7 },
        { lens: "Agregado·CES", value: 1.9 },
        { lens: "Empírico", value: -1.0 },
        { lens: "Crecimiento", value: -1.6 },
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
      "El hueco mayor: no existe una función validada que lleve de «la IA puede hacer esta tarea» a «se pierden o se crean estos empleos netos». Es el puente ausente central del mapa. La exposición se mide bien (Eloundou, Felten, Webb); el empleo neto que resulta, no — porque faltan la adopción real, las tareas nuevas y la respuesta de los salarios.",
      "La evidencia realizada que sí existe es temprana y correlacional: los propios autores del estudio de ADP advierten que no es identificación causal limpia. La reinstauración para la IA no está medida. σ está en disputa. φ está informado, no fijado. Cada una de esas piezas es un supuesto rotulado, no un dato cerrado.",
      "Por eso el producto honesto de todo esto no es un pronóstico: es el RANGO y los puentes que faltan. Mostrar dónde se acaba el conocimiento es la mitad del trabajo.",
    ],
    cites: [
      "eloundou-2023-gpts",
      "felten-2021-aioe",
      "webb-2020-ai-labor",
      "brynjolfsson-chandar-chen-2025-canaries",
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
];
