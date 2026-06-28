# IA y la economía de la inteligencia abundante

Un mapa interactivo del debate económico sobre la inteligencia artificial: **qué queda
escaso cuando la inteligencia se vuelve abundante, y quién se queda con la renta de esa
escasez**. El empleo, los salarios, la participación del trabajo, la energía, el cómputo,
la renta. No es un pronóstico — es un mapa del debate, con su rastro de evidencia.

**▶ En vivo: [ia-economy.vercel.app](https://ia-economy.vercel.app)** · Iniciado por
[Nicolás Rivas](https://nicolasrivasabud.com/).

## El espíritu

- **Sin aire.** Cada cifra se verifica contra la fuente primaria. Nada de números redondos
  inventados: si algo no se sabe, se dice.
- **Los supuestos, rotulados como supuestos.** Un sistema de color separa lo *anclado* en
  evidencia, lo *informado* por evidencia, y lo que es un *supuesto*. Nunca se disfraza uno
  de otro.
- **Lo que falta también es producto.** Donde no existe una función validada que conecte dos
  cosas —de «la IA puede hacer esta tarea» a «se pierden estos empleos»—, se muestra el puente
  ausente en vez de taparlo.
- **Abierto y auditable.** Los datos, el modelo y el código son públicos. Cualquiera puede
  revisarlos, corregir un dato o extender el mapa.

## Correr localmente

```sh
cd app
npm install
npm run dev      # http://localhost:5173
```

`npm run build` genera el sitio estático en `app/dist/`.

## Estructura

- `app/` — la aplicación (React + Vite + TypeScript). Vistas: **Portada**, **Explorador**
  (arma un escenario y mira la evidencia), **Síntesis** (las conclusiones en prosa),
  **Realidad** (series de datos reales) y **Fuentes** (la biblioteca de estudios).
- `datos/mapa.json` — el dataset canónico, neutral a la herramienta: estudios, hipótesis,
  dimensiones, conversiones (los «puentes») y las aristas tipadas entre ellos.
- `datos/realdata/` — series de datos reales (empleo, salarios, participación) con su
  procedencia y método (`FUENTES.md`).
- `datos/*.py` — scripts reproducibles para agregar y verificar nodos; regeneran el dossier
  y sincronizan la copia de la app.
- `dossier.md` — la vista legible del mapa (generada; no editar a mano).

## Agregar o corregir una fuente (datos, no código)

```sh
# 1. Escribe un spec en datos/nodos/<x>.json
# 2. Intégralo (valida, es idempotente, regenera el dossier y sincroniza la app):
python3 datos/agregar-nodo.py nodos/<x>.json
```

El dataset es la fuente de verdad; la app es una de sus lecturas.

## Licencia

- **Código:** MIT — ver [`LICENSE`](./LICENSE).
- **Textos, datos y el grafo de evidencia** (`datos/`, `dossier.md`, los textos de la app):
  [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) — reúsalos citando la fuente.
