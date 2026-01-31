import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Collapse from './Collapse';
import React from 'react';

describe('Collapse', () => {
  it('renders when open', async () => {
    const { container } = await render(
      <Collapse isOpen={true}>
        <div>Collapsed content</div>
      </Collapse>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders when closed', async () => {
    const { container } = await render(
      <Collapse isOpen={false}>
        <div>Hidden content</div>
      </Collapse>
    );
    expect(container).toMatchScreenshot();
  });
});
