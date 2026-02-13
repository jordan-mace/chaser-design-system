import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type ContainerProps = Sprinkles & {
  size?: ContainerSize;
  centerContent?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
