import clsx from 'clsx';
import { heading, text } from './styles.css';
import React from 'react';

type HeaderProps = {
  variant: 'h1' | 'h2' | 'h3';
  className?: string;
  label?: string;
};

const Header = ({ variant, label, className }: HeaderProps) => {
  return React.createElement(variant, {
    className: clsx(className, text, heading),
    children: label,
  });
};

export default Header;
