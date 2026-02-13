import clsx from 'clsx';
import { button, buttonVariants } from './styles.css';
import React from 'react';
import Box from '../Box';
import { type ButtonProps } from './Button.types';

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <Box
      as="button"
      borderRadius="large"
      width={props.fullWidth ? '100%' : undefined}
      className={clsx(buttonVariants[props.variant], button, props.className)}
      {...props}
    >
      {props.children || label}
    </Box>
  );
};

export default Button;
