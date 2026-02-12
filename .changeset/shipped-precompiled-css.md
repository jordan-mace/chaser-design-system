---
"@jordan-mace/chaser-design-system": major
---

Ship pre-compiled CSS instead of unprocessed .css.ts files

BREAKING CHANGES:
- CSS is now auto-imported when importing components - remove manual CSS imports
- `cssReset.css` export renamed to `reset.css`
- Removed vanilla-extract packages from peer dependencies (no longer required)
- Consumers no longer need vanilla-extract tooling configured

The package now ships pre-compiled CSS files that are automatically loaded when you import components. This improves compatibility with Next.js and other bundlers.

Before:
```ts
import "@jordan-mace/chaser-design-system/layers.css";
import "@jordan-mace/chaser-design-system/cssReset.css";
import { Button } from "@jordan-mace/chaser-design-system";
```

After:
```ts
import { Button } from "@jordan-mace/chaser-design-system";
// CSS loads automatically
```
