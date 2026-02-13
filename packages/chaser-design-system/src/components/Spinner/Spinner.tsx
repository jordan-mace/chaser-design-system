import clsx from 'clsx';
import { spinner, spinnerColors, spinnerSizes } from './styles.css';
import React from 'react';
import Box from '../Box';
import { type SpinnerProps } from './Spinner.types';

const Spinner = ({
  color = 'primary',
  size = 'medium',
  role = 'status',
  ...props
}: SpinnerProps) => {
  return (
    <Box
      as="div"
      className={clsx(
        spinner,
        spinnerColors[color],
        spinnerSizes[size],
        props.className,
      )}
      role={role}
      aria-label="Loading"
      {...props}
    />
  );
};

export default Spinner;
