import React from 'react';
import { kbd } from './styles.css';
import { type KbdProps } from './Kbd.types';

const Kbd = ({ children, className, ...props }: KbdProps) => {
  return (
    <kbd className={`${kbd} ${className || ''}`} {...props}>
      {children}
    </kbd>
  );
};

export default Kbd;
