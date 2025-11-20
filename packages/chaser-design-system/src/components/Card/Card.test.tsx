import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Card from './Card';
import React from 'react';
import { P } from '../Text';

describe('Card', () => {
  it('renders elevated card correctly', async () => {
    const { container } = await render(
      <Card variant="elevated">
        <P>Card content</P>
      </Card>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders outlined card correctly', async () => {
    const { container } = await render(
      <Card variant="outlined">
        <P>Card content</P>
      </Card>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders filled card correctly', async () => {
    const { container } = await render(
      <Card variant="filled">
        <P>Card content</P>
      </Card>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with no padding', async () => {
    const { container } = await render(
      <Card variant="elevated" padding="none">
        <P>Card content</P>
      </Card>,
    );
    expect(container).toMatchScreenshot();
  });
});
