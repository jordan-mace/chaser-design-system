import React from 'react';
import { list } from './styles.css';
import Box from '../Box';
import { type ListProps } from './List.types';

const List = ({ children, ...props }: ListProps) => {
  return (
    <Box as="ul" className={list} {...props}>
      {children}
    </Box>
  );
};

export default List;
