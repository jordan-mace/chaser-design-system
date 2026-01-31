---
"@jordan-mace/chaser-design-system": minor
---

feat: add Combobox, NumberInput and FileUpload components

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
