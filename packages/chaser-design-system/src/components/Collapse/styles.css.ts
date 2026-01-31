import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

const collapseIn = keyframes({
  from: { 
    height: 0,
    opacity: 0,
  },
  to: { 
    height: 'auto',
    opacity: 1,
  },
});

const collapseOut = keyframes({
  from: { 
    height: 'auto',
    opacity: 1,
  },
  to: { 
    height: 0,
    opacity: 0,
  },
});

export const collapseContainer = styleWithLayer({
  overflow: 'hidden',
});

export const collapseContent = styleWithLayer({
  width: '100%',
});

export const collapseAnimation = styleVariants({
  in: {
    animation: `${collapseIn} 0.3s ease-out forwards`,
  },
  out: {
    animation: `${collapseOut} 0.3s ease-out forwards`,
  },
});
