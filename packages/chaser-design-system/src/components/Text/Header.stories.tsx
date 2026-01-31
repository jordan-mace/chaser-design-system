import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { Header } from '.';

const meta = {
  title: 'Components/Text/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
  },
  render: (args) => (
    <Header {...args}>Welcome back, User!</Header>
  ),
};

export const H2: Story = {
  args: {
    variant: 'h2',
  },
  render: (args) => (
    <Header {...args}>Welcome back, User!</Header>
  ),
};

export const H3: Story = {
  args: {
    variant: 'h3',
  },
  render: (args) => (
    <Header {...args}>Welcome back, User!</Header>
  ),
};
