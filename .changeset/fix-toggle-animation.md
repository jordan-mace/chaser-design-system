---
"@jordan-mace/chaser-design-system": patch
---

fix: add proper state management to Toggle stories to enable transition animations

The Toggle stories were using static `checked` props without `onChange` handlers, 
which prevented the toggle state from updating when clicked. This meant the CSS 
transition animations never played.

All Toggle stories now use proper React state management:
- Default, Checked, Unchecked stories
- Small, Medium, Large size stories  
- Disabled and DisabledChecked stories
- AllSizes, WithLabels, NoLabel stories

Users can now click any toggle in Storybook and see the smooth transition animation.
