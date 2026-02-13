import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';

export type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    children: React.ReactNode;
    orientation?: ScrollAreaOrientation;
    maxHeight?: string | number;
    maxWidth?: string | number;
  };
