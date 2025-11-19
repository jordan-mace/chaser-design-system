import clsx from 'clsx';
import React from 'react';
import { sprinkles } from '../../styles/sprinkles.css';
import { navbarStyle } from './styles.css';

type NavbarProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const Navbar = (props: NavbarProps) => {
  return (
    <nav
      className={clsx(
        sprinkles({
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: 'medium',
        }),
        navbarStyle,
        props.className,
      )}
      {...props}
    />
  );
};

export default Navbar;
