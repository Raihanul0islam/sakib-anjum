/* Figma px on a fixed-width desktop composition → container-query units.
   Exact when the container is `base` px wide, scales proportionally below it
   (992–1239). The element using it must sit inside an `@container` wrapper. */
export const cq = (px: number, base = 1200) => `${((px / base) * 100).toFixed(4)}cqw`;
