import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const accordion = styleWithLayer({
  width: '100%',
  fontFamily: vars.fontFamily.body,
});

export const accordionItem = style({
  width: '100%',
  marginBottom: '4px',
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '8px',
  overflow: 'hidden',
});

export const accordionHeader = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 16px',
  backgroundColor: vars.colors.backgroundMuted,
  cursor: 'pointer',
  userSelect: 'none',
  fontSize: '14px',
  fontWeight: '500',
  color: vars.colors.textPrimary,
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: vars.colors.backgroundDefault,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
    outlineOffset: '-2px',
  },
});

export const accordionContent = styleVariants({
  collapsed: {
    display: 'none',
    padding: '0 16px',
    fontSize: '14px',
    color: vars.colors.textPrimary,
    backgroundColor: vars.colors.backgroundDefault,
  },
  expanded: {
    display: 'block',
    padding: '12px 16px',
    fontSize: '14px',
    color: vars.colors.textPrimary,
    backgroundColor: vars.colors.backgroundDefault,
    animation: 'slideDown 0.2s ease',
  },
});

export const accordionIcon = style({
  fontSize: '12px',
  transition: 'transform 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const accordionIconExpanded = style({
  transform: 'rotate(180deg)',
});

export const accordionGroup = styleWithLayer({
  width: '100%',
});
