import clsx from 'clsx';
import {
  modal,
  modalVariants,
  modalHeader,
  modalTitle,
  modalCloseButton,
  modalBody,
  modalFooter,
} from './styles.css';
import React, { useEffect, useRef } from 'react';
import Box from '../Box';
import { type ModalProps } from './Modal.types';

interface DialogMethods {
  showModal: () => void;
  close: () => void;
  addEventListener: (event: string, handler: () => void) => void;
  removeEventListener: (event: string, handler: () => void) => void;
  classList: {
    add: (className: string) => void;
    remove: (className: string) => void;
  };
}

const Modal = ({
  isOpen,
  onClose,
  title,
  size = 'medium',
  children,
  footer,
  showCloseButton = true,
  ...props
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current as unknown as DialogMethods;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      dialog.classList.add('open');
    } else {
      dialog.close();
      dialog.classList.remove('open');
    }

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [isOpen, onClose]);

  return (
    <Box
      as="dialog"
      ref={dialogRef}
      className={clsx(modal, modalVariants[size])}
      onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
        // Close when clicking the backdrop
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      {...props}
    >
      {title && (
        <Box as="div" className={modalHeader}>
          <Box as="h2" className={modalTitle}>
            {title}
          </Box>
          {showCloseButton && (
            <Box
              as="button"
              className={modalCloseButton}
              onClick={onClose}
              aria-label="Close modal"
              type="button"
            >
              ×
            </Box>
          )}
        </Box>
      )}

      <Box as="div" className={modalBody}>
        {children}
      </Box>

      {footer && (
        <Box as="div" className={modalFooter}>
          {footer}
        </Box>
      )}
    </Box>
  );
};

export default Modal;
