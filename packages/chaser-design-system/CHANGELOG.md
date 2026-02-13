# @jordan-mace/chaser-design-system

## 2.1.0

### Minor Changes

- a4473b0: Use vanilla-extract layer API for nested CSS layers

## 2.0.0

### Major Changes

- 08cd461: Ship pre-compiled CSS instead of unprocessed .css.ts files

  BREAKING CHANGES:
  - CSS is now auto-imported when importing components - remove manual CSS imports
  - `cssReset.css` export renamed to `reset.css`
  - Removed vanilla-extract packages from peer dependencies (no longer required)
  - Consumers no longer need vanilla-extract tooling configured

  The package now ships pre-compiled CSS files that are automatically loaded when you import components. This improves compatibility with Next.js and other bundlers.

  Before:

  ```ts
  import '@jordan-mace/chaser-design-system/layers.css';
  import '@jordan-mace/chaser-design-system/cssReset.css';
  import { Button } from '@jordan-mace/chaser-design-system';
  ```

  After:

  ```ts
  import { Button } from '@jordan-mace/chaser-design-system';
  // CSS loads automatically
  ```

## 1.2.9

### Patch Changes

- aabb531: fix: reset was not exporting correctly

## 1.2.8

### Patch Changes

- 031ae33: Ensure all components expose Sprinkles as props

## 1.2.6

### Patch Changes

- c56943b: Fix package.json exports to point to compiled JavaScript files instead of TypeScript source files. This fixes vanilla-extract runtime errors when importing style files in the browser. Removed cssReset.css export as it uses globalStyle and should not be imported as a module.

## 1.2.5

### Patch Changes

- c56943b: Fix package.json exports to point to compiled JavaScript files instead of TypeScript source files. This fixes vanilla-extract runtime errors when importing style files in the browser. Removed cssReset.css export as it uses globalStyle and should not be imported as a module.

## 1.2.4

### Patch Changes

- d9065eb: Switch to tsc-based build with separate compilation of TypeScript and Vanilla Extract files. Export source .css.ts files to allow consumer's Vanilla Extract plugin to process styles, fixing SSR runtime errors.

## 1.2.3

### Patch Changes

- 88228ec: Switch from rslib to tsdown for bundling. Export source .css.ts files to allow consumer's Vanilla Extract plugin to process styles at build time, fixing SSR compatibility issues.

## 1.2.2

### Patch Changes

- 2793969: Fix CSS file generation by adding VanillaExtractPlugin to rslib build configuration. This ensures that .css files are properly extracted alongside .css.js files, enabling proper SSR/SSG support in consuming applications.

## 1.2.1

### Patch Changes

- Fix build error when using CSS files from published package
  - Changed layers.css.ts to export string constants instead of calling globalLayer() at module level
  - Prevents vanilla-extract build error in consumer applications
  - Maintains CSS layer functionality without breaking builds

## 1.2.0

### Minor Changes

- 72b884a: feat: add Collapse, VisuallyHidden, EmptyState, Separator, ScrollArea, and Kbd components

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

- 83e5bcc: feat: add Stack, Grid, Container and AspectRatio layout components

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

- d81a5bc: feat: add TextArea and Pagination components

  ### TextArea
  - Multi-line text input component with optional label support
  - Full-width option for flexible layouts
  - Follows existing Input component patterns and styling

  ### Pagination
  - Page navigation component for lists and tables
  - Configurable sibling count to control page window size
  - Optional first/last and previous/next buttons
  - Smart ellipsis display for handling many pages
  - Active page highlighting with visual distinction

  Both components include:
  - Full TypeScript support with exported types
  - Vanilla Extract CSS styling consistent with the design system
  - Comprehensive Vitest browser tests
  - Storybook stories for documentation and testing
  - Integration with existing Box component patterns

- 84a5f68: feat: add DropdownMenu, Popover and Stepper components

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

- d3dc091: feat: add Combobox, NumberInput and FileUpload components

  ### Combobox
  - Searchable dropdown component with typeahead filtering
  - Supports custom filter functions for flexible search behavior
  - Keyboard navigation (Arrow keys, Enter, Escape)
  - Clearable selection with clear button
  - Label, hint, and error message support
  - Customizable placeholder text
  - Accessibility: ARIA roles (combobox, listbox, option)

  ### NumberInput
  - Numeric input field with stepper controls (+/- buttons)
  - Configurable stepper position (left/right)
  - Min/max value clamping
  - Customizable step value (supports decimals)
  - Allow empty value option
  - Label, hint, and error message support
  - Disabled state support

  ### FileUpload
  - Drag and drop file upload component
  - Multiple file support with configurable max files limit
  - File type filtering via accept attribute
  - Maximum file size validation
  - Upload progress indication with visual progress bars
  - File list management with remove functionality
  - Customizable dropzone text and hints
  - File size formatting and display
  - Error handling with validation messages
  - Accessibility: proper ARIA labels and roles

  All components include:
  - Full TypeScript support with exported types
  - Vanilla Extract CSS styling
  - Comprehensive Vitest browser tests (12 tests total)
  - Storybook stories with various configurations
  - Accessibility features (ARIA roles, keyboard navigation)

- f3a6051: feat: add Skeleton and Drawer components

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

### Patch Changes

- Fix package exports to include dist folder in npm package
  - Add .npmignore to control npm publishing
  - Add prepublishOnly script to ensure build runs
  - Update exports to point to dist/styles/ directory
- 9e85618: fix: add proper state management to Toggle stories to enable transition animations

  The Toggle stories were using static `checked` props without `onChange` handlers,
  which prevented the toggle state from updating when clicked. This meant the CSS
  transition animations never played.

  All Toggle stories now use proper React state management:
  - Default, Checked, Unchecked stories
  - Small, Medium, Large size stories
  - Disabled and DisabledChecked stories
  - AllSizes, WithLabels, NoLabel stories

  Users can now click any toggle in Storybook and see the smooth transition animation.

## 1.1.0

### Minor Changes

- Add 12 new components (Box, Toggle, Tooltip, Spinner, Divider, Badge, Modal, Accordion, Avatar, Breadcrumb, Progress, Tabs, Table, Select, Radio, Checkbox, Toast) and refactor to use Box as foundation component
