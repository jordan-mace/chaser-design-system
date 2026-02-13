import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  Sprinkles & {
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    children?: React.ReactNode;
  };
