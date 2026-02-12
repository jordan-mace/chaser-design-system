import clsx from 'clsx';
import { heading, text } from './styles.css';
import React from 'react';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> &
  Sprinkles & {
    variant: 'h1' | 'h2' | 'h3';
    children?: React.ReactNode;
  };

const Header = ({ variant, children, className }: HeaderProps) => {
  return (
    <Box as={variant} className={clsx(className, text, heading)}>
      {children}
    </Box>
  );
};

export default Header;
