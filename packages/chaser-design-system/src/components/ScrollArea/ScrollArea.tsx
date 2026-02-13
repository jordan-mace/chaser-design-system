import clsx from 'clsx';
import React from 'react';
import {
  scrollArea,
  scrollAreaOrientation,
  scrollAreaViewport,
} from './styles.css';
import Box from '../Box';
import { type ScrollAreaProps } from './ScrollArea.types';

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
