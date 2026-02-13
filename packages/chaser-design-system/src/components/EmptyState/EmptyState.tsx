import clsx from 'clsx';
import React from 'react';
import {
  emptyState,
  emptyStateIcon,
  emptyStateTitle,
  emptyStateDescription,
  emptyStateAction,
} from './styles.css';
import Box from '../Box';
import { type EmptyStateProps } from './EmptyState.types';

const EmptyState = ({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) => {
  return (
    <Box className={clsx(emptyState, className)} role="status">
      {icon && (
        <Box className={emptyStateIcon} aria-hidden="true">
          {icon}
        </Box>
      )}
      {title && (
        <Box as="h3" className={emptyStateTitle}>
          {title}
        </Box>
      )}
      {description && (
        <Box as="p" className={emptyStateDescription}>
          {description}
        </Box>
      )}
      {action && <Box className={emptyStateAction}>{action}</Box>}
    </Box>
  );
};

export default EmptyState;
