import { layer } from '@vanilla-extract/css';

export const resetLayer = layer('reset');
export const themeLayer = layer({ parent: resetLayer }, 'theme');
export const componentsLayer = layer({ parent: themeLayer }, 'components');
