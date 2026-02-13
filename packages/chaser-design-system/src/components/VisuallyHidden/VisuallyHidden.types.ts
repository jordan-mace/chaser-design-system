import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type VisuallyHiddenProps = Sprinkles & {
  children: React.ReactNode;
  as?: React.ElementType;
};
