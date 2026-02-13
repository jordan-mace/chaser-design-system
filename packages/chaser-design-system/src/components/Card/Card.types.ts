import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    variant?: CardVariant;
    children?: React.ReactNode;
    padding?: CardPadding;
  };
