import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ModalSize = 'small' | 'medium' | 'large' | 'full';

type ModalPropsType = React.HTMLAttributes<HTMLDialogElement> & {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
};

export type ModalProps = ModalPropsType & Sprinkles;
