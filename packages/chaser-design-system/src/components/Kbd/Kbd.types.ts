import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type KbdProps = React.HTMLAttributes<HTMLElement> &
  Sprinkles & {
    children: React.ReactNode;
  };
