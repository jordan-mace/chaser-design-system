import clsx from 'clsx';
import React from 'react';
import { separator, separatorOrientation } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> &
  Sprinkles & {
    orientation?: SeparatorOrientation;
    decorative?: boolean;
  };

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
