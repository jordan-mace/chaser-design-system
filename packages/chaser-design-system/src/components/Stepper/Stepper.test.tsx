import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Stepper from './Stepper';
import React from 'react';

describe('Stepper', () => {
  const steps = [
    { title: 'Step 1', description: 'Description for step 1' },
    { title: 'Step 2', description: 'Description for step 2' },
    { title: 'Step 3', description: 'Description for step 3' },
  ];

  it('renders horizontal stepper at first step', async () => {
    const { container } = await render(
      <Stepper steps={steps} currentStep={0} orientation="horizontal" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders horizontal stepper at middle step', async () => {
    const { container } = await render(
      <Stepper steps={steps} currentStep={1} orientation="horizontal" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders horizontal stepper with all completed', async () => {
    const { container } = await render(
      <Stepper steps={steps} currentStep={3} orientation="horizontal" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders vertical stepper', async () => {
    const { container } = await render(
      <Stepper steps={steps} currentStep={1} orientation="vertical" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders without connectors', async () => {
    const { container } = await render(
      <Stepper steps={steps} currentStep={1} showConnectors={false} />
    );
    expect(container).toMatchScreenshot();
  });
});
