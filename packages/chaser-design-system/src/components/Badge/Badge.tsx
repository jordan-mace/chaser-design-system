import clsx from 'clsx';
import {
  badge,
  badgeVariants,
  badgeSizes,
  badgeDot,
  badgeDotSizes,
} from './styles.css';
import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  children?: React.ReactNode;
}

const Badge = ({
  variant = 'default',
  size = 'medium',
  dot = false,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
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
    </span>
  );
};

export default Badge;
