import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import React from 'react';
import { NumberInput } from '.';

const meta = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Quantity',
    value: 5,
    min: 0,
    max: 100,
    step: 1,
    onChange: fn(),
  },
};

export const WithHint: Story = {
  args: {
    label: 'Items to order',
    value: 1,
    min: 1,
    max: 50,
    hint: 'Minimum order: 1, Maximum: 50',
    onChange: fn(),
  },
};

export const StepperLeft: Story = {
  args: {
    label: 'Amount',
    value: 10,
    stepperPosition: 'left',
    onChange: fn(),
  },
};

export const WithError: Story = {
  args: {
    label: 'Age',
    value: 150,
    min: 0,
    max: 120,
    error: true,
    errorMessage: 'Age must be between 0 and 120',
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Fixed Amount',
    value: 42,
    disabled: true,
    onChange: fn(),
  },
};

export const DecimalStep: Story = {
  args: {
    label: 'Price',
    value: 9.99,
    min: 0,
    max: 1000,
    step: 0.01,
    placeholder: '0.00',
    onChange: fn(),
  },
};

export const LargeStep: Story = {
  args: {
    label: 'Volume',
    value: 100,
    min: 0,
    max: 1000,
    step: 50,
    onChange: fn(),
  },
};

export const AllowEmpty: Story = {
  args: {
    label: 'Optional Count',
    value: '',
    allowEmpty: true,
    placeholder: 'Leave empty for default',
    onChange: fn(),
  },
};
