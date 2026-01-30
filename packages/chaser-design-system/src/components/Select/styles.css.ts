import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const selectContainer = styleWithLayer({
  width: '100%',
});

export const select = styleVariants({
  default: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '14px',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.textPrimary,
    backgroundColor: vars.colors.inputBackground,
    border: `1px solid ${vars.colors.inputBorder}`,
    borderRadius: '8px',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23252525' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    transition: 'border-color 0.2s ease',
    '::placeholder': {
      color: vars.colors.inputPlaceholder,
    },
    ':focus-visible': {
      outline: `2px solid ${vars.colors.inputBorderFocused}`,
      outlineOffset: '2px',
    },
    ':hover:not(:disabled)': {
      borderColor: vars.colors.inputBorderFocused,
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
      backgroundColor: vars.colors.backgroundMuted,
    },
  },
  error: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '14px',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.textPrimary,
    backgroundColor: vars.colors.inputBackground,
    border: `1px solid ${vars.colors.alertErrorBorder}`,
    borderRadius: '8px',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23252525' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    transition: 'border-color 0.2s ease',
    '::placeholder': {
      color: vars.colors.inputPlaceholder,
    },
    ':focus-visible': {
      outline: `2px solid ${vars.colors.alertErrorBorder}`,
      outlineOffset: '2px',
    },
    ':hover:not(:disabled)': {
      borderColor: vars.colors.alertErrorBorder,
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
      backgroundColor: vars.colors.backgroundMuted,
    },
  },
});

export const selectLabel = styleWithLayer({
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  color: vars.colors.textPrimary,
  marginBottom: '8px',
});

export const selectWrapper = styleWithLayer({
  width: '100%',
});
