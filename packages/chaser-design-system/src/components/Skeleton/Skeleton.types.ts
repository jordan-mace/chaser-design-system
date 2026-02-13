import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SkeletonVariant = 'text' | 'circle' | 'rectangle';
export type SkeletonSize = 'small' | 'medium' | 'large';
export type SkeletonAnimation = 'shimmer' | 'pulse' | 'none';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    variant?: SkeletonVariant;
    size?: SkeletonSize;
    animation?: SkeletonAnimation;
    width?: string | number;
    height?: string | number;
    count?: number;
  };
