import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

export const skeletonVariants = styleVariants({
  text: {
    borderRadius: '0.25rem',
  },
  circle: {
    borderRadius: '50%',
  },
  rectangle: {
    borderRadius: '0.5rem',
  },
});

export const skeletonSizes = styleVariants({
  small: {
    height: '1rem',
  },
  medium: {
    height: '1.5rem',
  },
  large: {
    height: '2rem',
  },
});

export const skeletonAnimation = styleVariants({
  shimmer: {
    background: `linear-gradient(
      90deg,
      ${vars.colors.borderMuted} 25%,
      ${vars.colors.borderDefault} 50%,
      ${vars.colors.borderMuted} 75%
    )`,
    backgroundSize: '200% 100%',
    animation: `${shimmer} 1.5s ease-in-out infinite`,
  },
  pulse: {
    backgroundColor: vars.colors.borderMuted,
    animation: `${pulse} 2s ease-in-out infinite`,
  },
  none: {
    backgroundColor: vars.colors.borderMuted,
  },
});

export const skeleton = styleWithLayer({
  width: '100%',
  display: 'inline-block',
});
