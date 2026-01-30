import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Select from './Select';
import React from 'react';

describe('Select', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('renders select correctly', async () => {
    const { container } = await render(<Select options={options} />);
    expect(container).toMatchScreenshot();
  });

  it('renders select with label correctly', async () => {
    const { container } = await render(
      <Select label="Choose an option" options={options} />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders select with error state correctly', async () => {
    const { container } = await render(
      <Select label="Choose an option" options={options} error />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders disabled select correctly', async () => {
    const { container } = await render(
      <Select label="Choose an option" options={options} disabled />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders select with disabled option correctly', async () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ];
    const { container } = await render(
      <Select options={optionsWithDisabled} />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders select with selected value correctly', async () => {
    const { container } = await render(
      <Select options={options} defaultValue="option2" />,
    );
    expect(container).toMatchScreenshot();
  });
});
