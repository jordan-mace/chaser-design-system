import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

export type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    items: BreadcrumbItem[];
    separator?: string;
  };
