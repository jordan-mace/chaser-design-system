import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Modal from './Modal';
import React from 'react';

describe('Modal', () => {
  it('renders small modal correctly', async () => {
    const { container } = await render(
      <Modal isOpen onClose={() => {}} title="Small Modal" size="small">
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders medium modal correctly', async () => {
    const { container } = await render(
      <Modal isOpen onClose={() => {}} title="Medium Modal" size="medium">
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders large modal correctly', async () => {
    const { container } = await render(
      <Modal isOpen onClose={() => {}} title="Large Modal" size="large">
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders full-width modal correctly', async () => {
    const { container } = await render(
      <Modal isOpen onClose={() => {}} title="Full Modal" size="full">
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders modal without title', async () => {
    const { container } = await render(
      <Modal isOpen onClose={() => {}} size="small">
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders modal with footer', async () => {
    const { container } = await render(
      <Modal
        isOpen
        onClose={() => {}}
        title="Modal with Footer"
        size="small"
        footer={<div>Footer content</div>}
      >
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders modal without close button', async () => {
    const { container } = await render(
      <Modal
        isOpen
        onClose={() => {}}
        title="Modal Without Close Button"
        size="small"
        showCloseButton={false}
      >
        <p>Modal content</p>
      </Modal>,
    );
    expect(container).toMatchScreenshot();
  });

  it('handles close button click', async () => {
    let closed = false;
    const handleClose = () => {
      closed = true;
    };
    const { getByLabelText } = await render(
      <Modal isOpen onClose={handleClose} title="Test Modal" size="small">
        <p>Modal content</p>
      </Modal>,
    );
    const closeButton = getByLabelText('Close modal');
    await closeButton.click();
    expect(closed).toBe(true);
  });

  it('handles backdrop click to close', async () => {
    let closed = false;
    const handleClose = () => {
      closed = true;
    };
    const { container } = await render(
      <Modal isOpen onClose={handleClose} title="Test Modal" size="small">
        <p>Modal content</p>
      </Modal>,
    );
    const dialog = container.querySelector('dialog');
    if (dialog) {
      await dialog.click();
    }
    expect(closed).toBe(true);
  });

  it('does not handle content click as close', async () => {
    let closed = false;
    const handleClose = () => {
      closed = true;
    };
    const { getByText } = await render(
      <Modal isOpen onClose={handleClose} title="Test Modal" size="small">
        <p>Modal content</p>
      </Modal>,
    );
    const content = getByText('Modal content');
    await content.click();
    expect(closed).toBe(false);
  });

  it('renders dialog element with proper attributes', async () => {
    const { getByRole } = await render(
      <Modal isOpen onClose={() => {}} title="Test Modal" size="small">
        <p>Modal content</p>
      </Modal>,
    );
    const dialog = getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('displays title correctly', async () => {
    const { container } = await render(
      <Modal isOpen onClose={() => {}} title="My Modal Title" size="small">
        <p>Modal content</p>
      </Modal>,
    );
    const titleElement = container.querySelector('h2');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('My Modal Title');
  });

  it('displays footer content', async () => {
    const { getByText } = await render(
      <Modal
        isOpen
        onClose={() => {}}
        title="Test Modal"
        size="small"
        footer={<div>Footer Action</div>}
      >
        <p>Modal content</p>
      </Modal>,
    );
    const footer = getByText('Footer Action');
    expect(footer).toBeInTheDocument();
  });
});
