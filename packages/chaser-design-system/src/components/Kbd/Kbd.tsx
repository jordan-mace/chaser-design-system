import React from 'react';
import { kbd } from './styles.css';
import { Sprinkles } from '../../styles/sprinkles.css';

export type KbdProps = React.HTMLAttributes<HTMLElement> &
  Sprinkles & {
    children: React.ReactNode;
  };

const Kbd = ({ children, className, ...props }: KbdProps) => {
  return (
    <kbd className={`${kbd} ${className || ''}`} {...props}>
      {children}
    </kbd>
  );
};

export default Kbd;
