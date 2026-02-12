import clsx from 'clsx';
import React from 'react';
import { icon } from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type IconProps = React.HTMLAttributes<HTMLSpanElement> &
  Sprinkles & {
    name?: string;
    children?: React.ReactNode;
    color?: string;
  };

const IconComponent = ({ name, children, className, color }: IconProps) => {
  const iconMap: Record<string, string> = {
    check: '✓',
    error: '✗',
    warning: '⚠',
    info: 'i',
    success: '✓',
    close: '×',
  };

  const displayContent = children || (name ? iconMap[name] : undefined);

  if (!displayContent) {
    return null;
  }

  return (
    <Box
      as="span"
      className={clsx(icon, className)}
      style={{ color }}
      aria-hidden="true"
    >
      {displayContent}
    </Box>
  );
};

IconComponent.displayName = 'Icon';

export default IconComponent;
