import clsx from 'clsx';
import React from 'react';
import {
  separator,
  separatorOrientation,
} from './styles.css';
import Box from '../Box';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps {
  orientation?: SeparatorOrientation;
  decorative?: boolean;
  className?: string;
}

const Separator = ({
  orientation = 'horizontal',
  decorative = false,
  className,
  ...props
}: SeparatorProps) => {
  return (
    <Box
      as="hr"
      className={clsx(
        separator,
        separatorOrientation[orientation],
        className,
      )}
      aria-hidden={decorative}
      {...props}
    />
  );
};

export default Separator;
