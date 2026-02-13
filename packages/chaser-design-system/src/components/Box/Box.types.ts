import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type BoxProps = Sprinkles & {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};
