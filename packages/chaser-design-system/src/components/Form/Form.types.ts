import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Sprinkles & {
    children?: React.ReactNode;
  };
