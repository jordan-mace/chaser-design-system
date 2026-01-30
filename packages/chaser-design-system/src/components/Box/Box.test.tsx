import { render } from 'vitest-browser-react';
import { describe, expect, it, vi } from 'vitest';
import Box from './Box';

describe('Box', () => {
  it('renders as a div by default', async () => {
    const { container } = await render(<Box data-testid="box">Content</Box>);
    const box = container.querySelector('[data-testid="box"]');
    expect(box?.tagName).toBe('DIV');
    expect(box).toHaveTextContent('Content');
  });

  it('renders with different elements via as prop', async () => {
    const { container, rerender } = await render(<Box as="span" data-testid="box">Span content</Box>);
    expect(container.querySelector('[data-testid="box"]')?.tagName).toBe('SPAN');

    await rerender(<Box as="section" data-testid="box">Section content</Box>);
    expect(container.querySelector('[data-testid="box"]')?.tagName).toBe('SECTION');

    await rerender(<Box as="button" data-testid="box">Button content</Box>);
    expect(container.querySelector('[data-testid="box"]')?.tagName).toBe('BUTTON');
  });

  it('applies custom className', async () => {
    const { container } = await render(<Box className="custom-class" data-testid="box">Content</Box>);
    const box = container.querySelector('[data-testid="box"]');
    expect(box?.className).toContain('custom-class');
  });

  it('passes through data attributes', async () => {
    const { container } = await render(<Box data-testid="my-box" aria-label="test box">Content</Box>);
    const box = container.querySelector('[data-testid="my-box"]');
    expect(box).toHaveAttribute('aria-label', 'test box');
  });

  it('forwards click events', async () => {
    const handleClick = vi.fn();
    const { container } = await render(<Box onClick={handleClick} data-testid="box">Click me</Box>);
    const box = container.querySelector('[data-testid="box"]');
    box?.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', async () => {
    const { container } = await render(
      <Box data-testid="box">
        <span data-testid="child">Child element</span>
      </Box>
    );
    expect(container.querySelector('[data-testid="child"]')).toBeInTheDocument();
  });

  it('renders as anchor element with href', async () => {
    const { container } = await render(
      <Box as="a" href="https://example.com" data-testid="link">
        Link text
      </Box>
    );
    const link = container.querySelector('[data-testid="link"]');
    expect(link?.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
