import React from 'react';
import { list } from './styles.css';
import Box from '../Box';

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="ul" className={list}>
      {children}
    </Box>
  );
};

export default List;
