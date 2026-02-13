import clsx from 'clsx';
import React from 'react';
import { formInputStyle } from './styles.css';
import { Input } from '../..';
import Box from '../Box';
import { type FormInputProps } from './FormInput.types';

const FormInput = (props: FormInputProps) => {
  return (
    <Box as={Input} padding="small" className={clsx(formInputStyle, props.className)} label={props.label} {...props} />
  );
};

export default FormInput;
