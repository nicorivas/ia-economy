import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" → desplegable como sitio estático bajo cualquier subruta.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
