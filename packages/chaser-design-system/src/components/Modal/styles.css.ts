import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const modalVariants = styleVariants({
  small: {
    maxWidth: '400px',
  },
  medium: {
    maxWidth: '600px',
  },
  large: {
    maxWidth: '800px',
  },
  full: {
    maxWidth: '95vw',
  },
});

export const modal = styleWithLayer({
  background: vars.colors.backgroundDefault,
  borderRadius: '0.75rem',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  border: '1px solid var(--modal-border, transparent)',
  color: vars.colors.textPrimary,
  fontFamily: vars.fontFamily.body,
  maxWidth: '90vw',
  maxHeight: '90vh',
  flexDirection: 'column',
  overflow: 'hidden',
  selectors: {
    '&:not([open])': {
      display: 'none',
    },
    '[open] &': {
      display: 'flex',
    },
    '&::backdrop': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
});

export const modalHeader = styleWithLayer({
  padding: '1.25rem',
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
});

export const modalTitle = styleWithLayer({
  fontFamily: vars.fontFamily.heading,
  fontSize: '1.25rem',
  fontWeight: '600',
  color: vars.colors.textPrimary,
  margin: 0,
});

export const modalCloseButton = styleWithLayer({
  background: 'none',
  border: 'none',
  padding: '0.5rem',
  cursor: 'pointer',
  borderRadius: '0.375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.textSecondary,
  fontSize: '1.5rem',
  lineHeight: '1',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.borderMuted,
      color: vars.colors.textPrimary,
    },
    '&:focus-visible': {
      outline: '2px solid var(--modal-focus-ring, currentColor)',
      outlineOffset: '2px',
    },
  },
});

export const modalBody = styleWithLayer({
  padding: '1.25rem',
  overflowY: 'auto',
  flex: 1,
});

export const modalFooter = styleWithLayer({
  padding: '1.25rem',
  borderTop: `1px solid ${vars.colors.borderMuted}`,
  display: 'flex',
  gap: '0.75rem',
  justifyContent: 'flex-end',
  alignItems: 'center',
});
