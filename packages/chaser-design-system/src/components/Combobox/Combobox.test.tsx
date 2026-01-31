import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Combobox from './Combobox';
import React from 'react';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Combobox', () => {
  it('renders correctly with label', async () => {
    const { container } = await render(
      <Combobox label="Select an option" options={options} placeholder="Search options..." />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with selected value', async () => {
    const { container } = await render(
      <Combobox label="Select" options={options} value="option2" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with error state', async () => {
    const { container } = await render(
      <Combobox 
        label="Select" 
        options={options} 
        error={true} 
        errorMessage="Please select a valid option" 
      />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with hint text', async () => {
    const { container } = await render(
      <Combobox 
        label="Select" 
        options={options} 
        hint="Type to search through available options" 
      />
    );
    expect(container).toMatchScreenshot();
  });
});
