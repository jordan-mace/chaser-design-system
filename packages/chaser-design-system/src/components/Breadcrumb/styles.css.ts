import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const breadcrumb = styleWithLayer({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: vars.fontFamily.body,
  fontSize: '14px',
});

export const breadcrumbList = style({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: '4px',
});

export const breadcrumbItem = style({
  display: 'flex',
  alignItems: 'center',
});

export const breadcrumbLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.colors.textSecondary,
  textDecoration: 'none',
  fontSize: '14px',
  ':hover': {
    color: vars.colors.buttonBackgroundPrimary,
    textDecoration: 'underline',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
    outlineOffset: '2px',
    borderRadius: '4px',
  },
});

export const breadcrumbSeparator = style({
  color: vars.colors.textDisabled,
  fontSize: '12px',
  userSelect: 'none',
});

export const breadcrumbCurrent = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: vars.colors.textPrimary,
  fontSize: '14px',
  fontWeight: '500',
});
