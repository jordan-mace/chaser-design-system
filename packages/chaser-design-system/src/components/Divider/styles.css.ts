import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const dividerOrientations = styleVariants({
  horizontal: {
    width: '100%',
    height: '1px',
    borderTop: `1px solid ${vars.colors.borderMuted}`,
  },
  vertical: {
    width: '1px',
    height: '100%',
    borderLeft: `1px solid ${vars.colors.borderMuted}`,
  },
});

export const dividerSizes = styleVariants({
  small: {
    margin: '0.5rem 0',
  },
  medium: {
    margin: '1rem 0',
  },
  large: {
    margin: '1.5rem 0',
  },
});

export const divider = styleWithLayer({
  border: 'none',
  flexShrink: 0,
});

export const dividerVerticalSizes = styleVariants({
  small: {
    margin: '0 0.5rem',
  },
  medium: {
    margin: '0 1rem',
  },
  large: {
    margin: '0 1.5rem',
  },
});
