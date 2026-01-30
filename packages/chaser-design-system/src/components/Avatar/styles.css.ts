import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const avatar = styleVariants({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.backgroundMuted,
    color: vars.colors.textPrimary,
    fontFamily: vars.fontFamily.body,
    fontWeight: '500',
    overflow: 'hidden',
    userSelect: 'none',
    textDecoration: 'none',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  small: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.backgroundMuted,
    color: vars.colors.textPrimary,
    fontFamily: vars.fontFamily.body,
    fontWeight: '500',
    overflow: 'hidden',
    userSelect: 'none',
    textDecoration: 'none',
    width: '24px',
    height: '24px',
    fontSize: '12px',
    borderRadius: '12px',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  medium: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.backgroundMuted,
    color: vars.colors.textPrimary,
    fontFamily: vars.fontFamily.body,
    fontWeight: '500',
    overflow: 'hidden',
    userSelect: 'none',
    textDecoration: 'none',
    width: '32px',
    height: '32px',
    fontSize: '14px',
    borderRadius: '16px',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  large: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.backgroundMuted,
    color: vars.colors.textPrimary,
    fontFamily: vars.fontFamily.body,
    fontWeight: '500',
    overflow: 'hidden',
    userSelect: 'none',
    textDecoration: 'none',
    width: '40px',
    height: '40px',
    fontSize: '16px',
    borderRadius: '20px',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  xlarge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.backgroundMuted,
    color: vars.colors.textPrimary,
    fontFamily: vars.fontFamily.body,
    fontWeight: '500',
    overflow: 'hidden',
    userSelect: 'none',
    textDecoration: 'none',
    width: '64px',
    height: '64px',
    fontSize: '24px',
    borderRadius: '32px',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
});

export const avatarImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const avatarWithImage = styleVariants({
  small: {
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    overflow: 'hidden',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  medium: {
    width: '32px',
    height: '32px',
    borderRadius: '16px',
    overflow: 'hidden',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  large: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    overflow: 'hidden',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
  xlarge: {
    width: '64px',
    height: '64px',
    borderRadius: '32px',
    overflow: 'hidden',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
  },
});

export const avatarWrapper = styleWithLayer({
  display: 'inline-flex',
});
