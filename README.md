# Chaser Design System

A modern, type-safe React component library built with [Vanilla Extract](https://vanilla-extract.style/) for scalable and maintainable styling.

## Features

- **Zero-runtime CSS-in-JS** with Vanilla Extract
- **Auto-imported CSS** - styles load automatically with components
- **Consistent Design Tokens** with theme variables
- **Responsive Design** with built-in breakpoints
- **TypeScript Support** with full type safety
- **Tree-shakeable** components
- **Thoroughly Tested** with Vitest and browser testing
- **Storybook Documentation** included

## Installation

```bash
npm install @jordan-mace/chaser-design-system
# or
yarn add @jordan-mace/chaser-design-system
# or
pnpm add @jordan-mace/chaser-design-system
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom clsx
```

## Quick Start

CSS is automatically imported when you import components. No manual CSS imports required.

```typescript
import { Button, Input, Form } from "@jordan-mace/chaser-design-system";

function App() {
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
        fullWidth
        onClick={() => console.log("Form submitted!")}
      />
    </Form>
  );
}

export default App;
```

## Toast System

### Wrap App with ToastProvider

```typescript
import { ToastProvider } from "@jordan-mace/chaser-design-system";

function App() {
  return (
    <ToastProvider>
      {/* Your app components */}
    </ToastProvider>
  );
}
```

### Use Toast Hook in Components

```typescript
import { useToast } from "@jordan-mace/chaser-design-system";

const MyComponent = () => {
  const { toast, dismiss, dismissAll } = useToast();
  
  return (
    <div>
      <button onClick={() => toast.success('Operation completed!')}>
        Show Success Toast
      </button>
      <button onClick={() => toast.error('Something went wrong!')}>
        Show Error Toast
      </button>
      <button onClick={() => toast.warning('Session expiring soon!')}>
        Show Warning Toast
      </button>
      <button onClick={() => toast.info('You have new notifications!')}>
        Show Info Toast
      </button>
      <button onClick={dismissAll}>
        Dismiss All
      </button>
    </div>
  );
};
```

### Toast Provider Props

```typescript
interface ToastProviderProps {
  children: React.ReactNode;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  maxVisible?: number;
  stacking?: 'stack' | 'replace';
}
```

### Toast Hook API

```typescript
const { 
  toast,      // toast.success(), toast.error(), toast.warning(), toast.info()
  dismiss,    // (id: string) => void
  dismissAll  // () => void
} = useToast();
```

## Components

### Button

```typescript
<Button
  variant="primary" // 'primary' | 'secondary'
  label="Click me"
  fullWidth={false}
  onClick={handleClick}
/>
```

### Input

```typescript
<Input
  label="Username"
  placeholder="Enter username"
  fullWidth={true}
  type="text"
/>
```

### Form

```typescript
<Form>{/* Form inputs and controls */}</Form>
```

### List & ListItem

```typescript
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</List>
```

### Navbar & NavbarItem

```typescript
<Navbar>
  <NavbarItem>Home</NavbarItem>
  <NavbarItem>About</NavbarItem>
</Navbar>
```

## Design Tokens

Chaser includes a comprehensive design token system with:

- **Colors**: Primary, secondary, and semantic color palettes
- **Typography**: Inter for body text, Poppins for headings
- **Spacing**: Consistent spacing scale
- **Border Radius**: Predefined radius values
- **Breakpoints**: Mobile-first responsive design

### Accessing Theme Variables

```typescript
import { vars } from "@jordan-mace/chaser-design-system/theme.css";

// Use theme variables in your custom styles
const customStyle = style({
  color: vars.colors.textPrimary,
  fontFamily: vars.fontFamily.body,
});
```

## Advanced: Manual CSS Imports

If you need granular control over CSS loading, individual stylesheets are available:

```typescript
// All styles (auto-imported with components)
import "@jordan-mace/chaser-design-system/index.css";

// Individual stylesheets
import "@jordan-mace/chaser-design-system/reset.css";    // CSS reset
import "@jordan-mace/chaser-design-system/theme.css";    // CSS variables
import "@jordan-mace/chaser-design-system/sprinkles.css"; // Utility classes
import "@jordan-mace/chaser-design-system/components.css"; // Component styles
```

## Development

### Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the library: `pnpm build`
4. Run in development mode: `pnpm dev`

### Available Scripts

```bash
pnpm build          # Build the library
pnpm dev            # Build in watch mode
pnpm test           # Run tests
pnpm storybook      # Start Storybook
pnpm build-storybook # Build Storybook
pnpm lint           # Lint code
pnpm format         # Format code
```

## Requirements

- React 19.2.0+
- Node.js 16+
- Modern bundler with CSS support (Vite, Webpack, Next.js, etc.)

## License

MIT
