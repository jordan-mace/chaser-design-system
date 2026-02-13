import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ProgressVariant = 'default' | 'success' | 'warning' | 'error';

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    value: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    variant?: ProgressVariant;
  };
