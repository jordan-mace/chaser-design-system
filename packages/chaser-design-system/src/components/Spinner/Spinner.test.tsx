import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Spinner from './Spinner';
import React from 'react';

describe('Spinner', () => {
  it('renders primary spinner correctly', async () => {
    const { container } = await render(<Spinner />);
    expect(container).toMatchScreenshot();
  });

  it('renders small spinner correctly', async () => {
    const { container } = await render(<Spinner size="small" />);
    expect(container).toMatchScreenshot();
  });

  it('renders medium spinner correctly', async () => {
    const { container } = await render(<Spinner size="medium" />);
    expect(container).toMatchScreenshot();
  });

  it('renders large spinner correctly', async () => {
    const { container } = await render(<Spinner size="large" />);
    expect(container).toMatchScreenshot();
  });

  it('renders secondary color correctly', async () => {
    const { container } = await render(<Spinner color="secondary" />);
    expect(container).toMatchScreenshot();
  });

  it('renders success color correctly', async () => {
    const { container } = await render(<Spinner color="success" />);
    expect(container).toMatchScreenshot();
  });

  it('renders warning color correctly', async () => {
    const { container } = await render(<Spinner color="warning" />);
    expect(container).toMatchScreenshot();
  });

  it('renders error color correctly', async () => {
    const { container } = await render(<Spinner color="error" />);
    expect(container).toMatchScreenshot();
  });

  it('renders info color correctly', async () => {
    const { container } = await render(<Spinner color="info" />);
    expect(container).toMatchScreenshot();
  });

  it('renders div element with proper attributes', async () => {
    const { getByRole } = await render(<Spinner />);
    const spinner = getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner.tagName).toBe('DIV');
  });

  it('has proper aria-label', async () => {
    const { getByRole } = await render(<Spinner />);
    const spinner = getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
  });

  it('renders with custom className', async () => {
    const { getByRole } = await render(
      <Spinner className="custom-spinner" />,
    );
    const spinner = getByRole('status');
    expect(spinner).toHaveClass('custom-spinner');
  });
});
