---
"@jordan-mace/chaser-design-system": minor
---

feat: add DropdownMenu, Popover and Stepper components

### DropdownMenu
- Context menu component for displaying options on trigger click
- Supports grouped items with labels and separators
- Item variants: default, destructive (red text), disabled
- Optional icons for menu items
- Four positioning options: bottomLeft, bottomRight, topLeft, topRight
- Click outside to close and Escape key support
- Accessibility: proper ARIA roles (menu, menuitem, group)

### Popover
- Versatile floating content container (more flexible than Tooltip)
- Two trigger types: click and hover
- Eight positioning options: top, bottom, left, right, and corner positions
- Optional title with close button (click trigger)
- Optional footer for action buttons
- Arrow pointer with 8 position variants
- Click outside and Escape key to close (configurable)
- Default open state support
- onOpenChange callback for external control

### Stepper
- Multi-step progress indicator for workflows
- Two orientations: horizontal and vertical
- Three step statuses: pending, current, completed
- Visual connectors between steps (optional)
- Step numbers with checkmark for completed steps
- Current step highlight with ring effect
- Clickable steps option with onStepClick callback
- Custom status support per step
- Title and description for each step

All components include:
- Full TypeScript support with exported types
- Vanilla Extract CSS styling
- Comprehensive Vitest browser tests
- Storybook stories with various configurations
- Accessibility features (ARIA roles, keyboard support)
