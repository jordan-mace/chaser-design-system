import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SpinnerColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';
export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    color?: SpinnerColor;
    size?: SpinnerSize;
    role?: string;
  };
