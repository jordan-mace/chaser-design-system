import clsx from 'clsx';
import React from 'react';
import { separator, separatorOrientation } from './styles.css';
import Box from '../Box';
import { type SeparatorProps } from './Separator.types';

const Separator = ({
  orientation = 'horizontal',
  decorative = false,
  className,
  ...props
}: SeparatorProps) => {
  return (
    <Box
      as="hr"
      className={clsx(separator, separatorOrientation[orientation], className)}
      aria-hidden={decorative}
      {...props}
    />
  );
};

export default Separator;
