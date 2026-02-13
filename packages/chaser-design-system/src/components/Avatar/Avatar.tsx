import clsx from 'clsx';
import React from 'react';
import {
  avatar,
  avatarImage,
  avatarWithImage,
  avatarWrapper,
} from './styles.css';
import Box from '../Box';
import { type AvatarProps } from './Avatar.types';

const Avatar = ({
  alt,
  className,
  src,
  size = 'medium',
  children,
  fallback,
}: AvatarProps) => {
  const sizeClass = avatar[size];

  if (src) {
    return (
      <Box className={clsx(avatarWrapper, className)} display="inline">
        <Box
          as="img"
          src={src}
          alt={alt || 'Avatar'}
          className={clsx(avatarWithImage[size], avatarImage)}
        />
      </Box>
    );
  }

  const initials = children || fallback;

  return (
    <Box className={clsx(sizeClass, className)} role="img" aria-label={alt}>
      {initials}
    </Box>
  );
};

export default Avatar;
