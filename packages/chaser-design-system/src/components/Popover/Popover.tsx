import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import {
  popoverContainer,
  popoverTrigger,
  popoverContent,
  popoverPositionVariants,
  popoverArrow,
  popoverArrowPositionVariants,
  popoverHeader,
  popoverTitle,
  popoverCloseButton,
  popoverBody,
  popoverFooter,
} from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type PopoverPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';
export type PopoverTriggerType = 'click' | 'hover';

export type PopoverProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    trigger: React.ReactNode;
    children: React.ReactNode;
    position?: PopoverPosition;
    title?: string;
    footer?: React.ReactNode;
    showArrow?: boolean;
    triggerType?: PopoverTriggerType;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
  };

const Popover = ({
  trigger,
  children,
  position = 'bottom',
  title,
  footer,
  showArrow = true,
  triggerType = 'click',
  closeOnClickOutside = true,
  closeOnEscape = true,
  defaultOpen = false,
  onOpenChange,
  className,
  ...props
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    if (!closeOnClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeOnClickOutside]);

  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape]);

  const handleTriggerClick = () => {
    if (triggerType === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (triggerType === 'hover') {
      setIsOpen(true);
    }
  };

  const handleTriggerMouseLeave = () => {
    if (triggerType === 'hover') {
      setIsOpen(false);
    }
  };

  return (
    <Box
      ref={containerRef}
      className={clsx(popoverContainer, className)}
      onMouseEnter={handleTriggerMouseEnter}
      onMouseLeave={handleTriggerMouseLeave}
      {...props}
    >
      <Box
        className={popoverTrigger}
        onClick={handleTriggerClick}
        aria-expanded={isOpen}
      >
        {trigger}
      </Box>

      {isOpen && (
        <Box
          className={clsx(popoverContent, popoverPositionVariants[position])}
          role="dialog"
          aria-modal="false"
        >
          {showArrow && (
            <Box
              as="span"
              className={clsx(
                popoverArrow,
                popoverArrowPositionVariants[position],
              )}
            />
          )}

          {(title || triggerType === 'click') && (
            <Box as="div" className={popoverHeader}>
              {title && (
                <Box as="h3" className={popoverTitle}>
                  {title}
                </Box>
              )}
              {triggerType === 'click' && (
                <Box
                  as="button"
                  className={popoverCloseButton}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close popover"
                  type="button"
                >
                  ×
                </Box>
              )}
            </Box>
          )}

          <Box as="div" className={popoverBody}>
            {children}
          </Box>

          {footer && (
            <Box as="div" className={popoverFooter}>
              {footer}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Popover;
