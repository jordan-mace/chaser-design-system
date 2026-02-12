---
"@jordan-mace/chaser-design-system": patch
---

Switch from rslib to tsdown for bundling. Export source .css.ts files to allow consumer's Vanilla Extract plugin to process styles at build time, fixing SSR compatibility issues.
