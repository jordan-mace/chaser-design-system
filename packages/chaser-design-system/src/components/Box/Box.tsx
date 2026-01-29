import clsx from 'clsx';
import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';
import { reset } from './reset.css';
import React, { forwardRef } from 'react';

type BoxProps = Sprinkles & {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};

const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { as: Component = 'div', className, children, ...rest } = props;

  const sprinkleProps: Sprinkles = {};
  const otherProps: Record<string, unknown> = { ref };

  const sprinkleKeys = new Set([
    'display',
    'width',
    'height',
    'flexDirection',
    'justifyContent',
    'alignItems',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'borderLeft',
    'borderRight',
    'borderTop',
    'borderBottom',
    'borderRadius',
    'gap',
    'padding',
    'border',
    'paddingX',
    'paddingY',
    'marginX',
    'marginY',
    'placeItems',
    'color',
    'background',
  ]);

  Object.entries(rest).forEach(([key, value]) => {
    if (sprinkleKeys.has(key)) {
      (sprinkleProps as Record<string, unknown>)[key] = value;
    } else {
      otherProps[key] = value;
    }
  });

  return React.createElement(
    Component as React.ElementType,
    {
      className: clsx(reset, sprinkles(sprinkleProps), className as string),
      ...otherProps,
    },
    children as React.ReactNode,
  );
});

Box.displayName = 'Box';

export default Box;
export type { BoxProps };
