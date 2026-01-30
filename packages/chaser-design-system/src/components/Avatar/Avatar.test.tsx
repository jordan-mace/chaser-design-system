import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Avatar from './Avatar';
import React from 'react';

describe('Avatar', () => {
  it('renders avatar with initials correctly', async () => {
    const { container } = await render(<Avatar initials="JD" />);
    expect(container).toMatchScreenshot();
  });

  it('renders small avatar correctly', async () => {
    const { container } = await render(<Avatar size="small" initials="AB" />);
    expect(container).toMatchScreenshot();
  });

  it('renders large avatar correctly', async () => {
    const { container } = await render(<Avatar size="large" initials="XY" />);
    expect(container).toMatchScreenshot();
  });

  it('renders xlarge avatar correctly', async () => {
    const { container } = await render(<Avatar size="xlarge" initials="ZZ" />);
    expect(container).toMatchScreenshot();
  });

  it('renders avatar with image correctly', async () => {
    const { container } = await render(
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="John Doe" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders avatar with fallback correctly', async () => {
    const { container } = await render(
      <Avatar fallback="JD" alt="John Doe" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders avatar with children correctly', async () => {
    const { container } = await render(<Avatar>CH</Avatar>);
    expect(container).toMatchScreenshot();
  });
});
