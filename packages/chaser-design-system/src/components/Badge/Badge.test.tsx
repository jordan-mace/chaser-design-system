import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Badge from './Badge';
import React from 'react';

describe('Badge', () => {
  it('renders default badge correctly', async () => {
    const { container } = await render(<Badge>Default Badge</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders success badge correctly', async () => {
    const { container } = await render(<Badge variant="success">Success</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders warning badge correctly', async () => {
    const { container } = await render(<Badge variant="warning">Warning</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders error badge correctly', async () => {
    const { container } = await render(<Badge variant="error">Error</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders info badge correctly', async () => {
    const { container } = await render(<Badge variant="info">Info</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders small badge correctly', async () => {
    const { container } = await render(<Badge size="small">Small</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders medium badge correctly', async () => {
    const { container } = await render(<Badge size="medium">Medium</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders large badge correctly', async () => {
    const { container } = await render(<Badge size="large">Large</Badge>);
    expect(container).toMatchScreenshot();
  });

  it('renders dot badge correctly', async () => {
    const { container } = await render(<Badge dot />);
    expect(container).toMatchScreenshot();
  });

  it('renders dot with variant correctly', async () => {
    const { container } = await render(<Badge variant="success" dot />);
    expect(container).toMatchScreenshot();
  });

  it('renders dot with size correctly', async () => {
    const { container } = await render(<Badge dot size="large" />);
    expect(container).toMatchScreenshot();
  });

  it('renders span element with proper attributes', async () => {
    const { container } = await render(<Badge>Test Badge</Badge>);
    const badge = container.querySelector('span');
    expect(badge).toBeInTheDocument();
    expect(badge?.tagName).toBe('SPAN');
    expect(badge).toHaveTextContent('Test Badge');
  });

  it('does not render children when dot is true', async () => {
    const { container } = await render(<Badge dot>Hidden Text</Badge>);
    expect(container).toHaveTextContent('');
  });
});
