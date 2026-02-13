import { ReactNode } from 'react';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export type ToastOptions = {
  duration?: number;
  closable?: boolean;
  position?: ToastPosition;
  onClose?: () => void;
};

export type ToastItem = {
  id: string;
  message: string;
  variant: ToastVariant;
  options: ToastOptions;
  startTime: number;
  paused: boolean;
  duration: number;
};

export type ToastContextType = {
  addToast: (message: string, variant?: ToastVariant, options?: ToastOptions) => string;
  removeToast: (id: string) => void;
  handleDismissAll: () => void;
  handleResumeAll: () => void;
};

export type ToastProviderProps = {
  children: ReactNode;
  position?: ToastPosition;
  maxVisible?: number;
  stacking?: 'stack' | 'replace';
};

export type ToastContainerProps = {
  toasts: ToastItem[];
  position: ToastPosition;
  pauseId: string | null;
  onDismiss: (id: string) => void;
  onDismissAll: () => void;
  onResumeAll: () => void;
};

export type ToastComponentProps = {
  message: string;
  variant?: ToastVariant;
  options?: ToastOptions;
  className?: string;
};
