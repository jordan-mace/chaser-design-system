import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Accordion } from '.';
import React from 'react';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="section1" title="What is the design system?">
        <p>
          A design system is a collection of reusable components, guided by clear
          standards, that can be assembled to build any number of interfaces.
        </p>
      </Accordion.Item>
      <Accordion.Item value="section2" title="Why use it?">
        <p>
          It helps teams build products faster, ensures consistency across products,
          and makes it easier to maintain and scale the UI.
        </p>
      </Accordion.Item>
      <Accordion.Item value="section3" title="How to get started?">
        <p>
          Install the package, import the components you need, and start
          building your application with consistent styling.
        </p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const WithDefaultExpanded: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="section1" title="Getting Started" defaultExpanded>
        <p>Follow these steps to begin using the design system.</p>
      </Accordion.Item>
      <Accordion.Item value="section2" title="Components">
        <p>Browse through all available components in the library.</p>
      </Accordion.Item>
      <Accordion.Item value="section3" title="Theming">
        <p>Customize colors, fonts, and spacing to match your brand.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const AllowMultiple: Story = {
  render: () => (
    <Accordion allowMultiple>
      <Accordion.Item value="section1" title="Installation">
        <p>npm install @jordan-mace/chaser-design-system</p>
      </Accordion.Item>
      <Accordion.Item value="section2" title="Usage">
        <p>Import components and use them in your React app.</p>
      </Accordion.Item>
      <Accordion.Item value="section3" title="Configuration">
        <p>Set up the theme and global styles.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
