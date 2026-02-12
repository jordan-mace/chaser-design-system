---
"@jordan-mace/chaser-design-system": patch
---

Fix package.json exports to point to compiled JavaScript files instead of TypeScript source files. This fixes vanilla-extract runtime errors when importing style files in the browser. Removed cssReset.css export as it uses globalStyle and should not be imported as a module.
