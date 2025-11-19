import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { P } from '.';

const meta = {
  title: 'Components/Text/P',
  component: P,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof P>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Welcome back, User!',
  },
};
