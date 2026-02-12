import clsx from 'clsx';
import React from 'react';
import {
  scrollArea,
  scrollAreaOrientation,
  scrollAreaViewport,
} from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';

export type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    children: React.ReactNode;
    orientation?: ScrollAreaOrientation;
    maxHeight?: string | number;
    maxWidth?: string | number;
  };

const ScrollArea = ({
  children,
  orientation = 'vertical',
  maxHeight,
  maxWidth,
  className,
  ...props
}: ScrollAreaProps) => {
  const style: React.CSSProperties = {
    maxHeight,
    maxWidth,
  };

  return (
    <Box
      className={clsx(
        scrollArea,
        scrollAreaOrientation[orientation],
        className,
      )}
      style={style}
      {...props}
    >
      <Box className={scrollAreaViewport}>{children}</Box>
    </Box>
  );
};

export default ScrollArea;
