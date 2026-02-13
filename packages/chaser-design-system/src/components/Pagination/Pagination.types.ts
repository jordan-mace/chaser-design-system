import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type PaginationProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
  };
