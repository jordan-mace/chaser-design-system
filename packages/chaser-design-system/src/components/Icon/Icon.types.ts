import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type IconProps = React.HTMLAttributes<HTMLSpanElement> &
  Sprinkles & {
    name?: string;
    children?: React.ReactNode;
    color?: string;
  };
