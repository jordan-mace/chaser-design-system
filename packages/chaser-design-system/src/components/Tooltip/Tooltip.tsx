import clsx from 'clsx';
import {
  tooltipContainer,
  tooltipContent,
  tooltipPositions,
  tooltipArrow,
  tooltipArrowTop,
  tooltipArrowBottom,
  tooltipArrowLeft,
  tooltipArrowRight,
} from './styles.css';
import React, { useState } from 'react';
import Box from '../Box';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  position?: TooltipPosition;
  showArrow?: boolean;
  children: React.ReactNode;
}

const Tooltip = ({
  content,
  position = 'top',
  showArrow = true,
  children,
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const arrowStyle = {
    top: position === 'bottom' ? tooltipArrowBottom : undefined,
    bottom: position === 'top' ? tooltipArrowTop : undefined,
    left: position === 'right' ? tooltipArrowLeft : undefined,
    right: position === 'left' ? tooltipArrowRight : undefined,
  };

  return (
    <Box
      as="div"
      className={clsx(tooltipContainer, props.className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      {...props}
    >
      {children}
      <Box
        as="div"
        className={clsx(
          tooltipContent,
          tooltipPositions[position],
        )}
        data-visible={isVisible}
        role="tooltip"
      >
        {showArrow && (
          <Box
            as="span"
            className={clsx(tooltipArrow, arrowStyle.top, arrowStyle.bottom, arrowStyle.left, arrowStyle.right)}
          />
        )}
        {content}
      </Box>
    </Box>
  );
};

export default Tooltip;
