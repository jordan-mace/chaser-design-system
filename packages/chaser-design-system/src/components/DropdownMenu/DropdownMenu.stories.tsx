import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { DropdownMenu } from '.';
import { Button } from '../Button';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    trigger: <Button variant="primary" label="Open Menu" />,
    items: [
      { label: 'Edit', onClick: fn() },
      { label: 'Duplicate', onClick: fn() },
      { label: 'Delete', variant: 'destructive', onClick: fn() },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    trigger: <Button variant="primary" label="Menu with Groups" />,
    groups: [
      {
        label: 'Actions',
        items: [
          { label: 'Edit', onClick: fn() },
          { label: 'Duplicate', onClick: fn() },
        ],
      },
      {
        label: 'Danger Zone',
        items: [
          { label: 'Archive', onClick: fn() },
          { label: 'Delete', variant: 'destructive', onClick: fn() },
        ],
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="primary" label="Menu with Icons" />,
    items: [
      { label: 'Edit', icon: '✏️', onClick: fn() },
      { label: 'Copy', icon: '📋', onClick: fn() },
      { label: 'Delete', icon: '🗑️', variant: 'destructive', onClick: fn() },
    ],
  },
};

export const PositionBottomRight: Story = {
  args: {
    trigger: <Button variant="primary" label="Bottom Right" />,
    position: 'bottomRight',
    items: [
      { label: 'Option 1', onClick: fn() },
      { label: 'Option 2', onClick: fn() },
    ],
  },
};
