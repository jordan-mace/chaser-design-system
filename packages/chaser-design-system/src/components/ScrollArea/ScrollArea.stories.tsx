import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { ScrollArea } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const LongContent = () => (
  <div>
    {Array.from({ length: 20 }, (_, i) => (
      <Box key={i} padding="small" background={i % 2 === 0 ? 'c1-50' : 'c1-100'}>
        Item {i + 1}
      </Box>
    ))}
  </div>
);

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    maxHeight: '200px',
    children: <LongContent />,
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    maxWidth: '300px',
    children: (
      <div style={{ whiteSpace: 'nowrap' }}>
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} style={{ marginRight: '20px' }}>
            Horizontal item {i + 1}
          </span>
        ))}
      </div>
    ),
  },
};

export const Both: Story = {
  args: {
    orientation: 'both',
    maxHeight: '200px',
    maxWidth: '300px',
    children: (
      <div style={{ width: '500px' }}>
        <LongContent />
      </div>
    ),
  },
};
