import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  Sprinkles & {
    label?: string;
    fullWidth?: boolean;
  };
