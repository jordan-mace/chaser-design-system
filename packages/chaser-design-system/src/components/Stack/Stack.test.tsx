import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Stack from './Stack';
import React from 'react';

describe('Stack', () => {
  it('renders vertical stack correctly', async () => {
    const { container } = await render(
      <Stack gap="medium">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders horizontal stack correctly', async () => {
    const { container } = await render(
      <Stack direction="row" gap="small">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with align and justify', async () => {
    const { container } = await render(
      <Stack direction="row" align="center" justify="between" gap="medium">
        <div>Left</div>
        <div>Right</div>
      </Stack>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders wrapped stack', async () => {
    const { container } = await render(
      <Stack direction="row" gap="small" wrap>
        <div style={{ minWidth: '200px' }}>Item 1</div>
        <div style={{ minWidth: '200px' }}>Item 2</div>
        <div style={{ minWidth: '200px' }}>Item 3</div>
      </Stack>
    );
    expect(container).toMatchScreenshot();
  });
});
