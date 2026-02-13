import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    alt?: string;
    src?: string;
    size?: AvatarSize;
    children?: React.ReactNode;
    fallback?: string;
  };
