import clsx from 'clsx';
import React from 'react';
import { inputStyle, label } from './styles.css';
import { text } from '../Text/styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Sprinkles & {
    label?: string;
    fullWidth?: boolean;
  };

const Input = (props: InputProps) => {
  return (
    <Box
      display="flex"
      flexDirection={{ mobile: 'column', tablet: 'row' }}
      gap="small"
    >
      {props.label && (
        <Box
          as="label"
          className={clsx(text, label)}
          marginX={{ mobile: 'auto', tablet: 'none' }}
          marginY={{ mobile: 'none', tablet: 'auto' }}
          htmlFor={props.id}
        >
          {props.label}
        </Box>
      )}
      <Box
        as="input"
        className={clsx(inputStyle, props.className)}
        width={props.fullWidth ? '100%' : undefined}
        {...props}
      />
    </Box>
  );
};

export default Input;
