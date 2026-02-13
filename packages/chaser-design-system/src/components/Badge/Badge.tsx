import clsx from 'clsx';
import {
  badge,
  badgeVariants,
  badgeSizes,
  badgeDot,
  badgeDotSizes,
} from './styles.css';
import React from 'react';
import Box from '../Box';
import { type BadgeProps, type BadgeVariant, type BadgeSize } from './Badge.types';

const Badge = ({
  variant = 'default',
  size = 'medium',
  dot = false,
  children,
  ...props
}: BadgeProps) => {
  return (
    <Box
      as="span"
      className={clsx(
        badge,
        badgeVariants[variant],
        dot ? badgeDot : badgeSizes[size],
        dot && badgeDotSizes[size],
        props.className,
      )}
      {...props}
    >
      {dot ? null : children}
    </Box>
  );
};

export default Badge;
