import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import React from 'react';

import { TextArea } from '.';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width TextArea',
    fullWidth: true,
    placeholder: 'This takes full width...',
  },
};
