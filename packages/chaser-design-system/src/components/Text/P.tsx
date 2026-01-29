import clsx from 'clsx';
import { text } from './styles.css';
import React from 'react';
import Box from '../Box';

const P = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <Box as="p" className={clsx(props.className, text)}>
      {props.children}
    </Box>
  );
};

export default P;
