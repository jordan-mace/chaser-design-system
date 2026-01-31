import React from 'react';
import { visuallyHidden } from './styles.css';

export interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

const VisuallyHidden = ({ 
  children, 
  as: Component = 'span',
  className,
  ...props 
}: VisuallyHiddenProps) => {
  return React.createElement(
    Component as React.ElementType,
    {
      className: visuallyHidden,
      ...props,
    },
    children
  );
};

export default VisuallyHidden;
