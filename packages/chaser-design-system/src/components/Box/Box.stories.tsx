import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'span', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav', 'button', 'a'],
      description: 'HTML element to render as',
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    paddingX: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    paddingY: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    margin: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    marginX: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    marginY: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    display: {
      control: 'select',
      options: ['none', 'flex', 'block', 'inline'],
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column'],
    },
    justifyContent: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    },
    alignItems: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end'],
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    background: {
      control: 'select',
      options: [
        'c1-50', 'c1-100', 'c1-200', 'c1-300', 'c1-400', 'c1-500', 'c1-600', 'c1-700', 'c1-800', 'c1-900',
        'c2-50', 'c2-100', 'c2-200', 'c2-300', 'c2-400', 'c2-500', 'c2-600', 'c2-700', 'c2-800', 'c2-900',
        'c3-50', 'c3-100', 'c3-200', 'c3-300', 'c3-400', 'c3-500', 'c3-600', 'c3-700', 'c3-800', 'c3-900',
        'c4-50', 'c4-100', 'c4-200', 'c4-300', 'c4-400', 'c4-500', 'c4-600', 'c4-700', 'c4-800', 'c4-900',
        'c5-50', 'c5-100', 'c5-200', 'c5-300', 'c5-400', 'c5-500', 'c5-600', 'c5-700', 'c5-800', 'c5-900',
      ],
    },
    color: {
      control: 'select',
      options: [
        'c1-50', 'c1-100', 'c1-200', 'c1-300', 'c1-400', 'c1-500', 'c1-600', 'c1-700', 'c1-800', 'c1-900',
        'c2-50', 'c2-100', 'c2-200', 'c2-300', 'c2-400', 'c2-500', 'c2-600', 'c2-700', 'c2-800', 'c2-900',
        'c3-50', 'c3-100', 'c3-200', 'c3-300', 'c3-400', 'c3-500', 'c3-600', 'c3-700', 'c3-800', 'c3-900',
        'c4-50', 'c4-100', 'c4-200', 'c4-300', 'c4-400', 'c4-500', 'c4-600', 'c4-700', 'c4-800', 'c4-900',
        'c5-50', 'c5-100', 'c5-200', 'c5-300', 'c5-400', 'c5-500', 'c5-600', 'c5-700', 'c5-800', 'c5-900',
      ],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    width: {
      control: 'select',
      options: ['auto', '100%', '50%', '25%'],
    },
    height: {
      control: 'select',
      options: ['auto', '100%', '50%', '25%'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, I am a Box!',
    padding: 'medium',
    background: 'c1-100',
  },
};

export const Polymorphic: Story = {
  args: {
    as: 'button',
    children: 'I render as a button',
    padding: 'medium',
    background: 'c1-500',
    color: 'c5-50',
    borderRadius: 'medium',
  },
};

export const FlexContainer: Story = {
  args: {
    display: 'flex',
    flexDirection: 'row',
    gap: 'medium',
    padding: 'large',
    background: 'c2-100',
    children: (
      <>
        <Box padding="medium" background="c1-200">Item 1</Box>
        <Box padding="medium" background="c1-200">Item 2</Box>
        <Box padding="medium" background="c1-200">Item 3</Box>
      </>
    ),
  },
};

export const ResponsivePadding: Story = {
  args: {
    children: 'Responsive padding example',
    padding: { mobile: 'small', tablet: 'medium', desktop: 'large' },
    background: 'c3-100',
  },
};

export const SemanticElements: Story = {
  args: {
    as: 'article',
    children: 'This is an article element',
    padding: 'large',
    background: 'c4-100',
    borderRadius: 'large',
  },
};

export const NestedBoxes: Story = {
  render: () => (
    <Box
      display="flex"
      flexDirection="column"
      gap="medium"
      padding="large"
      background="c5-100"
      borderRadius="large"
    >
      <Box padding="medium" background="c1-200" borderRadius="medium">
        Nested Box 1
      </Box>
      <Box padding="medium" background="c2-200" borderRadius="medium">
        Nested Box 2
      </Box>
      <Box
        display="flex"
        gap="small"
        padding="medium"
        background="c3-200"
        borderRadius="medium"
      >
        <Box padding="small" background="c1-300">A</Box>
        <Box padding="small" background="c1-300">B</Box>
        <Box padding="small" background="c1-300">C</Box>
      </Box>
    </Box>
  ),
};
