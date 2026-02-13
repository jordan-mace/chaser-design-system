import { globalLayer } from '@vanilla-extract/css';

export const chaserLayer = globalLayer('chaser');
export const resetLayer = globalLayer({ parent: chaserLayer }, 'reset');
export const themeLayer = globalLayer({ parent: chaserLayer }, 'theme');
export const componentsLayer = globalLayer({ parent: chaserLayer }, 'components');
