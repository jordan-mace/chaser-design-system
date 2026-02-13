import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Collapse } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
    children: (
      <Box padding="medium" background="c1-100">
        This content is visible and can be collapsed.
      </Box>
    ),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    children: (
      <Box padding="medium" background="c1-100">
        This content is hidden when collapsed.
      </Box>
    ),
  },
};

export const HeightOnly: Story = {
  args: {
    isOpen: true,
    animation: 'height',
    children: (
      <Box padding="medium" background="c2-100">
        Height-only animation
      </Box>
    ),
  },
};

export const OpacityOnly: Story = {
  args: {
    isOpen: true,
    animation: 'opacity',
    children: (
      <Box padding="medium" background="c3-100">
        Opacity-only animation
      </Box>
    ),
  },
};
