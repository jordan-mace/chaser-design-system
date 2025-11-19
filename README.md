# Chaser Design System

## About

Chaser is a simple design system with components built with Vanilla Extract.

## Usage

To use Chaser, install it via npm, then import the layers and reset files. Once those are imported you can use the components as normal.

```typescript
import "chaser-design-system/layers.css";
import "chaser-design-system/cssReset.css";
import { Button } from "chaser-design-system";

const App = () => {
  return (
    <div className="content">
      <Button
        label="Click Me"
        variant="primary"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  );
};

export default App;
```

## Development

### Get started

Build the library:

```bash
pnpm build
```

Build the library in watch mode:

```bash
pnpm dev
```
