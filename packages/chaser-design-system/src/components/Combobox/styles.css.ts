import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const comboboxContainer = styleWithLayer({
  position: 'relative',
  width: '100%',
});

export const comboboxInput = styleWithLayer({
  width: '100%',
  padding: '0.75rem 2.5rem 0.75rem 1rem',
  fontSize: '14px',
  fontFamily: vars.fontFamily.body,
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.inputBackground,
  border: `1px solid ${vars.colors.inputBorder}`,
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  '::placeholder': {
    color: vars.colors.inputPlaceholder,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.inputBorderFocused}`,
    outlineOffset: '2px',
  },
  ':hover': {
    borderColor: vars.colors.inputBorderFocused,
  },
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
      backgroundColor: vars.colors.backgroundMuted,
    },
    '&:disabled:hover': {
      borderColor: vars.colors.inputBorder,
    },
  },
});

export const comboboxInputVariants = styleVariants({
  default: {},
  error: {
    border: `1px solid ${vars.colors.alertErrorBorder}`,
    ':focus-visible': {
      outline: `2px solid ${vars.colors.alertErrorBorder}`,
    },
    ':hover': {
      borderColor: vars.colors.alertErrorBorder,
    },
  },
});

export const comboboxLabel = styleWithLayer({
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  color: vars.colors.textPrimary,
  marginBottom: '8px',
});

export const comboboxDropdown = styleWithLayer({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: vars.colors.backgroundDefault,
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '8px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  maxHeight: '200px',
  overflowY: 'auto',
  zIndex: 50,
  marginTop: '4px',
});

export const comboboxOption = styleWithLayer({
  padding: '0.75rem 1rem',
  cursor: 'pointer',
  fontSize: '14px',
  color: vars.colors.textPrimary,
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: vars.colors.backgroundMuted,
  },
  ':focus-visible': {
    outline: 'none',
    backgroundColor: vars.colors.backgroundMuted,
  },
});

export const comboboxOptionSelected = styleWithLayer({
  backgroundColor: vars.colors.buttonBackgroundPrimary,
  color: vars.colors.buttonTextPrimary,
  ':hover': {
    backgroundColor: vars.colors.buttonBackgroundFocusedPrimary,
  },
});

export const comboboxOptionDisabled = styleWithLayer({
  opacity: 0.5,
  cursor: 'not-allowed',
  ':hover': {
    backgroundColor: 'transparent',
  },
});

export const comboboxClearButton = styleWithLayer({
  position: 'absolute',
  right: '2.5rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.25rem',
  color: vars.colors.textSecondary,
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    color: vars.colors.textPrimary,
  },
});

export const comboboxArrow = styleWithLayer({
  position: 'absolute',
  right: '0.75rem',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: vars.colors.textSecondary,
});

export const comboboxNoResults = styleWithLayer({
  padding: '0.75rem 1rem',
  fontSize: '14px',
  color: vars.colors.textSecondary,
  textAlign: 'center',
});

export const comboboxHint = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.textSecondary,
  marginTop: '4px',
});

export const comboboxErrorMessage = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.alertErrorText,
  marginTop: '4px',
});
