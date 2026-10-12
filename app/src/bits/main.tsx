import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../theme.css";
import { BitPlayer, BitCaptura } from "./Player";
import { bitPorSlug, BITS } from "./registro";

// Ruta: /bits/<slug>. Con ?captura=1&t=0.42 entrega el cuadro exacto para el exportador.
const q = new URLSearchParams(location.search);
const slugRuta = location.pathname.replace(/\/+$/, "").split("/").pop() || "";
const slug = q.get("bit") || (slugRuta && slugRuta !== "bits" ? slugRuta : "") || BITS[0].slug;
const bit = bitPorSlug(slug) ?? BITS[0];
const captura = q.get("captura") === "1";
const t = Math.max(0, Math.min(1, Number(q.get("t") ?? "0") || 0));

document.title = `${bit.titulo} · IA y empleo`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>{captura ? <BitCaptura bit={bit} t0={t} /> : <BitPlayer bit={bit} />}</StrictMode>,
);
