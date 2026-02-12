import clsx from 'clsx';
import React from 'react';
import { tag, removeButton, tagGroup } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type TagProps = React.HTMLAttributes<HTMLSpanElement> &
  Sprinkles & {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
    onRemove?: () => void;
    removable?: boolean;
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
      display="inline"
      alignItems="center"
    >
      {children}
      {removable && (
        <Box
          as="span"
          onClick={onRemove}
          className={removeButton}
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
      gap="small"
      style={{ flexWrap: 'wrap' }}
    >
      {children}
    </Box>
  );
};

const TagComponent = Object.assign(Tag, {
  Group: TagGroup,
});

export default TagComponent;
