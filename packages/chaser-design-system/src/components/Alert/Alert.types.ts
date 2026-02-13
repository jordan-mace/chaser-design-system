import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type AlertSeverity = 'success' | 'warning' | 'error' | 'info';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    severity?: AlertSeverity;
    dismissible?: boolean;
    onDismiss?: () => void;
    children?: React.ReactNode;
  };
