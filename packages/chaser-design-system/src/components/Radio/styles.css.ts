import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const radioContainer = styleWithLayer({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  userSelect: 'none',
});

export const radioInput = style({
  width: '18px',
  height: '18px',
  border: `2px solid ${vars.colors.borderDefault}`,
  borderRadius: '50%',
  cursor: 'pointer',
  accentColor: vars.colors.buttonBackgroundPrimary,
  ':focus-visible': {
    outline: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
    outlineOffset: '2px',
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

export const radioLabel = styleWithLayer({
  fontFamily: vars.fontFamily.body,
  fontSize: '14px',
  color: vars.colors.textPrimary,
});

export const radioGroup = styleWithLayer({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const radioGroupHorizontal = styleWithLayer({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  flexWrap: 'wrap',
});
