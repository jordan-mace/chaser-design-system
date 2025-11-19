import clsx from 'clsx';
import { heading, text } from './styles.css';
import React from 'react';

type HeaderProps = {
  variant: 'h1' | 'h2' | 'h3';
  className?: string;
  label?: string;
};

const Header = ({ variant, label, className }: HeaderProps) => {
  const Tag = variant;
  return <Tag className={clsx(className, text, heading)}>{label}</Tag>;
};

export default Header;
