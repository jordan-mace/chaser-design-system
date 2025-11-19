import { style, type StyleRule } from '@vanilla-extract/css';
import { componentsLayer } from './layers.css';

export const styleWithLayer = (rule: StyleRule) =>
  style({
    '@layer': {
      [componentsLayer]: rule as StyleRule,
    },
  });
