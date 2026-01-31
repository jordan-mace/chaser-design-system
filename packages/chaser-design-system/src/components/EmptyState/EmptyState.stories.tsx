import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import React from 'react';
import { EmptyState } from '.';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <span style={{ fontSize: '48px' }}>📭</span>,
    title: 'No items found',
    description: 'Get started by creating a new item',
    action: <button onClick={fn()}>Create Item</button>,
  },
};

export const Minimal: Story = {
  args: {
    title: 'Nothing to display',
  },
};

export const NoAction: Story = {
  args: {
    icon: <span style={{ fontSize: '48px' }}>🔍</span>,
    title: 'No search results',
    description: 'Try adjusting your search or filters',
  },
};

export const NoDescription: Story = {
  args: {
    icon: <span style={{ fontSize: '48px' }}>📊</span>,
    title: 'No data available',
    action: <button onClick={fn()}>Import Data</button>,
  },
};
