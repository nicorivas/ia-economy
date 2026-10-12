import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Dos entradas: el Explorador (index) y las piezas publicables (bits). Separadas a propósito
// —una pieza es la página de llegada desde redes y no tiene por qué cargar el Explorador
// completo—.
//
// `base` es "/" y no "./": las piezas viven en /bits/<slug>, que Vercel reescribe a
// /bits.html (ver vercel.json). Con rutas relativas los assets se pedirían bajo /bits/ y no
// cargarían. El sitio se despliega en la raíz del dominio, así que no perdemos nada.

// En `vite dev` no hay reescritos de Vercel: este plugin los imita para que /bits/<slug>
// funcione igual en desarrollo que en producción.
const bitsDev: Plugin = {
  name: "bits-dev-rewrite",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url && /^\/bits(\/|$)/.test(req.url.split("?")[0])) {
        const [ruta, qs] = req.url.split("?");
        const slug = ruta.replace(/\/+$/, "").split("/").pop();
        const extra = slug && slug !== "bits" ? `bit=${encodeURIComponent(slug)}` : "";
        req.url = "/bits.html" + (qs || extra ? "?" + [qs, extra].filter(Boolean).join("&") : "");
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), bitsDev],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        bits: resolve(__dirname, "bits.html"),
      },
    },
  },
});
