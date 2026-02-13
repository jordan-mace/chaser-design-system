import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type NavbarProps = React.HTMLAttributes<HTMLElement> & Sprinkles & {
  children?: React.ReactNode;
};
