import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Radio from './Radio';
import React from 'react';

describe('Radio', () => {
  it('renders unchecked radio correctly', async () => {
    const { container } = await render(<Radio value="option1" />);
    expect(container).toMatchScreenshot();
  });

  it('renders checked radio correctly', async () => {
    const { container } = await render(
      <Radio value="option1" checked readOnly />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders radio with label correctly', async () => {
    const { container } = await render(
      <Radio value="option1" label="Option 1" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders disabled radio correctly', async () => {
    const { container } = await render(
      <Radio value="option1" disabled label="Disabled option" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders radio group correctly', async () => {
    const { container } = await render(
      <Radio.Group name="options" value="option2">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </Radio.Group>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders horizontal radio group correctly', async () => {
    const { container } = await render(
      <Radio.Group name="options" value="option1" layout="horizontal">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </Radio.Group>,
    );
    expect(container).toMatchScreenshot();
  });
});
