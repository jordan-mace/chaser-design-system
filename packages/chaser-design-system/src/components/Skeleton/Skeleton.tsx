import clsx from 'clsx';
import React from 'react';
import {
  skeleton,
  skeletonVariants,
  skeletonSizes,
  skeletonAnimation,
} from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SkeletonVariant = 'text' | 'circle' | 'rectangle';
export type SkeletonSize = 'small' | 'medium' | 'large';
export type SkeletonAnimation = 'shimmer' | 'pulse' | 'none';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    variant?: SkeletonVariant;
    size?: SkeletonSize;
    animation?: SkeletonAnimation;
    width?: string | number;
    height?: string | number;
    count?: number;
  };

const Skeleton = ({
  variant = 'text',
  size = 'medium',
  animation = 'shimmer',
  width,
  height,
  count = 1,
  className,
  ...props
}: SkeletonProps) => {
  const style: React.CSSProperties = {
    width: width,
    height: height,
  };

  const skeletons = Array.from({ length: count }, (_, index) => (
    <Box
      key={index}
      as="span"
      className={clsx(
        skeleton,
        skeletonVariants[variant],
        skeletonSizes[size],
        skeletonAnimation[animation],
        className,
      )}
      style={style}
      aria-hidden="true"
      {...props}
    />
  ));

  return (
    <Box display="flex" flexDirection="column" gap="small">
      {skeletons}
    </Box>
  );
};

export default Skeleton;
