import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type CollapseAnimation = 'height' | 'opacity' | 'both';

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    isOpen: boolean;
    children: React.ReactNode;
    animation?: CollapseAnimation;
    duration?: number;
    onAnimationEnd?: () => void;
  };
