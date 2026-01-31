import clsx from 'clsx';
import React, { useEffect } from 'react';
import {
  drawer,
  drawerPositionVariants,
  drawerOverlay,
  drawerHeader,
  drawerTitle,
  drawerCloseButton,
  drawerBody,
  drawerFooter,
} from './styles.css';
import Box from '../Box';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'small' | 'medium' | 'large' | 'full';

const sizeMap: Record<DrawerPosition, Record<DrawerSize, string>> = {
  left: {
    small: '250px',
    medium: '350px',
    large: '450px',
    full: '100vw',
  },
  right: {
    small: '250px',
    medium: '350px',
    large: '450px',
    full: '100vw',
  },
  top: {
    small: '200px',
    medium: '300px',
    large: '400px',
    full: '100vh',
  },
  bottom: {
    small: '200px',
    medium: '300px',
    large: '400px',
    full: '100vh',
  },
};

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: DrawerPosition;
  size?: DrawerSize;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

const Drawer = ({
  isOpen,
  onClose,
  title,
  position = 'right',
  size = 'medium',
  children,
  footer,
  showCloseButton = true,
  closeOnOverlayClick = true,
  className,
  ...props
}: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dimensionStyle: React.CSSProperties = {
    ['--drawer-width' as string]: ['left', 'right'].includes(position)
      ? sizeMap[position][size]
      : undefined,
    ['--drawer-height' as string]: ['top', 'bottom'].includes(position)
      ? sizeMap[position][size]
      : undefined,
  };

  return (
    <>
      <Box
        className={drawerOverlay}
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      <Box
        as="div"
        role="dialog"
        aria-modal="true"
        className={clsx(drawer, drawerPositionVariants[position], className)}
        style={dimensionStyle}
        {...props}
      >
        {title && (
          <Box as="div" className={drawerHeader}>
            <Box as="h2" className={drawerTitle}>
              {title}
            </Box>
            {showCloseButton && (
              <Box
                as="button"
                className={drawerCloseButton}
                onClick={onClose}
                aria-label="Close drawer"
                type="button"
              >
                ×
              </Box>
            )}
          </Box>
        )}

        <Box as="div" className={drawerBody}>
          {children}
        </Box>

        {footer && <Box as="div" className={drawerFooter}>{footer}</Box>}
      </Box>
    </>
  );
};

export default Drawer;
