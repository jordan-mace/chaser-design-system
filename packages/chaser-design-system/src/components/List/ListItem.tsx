import React from 'react';
import { listItem } from './styles.css';
import Box from '../Box';

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="li" className={listItem}>
      {children}
    </Box>
  );
};

export default ListItem;
