import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Badge } from '.';
import React from 'react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'flex-start',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Badge',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Badge',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Badge',
  },
};

export const Dot: Story = {
  args: {
    dot: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </>
  ),
};

export const AllDots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Badge variant="default" dot />
      <Badge variant="success" dot />
      <Badge variant="warning" dot />
      <Badge variant="error" dot />
      <Badge variant="info" dot />
    </div>
  ),
};

export const Combined: Story = {
  render: () => (
    <>
      <Badge variant="default" size="small">
        Small Default
      </Badge>
      <Badge variant="success" size="medium">
        Medium Success
      </Badge>
      <Badge variant="error" size="large">
        Large Error
      </Badge>
    </>
  ),
};
