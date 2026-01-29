import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const list = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const listItem = style({
  padding: '0.5rem 0',
  borderBottom: `1px solid ${vars.colors.listBorder}`,
});
