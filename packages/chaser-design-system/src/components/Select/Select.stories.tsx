import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Select } from '.';
import React from 'react';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Choose an option',
    options,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Choose an option',
    options,
    defaultValue: 'option2',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Choose an option',
    placeholder: 'Select...',
    options: [
      { value: '', label: 'Select...', disabled: true },
      ...options,
    ],
  },
};

export const Error: Story = {
  args: {
    label: 'Choose an option',
    options,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Choose an option',
    options,
    disabled: true,
    defaultValue: 'option2',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Choose an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2 (disabled)', disabled: true },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ],
  },
};

export const NotFullWidth: Story = {
  args: {
    label: 'Choose an option',
    options,
    fullWidth: false,
  },
};
