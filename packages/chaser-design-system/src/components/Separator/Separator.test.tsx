import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Separator from './Separator';
import React from 'react';

describe('Separator', () => {
  it('renders horizontal separator', async () => {
    const { container } = await render(
      <Separator orientation="horizontal" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders vertical separator', async () => {
    const { container } = await render(
      <div style={{ height: '100px' }}>
        <Separator orientation="vertical" />
      </div>
    );
    expect(container).toMatchScreenshot();
  });
});
