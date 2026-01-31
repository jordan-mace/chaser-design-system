import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AspectRatio } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = ({ children }: { children: React.ReactNode }) => (
  <Box 
    background="c4-200" 
    style={{ 
      width: '100%', 
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </Box>
);

export const Square: Story = {
  args: {
    ratio: '1/1',
    style: { width: '200px' },
    children: <DemoContent>Square (1:1)</DemoContent>,
  },
};

export const FourThree: Story = {
  args: {
    ratio: '4/3',
    style: { width: '240px' },
    children: <DemoContent>4:3 Ratio</DemoContent>,
  },
};

export const SixteenNine: Story = {
  args: {
    ratio: '16/9',
    style: { width: '320px' },
    children: <DemoContent>16:9 Widescreen</DemoContent>,
  },
};

export const UltraWide: Story = {
  args: {
    ratio: '21/9',
    style: { width: '420px' },
    children: <DemoContent>21:9 Ultra-wide</DemoContent>,
  },
};

export const NumericRatio: Story = {
  args: {
    ratio: 1.618,
    style: { width: '300px' },
    children: <DemoContent>Golden Ratio</DemoContent>,
  },
};

export const WithImage: Story = {
  args: {
    ratio: '16/9',
    style: { width: '400px' },
    children: (
      <img 
        src="https://via.placeholder.com/800x450" 
        alt="Example" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
};
