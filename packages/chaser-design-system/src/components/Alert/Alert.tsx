import clsx from 'clsx';
import {
  alert,
  alertVariants,
  alertContent,
  alertDismissButton,
} from './styles.css';
import React from 'react';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    severity?: 'success' | 'warning' | 'error' | 'info';
    dismissible?: boolean;
    onDismiss?: () => void;
    children?: React.ReactNode;
  };

const Alert = ({
  severity = 'info',
  dismissible = false,
  onDismiss,
  children,
  ...props
}: AlertProps) => {
  return (
    <Box
      as="div"
      role="alert"
      className={clsx(alert, alertVariants[severity], props.className)}
      {...props}
    >
      <Box as="div" className={alertContent}>
        {children}
      </Box>
      {dismissible && onDismiss && (
        <Box
          as="button"
          className={alertDismissButton}
          onClick={onDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          ×
        </Box>
      )}
    </Box>
  );
};

export default Alert;
