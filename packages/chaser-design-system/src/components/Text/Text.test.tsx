import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { Header, P } from './';
import React from 'react';

describe('P', () => {
  it('renders correctly', async () => {
    const { container } = await render(<P>Hello</P>);
    expect(container).toMatchScreenshot();
  });
});

describe('Header', () => {
  it('renders h1 correctly', async () => {
    const { container } = await render(
      <Header variant="h1" label="Hello world!" />,
    );
    expect(container).toMatchScreenshot();
  });
  it('renders h2 correctly', async () => {
    const { container } = await render(
      <Header variant="h2" label="Hello world!" />,
    );
    expect(container).toMatchScreenshot();
  });
  it('renders h3 correctly', async () => {
    const { container } = await render(
      <Header variant="h3" label="Hello world!" />,
    );
    expect(container).toMatchScreenshot();
  });
});
