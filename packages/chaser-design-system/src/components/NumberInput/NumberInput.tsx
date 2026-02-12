import clsx from 'clsx';
import React, { useCallback } from 'react';
import {
  numberInputContainer,
  numberInput,
  numberInputVariants,
  numberInputLabel,
  numberInputStepper,
  numberInputStepperLeft,
  numberInputButton,
  numberInputWrapper,
  numberInputHint,
  numberInputErrorMessage,
} from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type NumberInputPosition = 'right' | 'left';

export type NumberInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'min' | 'max'
> &
  Sprinkles & {
    label?: string;
    value?: number | '';
    onChange?: (value: number | '') => void;
    min?: number;
    max?: number;
    step?: number;
    stepperPosition?: NumberInputPosition;
    placeholder?: string;
    hint?: string;
    error?: boolean;
    errorMessage?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    allowEmpty?: boolean;
  };

const NumberInput = ({
  label,
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  stepperPosition = 'right',
  placeholder = '0',
  hint,
  error = false,
  errorMessage,
  fullWidth = true,
  disabled = false,
  allowEmpty = true,
  className,
  ...props
}: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      if (allowEmpty) {
        onChange?.('');
      } else {
        onChange?.(0);
      }
      return;
    }

    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.min(Math.max(numValue, min), max);
      onChange?.(clampedValue);
    }
  };

  const increment = useCallback(() => {
    const currentValue = typeof value === 'number' ? value : 0;
    const newValue = Math.min(currentValue + step, max);
    onChange?.(newValue);
  }, [value, step, max, onChange]);

  const decrement = useCallback(() => {
    const currentValue = typeof value === 'number' ? value : 0;
    const newValue = Math.max(currentValue - step, min);
    onChange?.(newValue);
  }, [value, step, min, onChange]);

  const isIncrementDisabled =
    disabled || (typeof value === 'number' && value >= max);
  const isDecrementDisabled =
    disabled || (typeof value === 'number' && value <= min);

  const displayValue = value === '' ? '' : value;

  return (
    <Box className={numberInputWrapper} width={fullWidth ? '100%' : undefined}>
      {label && (
        <Box as="label" className={numberInputLabel}>
          {label}
        </Box>
      )}

      <Box className={numberInputContainer}>
        <Box
          as="input"
          type="number"
          value={displayValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            numberInput,
            numberInputVariants[error ? 'error' : 'default'],
            className,
          )}
          {...props}
        />

        <Box
          className={clsx(
            numberInputStepper,
            stepperPosition === 'left' && numberInputStepperLeft,
          )}
        >
          <Box
            as="button"
            className={numberInputButton}
            onClick={increment}
            disabled={isIncrementDisabled}
            type="button"
            aria-label="Increase value"
          >
            +
          </Box>
          <Box
            as="button"
            className={numberInputButton}
            onClick={decrement}
            disabled={isDecrementDisabled}
            type="button"
            aria-label="Decrease value"
          >
            −
          </Box>
        </Box>
      </Box>

      {error && errorMessage && (
        <Box as="div" className={numberInputErrorMessage} role="alert">
          {errorMessage}
        </Box>
      )}

      {hint && !error && (
        <Box as="div" className={numberInputHint}>
          {hint}
        </Box>
      )}
    </Box>
  );
};

export default NumberInput;
