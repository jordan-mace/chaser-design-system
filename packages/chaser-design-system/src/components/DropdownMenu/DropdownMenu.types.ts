import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type DropdownMenuPosition =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight';
export type DropdownMenuItemVariant = 'default' | 'destructive' | 'disabled';

export interface DropdownMenuItemProps {
  label: string;
  onClick?: () => void;
  variant?: DropdownMenuItemVariant;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface DropdownMenuGroupProps {
  label?: string;
  items: DropdownMenuItemProps[];
}

export type DropdownMenuProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    trigger: React.ReactNode;
    items?: DropdownMenuItemProps[];
    groups?: DropdownMenuGroupProps[];
    position?: DropdownMenuPosition;
    closeOnItemClick?: boolean;
  };
