import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Form } from '.';
import FormInput from './FormInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Login: Story = {
  args: {
    children: (
      <>
        <FormInput label="Username" placeholder="user" />
        <FormInput label="Password" type="password" placeholder="••••••••" />
      </>
    ),
  },
};
