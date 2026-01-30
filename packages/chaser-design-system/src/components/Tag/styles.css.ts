import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const tag = styleVariants({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: vars.fontFamily.body,
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
  default: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.textPrimary,
    backgroundColor: vars.colors.backgroundMuted,
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.buttonTextPrimary,
    backgroundColor: vars.colors.buttonBackgroundPrimary,
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
  success: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.alertSuccessText,
    backgroundColor: vars.colors.alertSuccessBackground,
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
  warning: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.alertWarningText,
    backgroundColor: vars.colors.alertWarningBackground,
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
  error: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '500',
    fontFamily: vars.fontFamily.body,
    color: vars.colors.alertErrorText,
    backgroundColor: vars.colors.alertErrorBackground,
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
});

export const removeButton = style({
  cursor: 'pointer',
  marginLeft: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.textSecondary,
  fontSize: '16px',
  lineHeight: '1',
  ':hover': {
    color: vars.colors.textPrimary,
  },
});

export const tagGroup = styleWithLayer({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});
