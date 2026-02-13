import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Breadcrumb } from '.';
const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
  { label: 'Item', current: true },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const CustomSeparator: Story = {
  args: {
    items,
    separator: '>',
  },
};

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming Laptops', current: true },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home', current: true }],
  },
};
