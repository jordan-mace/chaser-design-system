import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const paginationContainer = styleWithLayer({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const pageButton = styleWithLayer({
  padding: '0.5rem 0.75rem',
  borderRadius: '0.5rem',
  border: `1px solid ${vars.colors.borderDefault}`,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  minWidth: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

export const pageButtonVariants = styleVariants({
  default: {
    color: vars.colors.textPrimary,
    ':hover': {
      backgroundColor: vars.colors.buttonBackgroundSecondary,
    },
  },
  active: {
    backgroundColor: vars.colors.buttonBackgroundPrimary,
    color: vars.colors.buttonTextPrimary,
    borderColor: vars.colors.buttonBackgroundPrimary,
    ':hover': {
      backgroundColor: vars.colors.buttonBackgroundFocusedPrimary,
    },
  },
});

export const ellipsis = styleWithLayer({
  padding: '0.5rem',
  color: vars.colors.textPrimary,
  userSelect: 'none',
});
