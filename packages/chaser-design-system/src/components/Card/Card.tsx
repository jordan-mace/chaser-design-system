import clsx from 'clsx';
import { card, cardVariants } from './styles.css';
import { sprinkles } from '../../styles/sprinkles.css';
import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'elevated' | 'outlined' | 'filled';
  children?: React.ReactNode;
  padding?: 'none' | 'small' | 'medium' | 'large';
};

const Card = ({
  variant = 'elevated',
  padding = 'medium',
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        sprinkles({
          borderRadius: 'large',
          padding: padding !== 'none' ? padding : undefined,
        }),
        cardVariants[variant],
        card,
        props.className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Card;
