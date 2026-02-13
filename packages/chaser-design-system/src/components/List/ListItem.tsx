import React from 'react';
import { listItem } from './styles.css';
import Box from '../Box';
import { type ListItemProps } from './ListItem.types';

const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <Box as="li" className={listItem} {...props}>
      {children}
    </Box>
  );
};

export default ListItem;
