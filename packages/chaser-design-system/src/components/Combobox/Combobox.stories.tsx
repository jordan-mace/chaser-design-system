import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Combobox } from '.';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

export const Default: Story = {
  args: {
    label: 'Select Framework',
    options,
    placeholder: 'Search frameworks...',
    onChange: fn(),
    onInputChange: fn(),
  },
};

export const WithValue: Story = {
  args: {
    label: 'Selected Framework',
    options,
    value: 'react',
    placeholder: 'Search frameworks...',
    onChange: fn(),
  },
};

export const WithHint: Story = {
  args: {
    label: 'Framework',
    options,
    placeholder: 'Type to search...',
    hint: 'Start typing to filter the list of frameworks',
    onChange: fn(),
  },
};

export const WithError: Story = {
  args: {
    label: 'Framework',
    options,
    placeholder: 'Search frameworks...',
    error: true,
    errorMessage: 'Please select a valid framework from the list',
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Framework',
    options,
    value: 'react',
    disabled: true,
    onChange: fn(),
  },
};

export const NotClearable: Story = {
  args: {
    label: 'Framework',
    options,
    value: 'vue',
    clearable: false,
    onChange: fn(),
  },
};

export const CustomFilter: Story = {
  args: {
    label: 'Strict Search',
    options,
    placeholder: 'Search (must start with)...',
    filterFn: (option, input) => 
      option.label.toLowerCase().startsWith(input.toLowerCase()),
    onChange: fn(),
    onInputChange: fn(),
  },
};
