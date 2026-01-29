import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const tooltipPositions = styleVariants({
  top: {
    bottom: '100%',
    marginBottom: '0.25rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom: {
    top: '100%',
    marginTop: '0.25rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  left: {
    right: '100%',
    marginRight: '0.25rem',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  right: {
    left: '100%',
    marginLeft: '0.25rem',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const tooltipContainer = styleWithLayer({
  position: 'relative',
  display: 'inline-flex',
});

export const tooltipContent = styleWithLayer({
  position: 'absolute',
  backgroundColor: vars.colors.textPrimary,
  color: vars.colors.backgroundDefault,
  padding: '0.375rem 0.75rem',
  borderRadius: '0.375rem',
  fontSize: '0.75rem',
  whiteSpace: 'nowrap',
  zIndex: 1001,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
  pointerEvents: 'none',
  selectors: {
    '&[data-visible="true"]': {
      opacity: 1,
      visibility: 'visible',
    },
  },
});

export const tooltipArrow = styleWithLayer({
  position: 'absolute',
  width: '0',
  height: '0',
  borderStyle: 'solid',
  borderWidth: '0.25rem',
  borderColor: 'transparent',
});

export const tooltipArrowTop = styleWithLayer({
  bottom: '-0.25rem',
  left: '50%',
  transform: 'translateX(-50%)',
  borderTopColor: vars.colors.textPrimary,
});

export const tooltipArrowBottom = styleWithLayer({
  top: '-0.25rem',
  left: '50%',
  transform: 'translateX(-50%)',
  borderBottomColor: vars.colors.textPrimary,
});

export const tooltipArrowLeft = styleWithLayer({
  right: '-0.25rem',
  top: '50%',
  transform: 'translateY(-50%)',
  borderLeftColor: vars.colors.textPrimary,
});

export const tooltipArrowRight = styleWithLayer({
  left: '-0.25rem',
  top: '50%',
  transform: 'translateY(-50%)',
  borderRightColor: vars.colors.textPrimary,
});
