import clsx from 'clsx';
import { card, cardVariants } from './styles.css';
import React from 'react';
import Box from '../Box';
import { type CardProps } from './Card.types';

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
