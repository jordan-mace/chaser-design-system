import React from 'react';
import { listItem } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

const ListItem = ({
  children,
  ...props
}: { children: React.ReactNode } & Sprinkles) => {
  return (
    <Box as="li" className={listItem} {...props}>
      {children}
    </Box>
  );
};

export default ListItem;
