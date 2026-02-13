import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ToggleSize = 'small' | 'medium' | 'large';

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'checked' | 'onChange'
> &
  Sprinkles & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: ToggleSize;
    label?: string;
  };
