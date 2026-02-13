import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';
import { Pagination } from '.';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onPageChange: fn() },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FewPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 20,
    totalPages: 20,
  },
};

export const NoFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    showFirstLast: false,
  },
};

export const NoPrevNext: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    showPrevNext: false,
  },
};
