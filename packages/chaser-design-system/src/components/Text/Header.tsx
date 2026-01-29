import clsx from 'clsx';
import { heading, text } from './styles.css';
import React from 'react';
import Box from '../Box';

type HeaderProps = {
  variant: 'h1' | 'h2' | 'h3';
  className?: string;
  label?: string;
};

const Header = ({ variant, label, className }: HeaderProps) => {
  return (
    <Box as={variant} className={clsx(className, text, heading)}>
      {label}
    </Box>
  );
};

export default Header;
