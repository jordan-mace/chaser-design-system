import React from 'react';
import { list } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

const List = ({
  children,
  ...props
}: { children: React.ReactNode } & Sprinkles) => {
  return (
    <Box as="ul" className={list} {...props}>
      {children}
    </Box>
  );
};

export default List;
