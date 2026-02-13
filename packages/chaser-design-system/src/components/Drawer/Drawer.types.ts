import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'small' | 'medium' | 'large' | 'full';

type DrawerPropsBase = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: DrawerPosition;
  size?: DrawerSize;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
};

export type DrawerProps = DrawerPropsBase & Sprinkles;
