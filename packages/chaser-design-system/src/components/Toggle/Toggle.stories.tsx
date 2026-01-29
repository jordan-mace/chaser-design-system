import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Toggle } from '.';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'flex-start',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Notifications',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Enabled',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Disabled',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small toggle',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium toggle',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large toggle',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: 'Disabled toggle',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Disabled checked',
    disabled: true,
  },
};

export const WithOnChange: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        label={`Toggle is ${checked ? 'ON' : 'OFF'}`}
      />
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <>
      <Toggle size="small" label="Small" />
      <Toggle size="medium" label="Medium" checked />
      <Toggle size="large" label="Large" />
    </>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <>
      <Toggle checked label="Dark Mode" />
      <Toggle label="Notifications" />
      <Toggle checked label="Auto-save" />
    </>
  ),
};

export const NoLabel: Story = {
  args: {
    checked: false,
  },
};
