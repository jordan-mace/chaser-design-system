import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <Box 
    padding="medium" 
    background="c1-200" 
    style={{ minWidth: '100px', textAlign: 'center' }}
  >
    {children}
  </Box>
);

export const Vertical: Story = {
  args: {
    direction: 'column',
    gap: 'medium',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'row',
    gap: 'medium',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const WithAlignment: Story = {
  args: {
    direction: 'row',
    gap: 'small',
    align: 'center',
    justify: 'center',
    children: (
      <>
        <DemoBox>Center</DemoBox>
        <DemoBox>Aligned</DemoBox>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    direction: 'row',
    gap: 'small',
    justify: 'between',
    children: (
      <>
        <DemoBox>Left</DemoBox>
        <DemoBox>Right</DemoBox>
      </>
    ),
  },
};

export const Wrapped: Story = {
  args: {
    direction: 'row',
    gap: 'small',
    wrap: true,
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
        <DemoBox>Item 6</DemoBox>
      </>
    ),
  },
};

export const DifferentGaps: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <Stack gap="small">
          <DemoBox>Small Gap</DemoBox>
          <DemoBox>Item</DemoBox>
        </Stack>
        <Stack gap="medium" style={{ marginTop: '1rem' }}>
          <DemoBox>Medium Gap</DemoBox>
          <DemoBox>Item</DemoBox>
        </Stack>
        <Stack gap="large" style={{ marginTop: '1rem' }}>
          <DemoBox>Large Gap</DemoBox>
          <DemoBox>Item</DemoBox>
        </Stack>
      </>
    ),
  },
};
