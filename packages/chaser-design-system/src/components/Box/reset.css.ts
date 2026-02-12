import { style } from '@vanilla-extract/css';
import { resetLayer } from '../../styles/layers.css';

export const reset = style({
  '@layer': {
    [resetLayer]: {
      margin: 0,
      padding: 0,
      border: 0,
      boxSizing: 'border-box',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  },
});
