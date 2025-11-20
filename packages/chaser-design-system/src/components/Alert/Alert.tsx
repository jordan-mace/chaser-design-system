import clsx from 'clsx';
import {
  alert,
  alertVariants,
  alertContent,
  alertDismissButton,
} from './styles.css';
import React from 'react';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
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
    <div
      role="alert"
      className={clsx(alert, alertVariants[severity], props.className)}
      {...props}
    >
      <div className={alertContent}>{children}</div>
      {dismissible && onDismiss && (
        <button
          className={alertDismissButton}
          onClick={onDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
