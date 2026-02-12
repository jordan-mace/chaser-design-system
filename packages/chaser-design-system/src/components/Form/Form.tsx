import clsx from 'clsx';
import React from 'react';
import { formStyle } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Sprinkles & {
    children?: React.ReactNode;
  };

const Form = (props: FormProps) => {
  return (
    <Box
      as="form"
      gap="medium"
      paddingX="large"
      className={clsx(formStyle, props.className)}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Form;
