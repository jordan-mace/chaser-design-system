import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> &
  Sprinkles & {
    orientation?: SeparatorOrientation;
    decorative?: boolean;
  };
