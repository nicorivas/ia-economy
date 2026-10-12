// ── Exportador de piezas ────────────────────────────────────────────────────────────────
// Una escena definida como función de t, tres salidas:
//   · video.mp4    — recorre t de 0 a 1 a `fps` cuadros por segundo
//   · lamina-N.png — un PNG por acto, muestreado en su punto `slide`
//   · carrusel.pdf — las mismas láminas, una por página, que es lo que sube LinkedIn
// No hay dos diseños: hay dos muestreos del mismo. Por eso los actos de la pieza son a la
// vez tramos de la animación y láminas del carrusel.
//
// Usa el Chrome instalado (canal "chrome") y playwright-core, que no descarga navegadores.
// Vive fuera de app/ para que el build de Vercel no lo instale.
//
//   node exportar.mjs --bit rho [--fps 30] [--solo-laminas] [--puerto 4178]

import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFile, mkdir, rm, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { extname, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(AQUI, "../app/dist");
const W = 1080;
const H = 1350;

const arg = (n, def = null) => {
  const i = process.argv.indexOf(`--${n}`);
  return i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith("--")
    ? process.argv[i + 1]
    : i > -1
      ? true
      : def;
};

const SLUG = arg("bit", "rho");
const FPS = Number(arg("fps", 30));
const PUERTO = Number(arg("puerto", 4178));
const SOLO_LAMINAS = arg("solo-laminas", false) === true;

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
};

// Servidor estático sobre dist, con el mismo reescrito que hace Vercel: /bits/<slug> → bits.html
function servir() {
  const srv = createServer(async (req, res) => {
    let ruta = decodeURIComponent((req.url || "/").split("?")[0]);
    if (/^\/bits(\/|$)/.test(ruta)) ruta = "/bits.html";
    if (ruta === "/" || ruta.endsWith("/")) ruta += "index.html";
    const archivo = join(DIST, ruta);
    if (!archivo.startsWith(DIST)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const buf = await readFile(archivo);
      res.writeHead(200, { "content-type": TIPOS[extname(archivo)] || "application/octet-stream" });
      res.end(buf);
    } catch {
      res.writeHead(404).end("no está");
    }
  });
  return new Promise((ok) => srv.listen(PUERTO, "127.0.0.1", () => ok(srv)));
}

const corre = (cmd, args) =>
  new Promise((ok, falla) => {
    const p = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (c) => (c === 0 ? ok() : falla(new Error(`${cmd} salió ${c}\n${err.slice(-2000)}`))));
  });

async function main() {
  if (!existsSync(join(DIST, "bits.html"))) {
    console.error("No encuentro app/dist/bits.html. Corré primero: cd app && npm run build");
    process.exit(1);
  }

  const srv = await servir();
  const navegador = await chromium.launch({ channel: "chrome", headless: true });
  const pagina = await navegador.newPage({
    viewport: { width: W, height: H },
    deviceScaleFactor: 1,
  });

  const url = `http://127.0.0.1:${PUERTO}/bits/${SLUG}?captura=1&t=0`;
  await pagina.goto(url, { waitUntil: "load" });
  await pagina.waitForSelector("html[data-listo='1']", { timeout: 20000 });

  const meta = await pagina.evaluate(() => window.__bitMeta);
  if (!meta) throw new Error("la página no expuso __bitMeta: ¿quedó en modo captura?");
  console.log(`Pieza «${meta.titulo}» · ${meta.acts.length} actos · ${meta.duracion}s`);

  const SALIDA = resolve(AQUI, "salida", SLUG);
  await mkdir(SALIDA, { recursive: true });

  const foto = async (destino) =>
    pagina.screenshot({ path: destino, clip: { x: 0, y: 0, width: W, height: H } });

  // ── láminas: una por acto, en su punto de reposo ──────────────────────────────────────
  // Se borran las anteriores: si la pieza pasa de cinco actos a cuatro, la quinta lámina
  // quedaba en la carpeta y se colaba al subir el carrusel.
  for (const viejo of await readdir(SALIDA)) {
    if (/^lamina-\d+\.png$/.test(viejo)) await rm(join(SALIDA, viejo));
  }
  const laminas = [];
  for (let i = 0; i < meta.acts.length; i++) {
    const a = meta.acts[i];
    await pagina.evaluate((t) => window.__bitSetT(t), a.slide);
    const destino = join(SALIDA, `lamina-${String(i + 1).padStart(2, "0")}.png`);
    await foto(destino);
    laminas.push(destino);
    console.log(`  lámina ${i + 1}/${meta.acts.length} · ${a.rotulo}`);
  }

  // ── carrusel en PDF: lo que acepta LinkedIn como documento ────────────────────────────
  const htmlPdf = join(SALIDA, "_carrusel.html");
  await writeFile(
    htmlPdf,
    `<!doctype html><meta charset="utf-8"><style>
       @page { size: ${W}px ${H}px; margin: 0 }
       html,body { margin:0; padding:0; background:#181825 }
       img { display:block; width:${W}px; height:${H}px; page-break-after:always }
       img:last-child { page-break-after:auto }
     </style>` + laminas.map((f) => `<img src="file://${f}">`).join(""),
  );
  await pagina.goto(`file://${htmlPdf}`, { waitUntil: "load" });
  await pagina.pdf({
    path: join(SALIDA, "carrusel.pdf"),
    width: `${W}px`,
    height: `${H}px`,
    printBackground: true,
    pageRanges: `1-${laminas.length}`,
  });
  await rm(htmlPdf);
  console.log(`  carrusel.pdf · ${laminas.length} páginas`);

  // ── video: el mismo t, recorrido cuadro a cuadro ──────────────────────────────────────
  if (!SOLO_LAMINAS) {
    const CUADROS = join(SALIDA, "cuadros");
    await rm(CUADROS, { recursive: true, force: true });
    await mkdir(CUADROS, { recursive: true });

    await pagina.goto(url, { waitUntil: "load" });
    await pagina.waitForSelector("html[data-listo='1']", { timeout: 20000 });

    const n = Math.round(FPS * meta.duracion);
    const t0 = Date.now();
    for (let i = 0; i < n; i++) {
      await pagina.evaluate((t) => window.__bitSetT(t), i / (n - 1));
      await foto(join(CUADROS, `${String(i).padStart(5, "0")}.png`));
      if (i % 60 === 0 || i === n - 1) {
        const pct = Math.round(((i + 1) / n) * 100);
        process.stdout.write(`\r  cuadros ${i + 1}/${n} (${pct}%)   `);
      }
    }
    console.log(`\n  ${n} cuadros en ${Math.round((Date.now() - t0) / 1000)}s`);

    await corre("ffmpeg", [
      "-y", "-framerate", String(FPS),
      "-i", join(CUADROS, "%05d.png"),
      "-c:v", "libx264", "-preset", "slow", "-crf", "18",
      "-pix_fmt", "yuv420p", "-movflags", "+faststart",
      join(SALIDA, "video.mp4"),
    ]);
    console.log("  video.mp4 listo");
    await rm(CUADROS, { recursive: true, force: true });
  }

  await navegador.close();
  srv.close();
  console.log(`\nTodo en ${SALIDA}`);
}

main().catch((e) => {
  console.error("\nFalló:", e.message);
  process.exit(1);
});
