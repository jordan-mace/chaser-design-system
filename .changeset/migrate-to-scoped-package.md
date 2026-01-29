---
"@jordan-mace/chaser-design-system": major
---

Migrated package from unscoped `chaser-design-system` to scoped `@jordan-mace/chaser-design-system` to enable OIDC/trusted publishing with npm. This is a breaking change requiring users to update imports and installation commands.

Old package has been deprecated on npm. Users should migrate to:
- `npm install @jordan-mace/chaser-design-system`
- `import from "@jordan-mace/chaser-design-system"`
