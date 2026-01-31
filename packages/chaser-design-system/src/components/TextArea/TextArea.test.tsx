import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import TextArea from './TextArea';
import React from 'react';

describe('TextArea', () => {
  it('renders correctly with label', async () => {
    const { container } = await render(<TextArea label={'Description'} />);
    expect(container).toMatchScreenshot();
  });

  it('renders correctly without label', async () => {
    const { container } = await render(<TextArea />);
    expect(container).toMatchScreenshot();
  });
});
