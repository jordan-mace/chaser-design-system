import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerColors = styleVariants({
  primary: {
    borderColor: vars.colors.borderDefault,
    borderTopColor: vars.colors.buttonBackgroundPrimary,
  },
  secondary: {
    borderColor: vars.colors.borderDefault,
    borderTopColor: vars.colors.buttonBackgroundSecondary,
  },
  success: {
    borderColor: vars.colors.borderDefault,
    borderTopColor: vars.colors.alertSuccessBorder,
  },
  warning: {
    borderColor: vars.colors.borderDefault,
    borderTopColor: vars.colors.alertWarningBorder,
  },
  error: {
    borderColor: vars.colors.borderDefault,
    borderTopColor: vars.colors.alertErrorBorder,
  },
  info: {
    borderColor: vars.colors.borderDefault,
    borderTopColor: vars.colors.alertInfoBorder,
  },
});

export const spinnerSizes = styleVariants({
  small: {
    width: '1rem',
    height: '1rem',
    borderWidth: '2px',
  },
  medium: {
    width: '1.5rem',
    height: '1.5rem',
    borderWidth: '3px',
  },
  large: {
    width: '2rem',
    height: '2rem',
    borderWidth: '4px',
  },
});

export const spinner = style({
  borderRadius: '50%',
  borderStyle: 'solid',
  animation: `${spin} 1s linear infinite`,
  display: 'inline-block',
});
