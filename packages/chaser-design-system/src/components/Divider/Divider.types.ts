import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerSize = 'small' | 'medium' | 'large';

export type DividerProps = React.HTMLAttributes<HTMLHRElement> &
  Sprinkles & {
    orientation?: DividerOrientation;
    size?: DividerSize;
  };
