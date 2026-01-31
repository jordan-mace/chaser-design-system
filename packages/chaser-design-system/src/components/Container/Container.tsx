import React, { forwardRef } from 'react';
import Box from '../Box';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps {
  size?: ContainerSize;
  centerContent?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ size = 'lg', centerContent = true, children, className, style }, ref) => {
    const sizeValue: ContainerSize = size;

    const containerStyle: React.CSSProperties = {
      maxWidth: sizeMap[sizeValue],
      marginLeft: centerContent ? 'auto' : undefined,
      marginRight: centerContent ? 'auto' : undefined,
    };

    return (
      <Box
        ref={ref}
        width="100%"
        className={className}
        style={{ ...containerStyle, ...style }}
      >
        {children}
      </Box>
    );
  }
);

Container.displayName = 'Container';

export default Container;
