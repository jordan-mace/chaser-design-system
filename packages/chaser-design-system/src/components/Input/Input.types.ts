import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Sprinkles & {
    label?: string;
    fullWidth?: boolean;
  };
