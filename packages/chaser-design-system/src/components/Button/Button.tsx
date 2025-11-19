import clsx from 'clsx';
import { button, buttonVariants } from './styles.css';
import { sprinkles } from '../../styles/sprinkles.css';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
  label: string;
  fullWidth?: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        sprinkles({ borderRadius: 'large' }),
        buttonVariants[props.variant],
        button,
        props.fullWidth && sprinkles({ width: '100%' }),
        props.className,
      )}
      {...props}
    >
      {props.label ? props.label : props.children}
    </button>
  );
};

export default Button;
