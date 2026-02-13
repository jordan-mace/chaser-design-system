import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export type TagProps = React.HTMLAttributes<HTMLSpanElement> &
  Sprinkles & {
    children: React.ReactNode;
    variant?: TagVariant;
    onRemove?: () => void;
    removable?: boolean;
  };

export type TagGroupProps = {
  children: React.ReactNode;
  className?: string;
};
