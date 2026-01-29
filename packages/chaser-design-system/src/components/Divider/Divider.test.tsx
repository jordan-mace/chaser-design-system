import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Divider from './Divider';
import React from 'react';

describe('Divider', () => {
  it('renders horizontal divider correctly', async () => {
    const { container } = await render(<Divider />);
    expect(container).toMatchScreenshot();
  });

  it('renders small divider correctly', async () => {
    const { container } = await render(<Divider size="small" />);
    expect(container).toMatchScreenshot();
  });

  it('renders medium divider correctly', async () => {
    const { container } = await render(<Divider size="medium" />);
    expect(container).toMatchScreenshot();
  });

  it('renders large divider correctly', async () => {
    const { container } = await render(<Divider size="large" />);
    expect(container).toMatchScreenshot();
  });

  it('renders vertical divider correctly', async () => {
    const { container } = await render(
      <div style={{ display: 'flex', height: '100px' }}>
        <Divider orientation="vertical" />
      </div>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders hr element with proper attributes', async () => {
    const { getByRole } = await render(<Divider />);
    const divider = getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider.tagName).toBe('HR');
  });

  it('applies orientation correctly', async () => {
    const { getByRole } = await render(<Divider orientation="vertical" />);
    const divider = getByRole('separator');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with custom className', async () => {
    const { getByRole } = await render(
      <Divider className="custom-divider" />,
    );
    const divider = getByRole('separator');
    expect(divider).toHaveClass('custom-divider');
  });
});
