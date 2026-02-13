import clsx from 'clsx';
import React from 'react';
import { navbarStyle } from './styles.css';
import Box from '../Box';
import { type NavbarProps } from './Navbar.types';

const Navbar = (props: NavbarProps) => {
  return (
    <Box
      as="nav"
      width="100%"
      display="flex"
      flexDirection="row"
      gap="medium"
      className={clsx(
        navbarStyle,
        props.className,
      )}
      {...props}
    />
  );
};

export default Navbar;
