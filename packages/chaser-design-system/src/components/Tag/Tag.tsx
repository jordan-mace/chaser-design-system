import clsx from 'clsx';
import React from 'react';
import { tag, removeButton, tagGroup } from './styles.css';
import Box from '../Box';

type TagProps = {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  onRemove?: () => void;
  removable?: boolean;
  className?: string;
};

const Tag = ({
  children,
  variant = 'default',
  onRemove,
  removable = false,
  className,
}: TagProps) => {
  return (
    <Box
      as="span"
      className={clsx(tag[variant], className)}
      display="inline-flex"
      alignItems="center"
    >
      {children}
      {removable && (
        <Box
          as="span"
          onClick={onRemove}
          className={removable}
          role="button"
          tabIndex={0}
          aria-label="Remove tag"
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onRemove?.();
            }
          }}
        >
          ×
        </Box>
      )}
    </Box>
  );
};

type TagGroupProps = {
  children: React.ReactNode;
  className?: string;
};

const TagGroup = ({ children, className }: TagGroupProps) => {
  return (
    <Box
      className={clsx(tagGroup, className)}
      display="flex"
      flexWrap="wrap"
      gap="small"
    >
      {children}
    </Box>
  );
};

const TagComponent = Object.assign(Tag, {
  Group: TagGroup,
});

export default TagComponent;
