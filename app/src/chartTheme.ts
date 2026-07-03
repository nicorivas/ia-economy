// Paleta catppuccin (espejo de theme.css) en literales hex, para colorear SVG/inline-styles donde
// no sirve var() (marcadores de charts, líneas de series).
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
