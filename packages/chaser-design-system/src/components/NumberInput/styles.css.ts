import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const numberInputContainer = styleWithLayer({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const numberInput = styleWithLayer({
  width: '100%',
  padding: '0.75rem 2.5rem',
  fontSize: '14px',
  fontFamily: vars.fontFamily.body,
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.inputBackground,
  border: `1px solid ${vars.colors.inputBorder}`,
  borderRadius: '8px',
  outline: 'none',
  textAlign: 'center',
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

export const numberInputVariants = styleVariants({
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

export const numberInputLabel = styleWithLayer({
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  color: vars.colors.textPrimary,
  marginBottom: '8px',
});

export const numberInputStepper = styleWithLayer({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  right: '0.5rem',
  top: '50%',
  transform: 'translateY(-50%)',
  gap: '2px',
});

export const numberInputStepperLeft = styleWithLayer({
  left: '0.5rem',
  right: 'auto',
});

export const numberInputButton = styleWithLayer({
  width: '1.5rem',
  height: '1.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.colors.buttonBackgroundSecondary,
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '12px',
  color: vars.colors.buttonTextSecondary,
  transition: 'all 0.15s ease',
  padding: 0,
  ':hover': {
    backgroundColor: vars.colors.buttonBackgroundFocusedSecondary,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    '&:disabled:hover': {
      backgroundColor: vars.colors.buttonBackgroundSecondary,
    },
  },
});

export const numberInputWrapper = styleWithLayer({
  width: '100%',
});

export const numberInputHint = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.textSecondary,
  marginTop: '4px',
});

export const numberInputErrorMessage = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.alertErrorText,
  marginTop: '4px',
});
