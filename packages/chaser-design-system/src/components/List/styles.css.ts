import { style } from '@vanilla-extract/css';

export const list = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const listItem = style({
  padding: '0.5rem 0',
  borderBottom: '1px solid #eee',
});
