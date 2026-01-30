import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Checkbox from './Checkbox';
import React from 'react';

describe('Checkbox', () => {
  it('renders unchecked checkbox correctly', async () => {
    const { container } = await render(<Checkbox />);
    expect(container).toMatchScreenshot();
  });

  it('renders checked checkbox correctly', async () => {
    const { container } = await render(<Checkbox checked readOnly />);
    expect(container).toMatchScreenshot();
  });

  it('renders checkbox with label correctly', async () => {
    const { container } = await render(<Checkbox label="Accept terms" />);
    expect(container).toMatchScreenshot();
  });

  it('renders disabled checkbox correctly', async () => {
    const { container } = await render(<Checkbox disabled label="Disabled option" />);
    expect(container).toMatchScreenshot();
  });

  it('renders as checked after click', async () => {
    const { container } = await render(<Checkbox />);
    const checkbox = container.querySelector('input[type="checkbox"]');
    await checkbox?.click();
    // After clicking, checkbox should be checked
    expect(checkbox?.checked).toBe(true);
  });

  it('is accessible with proper role', async () => {
    const { getByRole } = await render(<Checkbox label="Test checkbox" />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDefined();
  });
});
