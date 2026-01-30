import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Radio } from '.';
import React from 'react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'option1',
  },
};

export const WithLabel: Story = {
  args: {
    value: 'option1',
    label: 'Select this option',
  },
};

export const Checked: Story = {
  args: {
    value: 'option1',
    label: 'Selected option',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 'option1',
    label: 'Disabled radio',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    value: 'option1',
    label: 'Disabled checked',
    disabled: true,
    checked: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <Radio.Group name="options" value="option2" onChange={fn()}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </Radio.Group>
  ),
};

export const HorizontalGroup: Story = {
  render: () => (
    <Radio.Group name="options" value="option1" layout="horizontal" onChange={fn()}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </Radio.Group>
  ),
};
