import { style } from '@vanilla-extract/css';
import { componentsLayer } from '../../styles/layers.css';

export const reset = style({
  '@layer': {
    [componentsLayer]: {
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
