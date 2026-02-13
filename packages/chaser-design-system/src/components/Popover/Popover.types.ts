import React from 'react';
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
