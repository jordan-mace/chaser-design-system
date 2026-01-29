import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from './Box';

describe('Box', () => {
  it('renders as a div by default', () => {
    render(<Box data-testid="box">Content</Box>);
    const box = screen.getByTestId('box');
    expect(box.tagName).toBe('DIV');
    expect(box).toHaveTextContent('Content');
  });

  it('renders with different elements via as prop', () => {
    const { rerender } = render(<Box as="span" data-testid="box">Span content</Box>);
    expect(screen.getByTestId('box').tagName).toBe('SPAN');

    rerender(<Box as="section" data-testid="box">Section content</Box>);
    expect(screen.getByTestId('box').tagName).toBe('SECTION');

    rerender(<Box as="button" data-testid="box">Button content</Box>);
    expect(screen.getByTestId('box').tagName).toBe('BUTTON');
  });

  it('applies custom className', () => {
    render(<Box className="custom-class" data-testid="box">Content</Box>);
    const box = screen.getByTestId('box');
    expect(box.className).toContain('custom-class');
  });

  it('passes through data attributes', () => {
    render(<Box data-testid="my-box" aria-label="test box">Content</Box>);
    const box = screen.getByTestId('my-box');
    expect(box).toHaveAttribute('aria-label', 'test box');
  });

  it('forwards click events', () => {
    const handleClick = jest.fn();
    render(<Box onClick={handleClick} data-testid="box">Click me</Box>);
    screen.getByTestId('box').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    render(
      <Box data-testid="box">
        <span data-testid="child">Child element</span>
      </Box>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders as anchor element with href', () => {
    render(
      <Box as="a" href="https://example.com" data-testid="link">
        Link text
      </Box>
    );
    const link = screen.getByTestId('link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
