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

type RadioContextType = {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const RadioContext = createContext<RadioContextType>({});

type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> & {
  label?: string;
  value: string;
};

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
        userSelect="none"
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
        {label && <Box as="span" className={radioLabel}>{label}</Box>}
      </Box>
    );
  },
);

Radio.displayName = 'Radio';

type RadioGroupProps = {
  children: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  layout?: 'vertical' | 'horizontal';
  className?: string;
};

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
