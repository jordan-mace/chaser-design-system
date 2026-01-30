import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const tabsContainer = styleWithLayer({
  width: '100%',
});

export const tabsList = styleWithLayer({
  display: 'flex',
  gap: '4px',
  borderBottom: `2px solid ${vars.colors.borderDefault}`,
  fontFamily: vars.fontFamily.body,
});

export const tabsListHorizontal = styleWithLayer({
  flexDirection: 'row',
  overflowX: 'auto',
});

export const tabsListVertical = styleWithLayer({
  flexDirection: 'column',
  borderBottom: 'none',
  borderRight: `2px solid ${vars.colors.borderDefault}`,
});

export const tabItem = styleVariants({
  base: {
    padding: '0.75rem 1.5rem',
    fontSize: '14px',
    fontWeight: '500',
    color: vars.colors.textSecondary,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
    ':hover:not(:disabled)': {
      color: vars.colors.textPrimary,
      backgroundColor: vars.colors.backgroundMuted,
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
  active: {
    padding: '0.75rem 1.5rem',
    fontSize: '14px',
    fontWeight: '500',
    color: vars.colors.buttonBackgroundPrimary,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    borderBottom: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
    marginBottom: '-2px',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
    ':hover:not(:disabled)': {
      backgroundColor: vars.colors.backgroundMuted,
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
  verticalActive: {
    padding: '0.75rem 1.5rem',
    fontSize: '14px',
    fontWeight: '500',
    color: vars.colors.buttonBackgroundPrimary,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    borderRight: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
    marginRight: '-2px',
    ':focus-visible': {
      outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
      outlineOffset: '2px',
    },
    ':hover:not(:disabled)': {
      backgroundColor: vars.colors.backgroundMuted,
    },
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const tabContent = styleWithLayer({
  padding: '1.5rem 0',
  fontFamily: vars.fontFamily.body,
  fontSize: '14px',
  color: vars.colors.textPrimary,
});
