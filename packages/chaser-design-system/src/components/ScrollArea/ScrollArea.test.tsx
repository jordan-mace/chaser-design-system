import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import ScrollArea from './ScrollArea';
import React from 'react';

describe('ScrollArea', () => {
  it('renders with vertical scroll', async () => {
    const { container } = await render(
      <ScrollArea maxHeight="100px">
        <div style={{ height: '200px' }}>Scrollable content</div>
      </ScrollArea>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with horizontal scroll', async () => {
    const { container } = await render(
      <ScrollArea orientation="horizontal" maxWidth="100px">
        <div style={{ width: '200px' }}>Wide content</div>
      </ScrollArea>
    );
    expect(container).toMatchScreenshot();
  });
});
