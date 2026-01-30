import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Tag from './Tag';
import React from 'react';

describe('Tag', () => {
  it('renders default tag correctly', async () => {
    const { container } = await render(<Tag>Default Tag</Tag>);
    expect(container).toMatchScreenshot();
  });

  it('renders primary tag correctly', async () => {
    const { container } = await render(<Tag variant="primary">Primary Tag</Tag>);
    expect(container).toMatchScreenshot();
  });

  it('renders success tag correctly', async () => {
    const { container } = await render(<Tag variant="success">Success Tag</Tag>);
    expect(container).toMatchScreenshot();
  });

  it('renders warning tag correctly', async () => {
    const { container } = await render(<Tag variant="warning">Warning Tag</Tag>);
    expect(container).toMatchScreenshot();
  });

  it('renders error tag correctly', async () => {
    const { container } = await render(<Tag variant="error">Error Tag</Tag>);
    expect(container).toMatchScreenshot();
  });

  it('renders removable tag correctly', async () => {
    const { container } = await render(<Tag removable>Removable Tag</Tag>);
    expect(container).toMatchScreenshot();
  });

  it('renders tag group correctly', async () => {
    const { container } = await render(
      <Tag.Group>
        <Tag>Tag 1</Tag>
        <Tag variant="primary">Tag 2</Tag>
        <Tag variant="success">Tag 3</Tag>
        <Tag variant="warning">Tag 4</Tag>
        <Tag variant="error">Tag 5</Tag>
      </Tag.Group>,
    );
    expect(container).toMatchScreenshot();
  });
});
