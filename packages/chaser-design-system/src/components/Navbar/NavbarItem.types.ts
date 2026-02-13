import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type NavbarItemProps = React.HTMLAttributes<HTMLDivElement> & Sprinkles & {
  children?: React.ReactNode;
};
