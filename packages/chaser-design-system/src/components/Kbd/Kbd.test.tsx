import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Kbd from './Kbd';
import React from 'react';

describe('Kbd', () => {
  it('renders keyboard shortcut', async () => {
    const { container } = await render(
      <Kbd>Ctrl</Kbd>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders multi-key shortcut', async () => {
    const { container } = await render(
      <span>
        <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
      </span>
    );
    expect(container).toMatchScreenshot();
  });
});
