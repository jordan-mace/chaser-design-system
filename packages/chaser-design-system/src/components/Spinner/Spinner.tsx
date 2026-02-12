import clsx from 'clsx';
import { spinner, spinnerColors, spinnerSizes } from './styles.css';
import React from 'react';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type SpinnerColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';
export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    color?: SpinnerColor;
    size?: SpinnerSize;
    role?: string;
  };

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
