import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar } from '.';
import React from 'react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'JD',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'AB',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'CD',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'EF',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
    children: 'GH',
  },
};

export const WithImage: Story = {
  args: {
    size: 'large',
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'John Doe',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'JK',
    alt: 'Jane Kennedy',
  },
};

export const WithChildren: Story = {
  args: {
    size: 'large',
    children: 'LM',
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '-8px', alignItems: 'center' }}>
      <Avatar size="small" children="A" src="https://i.pravatar.cc/150?img=1" />
      <Avatar size="small" children="B" src="https://i.pravatar.cc/150?img=2" />
      <Avatar size="small" children="C" src="https://i.pravatar.cc/150?img=3" />
      <Avatar size="small" children="+3" />
    </div>
  ),
};
