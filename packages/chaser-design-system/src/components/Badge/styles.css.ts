import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const badgeVariants = styleVariants({
  default: {
    backgroundColor: vars.colors.borderDefault,
    color: vars.colors.textPrimary,
  },
  success: {
    backgroundColor: vars.colors.alertSuccessBackground,
    color: vars.colors.alertSuccessText,
    border: `1px solid ${vars.colors.alertSuccessBorder}`,
  },
  warning: {
    backgroundColor: vars.colors.alertWarningBackground,
    color: vars.colors.alertWarningText,
    border: `1px solid ${vars.colors.alertWarningBorder}`,
  },
  error: {
    backgroundColor: vars.colors.alertErrorBackground,
    color: vars.colors.alertErrorText,
    border: `1px solid ${vars.colors.alertErrorBorder}`,
  },
  info: {
    backgroundColor: vars.colors.alertInfoBackground,
    color: vars.colors.alertInfoText,
    border: `1px solid ${vars.colors.alertInfoBorder}`,
  },
});

export const badgeSizes = styleVariants({
  small: {
    fontSize: '0.7rem',
    padding: '0.125rem 0.375rem',
    borderRadius: '0.25rem',
  },
  medium: {
    fontSize: '0.75rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
  },
  large: {
    fontSize: '0.875rem',
    padding: '0.375rem 0.625rem',
    borderRadius: '0.5rem',
  },
});

export const badge = styleWithLayer({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  fontFamily: vars.fontFamily.body,
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
});

export const badgeDot = styleWithLayer({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  display: 'inline-block',
  padding: 0,
  minWidth: 'auto',
});

export const badgeDotSizes = styleVariants({
  small: {
    width: '0.375rem',
    height: '0.375rem',
  },
  medium: {
    width: '0.5rem',
    height: '0.5rem',
  },
  large: {
    width: '0.625rem',
    height: '0.625rem',
  },
});
