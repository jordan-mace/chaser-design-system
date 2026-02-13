import clsx from 'clsx';
import React from 'react';
import { tag, removeButton, tagGroup } from './styles.css';
import Box from '../Box';
import { type TagProps, type TagGroupProps } from './Tag.types';

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
