import clsx from 'clsx';
import { text } from './styles.css';
import React from 'react';

const P = (props: { children: React.ReactNode; className?: string }) => {
  return <p className={clsx(props.className, text)}>{props.children}</p>;
};

export default P;
