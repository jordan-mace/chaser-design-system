import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Progress } from '.';
const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    label: 'Upload Progress',
  },
};

export const WithPercentage: Story = {
  args: {
    value: 60,
    label: 'Uploading files',
    showPercentage: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Complete',
    showPercentage: true,
  },
};

export const Warning: Story = {
  args: {
    value: 70,
    variant: 'warning',
    label: 'Warning threshold',
    showPercentage: true,
  },
};

export const Error: Story = {
  args: {
    value: 30,
    variant: 'error',
    label: 'Error: Insufficient storage',
    showPercentage: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 150,
    max: 200,
    label: 'Storage Usage',
    showPercentage: true,
  },
};
