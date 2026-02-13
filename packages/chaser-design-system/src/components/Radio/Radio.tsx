import clsx from 'clsx';
import React, { forwardRef, createContext, useContext } from 'react';
import {
  radioContainer,
  radioInput,
  radioLabel,
  radioGroup,
  radioGroupHorizontal,
} from './styles.css';
import Box from '../Box';
import {
  type RadioProps,
  type RadioGroupProps,
  type RadioContextType,
} from './Radio.types';

const RadioContext = createContext<RadioContextType>({});

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, value, ...props }, ref) => {
    const context = useContext(RadioContext);
    const name = context.name || props.name;
    const isChecked = context.value === value;

    const handleChange = () => {
      if (context.onChange) {
        context.onChange(value);
      }
    };

    return (
      <Box
        as="label"
        className={clsx(radioContainer, className)}
        display="flex"
        alignItems="center"
        gap="small"
        cursor="pointer"
        style={{ userSelect: 'none' }}
      >
        <Box
          as="input"
          type="radio"
          ref={ref}
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          className={radioInput}
          {...props}
        />
        {label && (
          <Box as="span" className={radioLabel}>
            {label}
          </Box>
        )}
      </Box>
    );
  },
);

Radio.displayName = 'Radio';

const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  layout = 'vertical',
  className,
}: RadioGroupProps) => {
  return (
    <RadioContext.Provider value={{ name, value, onChange }}>
      <Box
        className={clsx(
          layout === 'horizontal' ? radioGroupHorizontal : radioGroup,
          className,
        )}
      >
        {children}
      </Box>
    </RadioContext.Provider>
  );
};

const RadioComponent = Object.assign(Radio, {
  Group: RadioGroup,
});

export default RadioComponent;
