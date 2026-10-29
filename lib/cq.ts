/* px → container-query units: exact when the container is `base` px wide, scales
   proportionally below it. The element must sit inside an `@container` wrapper. */
export const cq = (px: number, base = 1200) => `${((px / base) * 100).toFixed(4)}cqw`;
