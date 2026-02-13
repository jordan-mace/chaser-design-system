import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type HeaderVariant = 'h1' | 'h2' | 'h3';

export type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> &
  Sprinkles & {
    variant: HeaderVariant;
    children?: React.ReactNode;
  };

export type PProps = React.HTMLAttributes<HTMLParagraphElement> &
  Sprinkles & {
    children: React.ReactNode;
  };
