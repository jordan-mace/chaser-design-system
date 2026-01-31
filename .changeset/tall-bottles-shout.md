---
"@jordan-mace/chaser-design-system": minor
---

feat: add Skeleton and Drawer components

### Skeleton
- Loading placeholder component with animated shimmer and pulse effects
- Three variants: text (rounded), circle (avatar), rectangle (cards/images)
- Three sizes: small, medium, large
- Multiple animation modes: shimmer (gradient animation), pulse (opacity animation), none (static)
- Support for rendering multiple skeleton lines via `count` prop
- Custom width and height support
- Accessibility: aria-hidden for screen readers

### Drawer
- Slide-out panel component for navigation and content overlays
- Four positions: left, right, top, bottom with smooth animations
- Four sizes per orientation: small, medium, large, full
- Optional header with title and close button
- Optional footer for action buttons
- Backdrop overlay with click-to-close functionality
- Keyboard support: Escape key to close
- Body scroll lock when open
- Follows Modal component patterns for consistency

Both components include:
- Full TypeScript support with exported types
- Vanilla Extract CSS styling with CSS animations
- Comprehensive Vitest browser tests
- Storybook stories with various configurations
- Integration with existing Box component patterns
