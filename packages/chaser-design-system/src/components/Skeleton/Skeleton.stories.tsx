import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { Skeleton } from '.';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    width: 200,
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: 48,
    height: 48,
  },
};

export const Rectangle: Story = {
  args: {
    variant: 'rectangle',
    width: 200,
    height: 100,
  },
};

export const MultipleLines: Story = {
  args: {
    variant: 'text',
    count: 3,
    width: 300,
  },
};

export const PulseAnimation: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 200,
  },
};

export const NoAnimation: Story = {
  args: {
    variant: 'text',
    animation: 'none',
    width: 200,
  },
};

export const DifferentSizes: Story = {
  args: {
    variant: 'text',
    width: 200,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Skeleton size="small" width={200} />
      <Skeleton size="medium" width={200} />
      <Skeleton size="large" width={200} />
    </div>
  ),
};
