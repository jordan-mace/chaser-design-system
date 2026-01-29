import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Divider } from '.';
import React from 'react';

const meta = {
  title: 'Components/Divider',
  component: Divider,
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
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    size: 'medium',
  },
  render: () => (
    <div>
      <p>Content above divider</p>
      <Divider />
      <p>Content below divider</p>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div>
      <p>Content above divider</p>
      <Divider size="small" />
      <p>Content below divider</p>
    </div>
  ),
};

export const Medium: Story = {
  render: () => (
    <div>
      <p>Content above divider</p>
      <Divider size="medium" />
      <p>Content below divider</p>
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <div>
      <p>Content above divider</p>
      <Divider size="large" />
      <p>Content below divider</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>Left content</span>
      <Divider orientation="vertical" />
      <span>Right content</span>
    </div>
  ),
};

export const VerticalSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <span>Small:</span>
      <Divider orientation="vertical" size="small" />
      <span>Content</span>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div>
      <p>Section 1</p>
      <Divider />
      <p>Section 2</p>
      <Divider size="small" />
      <p>Section 3</p>
      <Divider size="large" />
      <p>Section 4</p>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div>
      <h3>Section Title</h3>
      <Divider />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider />
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  ),
};
