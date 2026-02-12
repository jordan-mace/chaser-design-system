import clsx from 'clsx';
import React from 'react';
import {
  progress,
  progressBar,
  progressFill,
  progressLabel,
} from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type ProgressProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    value: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    variant?: 'default' | 'success' | 'warning' | 'error';
  };

const Progress = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  variant = 'default',
  className,
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <Box className={clsx(progress, className)} width="100%">
      {(label || showPercentage) && (
        <Box
          className={progressLabel}
          display="flex"
          justifyContent="space-between"
          fontSize="12px"
          fontWeight="500"
          color="c5-600"
          marginBottom="small"
          fontFamily="body"
        >
          {label && <Box as="span">{label}</Box>}
          {showPercentage && <Box as="span">{percentage}%</Box>}
        </Box>
      )}
      <Box
        as="div"
        className={progressBar[variant]}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <Box
          as="div"
          className={progressFill[variant]}
          style={{ width: `${percentage}%` }}
          role="presentation"
        />
      </Box>
    </Box>
  );
};

export default Progress;
