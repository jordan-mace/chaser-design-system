import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Container from './Container';
import React from 'react';

describe('Container', () => {
  it('renders with small size', async () => {
    const { container } = await render(
      <Container size="sm">
        <div>Small container content</div>
      </Container>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with medium size', async () => {
    const { container } = await render(
      <Container size="md">
        <div>Medium container content</div>
      </Container>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with large size', async () => {
    const { container } = await render(
      <Container size="lg">
        <div>Large container content</div>
      </Container>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with full width', async () => {
    const { container } = await render(
      <Container size="full" centerContent={false}>
        <div>Full width content</div>
      </Container>
    );
    expect(container).toMatchScreenshot();
  });
});
