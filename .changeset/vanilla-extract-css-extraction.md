---
"@jordan-mace/chaser-design-system": patch
---

Fix CSS file generation by adding VanillaExtractPlugin to rslib build configuration. This ensures that .css files are properly extracted alongside .css.js files, enabling proper SSR/SSG support in consuming applications.
