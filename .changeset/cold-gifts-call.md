---
"@jordan-mace/chaser-design-system": minor
---

feat: add Stack, Grid, Container and AspectRatio layout components

### Stack
- Flexbox layout utility component
- Direction support: vertical (column) and horizontal (row)
- Alignment options: start, center, end, stretch
- Justification options: start, center, end, between, around, evenly
- Configurable gap sizes using Box gap prop
- Optional wrap support for responsive layouts
- Built on top of Box component for consistency

### Grid
- CSS Grid layout component
- Column options: 1, 2, 3, 4, 5, 6, 12 columns
- Auto-fit with minChildWidth for responsive grids
- Configurable gap sizes: none, small, medium, large
- Built on top of Box component for consistency

### Container
- Max-width wrapper with responsive breakpoints
- Size options: sm (640px), md (768px), lg (1024px), xl (1280px), full (100%)
- Optional centering (default: true)
- Built on top of Box component

### AspectRatio
- Fixed ratio container for images, videos, and embeds
- Preset ratios: 1/1, 4/3, 16/9, 21/9
- Custom numeric ratio support
- Content is centered within the container
- Perfect for maintaining consistent image/video dimensions

All layout components:
- Use Box component as base for consistent styling
- Support all Box props (padding, margin, colors, etc.)
- Include forwardRef for ref forwarding
- Fully typed with TypeScript
- Include Vitest browser tests
- Include Storybook documentation
