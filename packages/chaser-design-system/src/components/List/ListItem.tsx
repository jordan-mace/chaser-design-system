import React from 'react';
import { listItem } from './styles.css';

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className={listItem}>{children}</li>;
};

export default ListItem;
