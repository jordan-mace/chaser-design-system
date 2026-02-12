import clsx from 'clsx';
import { card, cardVariants } from './styles.css';
import React from 'react';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
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
    <Box
      as="div"
      borderRadius="large"
      padding={padding !== 'none' ? padding : undefined}
      className={clsx(cardVariants[variant], card, props.className)}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Card;
