import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> &
  Sprinkles & {
    label?: string;
    options: SelectOption[];
    error?: boolean;
    fullWidth?: boolean;
  };
