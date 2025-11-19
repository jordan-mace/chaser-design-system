import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Input from './Input';
import React from 'react';

describe('Input', () => {
  it('renders correctly with label', async () => {
    const { container } = await render(<Input label={'Hello'} />);
    expect(container).toMatchScreenshot();
  });

  it('renders correctly without label', async () => {
    const { container } = await render(<Input />);
    expect(container).toMatchScreenshot();
  });
});
