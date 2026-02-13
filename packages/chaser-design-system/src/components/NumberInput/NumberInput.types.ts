import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type NumberInputPosition = 'right' | 'left';

export type NumberInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'min' | 'max'
> &
  Sprinkles & {
    label?: string;
    value?: number | '';
    onChange?: (value: number | '') => void;
    min?: number;
    max?: number;
    step?: number;
    stepperPosition?: NumberInputPosition;
    placeholder?: string;
    hint?: string;
    error?: boolean;
    errorMessage?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    allowEmpty?: boolean;
  };
