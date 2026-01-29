import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Tooltip } from '.';
import React from 'react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
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
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button>Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <button>Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <button>Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <button>Hover me</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <button>Hover me</button>,
  },
};

export const WithArrow: Story = {
  args: {
    content: 'Tooltip with arrow',
    showArrow: true,
    children: <button>Hover me</button>,
  },
};

export const WithoutArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    showArrow: false,
    children: <button>Hover me</button>,
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a much longer tooltip text to test how it handles extended content',
    children: <button>Hover me</button>,
  },
};

export const MultiplePositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Tooltip content="Top tooltip" position="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button>Left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button>Right</button>
      </Tooltip>
    </div>
  ),
};
