import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Card } from '.';
import React from 'react';
import { P } from '../Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          maxWidth: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <P>This is an elevated card with a shadow effect.</P>
        <P>It stands out from the background nicely.</P>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <P>This is an outlined card with a border.</P>
        <P>It has a clean, minimal appearance.</P>
      </>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <>
        <P>This is a filled card with background color.</P>
        <P>It provides subtle visual separation.</P>
      </>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    variant: 'elevated',
    padding: 'none',
    children: (
      <div style={{ padding: '1rem' }}>
        <P>This card has no built-in padding.</P>
        <P>Useful when you need full control over spacing.</P>
      </div>
    ),
  },
};
