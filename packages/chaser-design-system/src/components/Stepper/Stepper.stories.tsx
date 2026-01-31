import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Stepper } from '.';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Personal', description: 'Add personal details' },
  { title: 'Review', description: 'Review your information' },
  { title: 'Complete', description: 'Finish registration' },
];

export const FirstStep: Story = {
  args: {
    steps,
    currentStep: 0,
    orientation: 'horizontal',
  },
};

export const MiddleStep: Story = {
  args: {
    steps,
    currentStep: 2,
    orientation: 'horizontal',
  },
};

export const AllCompleted: Story = {
  args: {
    steps,
    currentStep: 4,
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    steps,
    currentStep: 1,
    orientation: 'vertical',
  },
};

export const WithoutConnectors: Story = {
  args: {
    steps,
    currentStep: 1,
    orientation: 'horizontal',
    showConnectors: false,
  },
};

export const Clickable: Story = {
  args: {
    steps,
    currentStep: 1,
    orientation: 'horizontal',
    clickable: true,
    onStepClick: fn(),
  },
};

export const CustomStatus: Story = {
  args: {
    steps: [
      { title: 'Step 1', description: 'Completed step', status: 'completed' },
      { title: 'Step 2', description: 'Current step', status: 'current' },
      { title: 'Step 3', description: 'Pending step', status: 'pending' },
    ],
    orientation: 'horizontal',
  },
};
