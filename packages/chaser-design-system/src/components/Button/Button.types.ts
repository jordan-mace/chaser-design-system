import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Sprinkles & {
    variant: ButtonVariant;
    children?: React.ReactNode;
    label?: string;
    fullWidth?: boolean;
  };
