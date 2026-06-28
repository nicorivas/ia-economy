// Ayuda contextual del panel derecho. NO describe la interfaz ("el número grande", "la
// barra") — interpreta el FENÓMENO: qué significa, en términos de trabajo humano, lo que
// estás mirando, y cuando hay un valor en pantalla lo traduce a palabras. Pensada para quien
// decide, no para quien ya conoce la literatura. Registro mesurado, sin precisión falsa.
// Color del kicker: azul = anclado en evidencia, durazno = supuesto que la literatura no fija.

import type { ReactNode } from "react";
import type { Metric, ParamDef, Lens, RecMetric } from "./model";
import { studyById, surname } from "./data";

export type HelpEntry = {
  kicker: string;
  title: string;
  body: string[];
  read?: string;
  tone?: "ev" | "as" | "inf"; // ev=anclado(azul) · as=supuesto(durazno) · inf=informado(verde)
  node?: ReactNode; // visual opcional bajo el texto (p.ej. la sensibilidad bajo la ayuda de la fórmula)
};

const fmt = (n: number, suf = "%") => `${n >= 0 ? "+" : "−"}${Math.abs(n).toFixed(1)}${suf}`;
const pct = (v: number) => `${Math.round(v * 100)}%`;
const mag = (x: number) => {
  const a = Math.abs(x);
  return a < 0.8 ? "casi nulo" : a < 3 ? "moderado" : a < 7 ? "considerable" : "grande";
};
const titleFor = (m: Metric) =>
  m === "empleo"
    ? "¿Sube o baja el empleo?"
    : m === "salarios"
      ? "¿Suben o bajan los salarios?"
      : "¿Cae la participación del trabajo?";

// ── Indicadores: interpreta el VALOR que muestra el KPI bajo el cursor ─────────────────
export function helpKpi(
  metric: Metric,
  horizon: 3 | 5,
  point: number,
  env: { min: number; max: number },
  lens: Lens = "tareas",
): HelpEntry {
  const suf = metric === "participacion" ? " pp" : "%";
  const straddles = env.min < 0 && env.max > 0;
  const range = straddles
    ? `El rango honesto va de ${fmt(env.min, suf)} a ${fmt(env.max, suf)} y cruza el cero: ni el signo está fijo. Lo decide tu apuesta, no la evidencia.`
    : `El rango honesto va de ${fmt(env.min, suf)} a ${fmt(env.max, suf)} — y aun apuntando todos al mismo lado, el tamaño depende de supuestos que nadie ha medido.`;

  // Lente Agregado · CES: el pastel crece; el riesgo vive en la participación, no en el sueldo.
  if (lens === "agregado") {
    const b: string[] = [];
    if (metric === "participacion") {
      b.push(
        point < -0.05
          ? `A ${horizon} años la tajada del trabajo cae ${Math.abs(point).toFixed(1)} pp: con σ por sobre 1, el capital se queda con la ganancia de la IA.`
          : point > 0.05
            ? `A ${horizon} años la tajada del trabajo sube ${point.toFixed(1)} pp: con σ por debajo de 1, el trabajo se vuelve el factor escaso y captura más.`
            : `A ${horizon} años la tajada no se mueve: estás en σ≈1 (Cobb-Douglas), donde el reparto capital-trabajo queda fijo.`,
      );
      b.push(range);
      b.push("En este modelo el riesgo no es el sueldo, es la tajada: el pastel crece, pero puede quedarse casi entero en el capital.");
    } else if (metric === "salarios") {
      b.push(
        `A ${horizon} años los salarios reales suben ${point.toFixed(1)}%: la IA es capital más productivo y eso arrastra el salario. En este modelo el sueldo casi siempre sube — σ solo decide cuánto.`,
      );
      b.push(range);
    } else {
      b.push(
        `A ${horizon} años el empleo se mueve ${fmt(point, "%")}: poco, porque aquí el golpe va al salario y a la tajada, no a la cantidad de puestos. Lo que ves es la respuesta de la oferta laboral.`,
      );
      b.push(range);
    }
    return { kicker: `Lente Agregado · a ${horizon} años`, title: titleFor(metric), body: b };
  }

  // Lente Empírico: no es un modelo, es evidencia realizada extrapolada. Reporta el efecto a la
  // fecha (no por horizonte: 3 y 5 años dan lo mismo). La participación no llega acá (sin datos).
  if (lens === "empirico") {
    const b: string[] = [];
    if (metric === "salarios") {
      b.push(
        point < -0.05
          ? `Los salarios saldrían ${Math.abs(point).toFixed(1)}% más bajos: extrapolando lo medido (Upwork vio −5,2% de ingresos en lo expuesto), escalado por la cobertura. Pero ADP no halla efecto salarial: el dato no está cerrado.`
          : `Salarios casi planos: la evidencia realizada sobre el sueldo es escasa y discrepa entre estudios. Por ahora el golpe se ve más en el empleo que en el precio.`,
      );
    } else {
      b.push(
        point < -0.05
          ? `El empleo saldría ${Math.abs(point).toFixed(1)}% más bajo: el efecto medido en lo más expuesto (Upwork −2%, ADP −6% en jóvenes), llevado a la economía por la cobertura.`
          : point > 0.05
            ? `El empleo saldría ${point.toFixed(1)}% más alto: con cobertura baja, el efecto local se diluye y el agregado queda en terreno positivo — el lado optimista de un dato muy disperso.`
            : `Empleo casi plano: a esta cobertura, el efecto local medido se diluye en el agregado.`,
      );
    }
    b.push(
      `El rango honesto va de ${fmt(env.min, "%")} a ${fmt(env.max, "%")} y cruza el cero: lo ancho viene de la falta de datos, no de un desacuerdo de modelo. La cifra es el efecto realizado a la fecha, no un pronóstico por horizonte.`,
    );
    return { kicker: `Lente Empírico · efecto realizado`, title: titleFor(metric), body: b };
  }

  // Lente Crecimiento: el extremo especulativo. El crecimiento es enorme casi seguro; el signo y la
  // suerte del trabajo los decide el cuello de botella. Rango el más ancho — magnitudes ilustrativas.
  if (lens === "endogeno") {
    const b: string[] = [];
    const straddles = env.min < 0 && env.max > 0;
    if (metric === "participacion") {
      b.push(
        point < -0.05
          ? `La tajada del trabajo cae ${Math.abs(point).toFixed(1)} pp: con el cuello de botella cediendo, la automatización se completa y el capital se lleva el pastel —por más que crezca.`
          : point > 0.05
            ? `La tajada del trabajo sube ${point.toFixed(1)} pp: el cuello de botella aguanta y el trabajo, vuelto factor escaso, captura parte de un pastel que explota.`
            : `La tajada queda en el filo: el cuello de botella decide si el trabajo prospera o colapsa, y aquí está justo en el medio.`,
      );
    } else if (metric === "salarios") {
      b.push(
        point > 0.05
          ? `Los salarios suben ${point.toFixed(1)}%: el trabajo escaso captura la explosión de productividad (Korinek-Suh: 'suben para siempre').`
          : point < -0.05
            ? `Los salarios caen ${Math.abs(point).toFixed(1)}%: si la automatización se completa, ni el crecimiento sostiene el sueldo ('sube y luego colapsa').`
            : `Salarios en el filo: el cuello de botella decide si suben para siempre o colapsan.`,
      );
    } else {
      b.push(
        point > 0.05
          ? `El empleo sube ${point.toFixed(1)}%: quedan tareas esenciales humanas y la economía riquísima las demanda.`
          : point < -0.05
            ? `El empleo cae ${Math.abs(point).toFixed(1)}%: si no queda tarea esencial humana, el crecimiento no salva los puestos.`
            : `Empleo en el filo: depende de si sobrevive un cuello de botella humano.`,
      );
    }
    b.push(
      straddles
        ? `El rango va de ${fmt(env.min, metric === "participacion" ? " pp" : "%")} a ${fmt(env.max, metric === "participacion" ? " pp" : "%")} y cruza el cero — el más ancho de todas las lentes. El crecimiento casi no está en duda; el destino del trabajo, entero. Magnitudes ilustrativas, no pronóstico.`
        : `Magnitudes ilustrativas: esta lente muestra el mecanismo (el cuello fija el signo, el crecimiento la escala), no estima — es la cota especulativa del debate.`,
    );
    return { kicker: `Lente Crecimiento · cota especulativa`, title: titleFor(metric), body: b };
  }

  const body: string[] = [];
  if (metric === "empleo") {
    body.push(
      point < -0.05
        ? `A ${horizon} años habría ${Math.abs(point).toFixed(1)}% menos puestos de los que habría sin IA — un efecto ${mag(point)}. El signo negativo dice que, con tus supuestos, la IA destruye más trabajo del que la economía recrea.`
        : point > 0.05
          ? `A ${horizon} años habría ${point.toFixed(1)}% más puestos que sin IA: con tus supuestos, las tareas nuevas y la mayor demanda crean más trabajo del que la automatización borra.`
          : `A ${horizon} años el empleo total queda casi igual que sin IA. Que el número de puestos no se mueva no quiere decir que no pase nada: el efecto puede estar cayendo en los salarios.`,
    );
    body.push(range);
    body.push(
      "Pocos puestos perdidos puede convivir con un golpe fuerte en los sueldos. El reparto entre una cosa y otra lo fijas con la palanca empleo ↔ salarios.",
    );
  } else if (metric === "salarios") {
    body.push(
      point < -0.05
        ? `A ${horizon} años los salarios reales serían ${Math.abs(point).toFixed(1)}% más bajos que sin IA — un efecto ${mag(point)}. Es el termómetro que importa: el escenario "hay trabajo, pero paga menos" es exactamente este número a la baja.`
        : point > 0.05
          ? `A ${horizon} años los salarios reales serían ${point.toFixed(1)}% más altos que sin IA: la IA sube el precio del trabajo en vez de abaratarlo, porque complementa más de lo que reemplaza.`
          : `A ${horizon} años los salarios quedan casi planos frente a no tener IA.`,
    );
    body.push(range);
    body.push(
      "Salario y empleo se reparten el mismo golpe: si cargaste el ajuste hacia los salarios, casi todo cae aquí y el número de puestos aguanta.",
    );
  } else {
    body.push(
      point < -0.05
        ? `A ${horizon} años la tajada del ingreso que va al trabajo cae ${Math.abs(point).toFixed(1)} pp. Aunque haya empleo y sueldos, cada vez más del valor se queda en el capital — los dueños de los modelos y las máquinas.`
        : point > 0.05
          ? `A ${horizon} años el trabajo gana ${point.toFixed(1)} pp de tajada del ingreso: las tareas nuevas le devuelven más de lo que el capital le quita.`
          : `A ${horizon} años la tajada del trabajo en el ingreso no se mueve frente a no tener IA.`,
    );
    body.push(range);
    body.push(
      'Es la pregunta de "quién se queda con la renta": esta tajada puede caer aunque el empleo y los salarios aguanten.',
    );
  }
  return { kicker: `Tu escenario · a ${horizon} años`, title: titleFor(metric), body };
}

// ── Indicador (concepto, sin valor): al pasar por la pestaña de la métrica ─────────────
export function helpMetric(metric: Metric): HelpEntry {
  if (metric === "empleo")
    return {
      kicker: "Indicador",
      title: titleFor(metric),
      body: [
        "Mide la cantidad de puestos: cuántos hay, no cuánto pagan. Es lo que todos preguntan primero — y es la mitad de la historia.",
        "Que la IA automatice tareas no implica que sobren personas. Si la economía crece o aparecen tareas nuevas, el empleo puede aguantar aunque cada trabajo cambie por dentro.",
      ],
      read: "Pasa el cursor sobre el número para ver qué significa tu escenario.",
    };
  if (metric === "salarios")
    return {
      kicker: "Indicador",
      title: titleFor(metric),
      body: [
        "Mide el precio del trabajo, no la cantidad. Es el termómetro que importa: el escenario a temer no es «no hay trabajo», sino «hay trabajo pero no paga».",
        "Cuando una capacidad se vuelve abundante, su precio cae. Si la IA abarata lo que antes era escaso y bien pagado, el golpe aparece aquí antes que en el número de puestos.",
      ],
      read: "Pasa el cursor sobre el número para ver qué significa tu escenario.",
    };
  return {
    kicker: "Indicador",
    title: titleFor(metric),
    body: [
      "Mide qué tajada del ingreso total se lleva el trabajo frente al capital — los dueños de las máquinas y los modelos. Es la pregunta de «quién se queda con la renta».",
      "Aunque el empleo y los salarios aguanten, la tajada del trabajo puede encoger si cada vez más tareas las hace el capital. Es la señal de largo plazo del reparto.",
    ],
    read: "Pasa el cursor sobre el número para ver qué significa tu escenario.",
  };
}

// ── Palancas: interpreta el VALOR actual del slider, en términos del fenómeno ──────────
export function helpParam(p: ParamDef, value: number): HelpEntry {
  const kicker = p.informed
    ? "Informado · la evidencia lo acota"
    : p.anchored
      ? "Palanca · anclada en evidencia"
      : "Supuesto · la literatura no lo fija";
  const tone: "ev" | "as" | "inf" = p.informed ? "inf" : p.anchored ? "ev" : "as";
  const frac = (value - p.min) / (p.max - p.min || 1);
  const posWord = frac < 0.34 ? "el extremo bajo" : frac > 0.66 ? "el extremo alto" : "la zona media";
  let near = "";
  if (p.anchors.length) {
    const a = p.anchors.reduce((b, x) => (Math.abs(x.at - value) < Math.abs(b.at - value) ? x : b));
    near = surname(studyById.get(a.studyId)?.authors ?? "");
  }
  const body: string[] = [];
  switch (p.key) {
    case "a":
      body.push(
        `Asumes que ~${pct(value)} del trabajo es técnicamente automatizable — ${posWord} de lo que estima la literatura${near ? `, cerca de ${near}` : ""}.`,
      );
      body.push(
        "Es capacidad técnica, no empleos perdidos: que una tarea se pueda automatizar no la vuelve un puesto eliminado. Falta todo lo demás — adopción, tareas nuevas, salarios.",
      );
      break;
    case "d":
      body.push(
        `Asumes que las empresas llegan a usar de verdad ~${pct(value)} de lo que la IA podría hacer — ${posWord}${near ? `, cerca de ${near}` : ""}. Hoy es más bajo.`,
      );
      body.push(
        "Es el cuello de botella entre «se puede» y «pasa»: el potencial técnico no mueve empleo hasta que se adopta, y la adopción va lenta.",
      );
      break;
    case "s":
      body.push(
        `Asumes que ${pct(value)} de los usos reemplazan a la persona; el resto la asisten. Más sustitución presiona el trabajo a la baja; más asistencia puede subir su demanda.`,
      );
      body.push(
        `Los datos de uso${near ? ` (cerca de ${near})` : ""} miden esto en conversaciones, no en puestos: dan dirección, no una cuenta de empleos.`,
      );
      break;
    case "r":
      body.push(
        `Apuestas a que la IA recrea trabajo a ${value.toFixed(2)}× el ritmo histórico. Las olas pasadas recrearon cerca de 1× — la mitad del empleo nuevo vino de tareas que antes no existían.`,
      );
      body.push(
        "Sobre 1× crea más trabajo del que destruye; bajo 1×, no alcanza a compensar. Nadie lo ha medido para la IA: es la apuesta central del optimismo.",
      );
      break;
    case "elast":
      body.push(
        value > 1.05
          ? `Asumes demanda elástica (${value.toFixed(2)}): cuando la IA abarata el bien, se compra mucho más (el software, el paradoja de Jevons), y el empleo de las tareas no automatizadas SUBE.`
          : value < 0.95
            ? `Asumes demanda saciable (${value.toFixed(2)}): por más barato que salga, no se quiere mucho más (la comida, el petróleo, la insulina), y el trabajo liberado NO se reabsorbe — el empleo cae.`
            : `Asumes elasticidad ≈1: la productividad no crea ni destruye empleo neto, solo lo reacomoda.`,
      );
      body.push(
        "Es la bisagra del modelo de tareas (Imas): que automatizar suba o baje el empleo depende de esto. Y nadie ha medido la elasticidad agregada — Imas pide «un proyecto Manhattan de datos».",
      );
      break;
    case "phi":
      body.push(
        `Cuando la IA presiona al trabajo, el golpe puede caer de dos formas: que haya menos puestos, o que los puestos sigan pero paguen menos. Ahora lo pusiste en ${pct(1 - value)} a puestos y ${pct(value)} a sueldos${value <= 0.32 ? ", en línea con la evidencia" : value >= 0.5 ? ", por sobre lo que sugiere la evidencia" : ""}.`,
      );
      body.push(
        "La evidencia lo ACOTA sin fijarlo: la rigidez salarial a la baja desvía el ajuste hacia el empleo —los salarios se resisten a caer (Dickens: ~28% de los recortes impedidos; Babecký: recortes de base rarísimos; Bewley: las firmas despiden antes que recortar)—, así que φ tiende bajo (~0,20–0,45, centro ≈0,30).",
      );
      body.push(
        "Por qué «informado» y no «anclado»: esa evidencia es de recesiones, no del shock estructural de la IA, y φ sube con el horizonte (en el largo plazo el salario real sí se ajusta). Da la dirección y el rango, no el punto: ese lo eliges tú.",
      );
      break;
    case "sigma":
      body.push(
        value > 1.05
          ? `Asumes σ=${value.toFixed(2)}: capital y trabajo son sustitutos. Al abaratarse el capital (IA), la economía lo prefiere y la tajada del trabajo cae.`
          : value < 0.95
            ? `Asumes σ=${value.toFixed(2)}: capital y trabajo se complementan. El trabajo se vuelve el factor escaso y su tajada sube, aunque entre más IA.`
            : `Asumes σ≈1 (Cobb-Douglas): la tajada del trabajo queda fija, pase lo que pase con la productividad.`,
      );
      body.push(
        "Es el número que decide todo en este modelo — y la literatura no se pone de acuerdo en si está sobre o bajo 1. Ahí vive el desacuerdo de fondo.",
      );
      break;
    case "g":
      body.push(
        `Asumes que la IA sube el capital efectivo de la economía ~${pct(value)} al horizonte: el tamaño del empuje, por exposición y adopción.`,
      );
      body.push("Suba lo que suba, en este modelo el pastel crece; la pregunta es quién se lo lleva.");
      break;
    case "eps":
      body.push(
        `Asumes que, cuando sube el salario, el empleo responde con elasticidad ${value.toFixed(2)}: más alto, más gente entra a trabajar cuando pagan más.`,
      );
      body.push("Solo reparte el alza de salarios hacia más puestos; no cambia la tajada del trabajo.");
      break;
    case "bEmp":
      body.push(
        `Tomas como efecto de empleo en lo más expuesto ${fmt(value)}${near ? `, cerca de ${near}` : ""}. Es lo MEDIDO, no lo modelado: Upwork halló −2% de trabajos, ADP −6% en jóvenes top-expuestos, y las firmas casi nada.`,
      );
      body.push(
        "Es el efecto en la rebanada más expuesta, no en la economía: para llevarlo al total hay que multiplicarlo por la cobertura. Los estudios son tempranos y miran grupos chicos.",
      );
      break;
    case "bSal":
      body.push(
        `Tomas como efecto de salarios en lo más expuesto ${fmt(value)}${near ? `, cerca de ${near}` : ""}. Acá los estudios DISCREPAN: Upwork vio −5,2% de ingresos de freelancers; ADP no halla efecto en el salario de planilla.`,
      );
      body.push(
        "Miden cosas distintas: ingresos de plataforma vs. sueldo base. Por ahora la señal es que el golpe cae más en el empleo que en el sueldo — pero es temprano.",
      );
      break;
    case "cob":
      body.push(
        `Asumes que ${pct(value)} de la economía se parece a la rebanada que midieron los estudios (freelancers, jóvenes en ocupaciones top-expuestas). Es el salto de extrapolación.`,
      );
      body.push(
        "Nadie ha medido esto: es el supuesto que convierte un efecto local en un número agregado. Bajo, el efecto se diluye; alto, asumes que casi toda la economía vivirá lo que vivió esa rebanada.",
      );
      break;
    case "gr":
      body.push(
        `Asumes que la IA acelera el crecimiento a ${value.toFixed(1)}% al año${near ? `, cerca de ${near}` : ""}. El rango es enorme: Acemoglu lo ve en ~1% (la IA toca pocas tareas), Korinek-Suh hasta 18% (explosivo, tipo AGI).`,
      );
      body.push(
        "En esta lente el pastel crece casi seguro — eso casi no está en duda. La pregunta no es cuánto crece, sino quién se queda con la ganancia: eso lo decide el cuello de botella, no el crecimiento.",
      );
      break;
    case "cuello":
      body.push(
        value > 0.55
          ? `Asumes weak links persistentes (${pct(value)}): siempre queda alguna tarea esencial que la IA no puede hacer. El trabajo se vuelve el factor escaso y captura el retorno — pero el crecimiento queda acotado (los weak links lo domestican).`
          : value < 0.45
            ? `Asumes que los weak links ceden (${pct(value)}): se automatiza casi todo, no queda tarea esencial humana. El crecimiento se dispara, pero los salarios y la tajada del trabajo colapsan.`
            : `Estás en el filo (${pct(value)}): justo entre que el trabajo prospere como factor escaso o que la automatización se complete y colapse. La lente no se inclina — nadie sabe de qué lado caemos.`,
      );
      body.push(
        "Son los «weak links» de Chad Jones: la cadena vale por su eslabón más débil. Hacen dos cosas — acotan el crecimiento y capturan el retorno. Es la apuesta central de la lente, y la menos anclada (nadie la ha medido).",
      );
      break;
  }
  return { kicker, title: p.label, body, tone };
}

// ── Entradas conceptuales (sin valor): el marco del problema ───────────────────────────
export const HELP_HOME: HelpEntry = {
  kicker: "Cómo leer esto",
  title: "Un mapa del debate, no un pronóstico",
  body: [
    "Este observatorio responde una pregunta: cuando la IA se vuelve abundante, ¿qué le pasa al trabajo humano? La respuesta honesta no es un número, es un rango — porque depende de cosas que nadie ha medido todavía.",
    "Arriba eliges la pregunta. Al centro armas un escenario moviendo las palancas. Abajo está la evidencia que lo sostiene — los estudios, las hipótesis y los puentes que faltan.",
  ],
  read: "Pasa el cursor sobre cualquier cosa —un indicador, una palanca, una pregunta— y aquí te explico qué significa.",
};

export const HELP_FRAME: HelpEntry = {
  kicker: "Lo esencial",
  title: "Por qué un rango y no un número",
  body: [
    "Hay un hueco real: nadie ha construido una fórmula validada que lleve de «la IA puede hacer esta tarea» a «se pierden estos empleos». Falta saber cuánto se adopta, cuántas tareas nuevas aparecen y cómo responden los salarios.",
    "Este motor no rellena ese hueco con una cifra inventada: te deja mover los supuestos y ver el rango que resulta. El rango ancho no es una falla — es la respuesta honesta.",
  ],
  tone: "ev",
};

export const HELP_FORMULA: HelpEntry = {
  kicker: "El motor, a la vista",
  title: "De las palancas al resultado",
  body: [
    "Esta es la cuenta entera, sin caja negra. Primero estima cuánta demanda de trabajo se desplaza neto: lo automatizable, por lo que de verdad se adopta, por lo que sustituye en vez de asistir, descontando las tareas nuevas que se recrean.",
    "Después reparte ese golpe entre cantidad (empleo) y precio (salarios) con la palanca φ, y le suma el empuje de la productividad. Cada término lleva el color de su palanca: azul si está anclado en evidencia, durazno si es un supuesto que nadie ha medido.",
  ],
  read: "Mueve cualquier palanca y mira cambiar el número de la derecha: es la misma cuenta que ves arriba en el indicador.",
};

export const HELP_LENS: HelpEntry = {
  kicker: "La lente",
  title: "Con qué modelo respondes",
  body: [
    "No hay una sola forma de modelar qué le pasa al trabajo: hay familias de modelos, y cada una mira por un primitivo distinto. La lente elige el motor con que se arma el veredicto — y el signo puede cambiar según cuál uses.",
    "Que la conclusión dependa del modelo, y no solo de los datos, es parte de la respuesta honesta. Pasa el cursor por cada lente para ver qué hace y en qué se apoya.",
  ],
  read: "Las lentes en gris aún no están construidas; hoy viven «Tareas» y «Agregado·CES».",
};

// Una ayuda por lente: qué mira, qué decide su resultado, y en qué literatura se apoya.
export const HELP_LENS_DETAIL: Record<Lens, HelpEntry> = {
  tareas: {
    kicker: "Lente · Tareas",
    title: "Desplazamiento menos reinstauración",
    body: [
      "Mira la economía como un conjunto de tareas. La IA automatiza algunas (desplazamiento) y, con los años, hace aparecer otras nuevas que recaen en humanos (reinstauración). El empleo neto es esa resta, más el empuje de la productividad.",
      "Es el marco de frontera para la automatización porque obliga a poner sobre la mesa el supuesto que casi todos esconden: cuántas tareas nuevas aparecen. Si la reinstauración no alcanza, el trabajo pierde aunque la economía crezca.",
    ],
    read: "Activa. Acemoglu & Restrepo: «The Race between Man and Machine» (2018), «Automation and New Tasks» (2019), «Tasks, Automation and US Wage Inequality» (2022).",
  },
  agregado: {
    kicker: "Lente · Agregado · CES",
    title: "La economía como función de producción",
    body: [
      "No mira tareas sino dos factores —capital y trabajo— que se combinan para producir. La IA es capital más productivo: el pastel crece y el salario casi siempre sube. La pelea es por la tajada.",
      "La decide σ, la elasticidad de sustitución capital-trabajo: sobre 1 (sustitutos) la participación del trabajo cae; bajo 1 (complementos) sube; en 1 (Cobb-Douglas) queda fija. Aquí no hay φ — el reparto no se elige, lo fija σ.",
    ],
    read: "Activa. Aghion, Jones & Jones (2019); Korinek & Stiglitz (2019). σ: Karabarbounis-Neiman (2014), Oberfield-Raval (2021).",
  },
  empirico: {
    kicker: "Lente · Empírico",
    title: "Extrapolar lo que ya se ha medido",
    body: [
      "Sin imponer estructura: toma el efecto realizado sobre el empleo y los ingresos que ya midieron los estudios en la rebanada más expuesta, y lo escala a la economía con una cobertura. Es la lente más pegada a los datos y la más honesta sobre lo poco que se sabe.",
      "Su límite es el puente ausente: la evidencia es temprana, dispersa y de grupos chicos. El rango sale ancho por falta de datos, no por desacuerdo de modelo. La participación no la midió nadie: la deja en blanco.",
    ],
    read: "Activa. Hui-Reshef-Zhou (Upwork, −2% trabajos); Brynjolfsson et al. «Canaries in the Coal Mine?» (ADP, 2025, −16% jóvenes); Census BTOS (reducciones en 2% de firmas).",
  },
  endogeno: {
    kicker: "Lente · Crecimiento",
    title: "Weak links: lo que la IA no puede hacer",
    body: [
      "La producción es una cadena de tareas complementarias (Chad Jones): vale lo que su eslabón más débil. Automatizar las tareas fáciles no dispara el crecimiento, porque el output queda acotado por las difíciles que aún dependen de humanos — los «weak links».",
      "Esos weak links hacen dos cosas: DOMESTICAN el crecimiento (para acelerarlo hay que automatizarlos) y, como son la fuente de la escasez, CAPTURAN el retorno. Si sobreviven, el trabajo prospera pero el pastel queda acotado; si se automatizan todos, el crecimiento explota y la renta del trabajo colapsa. Es la lente más especulativa: su rango es el más ancho.",
    ],
    read: "Activa. Jones, «A.I. and Our Economic Future» (2025) y Jones & Tonetti, «How Weak Links Tame the Growth Explosion» (2026); Aghion-Jones-Jones (2019); Korinek-Suh / Korinek-Trammell (2024).",
  },
};

// ── Comparar lentes: el modo que corre un escenario por varios modelos a la vez ──────────
export const HELP_COMPARE: HelpEntry = {
  kicker: "Comparar lentes",
  title: "La misma pregunta, por varios modelos",
  body: [
    "Corres un mismo escenario por cada lente a la vez. La perilla de arriba fija cuánta IA llega a usarse de verdad; cada modelo la lee a su manera y entrega su veredicto en empleo, salarios y participación.",
    "El punto es ver dónde los marcos coinciden y dónde no. Cuando el signo cambia de una lente a otra, la conclusión depende del modelo tanto como del dato — eso es lo que ningún número solo puede mostrar.",
  ],
  read: "σ, reinstauración, φ… quedan en el centro de evidencia de cada modelo. Que un mismo empuje signifique lo mismo en los dos es, en sí, un supuesto.",
  tone: "ev",
};

export const HELP_PEN: HelpEntry = {
  kicker: "Penetración de IA · anclada en evidencia",
  title: "Cuánta IA aterriza de verdad",
  body: [
    "Exposición por adopción: qué fracción del trabajo la IA puede tocar, por cuánto de eso se usa de verdad. Es lo único que se mantiene fijo al comparar lentes — el empuje común que cada modelo traduce a su manera.",
    "Ambos modelos ya consumen esta misma cantidad: en Tareas entra como automatizable × adopción; en el modelo agregado, como el empuje al capital. Por eso se puede alimentar a los dos con el mismo número.",
  ],
  tone: "ev",
};

export const HELP_FORMULA_CES: HelpEntry = {
  kicker: "El motor, a la vista · Agregado",
  title: "La economía como una función de producción",
  body: [
    "Aquí la IA es capital más productivo: empuja la producción (g). El pastel crece — en este modelo el salario casi siempre sube. La pelea es por la tajada.",
    "Lo decide σ, la elasticidad de sustitución entre capital y trabajo: si σ está sobre 1 son sustitutos y la tajada del trabajo cae; si está bajo 1 se complementan y sube; en σ=1 queda fija. No hay palanca φ — el reparto ya no lo eliges, lo fija σ.",
  ],
  read: "Mueve σ y mira la participación cambiar de signo: ese es el corazón del modelo agregado.",
};

export const HELP_FORMULA_EMP: HelpEntry = {
  kicker: "El motor, a la vista · Empírico",
  title: "Lo medido, escalado — sin modelo de fondo",
  body: [
    "Acá no hay teoría: se toma el efecto que los estudios ya midieron en la rebanada más expuesta (Upwork, ADP) y se multiplica por la cobertura — cuánto de la economía se le parece. Eso es todo; la simpleza es la honestidad.",
    "Empleo y salarios discrepan entre estudios, y la participación no la midió nadie: la lente lo dice en vez de inventarla. El rango ancho viene de lo poco y disperso que se ha medido, no de un desacuerdo de modelo.",
  ],
  read: "Mueve la cobertura y mira cómo un efecto local se diluye (o no) en el agregado: ahí está el salto de extrapolación, a la vista.",
  tone: "ev",
};

// ── Capas (recuadros aditivos) ──────────────────────────────────────────────────────────
export const HELP_CAPAS: HelpEntry = {
  kicker: "Las capas",
  title: "Más respuesta, no otro modelo",
  body: [
    "Una capa no cambia el agregado: lo reparte o lo elabora. Toma el resultado de la lente activa y le suma una dimensión —quién, cuándo, dónde—. Se prenden y se apagan, y se pueden acumular: no son una elección de modelo como las lentes.",
    "«Distribución» responde 'hay trabajo, ¿pero para quién?': reparte el cambio de empleo entre grupos de habilidad según cuánto los expone la IA.",
  ],
  read: "Las capas en gris aún no están construidas; hoy vive «Distribución».",
};

export const HELP_DISTRIBUCION: HelpEntry = {
  kicker: "Capa · Distribución",
  title: "Hay trabajo, ¿pero para quién?",
  body: [
    "Reparte el cambio de empleo de la lente activa entre terciles de sueldo, según cuánto expone la IA a cada uno. El promedio pesa lo mismo que el agregado: la capa no cambia el total, solo muestra cómo se reparte.",
    "El gradiente de exposición es DATO REAL de EE.UU.: cruzamos el empleo y el sueldo por ocupación (BLS OEWS) con la exposición por ocupación (Eloundou), 750 ocupaciones y ~130M de trabajadores. La exposición sube monótona con el sueldo (rel 0,62 / 0,98 / 1,38), al revés de la automatización rutinaria, que vació el medio. Es la primera ola que toca de lleno el trabajo cognitivo.",
    "Ojo: exposición no es daño neto — una ocupación expuesta puede ser asistida en vez de reemplazada. Estos datos dicen DÓNDE se concentra la exposición, no cuánto empleo se pierde.",
  ],
  read: "Datos reales: BLS OEWS (nacional, May 2021) × exposición β de Eloundou et al. (2023). La rutina (Autor & Dorn 2013) va estilizada, como contraste histórico.",
  tone: "ev",
};

export const HELP_FORMULA_CREC: HelpEntry = {
  kicker: "El motor, a la vista · Crecimiento",
  title: "Weak links: acotan el pastel y deciden quién captura",
  body: [
    "La producción vale lo que su eslabón más débil (Jones). Los weak links —las tareas que la IA no puede hacer— hacen dos cosas a la vez: DOMESTICAN el crecimiento (a más cuello, el pastel efectivo se achica; para acelerar hay que automatizarlos) y, como son la fuente de la escasez, CAPTURAN el retorno.",
    "Por eso hay una tensión: si el cuello sobrevive, el trabajo prospera pero el pastel queda acotado; si se automatiza todo, el crecimiento explota pero la renta del trabajo colapsa. El cuello fija el signo y frena la escala. Magnitudes ilustrativas — es la cota especulativa del debate.",
  ],
  read: "Mueve los weak links alrededor de 50% y mira el signo darse vuelta — y el pastel achicarse cuando suben. Jones (2025); Jones & Tonetti (2026).",
  tone: "as",
};

export const HELP_TREE: HelpEntry = {
  kicker: "La pregunta",
  title: "Qué queda escaso, y quién se lleva la renta",
  body: [
    "Todo cuelga de una pregunta: cuando la inteligencia se vuelve abundante, ¿qué se vuelve escaso — y quién se queda con la renta de esa escasez? El trabajo es una rama, no toda la pregunta.",
    "«¿Sigue siendo escaso el trabajo humano?» no se responde con un sí o un no: se descompone en tres medidas que hay que mirar juntas porque pueden contradecirse — empleo, salarios y participación.",
  ],
  read: "Las ramas en gris aún no están construidas; hoy el mapa vive en «El trabajo».",
};

export const HELP_SCOPE: HelpEntry = {
  kicker: "Región",
  title: "¿De dónde son los supuestos?",
  body: [
    "Cambia la base de partida según la región. Estados Unidos y el promedio global tienen datos propios; Europa, América Latina y Asia todavía no — ahí se parte de los supuestos globales.",
    "La exposición a la IA y la velocidad de adopción difieren mucho por región, así que el punto de partida importa.",
  ],
  read: "«Sin datos propios» = usa la base global como aproximación.",
};

// ── RAMA RECURSOS FÍSICOS (el motor de los átomos) ──────────────────────────────────────
// Mismo lenguaje de color (azul=anclado), pero otra pregunta: dónde se muda la escasez cuando la
// inteligencia se vuelve abundante. La tensión honesta (es de horizonte) va tejida en cada ayuda.

const recTitleFor = (m: RecMetric) =>
  m === "precio"
    ? "¿Sube el precio del factor físico?"
    : m === "cantidad"
      ? "¿Se despliega o se queda corta?"
      : "¿Crece la tajada que capturan los átomos?";

// Indicador (concepto): al pasar por la pestaña de la métrica de la rama.
export function helpRecMetric(m: RecMetric): HelpEntry {
  if (m === "precio")
    return {
      kicker: "Indicador · recursos físicos",
      title: recTitleFor(m),
      body: [
        "Mide el precio del factor físico —energía, cómputo—. Es el termómetro de la escasez: si la inteligencia se vuelve abundante y el cuello se muda a los átomos, el aviso aparece aquí, como un alza del precio de lo que ahora aprieta.",
        "Que la inteligencia sea casi gratis no basta: hace falta energía y silicio para usarla. Si esos no se pueden expandir rápido, su precio sube aunque todo lo demás se abarate.",
      ],
      read: "Pasa el cursor sobre el número para ver qué significa tu escenario.",
    };
  if (m === "cantidad")
    return {
      kicker: "Indicador · recursos físicos",
      title: recTitleFor(m),
      body: [
        "Mide cuánta energía y cómputo se despliega de verdad. Con oferta inelástica se queda corta aunque la demanda explote — y ese contraste, precio que sube y cantidad que no, ES la escasez.",
        "Si la oferta fuera elástica, la cantidad se expandiría y la abundancia se trasladaría: el precio se aplanaría y nadie heredaría el cuello.",
      ],
      read: "Pasa el cursor sobre el número para ver qué significa tu escenario.",
    };
  return {
    kicker: "Indicador · recursos físicos",
    title: recTitleFor(m),
    body: [
      "Mide qué fracción de la renta se llevan los dueños de los recursos físicos. Si la inteligencia abunda y el factor físico es su complemento, esa tajada sube: los átomos heredan el cuello.",
      "Es la pregunta de «quién se queda con la renta», del otro lado: no el capital de los modelos, sino quien controla la energía firme, la red y el silicio.",
    ],
    read: "Pasa el cursor sobre el número para ver qué significa tu escenario.",
  };
}

// Indicador (valor): interpreta el número del KPI de la rama bajo el cursor.
export function helpRecKpi(
  metric: RecMetric,
  horizon: 3 | 5,
  point: number,
  env: { min: number; max: number },
): HelpEntry {
  const straddles = env.min < 0 && env.max > 0;
  const range = straddles
    ? `El rango honesto va de ${fmt(env.min)} a ${fmt(env.max)} y cruza el cero: ni el signo está fijo. Lo decide tu apuesta sobre σ y η, no la evidencia.`
    : `El rango honesto va de ${fmt(env.min)} a ${fmt(env.max)} — el tamaño depende de cuán complementarios e inelásticos supongas los átomos.`;
  const b: string[] = [];
  if (metric === "precio") {
    b.push(
      point > 0.05
        ? `A ${horizon} años el precio de este habilitante sube ${point.toFixed(1)}%: la demanda de la IA lo empuja y, con la oferta que hay, el alza se va al precio. Es la señal de que el cuello se mudó hacia él.`
        : `A ${horizon} años el precio del factor físico casi no se mueve: a esta penetración y con esta oferta, el empuje no alcanza a tensar el cuello.`,
    );
    b.push(range);
    b.push("Mira la cantidad al lado: si el precio sube y la cantidad no, esa es la escasez. Si ambos crecen parejo, la oferta está absorbiendo el empuje.");
  } else if (metric === "cantidad") {
    b.push(
      `A ${horizon} años la cantidad física desplegada crece ${fmt(point)}. Lo que importa es compararla con el precio: con oferta inelástica el precio sube mucho más que la cantidad —el cuello aprieta—; con oferta elástica la cantidad se expande y el precio se aplana —la abundancia se traslada—.`,
    );
    b.push(range);
  } else {
    b.push(
      point > 0.05
        ? `A ${horizon} años la tajada de la renta que va a los átomos sube ${point.toFixed(1)}%: con inteligencia y físico complementos (σ<1), el factor físico se vuelve el escaso y captura más. Es el teorema de Trammell-Korinek —la tajada del factor fijo tiende a uno—, en versión local.`
        : point < -0.05
          ? `A ${horizon} años la tajada física cae ${Math.abs(point).toFixed(1)}%: estás en σ>1, donde la inteligencia sustituye al factor físico y se queda con la ganancia, en vez de cederla a los átomos.`
          : `A ${horizon} años la tajada física no se mueve: estás en σ≈1, el filo donde el reparto entre inteligencia y átomos queda fijo.`,
    );
    b.push(range);
    b.push("Es «¿quién hereda el cuello?»: esta tajada puede subir aunque la energía como commodity se abarate, porque lo que captura es la entrega —red, energía firme, silicio—, no el recurso.");
  }
  return { kicker: `Tu escenario · a ${horizon} años`, title: recTitleFor(metric), body: b };
}

// Palancas de la rama (g/σ/η). OJO: comparten clave con las del CES pero significan otra cosa —
// por eso tienen su propia función de ayuda, no la de helpParam.
// helpRecParam: una interpretación del valor (el concepto σ/η es el mismo entre habilitantes) +
// la evidencia PROPIA del parámetro (de su ParamDef), así la ayuda es correcta por habilitante sola.
export function helpRecParam(p: ParamDef, value: number): HelpEntry {
  const kicker = p.informed
    ? "Informado · la evidencia lo acota"
    : p.anchored
      ? "Palanca · anclada en evidencia"
      : "Supuesto · la literatura no lo fija";
  const tone: "ev" | "as" | "inf" = p.informed ? "inf" : p.anchored ? "ev" : "as";
  const body: string[] = [];
  if (p.key === "g") {
    body.push(
      `Asumes que la IA aterriza ~${pct(value)} (exposición × adopción): el empuje que vuelve abundante la inteligencia, compartido por los tres habilitantes.`,
    );
  } else if (p.key === "sigma") {
    body.push(
      value > 1.05
        ? `Asumes σ=${value.toFixed(2)}: sustitutos. La inteligencia abundante reemplaza a este habilitante y su tajada de la renta cae.`
        : value < 0.95
          ? `Asumes σ=${value.toFixed(2)}: complementos. La inteligencia abundante lo vuelve MÁS valioso y su tajada sube.`
          : `Asumes σ≈1: la tajada de este habilitante queda fija.`,
    );
  } else if (p.key === "eta") {
    body.push(
      value < 0.5
        ? `Asumes oferta inelástica (η=${value.toFixed(2)}): no se puede expandir rápido. El alza de demanda se va al PRECIO y sus dueños capturan la renta.`
        : value > 1.5
          ? `Asumes oferta elástica (η=${value.toFixed(2)}): la cantidad se expande y la abundancia se traslada — el precio se aplana y nadie hereda el cuello.`
          : `Asumes oferta semi-elástica (η=${value.toFixed(2)}): el alza se reparte entre más precio y más cantidad.`,
    );
  }
  body.push(p.evidence.replace(/^(INFORMADO|SUPUESTO) — /, ""));
  return { kicker, title: p.label, body, tone };
}

export const HELP_REC_FORMULA: HelpEntry = {
  kicker: "El motor, a la vista · Recursos físicos",
  title: "Inteligencia abundante, átomos escasos",
  body: [
    "La economía combina dos factores: inteligencia —que la IA abarata— y recursos físicos —energía, cómputo—. El empuje hace crecer el pastel; lo que decide quién hereda el cuello son dos números. σ: si son complementos (σ<1), la inteligencia abundante vuelve más valioso el factor físico. Y η: la elasticidad de su oferta — si es inelástica, el alza se va al precio y sus dueños capturan.",
    "Por eso el precio sube, la cantidad se queda corta y la tajada se mueve a los átomos: las tres caras de la misma cuenta CES. Es el teorema de Trammell-Korinek (la tajada del factor fijo tiende a uno si son complementos) hecho palanca.",
  ],
  read: "Mueve η entre inelástica y elástica, o σ alrededor de 1, y mira darse vuelta la historia: corto plazo (inelástico + complementos) → los átomos capturan; largo plazo → la abundancia se traslada.",
  tone: "ev",
};

export const HELP_REC_BRANCH: HelpEntry = {
  kicker: "La otra escasez",
  title: "¿Se muda el cuello del trabajo a los átomos?",
  body: [
    "Si la inteligencia se vuelve abundante, la escasez no desaparece: se muda. Esta rama pregunta si el nuevo cuello son los recursos físicos —energía, cómputo, tierra— y quién captura su renta. Es la otra mitad de «¿qué queda escaso?», la que el trabajo no responde.",
    "No son un solo factor: elige el habilitante arriba. Sus historias se contradicen — la energía abarata su generación pero su ENTREGA escasea; el cómputo abarata el FLOP pero su EMPAQUETADO escasea; la tierra es fija. Cada uno tiene su propia evidencia y calibración.",
    "La tensión es de horizonte. En el corto plazo la oferta física es inelástica y complementaria a la inteligencia, así que los átomos capturan; en el largo plazo la energía se abarata (solar −10%/año) y la sustitución crece, y el cuello se relaja. Mueve las palancas y mira de qué lado caes.",
  ],
  read: "Pasa el cursor por un habilitante, un indicador o una palanca. La evidencia está abajo — incluida la que tensiona la tesis (Way-Farmer).",
};

export const HELP_REALLOC: HelpEntry = {
  kicker: "Reasignación de la renta",
  title: "La tesis del árbol entero, en una imagen",
  body: [
    "Cuando la inteligencia se vuelve abundante, la renta no se evapora: se reasigna. El trabajo cede tajada; el capital (los dueños de la IA) y los tres habilitantes físicos —energía, cómputo, tierra— la ganan. El cuello se muda de las personas a las máquinas y los átomos.",
    "Anti-aire: no es un balance contable que cierra. El trabajo y el capital sí se reparten un mismo total (suman cero, modelo de tareas); las barras de energía/cómputo/tierra son presión ADICIONAL, cada una de un modelo aparte, a su centro de evidencia. Léelo como la DIRECCIÓN del movimiento, no como un reparto único.",
  ],
  read: "Escenario central (defaults globales, 5 años). En el Explorador puedes mover cada pieza.",
};

export const HELP_EVIDMAP: HelpEntry = {
  kicker: "El mapa de la evidencia",
  title: "Dónde el debate está contestado",
  body: [
    "Por cada hipótesis del mapa, la mezcla de relaciones que le llegan desde los estudios: verde confirma, azul informa, durazno tensiona, rojo refuta. Las que combinan verde con durazno o rojo son las contestadas — ahí la literatura no se pone de acuerdo y la respuesta honesta es un rango, no un número.",
    "Es la forma legible de la matriz hipótesis×estudio: con 80 estudios, una celda por cada par sería casi toda vacía. Esta vista comprime esa matriz a lo que importa — el balance de fuerzas sobre cada afirmación.",
  ],
  read: "Ordenadas por contestación: las más disputadas, arriba. Solo las hipótesis con al menos 3 estudios.",
  tone: "ev",
};

export const HELP_PHASEMAP: HelpEntry = {
  kicker: "Mapa de fase",
  title: "La respuesta es una región, no un punto",
  body: [
    "Las dos perillas juntas deciden quién captura la renta. El mapa pinta el Δ tajada para cada combinación de σ (sustitución, eje horizontal) y η (elasticidad de oferta, vertical): teal = los átomos capturan, durazno = la inteligencia retiene. La línea σ=1 es la frontera donde no cambia nada.",
    "Lo que enseña: tu conclusión no es un valor sino una posición en un mapa. La esquina inferior-izquierda (complementos + oferta inelástica) es el corto plazo donde el cuello se muda a los átomos; moverse hacia arriba-derecha (sustitución + oferta elástica) es la relajación de largo plazo. Las marcas en los ejes son dónde la evidencia fija cada perilla.",
  ],
  read: "El punto lavanda es tu escenario; muévelo con los sliders de σ y η. g solo escala la magnitud, no cambia la forma.",
  tone: "ev",
};

export const HELP_DIVERGE: HelpEntry = {
  kicker: "Comparar habilitantes",
  title: "El mismo empuje, tres factores distintos",
  body: [
    "El selector muestra un habilitante a la vez; esto los pone lado a lado al mismo empuje de IA, cada uno en su centro de evidencia. La diferencia entre ellos es el punto: un mismo aterrizaje de IA aprieta cada factor de forma distinta.",
    "La tierra clava la cantidad (su oferta es casi fija) y empuja todo al precio; el cómputo se lleva la mayor tajada porque es complemento casi puro de la inteligencia; la energía queda en el medio. No son intercambiables.",
  ],
  read: "Las barras se escalan por columna, así comparas los factores dentro de una misma métrica.",
};

// Selector de habilitante: qué recurso físico podría heredar el cuello. Cada uno = su propio CES.
export const HELP_ENABLER: HelpEntry = {
  kicker: "El habilitante físico",
  title: "Energía, cómputo o tierra: cuál hereda el cuello",
  body: [
    "La inteligencia abundante necesita átomos para usarse: energía para correr, cómputo físico para alojar, tierra y materia para construir. Pero no son intercambiables — cada uno tiene su propia oferta, su propia complementariedad y su propia historia de escasez.",
    "Eliges uno y la herramienta lo modela con SU evidencia. La diferencia entre ellos es el punto: el mismo empuje de IA aprieta cada habilitante distinto.",
  ],
  read: "Energía y cómputo están medidos; tierra es más teórica (el factor genuinamente fijo de Korinek-Suh).",
};

export const HELP_ENABLER_DETAIL: Record<string, HelpEntry> = {
  energia: {
    kicker: "Habilitante · Energía",
    title: "La entrega, no la generación",
    body: [
      "Lo contraintuitivo: la energía como commodity se ABARATA (solar −88% en 15 años). La escasez no es de stock sino de ENTREGA — megavatios conectados, donde se necesitan, cuando se necesitan. Conectar generación firme toma ~5 años y solo se construye el 14% de la cola.",
      "Por eso la renta no se la lleva la energía-commodity sino quien controla la interconexión, la energía firme y la cadena de transformadores y turbinas. σ medida (energía-capital complementos); η medida (colas de interconexión).",
    ],
    read: "IEA «Energy and AI» (2025); LBNL «Queued Up» (2024); Johnson (2014); Berndt-Wood (1975).",
  },
  computo: {
    kicker: "Habilitante · Cómputo",
    title: "El empaquetado, no el FLOP",
    body: [
      "El precio por FLOP cae rapidísimo (Epoch ~2x cada 2,3 años) — así que «el cómputo se encarece» es falso si miras el FLOP. Lo que aprieta es el cuello vinculante: el empaquetado avanzado (CoWoS) y la memoria (HBM), que requieren fabs nuevas y están ~90% consumidos por los cuatro grandes.",
      "El cómputo físico es el sustrato de la inteligencia: complemento casi puro (σ→0), por eso su tajada salta. Pero Korinek-Suh advierten que es REPRODUCIBLE —se puede construir más—, así que su renta es un cuello transitorio, no permanente.",
    ],
    read: "Epoch AI (costo + cadena de chips); SemiAnalysis «silicon short-term, power long-term»; Korinek-Suh (2024).",
  },
  tierra: {
    kicker: "Habilitante · Tierra",
    title: "El factor genuinamente fijo",
    body: [
      "Tierra, espacio y minerales son el único factor que no se reproduce. Korinek-Suh lo nombran como la escasez última («matter or energy may be the ultimate source of scarcity»); Trammell prueba que el factor de oferta fija, si es complemento, termina capturando ~toda la renta.",
      "Es el habilitante con menos evidencia dura: no hay estimación limpia de su elasticidad de oferta. Va más razonado que medido — por eso sus palancas están en verde (informado) y durazno (supuesto), no en azul.",
    ],
    read: "Korinek-Suh (2024); Korinek-Trammell (2024); Aghion-Jones-Jones (2019). Sin elasticidad de oferta medida.",
  },
};

