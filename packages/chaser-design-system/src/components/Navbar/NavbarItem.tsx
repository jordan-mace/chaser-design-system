import clsx from 'clsx';
import React from 'react';
import { navbarItemStyle } from './styles.css';
import Box from '../Box';

type NavbarItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const NavbarItem = (props: NavbarItemProps) => {
  return <Box as="div" className={clsx(navbarItemStyle, props.className)} {...props} />;
};

export default NavbarItem;
