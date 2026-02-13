import React, { forwardRef } from 'react';
import Box from '../Box';
import { type StackProps, type StackAlign, type StackJustify } from './Stack.types';

const alignMap: Record<StackAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
};

const justifyMap: Record<StackJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      direction = 'column',
      align,
      justify,
      gap,
      wrap,
      children,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const alignItems = align ? alignMap[align] : undefined;
    const justifyContent = justify ? justifyMap[justify] : undefined;

    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={direction}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
        className={className}
        style={{ flexWrap: wrap ? 'wrap' : undefined, ...style }}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

Stack.displayName = 'Stack';

export default Stack;
