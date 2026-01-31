import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const separator = styleWithLayer({
  border: 'none',
  margin: 0,
  flexShrink: 0,
});

export const separatorOrientation = styleVariants({
  horizontal: {
    width: '100%',
    height: '1px',
    backgroundColor: vars.colors.borderDefault,
  },
  vertical: {
    width: '1px',
    height: '100%',
    backgroundColor: vars.colors.borderDefault,
  },
});

export const separatorSize = styleVariants({
  small: {},
  medium: {},
  large: {},
});

export const separatorDecorative = styleWithLayer({
  backgroundColor: vars.colors.borderMuted,
});
