import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const toggleSizes = styleVariants({
  small: {
    width: '1.5rem',
    height: '0.75rem',
  },
  medium: {
    width: '2rem',
    height: '1rem',
  },
  large: {
    width: '2.5rem',
    height: '1.25rem',
  },
});

export const toggle = styleWithLayer({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  selectors: {
    '&:has(input:disabled)': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const toggleInput = styleWithLayer({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  cursor: 'pointer',
});

export const toggleTrack = styleWithLayer({
  borderRadius: '9999px',
  transition: 'background-color 0.2s ease-in-out',
  backgroundColor: vars.colors.borderDefault,
  position: 'relative',
  display: 'inline-block',
});

export const toggleTrackChecked = styleWithLayer({
  backgroundColor: vars.colors.buttonBackgroundPrimary,
});

export const toggleTrackUnchecked = styleWithLayer({
  backgroundColor: vars.colors.borderDefault,
});

export const toggleThumb = styleWithLayer({
  borderRadius: '50%',
  backgroundColor: vars.colors.backgroundDefault,
  position: 'absolute',
  transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
});

export const toggleThumbSizes = styleVariants({
  small: {
    width: '0.5rem',
    height: '0.5rem',
  },
  medium: {
    width: '0.75rem',
    height: '0.75rem',
  },
  large: {
    width: '1rem',
    height: '1rem',
  },
});

export const toggleThumbChecked = styleWithLayer({
  transform: 'translateY(-50%) translateX(calc(100% - 0.75rem))',
  selectors: {
    '[data-size="small"] &': {
      transform: 'translateY(-50%) translateX(calc(100% - 0.5rem))',
    },
    '[data-size="large"] &': {
      transform: 'translateY(-50%) translateX(calc(100% - 1rem))',
    },
  },
});

export const toggleThumbUnchecked = styleWithLayer({
  transform: 'translateY(-50%) translateX(0)',
});

export const toggleFocusRing = styleWithLayer({
  position: 'absolute',
  inset: '-0.25rem',
  borderRadius: '0.5rem',
  pointerEvents: 'none',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  boxShadow: `0 0 0 3px ${vars.colors.buttonBackgroundPrimary}`,
  selectors: {
    '[data-focused="true"] &': {
      opacity: 1,
    },
  },
});
