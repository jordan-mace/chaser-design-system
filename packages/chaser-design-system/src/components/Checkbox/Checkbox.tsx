import clsx from 'clsx';
import React, { forwardRef, useEffect, useRef } from 'react';
import { checkboxContainer, checkboxInput, checkboxLabel } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Sprinkles & {
    label?: string;
    indeterminate?: boolean;
  };

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, indeterminate, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedRef = (node: HTMLInputElement) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inputRef.current = node;
    };

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    return (
      <Box
        as="label"
        className={clsx(checkboxContainer, className)}
        display="flex"
        alignItems="center"
        gap="small"
        cursor="pointer"
        style={{ userSelect: 'none' }}
      >
        <Box
          as="input"
          type="checkbox"
          ref={combinedRef}
          className={checkboxInput}
          style={{ width: '18px', height: '18px' }}
          {...props}
        />
        {label && (
          <Box as="span" className={checkboxLabel}>
            {label}
          </Box>
        )}
      </Box>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
