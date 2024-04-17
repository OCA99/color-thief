export type Palette = [red: number, green: number, blue: number];

/**
 * Use the median cut algorithm provided by quantize.js
 * to cluster similar colors.
 */
export function getColor(image: string, quality?: number): Promise<Palette>;

/**
 * Use the median cut algorithm provided by quantize.js
 * to cluster similar colors.
 */
export function getPalette(image: string, colorCount?: number, quality?: number): Promise<Palette[]>;
