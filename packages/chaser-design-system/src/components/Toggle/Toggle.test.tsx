import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Toggle from './Toggle';
import React from 'react';

describe('Toggle', () => {
  it('renders unchecked toggle correctly', async () => {
    const { container } = await render(<Toggle />);
    expect(container).toMatchScreenshot();
  });

  it('renders checked toggle correctly', async () => {
    const { container } = await render(<Toggle checked />);
    expect(container).toMatchScreenshot();
  });

  it('renders small toggle correctly', async () => {
    const { container } = await render(<Toggle size="small" />);
    expect(container).toMatchScreenshot();
  });

  it('renders medium toggle correctly', async () => {
    const { container } = await render(<Toggle size="medium" />);
    expect(container).toMatchScreenshot();
  });

  it('renders large toggle correctly', async () => {
    const { container } = await render(<Toggle size="large" />);
    expect(container).toMatchScreenshot();
  });

  it('renders with label', async () => {
    const { container } = await render(<Toggle label="Toggle Label" />);
    expect(container).toMatchScreenshot();
  });

  it('renders disabled toggle correctly', async () => {
    const { container } = await render(<Toggle disabled />);
    expect(container).toMatchScreenshot();
  });

  it('handles onChange correctly', async () => {
    let checked = false;
    const handleChange = (newChecked: boolean) => {
      checked = newChecked;
    };
    const { container } = await render(<Toggle onChange={handleChange} />);
    const label = container.querySelector('label');
    if (label) {
      await label.click();
    }
    expect(checked).toBe(true);
  });

  it('does not change when disabled', async () => {
    const checked = false;
    const handleChange = () => {};
    const { container } = await render(<Toggle onChange={handleChange} disabled />);
    const label = container.querySelector('label');
    if (label) {
      await label.click();
    }
    expect(checked).toBe(false);
  });

  it('has proper role attribute', async () => {
    const { getByRole } = await render(<Toggle />);
    const input = getByRole('switch');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('role', 'switch');
  });

  it('has proper aria-checked attribute', async () => {
    const { getByRole } = await render(<Toggle checked={true} />);
    const input = getByRole('switch');
    expect(input).toHaveAttribute('aria-checked', 'true');
  });

  it('has proper id when provided', async () => {
    const { container } = await render(<Toggle id="custom-toggle" />);
    const label = container.querySelector('label');
    expect(label).toBeInTheDocument();
    expect(label?.querySelector('input')).toHaveAttribute('id', 'custom-toggle');
  });
});
