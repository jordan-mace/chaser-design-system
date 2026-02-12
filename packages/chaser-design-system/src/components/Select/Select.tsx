import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { select, selectLabel, selectWrapper } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> &
  Sprinkles & {
    label?: string;
    options: SelectOption[];
    error?: boolean;
    fullWidth?: boolean;
  };

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, options, error = false, fullWidth = true, className, ...props },
    ref,
  ) => {
    return (
      <Box className={selectWrapper} width="100%">
        {label && (
          <Box
            as="label"
            className={selectLabel}
            display="block"
            fontSize="14px"
            fontWeight="500"
            color="c5-700"
            marginBottom="small"
          >
            {label}
          </Box>
        )}
        <Box
          as="select"
          ref={ref}
          className={clsx(select[error ? 'error' : 'default'], className)}
          width={fullWidth ? '100%' : undefined}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </Box>
      </Box>
    );
  },
);

Select.displayName = 'Select';

export default Select;
