---
"@jordan-mace/chaser-design-system": minor
---

Refactor: Extract all component types into separate `.types.ts` files

All component type definitions have been moved from inline definitions in `.tsx` files to dedicated `[ComponentName].types.ts` files. This makes all types explicitly exportable for consumers of the package.

**New exports available:**
- All component props types (e.g., `ButtonProps`, `AccordionProps`, `ModalProps`)
- All type aliases and enums (e.g., `ButtonVariant`, `ToastPosition`, `StepStatus`)
- Context types for compound components (e.g., `TabsContextType`, `RadioContextType`)

Consumers can now import types directly:
```typescript
import { Button, type ButtonProps, type ButtonVariant } from '@jordan-mace/chaser-design-system';
```
