/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

import { globalStyle } from '@vanilla-extract/css';
import { resetLayer } from './layers.css';

globalStyle(
  'html, body, div, span, applet, object, iframe, \
h1, h2, h3, h4, h5, h6, p, blockquote, pre, \
a, abbr, acronym, address, big, cite, code, \
del, dfn, em, img, ins, kbd, q, s, samp, \
small, strike, strong, sub, sup, tt, var, \
b, u, i, center, \
dl, dt, dd, ol, ul, li, \
fieldset, form, label, legend, \
table, caption, tbody, tfoot, thead, tr, th, td, \
article, aside, canvas, details, embed, \
figure, figcaption, footer, header, hgroup, \
menu, nav, output, ruby, section, summary,\
time, mark, audio, video',
  {
    [resetLayer]: {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  },
);

/* HTML5 display-role reset for older browsers */
globalStyle(
  'article, aside, details, figcaption, figure, \
footer, header, hgroup, menu, nav, section',
  {
    [resetLayer]: {
      display: 'block',
    },
  },
);

globalStyle('body', {
  [resetLayer]: {
    lineHeight: 1,
  },
});

globalStyle('ol, ul', {
  [resetLayer]: {
    listStyle: 'none',
  },
});

globalStyle('blockquote, q', {
  [resetLayer]: {
    quotes: 'none',
  },
});

globalStyle(
  'blockquote:before, blockquote:after, \
q:before, q:after',
  {
    [resetLayer]: {
      content: 'none',
    },
  },
);

globalStyle('table', {
  [resetLayer]: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
});
