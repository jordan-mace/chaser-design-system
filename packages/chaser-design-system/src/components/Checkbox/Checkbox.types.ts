import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Sprinkles & {
    label?: string;
    indeterminate?: boolean;
  };
