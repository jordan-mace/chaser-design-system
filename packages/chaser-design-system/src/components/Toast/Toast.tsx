import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import {
  toastContainer,
  toastWrapper,
  toastItem,
  toastCloseButton,
  toastProgressBarContainer,
  toastProgressBar,
  toastContent,
  fadeOutSuccess,
  fadeOutError,
  fadeOutWarning,
  fadeOutInfo,
  slideInRight,
} from './styles.css';
import { Icon } from '../Icon';
import {
  type ToastPosition,
  type ToastVariant,
  type ToastOptions,
  type ToastItem,
  type ToastContextType,
  type ToastProviderProps,
  type ToastContainerProps,
  type ToastComponentProps,
} from './Toast.types';

const ToastContext = createContext<ToastContextType>({
  addToast: () => '',
  removeToast: () => {},
  handleDismissAll: () => {},
  handleResumeAll: () => {},
});

const getFadeOutForVariant = (variant: ToastVariant) => {
  const fadeOutMap = {
    success: fadeOutSuccess,
    error: fadeOutError,
    warning: fadeOutWarning,
    info: fadeOutInfo,
  };
  return fadeOutMap[variant] || fadeOutInfo;
};

const positionToClassKey: Record<ToastPosition, keyof typeof toastWrapper> = {
  'top-left': 'topLeft',
  'top-center': 'topCenter',
  'top-right': 'topRight',
  'bottom-left': 'bottomLeft',
  'bottom-center': 'bottomCenter',
  'bottom-right': 'bottomRight',
};

export const ToastProvider = ({
  children,
  position = 'top-right',
  maxVisible = 5,
  stacking = 'stack',
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [pauseId, setPauseId] = useState<string | null>(null);
  const timeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toastsRef = useRef<ToastItem[]>([]);

  // Keep ref in sync with state
  useEffect(() => {
    toastsRef.current = toasts;
  }, [toasts]);

  const removeToastInternal = useCallback((id: string) => {
    setToasts((prev) => {
      const toast = prev.find((t) => t.id === id);
      if (toast) {
        toast.options.onClose?.();
      }
      return prev.filter((t) => t.id !== id);
    });

    const timeout = timeoutsRef.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
  }, []);

  const addToast = useCallback(
    (message: string, variant: ToastVariant = 'info', options: ToastOptions = {}): string => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const duration = options.duration ?? 5000;
      const startTime = Date.now();

      const newToast: ToastItem = {
        id,
        message,
        variant,
        options: { ...options, duration, position: options.position ?? position },
        startTime,
        paused: false,
        duration,
      };

      setToasts((prev) => {
        if (stacking === 'replace') {
          return [newToast];
        }
        const filtered = prev.filter((t) => {
          const elapsed = Date.now() - t.startTime;
          return elapsed < (t.options.duration ?? 5000);
        });
        return [...filtered, newToast].slice(-maxVisible);
      });

      const timeoutId = setTimeout(() => {
        removeToastInternal(id);
      }, duration);

      timeoutsRef.current.set(id, timeoutId);

      return id;
    },
    [maxVisible, stacking, position, removeToastInternal],
  );

  const dismissInternal = useCallback((id: string) => {
    const toast = toastsRef.current.find((t) => t.id === id);
    if (!toast) return;

    setToasts((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, paused: true };
        }
        return t;
      }),
    );

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    setPauseId(id);
    pauseTimeoutRef.current = setTimeout(() => {
      setPauseId(null);
      removeToastInternal(id);
    }, 500);

    const timeout = timeoutsRef.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
  }, [removeToastInternal]);

  const dismissAllInternal = useCallback(() => {
    setPauseId('all');
    toastsRef.current.forEach((toast) => {
      const timeout = timeoutsRef.current.get(toast.id);
      if (timeout) {
        clearTimeout(timeout);
        timeoutsRef.current.delete(toast.id);
      }
    });
  }, []);

  const resumeAllInternal = useCallback(() => {
    setPauseId(null);
    toastsRef.current.forEach((toast) => {
      if (toast.paused && toast.duration > 500) {
        const timeout = setTimeout(() => {
          removeToastInternal(toast.id);
        }, toast.duration - (Date.now() - toast.startTime));
        timeoutsRef.current.set(toast.id, timeout);
      }
    });
  }, [removeToastInternal]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const value: ToastContextType = {
    addToast,
    removeToast: removeToastInternal,
    handleDismissAll: dismissAllInternal,
    handleResumeAll: resumeAllInternal,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        pauseId={pauseId}
        onDismiss={dismissInternal}
        onDismissAll={dismissAllInternal}
        onResumeAll={resumeAllInternal}
      />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({
  toasts,
  position,
  pauseId,
  onDismiss,
  onDismissAll,
  onResumeAll,
}: ToastContainerProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const existingContainer = document.getElementById('toast-container');
    if (existingContainer) {
      setContainer(existingContainer);
    } else {
      const el = document.createElement('div');
      el.id = 'toast-container';
      document.body.appendChild(el);
      setContainer(el);
    }
  }, []);

  if (!container) return null;

  return createPortal(
    <div
      className={clsx(toastContainer, toastWrapper[positionToClassKey[position]])}
      onMouseEnter={onDismissAll}
      onMouseLeave={onResumeAll}
    >
      {toasts.map((toast) => {
        const elapsed = Date.now() - toast.startTime;
        const progress = ((toast.duration - elapsed) / toast.duration) * 100;
        const fadeOutAnimation = getFadeOutForVariant(toast.variant);

        return (
          <div
            key={toast.id}
            className={toastItem}
            style={{
              opacity: toast.paused || pauseId !== null ? 0.7 : 1,
              animation: `${slideInRight} 0.2s ease, 0.2s ease ${fadeOutAnimation} forwards`,
            }}
            onMouseEnter={() => onDismiss(toast.id)}
          >
            <div className={toastContent}>
              <Icon name={toast.variant === 'success' ? 'check' : toast.variant === 'error' ? 'error' : 'info'} />
              <span style={{ marginLeft: '8px' }}>{toast.message}</span>
              {toast.options.closable !== false && (
                <button
                  type="button"
                  className={toastCloseButton}
                  onClick={() => onDismiss(toast.id)}
                  aria-label="Close toast"
                >
                  <Icon name="close" />
                </button>
              )}
              {toast.duration > 0 && (
                <div className={toastProgressBarContainer}>
                  <div
                    className={toastProgressBar}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>,
    container,
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};

export const Toast = ({ message, variant = 'info', options, className }: ToastComponentProps) => {
  return null;
};

Toast.displayName = 'Toast';
