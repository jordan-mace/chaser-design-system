import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Container } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <Box 
    padding="large" 
    background="c3-100" 
    style={{ textAlign: 'center' }}
  >
    Container Content
  </Box>
);

export const Small: Story = {
  args: {
    size: 'sm',
    children: <DemoContent />,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: <DemoContent />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <DemoContent />,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: <DemoContent />,
  },
};

export const FullWidth: Story = {
  args: {
    size: 'full',
    children: <DemoContent />,
  },
};

export const LeftAligned: Story = {
  args: {
    size: 'md',
    centerContent: false,
    children: <DemoContent />,
  },
};
