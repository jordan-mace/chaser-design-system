import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button } from '../Button';
import { Modal } from '.';
import React, { useState } from 'react';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Small Modal"
          size="small"
        >
          <p>This is a small modal with a width of 400px.</p>
        </Modal>
      </div>
    );
  },
};

export const Medium: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Medium Modal"
          size="medium"
        >
          <p>This is a medium modal with a width of 600px.</p>
        </Modal>
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Large Modal"
          size="large"
        >
          <p>This is a large modal with a width of 800px.</p>
        </Modal>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Full Width Modal"
          size="full"
        >
          <p>This is a full-width modal with a width of 95vw.</p>
        </Modal>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Footer"
          size="medium"
          footer={
            <>
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setIsOpen(false)}
              />
              <Button label="Confirm" onClick={() => setIsOpen(false)} />
            </>
          }
        >
          <p>This modal has a footer with action buttons.</p>
        </Modal>
      </div>
    );
  },
};

export const NoTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small">
          <p>This modal has no title or close button.</p>
          <Button
            label="Close"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Long Content"
          size="medium"
        >
          <p>This modal demonstrates how content is handled when it exceeds the viewport height.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </Modal>
      </div>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Without Close Button"
          size="small"
          showCloseButton={false}
        >
          <p>This modal has a title but no close button in the header.</p>
          <p>You can close it by clicking the backdrop or pressing Escape.</p>
          <Button
            label="Close"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};
