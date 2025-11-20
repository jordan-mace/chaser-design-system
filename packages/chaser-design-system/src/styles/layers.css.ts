import { globalLayer } from '@vanilla-extract/css';

export const resetLayer = globalLayer('reset');
export const themeLayer = globalLayer({ parent: resetLayer }, 'theme');
export const componentsLayer = globalLayer(
  { parent: themeLayer },
  'components',
);
