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
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        label="Notifications"
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        label="Enabled"
      />
    );
  },
};

export const Unchecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        label="Disabled"
      />
    );
  },
};

export const Small: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        size="small"
        label="Small toggle"
      />
    );
  },
};

export const Medium: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        size="medium"
        label="Medium toggle"
      />
    );
  },
};

export const Large: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        size="large"
        label="Large toggle"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        label="Disabled toggle"
        disabled
      />
    );
  },
};

export const DisabledChecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Toggle
        checked={checked}
        onChange={setChecked}
        label="Disabled checked"
        disabled
      />
    );
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
  render: () => {
    const [small, setSmall] = useState(false);
    const [medium, setMedium] = useState(true);
    const [large, setLarge] = useState(false);
    return (
      <>
        <Toggle size="small" label="Small" checked={small} onChange={setSmall} />
        <Toggle size="medium" label="Medium" checked={medium} onChange={setMedium} />
        <Toggle size="large" label="Large" checked={large} onChange={setLarge} />
      </>
    );
  },
};

export const WithLabels: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    return (
      <>
        <Toggle checked={darkMode} onChange={setDarkMode} label="Dark Mode" />
        <Toggle checked={notifications} onChange={setNotifications} label="Notifications" />
        <Toggle checked={autoSave} onChange={setAutoSave} label="Auto-save" />
      </>
    );
  },
};

export const NoLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Toggle checked={checked} onChange={setChecked} />;
  },
};
