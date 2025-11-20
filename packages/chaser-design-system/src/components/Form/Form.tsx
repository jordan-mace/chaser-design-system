import clsx from 'clsx';
import React from 'react';
import { sprinkles } from '../../styles/sprinkles.css';
import { formStyle } from './styles.css';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Form = (props: FormProps) => {
  return (
    <form
      className={clsx(
        formStyle,
        sprinkles({ gap: 'medium', paddingX: 'large' }),
        props.className,
      )}
      {...props}
    >
      {props.children}
    </form>
  );
};

export default Form;
