import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const cardVariants = styleVariants({
  elevated: {
    backgroundColor: vars.colors.backgroundDefault,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
  },
  outlined: {
    backgroundColor: vars.colors.backgroundDefault,
    border: `1px solid ${vars.colors.borderDefault}`,
    boxShadow: 'none',
  },
  filled: {
    backgroundColor: vars.colors.backgroundMuted,
    border: 'none',
    boxShadow: 'none',
  },
});

export const card = styleWithLayer({
  display: 'block',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
});
