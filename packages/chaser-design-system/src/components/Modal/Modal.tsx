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

export type ModalSize = 'small' | 'medium' | 'large' | 'full';

export interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
}

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
    <dialog
      ref={dialogRef}
      className={clsx(modal, modalVariants[size])}
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
      {...props}
    >
      {title && (
        <div className={modalHeader}>
          <h2 className={modalTitle}>{title}</h2>
          {showCloseButton && (
            <button
              className={modalCloseButton}
              onClick={onClose}
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>
          )}
        </div>
      )}

      <div className={modalBody}>{children}</div>

      {footer && <div className={modalFooter}>{footer}</div>}
    </dialog>
  );
};

export default Modal;
