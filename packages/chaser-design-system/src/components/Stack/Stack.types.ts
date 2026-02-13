import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type StackDirection = 'row' | 'column';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';
export type StackGap = 'none' | 'small' | 'medium' | 'large';

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    direction?: StackDirection;
    align?: StackAlign;
    justify?: StackJustify;
    gap?: StackGap;
    wrap?: boolean;
    children?: React.ReactNode;
  };
