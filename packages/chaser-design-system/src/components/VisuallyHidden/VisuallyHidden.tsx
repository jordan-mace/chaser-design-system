import React from 'react';
import { visuallyHidden } from './styles.css';
import { type VisuallyHiddenProps } from './VisuallyHidden.types';

const VisuallyHidden = ({
  children,
  as: Component = 'span',
  ...props
}: VisuallyHiddenProps) => {
  return React.createElement(
    Component as React.ElementType,
    {
      className: visuallyHidden,
      ...props,
    },
    children,
  );
};

export default VisuallyHidden;
