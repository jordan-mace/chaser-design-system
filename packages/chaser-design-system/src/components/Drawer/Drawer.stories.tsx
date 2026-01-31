import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import React from 'react';

import { Drawer } from '.';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClose: fn() },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    isOpen: true,
    position: 'left',
    title: 'Left Drawer',
    children: 'This drawer slides in from the left side.',
  },
};

export const Right: Story = {
  args: {
    isOpen: true,
    position: 'right',
    title: 'Right Drawer',
    children: 'This drawer slides in from the right side.',
  },
};

export const Top: Story = {
  args: {
    isOpen: true,
    position: 'top',
    title: 'Top Drawer',
    children: 'This drawer slides in from the top.',
  },
};

export const Bottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: 'Bottom Drawer',
    children: 'This drawer slides in from the bottom.',
  },
};

export const WithFooter: Story = {
  args: {
    isOpen: true,
    position: 'right',
    title: 'Drawer with Footer',
    children: 'This drawer has a footer with action buttons.',
    footer: (
      <>
        <button>Cancel</button>
        <button>Save</button>
      </>
    ),
  },
};

export const SmallSize: Story = {
  args: {
    isOpen: true,
    position: 'right',
    size: 'small',
    title: 'Small Drawer',
    children: 'This is a small drawer.',
  },
};

export const LargeSize: Story = {
  args: {
    isOpen: true,
    position: 'right',
    size: 'large',
    title: 'Large Drawer',
    children: 'This is a large drawer.',
  },
};

export const FullSize: Story = {
  args: {
    isOpen: true,
    position: 'right',
    size: 'full',
    title: 'Full Drawer',
    children: 'This drawer takes up the full width.',
  },
};
