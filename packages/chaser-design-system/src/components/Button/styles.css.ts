import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.buttonBackgroundPrimary,
    color: vars.colors.buttonTextPrimary,
    ':focus-visible': {
      backgroundColor: vars.colors.buttonBackgroundFocusedPrimary,
    },
    ':hover': {
      backgroundColor: vars.colors.buttonBackgroundFocusedPrimary,
    },
  },
  secondary: {
    backgroundColor: vars.colors.buttonBackgroundSecondary,
    color: vars.colors.buttonTextSecondary,
    ':focus-visible': {
      backgroundColor: vars.colors.buttonBackgroundFocusedSecondary,
    },
    ':hover': {
      backgroundColor: vars.colors.buttonBackgroundFocusedSecondary,
    },
  },
});

export const button = styleWithLayer({
  padding: '1rem',
  borderRadius: '1rem',
  border: 0,
});
