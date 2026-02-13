import clsx from 'clsx';
import { heading, text } from './styles.css';
import React from 'react';
import Box from '../Box';
import { type HeaderProps } from './Text.types';

const Header = ({ variant, children, className }: HeaderProps) => {
  return (
    <Box as={variant} className={clsx(className, text, heading)}>
      {children}
    </Box>
  );
};

export default Header;
