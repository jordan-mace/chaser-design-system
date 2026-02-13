import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const scrollArea = styleWithLayer({
  overflow: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: `${vars.colors.borderDefault} ${vars.colors.backgroundMuted}`,
});

export const scrollAreaOrientation = styleVariants({
  vertical: {
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  horizontal: {
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  both: {
    overflow: 'auto',
  },
});

export const scrollAreaViewport = styleWithLayer({
  width: '100%',
  height: '100%',
});
