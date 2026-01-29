import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const alertVariants = styleVariants({
  success: {
    backgroundColor: vars.colors.alertSuccessBackground,
    borderLeftColor: vars.colors.alertSuccessBorder,
    color: vars.colors.alertSuccessText,
  },
  warning: {
    backgroundColor: vars.colors.alertWarningBackground,
    borderLeftColor: vars.colors.alertWarningBorder,
    color: vars.colors.alertWarningText,
  },
  error: {
    backgroundColor: vars.colors.alertErrorBackground,
    borderLeftColor: vars.colors.alertErrorBorder,
    color: vars.colors.alertErrorText,
  },
  info: {
    backgroundColor: vars.colors.alertInfoBackground,
    borderLeftColor: vars.colors.alertInfoBorder,
    color: vars.colors.alertInfoText,
  },
});

export const alert = styleWithLayer({
  padding: '1rem',
  borderLeft: '4px solid',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
  fontFamily: vars.fontFamily.body,
  fontSize: '0.875rem',
  lineHeight: '1.5',
});

export const alertContent = styleWithLayer({
  flex: 1,
});

export const alertDismissButton = styleWithLayer({
  background: 'none',
  border: 'none',
  padding: '0.25rem',
  cursor: 'pointer',
  borderRadius: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.7,
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 1,
  },
});
