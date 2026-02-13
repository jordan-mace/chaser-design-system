import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    content: string;
    position?: TooltipPosition;
    showArrow?: boolean;
    children: React.ReactNode;
  };
