import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = 'none' | 'small' | 'medium' | 'large';

export type GridProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    columns?: GridColumns;
    gap?: GridGap;
    minChildWidth?: string;
    children?: React.ReactNode;
  };
