import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import NumberInput from './NumberInput';
import React from 'react';

describe('NumberInput', () => {
  it('renders correctly with label', async () => {
    const { container } = await render(
      <NumberInput label="Quantity" value={5} />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with stepper on left', async () => {
    const { container } = await render(
      <NumberInput label="Amount" value={10} stepperPosition="left" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with error state', async () => {
    const { container } = await render(
      <NumberInput 
        label="Value" 
        value={100} 
        error={true} 
        errorMessage="Value exceeds maximum limit" 
      />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders disabled state', async () => {
    const { container } = await render(
      <NumberInput label="Read Only" value={42} disabled={true} />
    );
    expect(container).toMatchScreenshot();
  });
});
