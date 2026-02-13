import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type ComboboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> &
  Sprinkles & {
    label?: string;
    options: ComboboxOption[];
    value?: string;
    onChange?: (value: string, option: ComboboxOption | null) => void;
    onInputChange?: (inputValue: string) => void;
    placeholder?: string;
    hint?: string;
    error?: boolean;
    errorMessage?: string;
    fullWidth?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    filterFn?: (option: ComboboxOption, inputValue: string) => boolean;
  };
