import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Popover from './Popover';
import React from 'react';
import { Button } from '../Button';

describe('Popover', () => {
  it('renders correctly with default props', async () => {
    const { container } = await render(
      <Popover
        trigger={<Button variant="primary" label="Click me" />}
        title="Popover Title"
        defaultOpen={true}
      >
        Popover content goes here
      </Popover>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders without title', async () => {
    const { container } = await render(
      <Popover
        trigger={<Button variant="primary" label="Hover me" />}
        triggerType="hover"
        defaultOpen={true}
      >
        Simple popover content
      </Popover>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with footer', async () => {
    const { container } = await render(
      <Popover
        trigger={<Button variant="primary" label="Open" />}
        title="Confirmation"
        footer={<button>Confirm</button>}
        defaultOpen={true}
      >
        Are you sure you want to proceed?
      </Popover>
    );
    expect(container).toMatchScreenshot();
  });
});
