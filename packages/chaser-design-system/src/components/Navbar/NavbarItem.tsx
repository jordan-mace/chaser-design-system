import clsx from 'clsx';
import React from 'react';
import { navbarItemStyle } from './styles.css';

type NavbarItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const NavbarItem = (props: NavbarItemProps) => {
  return <div className={clsx(navbarItemStyle, props.className)} {...props} />;
};

export default NavbarItem;
