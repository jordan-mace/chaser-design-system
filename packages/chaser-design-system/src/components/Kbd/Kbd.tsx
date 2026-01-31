import React from 'react';
import { kbd } from './styles.css';

export interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

const Kbd = ({ children, className, ...props }: KbdProps) => {
  return (
    <kbd className={`${kbd} ${className || ''}`} {...props}>
      {children}
    </kbd>
  );
};

export default Kbd;
