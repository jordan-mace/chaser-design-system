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
import { Sprinkles } from '../../styles/sprinkles.css';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  Sprinkles & {
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    children?: React.ReactNode;
  };

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
