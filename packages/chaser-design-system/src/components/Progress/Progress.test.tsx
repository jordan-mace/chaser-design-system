import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Progress from './Progress';
import React from 'react';

describe('Progress', () => {
  it('renders progress correctly', async () => {
    const { container } = await render(<Progress value={50} />);
    expect(container).toMatchScreenshot();
  });

  it('renders progress with label correctly', async () => {
    const { container } = await render(
      <Progress value={75} label="Loading..." />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders progress with percentage correctly', async () => {
    const { container } = await render(
      <Progress value={30} showPercentage />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders success progress correctly', async () => {
    const { container } = await render(
      <Progress value={100} variant="success" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders warning progress correctly', async () => {
    const { container } = await render(
      <Progress value={60} variant="warning" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders error progress correctly', async () => {
    const { container } = await render(
      <Progress value={25} variant="error" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders custom max value correctly', async () => {
    const { container } = await render(
      <Progress value={150} max={200} />,
    );
    expect(container).toMatchScreenshot();
  });
});
