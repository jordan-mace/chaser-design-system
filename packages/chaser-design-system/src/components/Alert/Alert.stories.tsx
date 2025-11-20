import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Alert } from '.';
import React from 'react';
import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          maxWidth: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: { onDismiss: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    severity: 'success',
    children: 'This is a success alert — check it out!',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'This is a warning alert — check it out!',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'This is an error alert — check it out!',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'This is an info alert — check it out!',
  },
};

export const Dismissible: Story = {
  args: {
    severity: 'info',
    dismissible: true,
    children: 'This alert can be dismissed. Click the × button.',
  },
};

export const LongContent: Story = {
  args: {
    severity: 'warning',
    dismissible: true,
    children:
      'This is a longer alert message that demonstrates how the component handles multiple lines of text. It should wrap nicely and maintain proper spacing throughout.',
  },
};
