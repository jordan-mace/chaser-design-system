import React from 'react';
import { list } from './styles.css';

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className={list}>{children}</ul>;
};

export default List;
