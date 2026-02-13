import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Popover } from '.';
import { Button } from '../Button';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClickTrigger: Story = {
  args: {
    trigger: <Button variant="primary" label="Click me" />,
    title: 'Popover Title',
    children: 'This is the popover content. It can contain any React content.',
    triggerType: 'click',
    defaultOpen: true,
  },
};

export const HoverTrigger: Story = {
  args: {
    trigger: <Button variant="secondary" label="Hover me" />,
    children: 'This popover appears on hover.',
    triggerType: 'hover',
  },
};

export const WithFooter: Story = {
  args: {
    trigger: <Button variant="primary" label="Open Popover" />,
    title: 'Confirmation',
    children: 'Are you sure you want to proceed with this action?',
    footer: (
      <>
        <Button variant="secondary" label="Cancel" />
        <Button variant="primary" label="Confirm" />
      </>
    ),
    defaultOpen: true,
  },
};

export const WithoutArrow: Story = {
  args: {
    trigger: <Button variant="primary" label="No Arrow" />,
    title: 'No Arrow Popover',
    children: 'This popover does not show the arrow pointer.',
    showArrow: false,
    defaultOpen: true,
  },
};

export const PositionLeft: Story = {
  args: {
    trigger: <Button variant="primary" label="Left Position" />,
    title: 'Left Aligned',
    children: 'This popover appears to the left.',
    position: 'left',
    defaultOpen: true,
  },
};

export const PositionTop: Story = {
  args: {
    trigger: <Button variant="primary" label="Top Position" />,
    title: 'Top Aligned',
    children: 'This popover appears at the top.',
    position: 'top',
    defaultOpen: true,
  },
};
