import clsx from 'clsx';
import React from 'react';
import { formInputStyle } from './styles.css';
import { Input } from '../..';
import { InputProps } from '../Input/Input';
import Box from '../Box';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & InputProps;

const FormInput = (props: FormInputProps) => {
  return (
    <Box as={Input} padding="small" className={clsx(formInputStyle, props.className)} label={props.label} {...props} />
  );
};

export default FormInput;
