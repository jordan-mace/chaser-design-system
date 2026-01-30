# Chaser Design System

A modern, type-safe React component library built with [Vanilla Extract](https://vanilla-extract.style/) for scalable and maintainable styling.

## Features

✨ **Zero-runtime CSS-in-JS** with Vanilla Extract  
🎨 **Consistent Design Tokens** with theme variables  
📱 **Responsive Design** with built-in breakpoints  
🔧 **TypeScript Support** with full type safety  
⚡ **Tree-shakeable** components  
🧪 **Thoroughly Tested** with Vitest and browser testing  
📚 **Storybook Documentation** included

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
npm install @vanilla-extract/css @vanilla-extract/sprinkles clsx react react-dom
```

## Quick Start

### 1. Import CSS Layers and Reset

First, import the required CSS files in your application entry point:

```typescript
import "@jordan-mace/chaser-design-system/layers.css";
import "@jordan-mace/chaser-design-system/cssReset.css";
```

### 2. Wrap App with ToastProvider

Wrap your application with ToastProvider to enable toast notifications:

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

### 3. Use Toast Hook in Components

Import and use the useToast hook to trigger toasts:

```typescript
import { useToast } from "@jordan-mace/chaser-design-system";

const MyComponent = () => {
  const { toast, success, error, warning, info, dismiss, dismissAll } = useToast();
  
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
      <button onClick={() => info('You have new notifications!')}>
        Show Info Toast
      </button>
      <button onClick={dismiss}>
        Dismiss All
      </button>
    </div>
  );
};
```

## Toast Provider Props

```typescript
interface ToastProviderProps {
  children: React.ReactNode;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'; // default: 'top-right'
  maxVisible?: number;              // Maximum toasts visible at once (default: 5)
  stacking?: 'stack' | 'replace';    // 'stack' = accumulate, 'replace' = replace previous (default: 'stack')
}
```

## Toast Hook API

```typescript
const { 
  toast,      // (message: string, options?: ToastOptions) => string - returns toast ID
  success,   // (message: string, options?: ToastOptions) => string
  error,     // (message: string, options?: ToastOptions) => string
  warning,   // (message: string, options?: ToastOptions) => string
  info,      // (message: string, options?: ToastOptions) => string
  dismiss,    // (id: string) => void - dismiss toast by ID
  dismissAll  // () => void - dismiss all toasts
} = useToast();
```

## Toast Options

```typescript
interface ToastOptions {
  duration?: number;      // Auto-dismiss duration in ms (default: 5000)
  closable?: boolean;     // Show close button (default: true)
  position?: ToastPosition; // Override default position
  onClose?: () => void;    // Callback when toast closes
}
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install @vanilla-extract/css @vanilla-extract/sprinkles clsx react react-dom
```

## Quick Start

### 1. Import CSS Layers and Reset

First, import the required CSS files in your application entry point:

```typescript
import "@jordan-mace/chaser-design-system/layers.css";
import "@jordan-mace/chaser-design-system/cssReset.css";
```

### 2. Use Components

```typescript
import { Button, Input, Form } from "@jordan-mace/chaser-design-system";

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
        fullWidth
        onClick={() => console.log("Form submitted!")}
      />
    </Form>
  );
};

export default App;
```

## Components

### Button

A versatile button component with multiple variants and states.

```typescript
<Button
  variant="primary" // 'primary' | 'secondary'
  label="Click me"
  fullWidth={false}
  onClick={handleClick}
/>
```

### Input

A form input with optional labeling and responsive layout.

```typescript
<Input
  label="Username"
  placeholder="Enter username"
  fullWidth={true}
  type="text"
/>
```

### Form

A container component for form layouts.

```typescript
<Form>{/* Form inputs and controls */}</Form>
```

### List & ListItem

Components for displaying structured lists.

```typescript
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

### Navbar & NavbarItem

Navigation components for application headers.

```typescript
<Navbar>
  <NavbarItem>Home</NavbarItem>
  <NavbarItem>About</NavbarItem>
  <NavbarItem>Contact</NavbarItem>
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

## Styling System

Chaser uses Vanilla Extract for styling, which provides:

- **Type-safe styles** at build time
- **Zero-runtime overhead**
- **Automatic CSS extraction**
- **Responsive utilities** via Sprinkles

### Custom Styling

You can extend components with additional classes:

```typescript
<Button
  className={myCustomButtonStyle}
  variant="primary"
  label="Custom Button"
/>
```

## Development

### Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the library: `pnpm build`
4. Run in development mode: `pnpm dev`

### Available Scripts

```bash
# Build the library
pnpm build

# Build in watch mode
pnpm dev

# Run tests
pnpm test

# Start Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook

# Lint code
pnpm lint

# Format code
pnpm format
```

### Testing

The library uses Vitest with browser testing for comprehensive component testing:

```bash
pnpm test
```

### Storybook

Interactive component documentation is available via Storybook:

```bash
pnpm storybook
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Ensure all tests pass: `pnpm test`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Requirements

- React 19.2.0+
- Node.js 16+
- Modern bundler with CSS support (Vite, Webpack, etc.)
