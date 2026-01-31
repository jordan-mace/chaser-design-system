import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Kbd } from '.';

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleKey: Story = {
  args: {
    children: '⌘',
  },
};

export const MultipleKeys: Story = {
  render: () => (
    <span>
      <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
    </span>
  ),
};

export const ComplexShortcut: Story = {
  render: () => (
    <span>
      Press <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to open command palette
    </span>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ lineHeight: '1.6' }}>
      <p>
        Use <Kbd>Tab</Kbd> to navigate between fields.
      </p>
      <p>
        Press <Kbd>Enter</Kbd> to submit the form.
      </p>
      <p>
        Press <Kbd>Esc</Kbd> to cancel.
      </p>
    </div>
  ),
};
