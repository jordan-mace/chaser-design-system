import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import VisuallyHidden from './VisuallyHidden';
import React from 'react';

describe('VisuallyHidden', () => {
  it('renders visually hidden content', async () => {
    const { container } = await render(
      <VisuallyHidden>Screen reader only text</VisuallyHidden>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders as different element', async () => {
    const { container } = await render(
      <VisuallyHidden as="span">Hidden span content</VisuallyHidden>
    );
    expect(container).toMatchScreenshot();
  });
});
