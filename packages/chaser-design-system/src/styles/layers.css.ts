import { globalLayer } from '@vanilla-extract/css';

export const resetLayer = globalLayer('reset');
export const themeLayer = globalLayer({ parent: 'reset' }, 'theme');
export const componentsLayer = globalLayer({ parent: 'theme' }, 'components');
