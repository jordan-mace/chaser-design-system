---
"@jordan-mace/chaser-design-system": minor
---

feat: add Collapse, VisuallyHidden, EmptyState, Separator, ScrollArea, and Kbd components

### Collapse
- Animated show/hide content component
- Three animation modes: height, opacity, both
- Configurable animation duration
- onAnimationEnd callback support

### VisuallyHidden
- Accessibility helper for screen reader only content
- Hides content visually but keeps it accessible
- Configurable element type (span, div, etc.)
- WCAG compliant implementation

### EmptyState
- No content placeholder with illustration support
- Icon, title, description, and action slot support
- Perfect for empty lists, search results, etc.
- Centered layout with consistent styling

### Separator
- Visual divider component (distinct from Divider)
- Horizontal and vertical orientations
- Decorative mode for purely visual separators
- Semantic HR element for accessibility

### ScrollArea
- Custom scrollbar container
- Three orientations: vertical, horizontal, both
- Configurable maxHeight and maxWidth
- Native scrollbar styling with CSS

### Kbd
- Keyboard shortcut display component
- Monospace font with keyboard-like styling
- Box shadow effect for 3D appearance
- Perfect for documentation and shortcuts

All components:
- Include TypeScript types
- Include Vitest browser tests (12 tests total)
- Include Storybook documentation
- Follow existing component patterns
