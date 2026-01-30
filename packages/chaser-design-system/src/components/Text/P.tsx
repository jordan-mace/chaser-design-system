import clsx from 'clsx';
import { text } from './styles.css';
import React from 'react';
import Box from '../Box';

type PProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  className?: string;
};

const P = (props: PProps) => {
  return (
    <Box as="p" className={clsx(props.className, text)}>
      {props.children}
    </Box>
  );
};

export default P;
