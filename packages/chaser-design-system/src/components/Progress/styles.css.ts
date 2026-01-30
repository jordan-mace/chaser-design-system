import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const progress = styleWithLayer({
  width: '100%',
});

export const progressBar = styleVariants({
  default: {
    width: '100%',
    height: '8px',
    backgroundColor: vars.colors.backgroundMuted,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  success: {
    width: '100%',
    height: '8px',
    backgroundColor: vars.colors.alertSuccessBackground,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  warning: {
    width: '100%',
    height: '8px',
    backgroundColor: vars.colors.alertWarningBackground,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  error: {
    width: '100%',
    height: '8px',
    backgroundColor: vars.colors.alertErrorBackground,
    borderRadius: '4px',
    overflow: 'hidden',
  },
});

export const progressFill = styleVariants({
  default: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
    backgroundColor: vars.colors.buttonBackgroundPrimary,
  },
  success: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
    backgroundColor: vars.colors.alertSuccessBorder,
  },
  warning: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
    backgroundColor: vars.colors.alertWarningBorder,
  },
  error: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
    backgroundColor: vars.colors.alertErrorBorder,
  },
});

export const progressLabel = styleWithLayer({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '12px',
  fontWeight: '500',
  color: vars.colors.textSecondary,
  marginBottom: '4px',
  fontFamily: vars.fontFamily.body,
});
