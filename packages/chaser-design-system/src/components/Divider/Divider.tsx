import clsx from 'clsx';
import {
  divider,
  dividerOrientations,
  dividerSizes,
  dividerVerticalSizes,
} from './styles.css';
import React from 'react';
import Box from '../Box';
import { type DividerProps, type DividerOrientation, type DividerSize } from './Divider.types';

const Divider = ({
  orientation = 'horizontal',
  size = 'medium',
  ...props
}: DividerProps) => {
  return (
    <Box
      as="hr"
      className={clsx(
        divider,
        dividerOrientations[orientation],
        orientation === 'vertical'
          ? dividerVerticalSizes[size]
          : dividerSizes[size],
        props.className,
      )}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

export default Divider;
