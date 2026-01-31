import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Separator } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: () => (
    <Box width="100%">
      <p>Content above</p>
      <Separator orientation="horizontal" />
      <p>Content below</p>
    </Box>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: () => (
    <Box display="flex" height="100px" alignItems="center">
      <span>Left content</span>
      <Separator orientation="vertical" />
      <span>Right content</span>
    </Box>
  ),
};

export const Decorative: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
};
