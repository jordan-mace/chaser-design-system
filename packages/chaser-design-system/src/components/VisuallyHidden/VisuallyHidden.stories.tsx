import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { VisuallyHidden } from '.';

const meta = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This text is visually hidden but accessible to screen readers',
  },
};

export const AsSpan: Story = {
  args: {
    as: 'span',
    children: 'Hidden span element',
  },
};

export const WithVisibleContent: Story = {
  args: {
    children: 'Screen reader label',
  },
  render: () => (
    <div>
      <button>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden="true">×</span>
      </button>
    </div>
  ),
};
