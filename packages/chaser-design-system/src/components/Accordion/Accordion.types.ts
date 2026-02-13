import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type AccordionContextType = {
  allowMultiple?: boolean;
  expandedItems: Set<string>;
  toggleItem: (value: string) => void;
};

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    children: React.ReactNode;
    allowMultiple?: boolean;
  };

export type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    value: string;
    title: string;
    children: React.ReactNode;
  };
