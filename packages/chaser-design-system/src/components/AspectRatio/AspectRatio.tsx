import React, { forwardRef } from 'react';
import Box, { type BoxProps } from '../Box';

export type AspectRatioValue = '1/1' | '4/3' | '16/9' | '21/9' | number;

export interface AspectRatioProps extends BoxProps {
  ratio?: AspectRatioValue;
  children?: React.ReactNode;
}

const AspectRatio = forwardRef<HTMLElement, AspectRatioProps>(
  ({ ratio = '1/1', children, ...props }, ref) => {
    const aspectRatio = typeof ratio === 'number' ? ratio : ratio;

    return (
      <Box
        ref={ref}
        position="relative"
        style={{
          aspectRatio,
          overflow: 'hidden',
        }}
        {...props}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Box>
      </Box>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
