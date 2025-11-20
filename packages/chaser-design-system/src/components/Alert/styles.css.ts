import { styleVariants } from '@vanilla-extract/css';
import { colors } from '../../styles/sprinkles.css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const alertVariants = styleVariants({
  success: {
    backgroundColor: colors['c2-50'], // Light cyan-ish for success
    borderLeftColor: colors['c2-500'],
    color: colors['c2-800'],
  },
  warning: {
    backgroundColor: colors['c3-50'], // Light blue for warning
    borderLeftColor: colors['c3-500'],
    color: colors['c3-800'],
  },
  error: {
    backgroundColor: colors['c4-50'], // Light gray-blue for error
    borderLeftColor: colors['c4-500'],
    color: colors['c4-800'],
  },
  info: {
    backgroundColor: colors['c1-50'], // Light blue for info
    borderLeftColor: colors['c1-500'],
    color: colors['c1-800'],
  },
});

export const alert = styleWithLayer({
  padding: '1rem',
  borderLeft: '4px solid',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
  fontFamily: vars.fontFamily.body,
  fontSize: '0.875rem',
  lineHeight: '1.5',
});

export const alertContent = styleWithLayer({
  flex: 1,
});

export const alertDismissButton = styleWithLayer({
  background: 'none',
  border: 'none',
  padding: '0.25rem',
  cursor: 'pointer',
  borderRadius: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.7,
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 1,
  },
});
