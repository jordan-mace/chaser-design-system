import React from 'react';
import { visuallyHidden } from './styles.css';
import { Sprinkles } from '../../styles/sprinkles.css';

export type VisuallyHiddenProps = Sprinkles & {
  children: React.ReactNode;
  as?: React.ElementType;
};

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
