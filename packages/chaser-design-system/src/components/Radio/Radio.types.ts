import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type RadioLayout = 'vertical' | 'horizontal';

export type RadioContextType = {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> &
  Sprinkles & {
    label?: string;
    value: string;
  };

export type RadioGroupProps = {
  children: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  layout?: RadioLayout;
  className?: string;
};
