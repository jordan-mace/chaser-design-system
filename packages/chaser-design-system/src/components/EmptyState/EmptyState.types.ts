import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    action?: React.ReactNode;
  };
