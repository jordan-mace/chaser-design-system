# Chaser Design System

A modern, type-safe React component library built with [Vanilla Extract](https://vanilla-extract.style/) for zero-runtime CSS-in-JS.

## Installation

```bash
npm install @jordan-mace/chaser-design-system
```

**Peer Dependencies:**

```bash
npm install @vanilla-extract/css @vanilla-extract/sprinkles clsx react react-dom
```

## Quick Start

Import the CSS layers and reset in your app entry point:

```typescript
import '@jordan-mace/chaser-design-system/layers.css';
import '@jordan-mace/chaser-design-system/cssReset.css';
import { Button, Input, Form } from '@jordan-mace/chaser-design-system';

const App = () => {
  return (
    <Form>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        fullWidth
      />
      <Button
        label="Submit"
        variant="primary"
        onClick={() => console.log('Submitted!')}
      />
    </Form>
  );
};
```

## Available Components

- **Button** - Primary and secondary button variants
- **Input** - Form inputs with optional labels
- **Form** - Form container with consistent spacing
- **List & ListItem** - Structured list components
- **Navbar & NavbarItem** - Navigation components

## Features

- ✨ Zero-runtime CSS-in-JS with Vanilla Extract
- 🎨 Consistent design tokens and theming
- 📱 Responsive design with built-in breakpoints
- 🔧 Full TypeScript support
- ⚡ Tree-shakeable components

## Basic Usage

```typescript
// Button
<Button variant="primary" label="Click me" onClick={handleClick} />

// Input
<Input label="Username" placeholder="Enter username" fullWidth />

// Lists
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</List>

// Navigation
<Navbar>
  <NavbarItem>Home</NavbarItem>
  <NavbarItem>About</NavbarItem>
</Navbar>
```

## Custom Styling

Access theme variables for custom styling:

```typescript
import { vars } from '@jordan-mace/chaser-design-system/theme.css';

const customStyle = {
  color: vars.colors.textPrimary,
  fontFamily: vars.fontFamily.body,
};
```

## Requirements

- React 19.2.0+
- Modern bundler with CSS support

---

For full documentation and examples, visit the [GitHub repository](https://github.com/jordan-mace/chaser-design-system).
