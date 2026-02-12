import clsx from 'clsx';
import { text } from './styles.css';
import React from 'react';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type PProps = React.HTMLAttributes<HTMLParagraphElement> &
  Sprinkles & {
    children: React.ReactNode;
  };

const P = (props: PProps) => {
  return (
    <Box as="p" className={clsx(props.className, text)}>
      {props.children}
    </Box>
  );
};

export default P;
