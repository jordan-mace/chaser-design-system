import React, { forwardRef } from 'react';
import Box from '../Box';
import { type AspectRatioProps } from './AspectRatio.types';

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
