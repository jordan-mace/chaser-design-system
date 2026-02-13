import React from 'react';
import { BoxProps } from '../Box';

export type AspectRatioValue = '1/1' | '4/3' | '16/9' | '21/9' | number;

export interface AspectRatioProps extends BoxProps {
  ratio?: AspectRatioValue;
  children?: React.ReactNode;
}
