import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Skeleton from './Skeleton';
import React from 'react';

describe('Skeleton', () => {
  it('renders correctly as text variant', async () => {
    const { container } = await render(<Skeleton variant="text" />);
    expect(container).toMatchScreenshot();
  });

  it('renders correctly as circle variant', async () => {
    const { container } = await render(<Skeleton variant="circle" width={48} height={48} />);
    expect(container).toMatchScreenshot();
  });

  it('renders correctly as rectangle variant', async () => {
    const { container } = await render(<Skeleton variant="rectangle" width={200} height={100} />);
    expect(container).toMatchScreenshot();
  });

  it('renders multiple skeletons with count', async () => {
    const { container } = await render(<Skeleton count={3} />);
    expect(container).toMatchScreenshot();
  });

  it('renders with pulse animation', async () => {
    const { container } = await render(<Skeleton animation="pulse" />);
    expect(container).toMatchScreenshot();
  });

  it('renders without animation', async () => {
    const { container } = await render(<Skeleton animation="none" />);
    expect(container).toMatchScreenshot();
  });
});
