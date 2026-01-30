import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Tag } from '.';
import React from 'react';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onRemove: fn() },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Tag',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Tag',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Tag',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Tag',
  },
};

export const Removable: Story = {
  args: {
    removable: true,
    children: 'Removable Tag',
  },
};

export const TagGroup: Story = {
  render: () => (
    <Tag.Group>
      <Tag>React</Tag>
      <Tag variant="primary">TypeScript</Tag>
      <Tag variant="success">JavaScript</Tag>
      <Tag variant="warning">CSS</Tag>
      <Tag variant="error">HTML</Tag>
      <Tag removable>Node.js</Tag>
    </Tag.Group>
  ),
};
