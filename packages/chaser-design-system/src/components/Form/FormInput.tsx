import clsx from 'clsx';
import React from 'react';
import { sprinkles } from '../../styles/sprinkles.css';
import { formInputStyle } from './styles.css';
import { Input } from '../..';
import { InputProps } from '../Input/Input';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & InputProps;

const FormInput = (props: FormInputProps) => {
  return (
    <Input
      className={clsx(
        formInputStyle,
        sprinkles({ padding: 'small' }),
        props.className,
      )}
      label={props.label}
      {...props}
    />
  );
};

export default FormInput;
