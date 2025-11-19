import clsx from 'clsx';
import React from 'react';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Form = (props: FormProps) => {
  return (
    <form className={clsx(props.className)} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
