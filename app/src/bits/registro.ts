import type { Bit } from "./tipos";
import { BIT_RHO } from "./rho";

// El catálogo de piezas publicadas. Una entrada por pieza; el slug es la URL.
export const BITS: Bit[] = [BIT_RHO];
export const bitPorSlug = (s: string) => BITS.find((b) => b.slug === s);
