import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const text = style({
  color: vars.colors.textPrimary,
  fontFamily: vars.fontFamily.body,
  lineHeight: '24px',
});

export const heading = style({
  color: vars.colors.textPrimary,
  fontFamily: vars.fontFamily.heading,
  lineHeight: '32px',
  fontWeight: '700',
});
