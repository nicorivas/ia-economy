// Paleta catppuccin (espejo de theme.css) para Recharts, que necesita colores literales (no var()).
import type { ChartTone } from "./sintesis";

export const C = {
  blue: "#89b4fa",
  green: "#a6e3a1",
  peach: "#fab387",
  lavender: "#b4befe",
  teal: "#94e2d5",
  red: "#f38ba8",
  overlay0: "#6c7086",
  overlay1: "#7f849c",
  overlay2: "#9399b2",
  surface0: "#313244",
  surface1: "#45475a",
  surface2: "#585b70",
  subtext0: "#a6adc8",
  subtext1: "#bac2de",
  text: "#cdd6f4",
  mantle: "#181825",
};

export const TONE_COLOR: Record<ChartTone, string> = {
  accent: C.blue,
  neg: C.peach,
  pos: C.green,
  neutral: C.subtext0,
};

// Estilo común de ejes: finos, tenues, sin grilla — fiel al minimalismo del resto.
export const axisTick = { fill: C.overlay1, fontSize: 10 } as const;
export const catTick = { fill: C.subtext1, fontSize: 11 } as const;
