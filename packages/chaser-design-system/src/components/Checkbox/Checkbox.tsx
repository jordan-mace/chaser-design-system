import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { checkboxContainer, checkboxInput, checkboxLabel } from './styles.css';
import Box from '../Box';

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: string;
  indeterminate?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, indeterminate, ...props }, ref) => {
    return (
      <Box
        as="label"
        className={clsx(checkboxContainer, className)}
        display="flex"
        alignItems="center"
        gap="small"
        cursor="pointer"
        userSelect="none"
      >
        <Box
          as="input"
          type="checkbox"
          ref={ref}
          className={checkboxInput}
          width="18px"
          height="18px"
          {...props}
        />
        {label && <Box as="span" className={checkboxLabel}>{label}</Box>}
      </Box>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
