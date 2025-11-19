import clsx from 'clsx';
import React from 'react';
import { inputStyle, label } from './styles.css';
import { text } from '../Text/styles.css';
import { sprinkles } from '../../styles/sprinkles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  fullWidth?: boolean;
};

const Input = (props: InputProps) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: { mobile: 'column', tablet: 'row' },
        gap: 'small',
      })}
    >
      {props.label && (
        <label
          className={clsx(
            text,
            label,
            sprinkles({
              marginX: { mobile: 'auto', tablet: 'none' },
              marginY: { mobile: 'none', tablet: 'auto' },
            }),
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>
      )}
      <input className={clsx(inputStyle, props.className)} {...props} />
    </div>
  );
};

export default Input;
