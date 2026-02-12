---
"@jordan-mace/chaser-design-system": patch
---

Switch to tsc-based build with separate compilation of TypeScript and Vanilla Extract files. Export source .css.ts files to allow consumer's Vanilla Extract plugin to process styles, fixing SSR runtime errors.
