import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Tabs } from '.';
import React from 'react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Overview</Tabs.Tab>
        <Tabs.Tab value="tab2">Details</Tabs.Tab>
        <Tabs.Tab value="tab3">Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <div>
          <h3>Overview Content</h3>
          <p>This is the overview tab content.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <div>
          <h3>Details Content</h3>
          <p>This is the details tab content.</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <div>
          <h3>Settings Content</h3>
          <p>This is the settings tab content.</p>
        </div>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tabs defaultValue="tab1" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="tab1">Overview</Tabs.Tab>
          <Tabs.Tab value="tab2">Details</Tabs.Tab>
          <Tabs.Tab value="tab3">Settings</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <div style={{ flex: 1 }}>
        <Tabs defaultValue="tab1">
          <Tabs.Panel value="tab1">
            <h3>Overview Content</h3>
            <p>This is the overview tab content.</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab2">
            <h3>Details Content</h3>
            <p>This is the details tab content.</p>
          </Tabs.Panel>
          <Tabs.Panel value="tab3">
            <h3>Settings Content</h3>
            <p>This is the settings tab content.</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  ),
};

export const WithDisabledTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Active Tab</Tabs.Tab>
        <Tabs.Tab value="tab2" disabled>
          Disabled Tab
        </Tabs.Tab>
        <Tabs.Tab value="tab3">Another Tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <h3>Active Content</h3>
        <p>This tab is active.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <h3>Disabled Content</h3>
        <p>This tab is disabled.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <h3>Another Content</h3>
        <p>More content here.</p>
      </Tabs.Panel>
    </Tabs>
  ),
};
