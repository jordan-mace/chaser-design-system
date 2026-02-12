import React, { forwardRef } from 'react';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = 'none' | 'small' | 'medium' | 'large';

export type GridProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    columns?: GridColumns;
    gap?: GridGap;
    minChildWidth?: string;
    children?: React.ReactNode;
  };

const gapMap: Record<GridGap, string> = {
  none: '0',
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
};

const Grid = forwardRef<HTMLElement, GridProps>(
  ({ columns, gap = 'medium', minChildWidth, children, ...props }, ref) => {
    const gapValue: GridGap = gap;

    const gridStyle: React.CSSProperties = {
      display: 'grid',
      gap: gapMap[gapValue],
    };

    if (minChildWidth) {
      gridStyle.gridTemplateColumns = `repeat(auto-fit, minmax(${minChildWidth},1fr))`;
    } else if (columns) {
      gridStyle.gridTemplateColumns = `repeat(${columns},1fr)`;
    }

    return (
      <Box
        ref={ref}
        className={props.className}
        style={{ ...gridStyle, ...props.style }}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Grid.displayName = 'Grid';

export default Grid;
