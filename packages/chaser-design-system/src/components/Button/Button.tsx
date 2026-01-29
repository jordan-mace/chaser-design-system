import clsx from 'clsx';
import { button, buttonVariants } from './styles.css';
import React from 'react';
import Box from '../Box';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
  label: string;
  fullWidth?: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <Box
      as="button"
      borderRadius="large"
      width={props.fullWidth ? '100%' : undefined}
      className={clsx(
        buttonVariants[props.variant],
        button,
        props.className,
      )}
      {...props}
    >
      {props.label ? props.label : props.children}
    </Box>
  );
};

export default Button;
