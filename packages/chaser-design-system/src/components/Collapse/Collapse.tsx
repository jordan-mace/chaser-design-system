import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import {
  collapseContainer,
  collapseContent,
  collapseAnimation,
} from './styles.css';
import Box from '../Box';
import { type CollapseProps } from './Collapse.types';

const Collapse = ({
  isOpen,
  children,
  animation = 'both',
  duration = 300,
  className,
  onAnimationEnd,
}: CollapseProps) => {
  const [height, setHeight] = useState<number | undefined>(
    isOpen ? undefined : 0,
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    } else {
      setIsAnimating(true);
      setHeight(0);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (isOpen) {
      setHeight(undefined);
    }
    onAnimationEnd?.();
  };

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `height ${duration}ms ease-out, opacity ${duration}ms ease-out`,
      height: height !== undefined ? `${height}px` : undefined,
      opacity: isOpen || isAnimating ? 1 : 0,
    };

    if (animation === 'height') {
      return {
        ...baseStyles,
        transition: `height ${duration}ms ease-out`,
        opacity: 1,
      };
    }

    if (animation === 'opacity') {
      return {
        ...baseStyles,
        transition: `opacity ${duration}ms ease-out`,
        height: undefined,
      };
    }

    return baseStyles;
  };

  if (!isOpen && !isAnimating && animation !== 'opacity') {
    return null;
  }

  return (
    <Box
      className={clsx(collapseContainer, className)}
      style={getAnimationStyles()}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden={!isOpen}
    >
      <Box ref={contentRef} className={collapseContent}>
        {children}
      </Box>
    </Box>
  );
};

export default Collapse;
