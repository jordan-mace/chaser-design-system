import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const dropdownMenuContainer = styleWithLayer({
  position: 'relative',
  display: 'inline-block',
});

export const dropdownMenuTrigger = styleWithLayer({
  cursor: 'pointer',
  userSelect: 'none',
});

export const dropdownMenuContent = styleWithLayer({
  position: 'absolute',
  backgroundColor: vars.colors.backgroundDefault,
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '0.5rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  minWidth: '160px',
  zIndex: 50,
  overflow: 'hidden',
  marginTop: '0.25rem',
});

export const dropdownMenuPositionVariants = styleVariants({
  bottomLeft: {
    top: '100%',
    left: 0,
  },
  bottomRight: {
    top: '100%',
    right: 0,
  },
  topLeft: {
    bottom: '100%',
    left: 0,
    marginTop: 0,
    marginBottom: '0.25rem',
  },
  topRight: {
    bottom: '100%',
    right: 0,
    marginTop: 0,
    marginBottom: '0.25rem',
  },
});

export const dropdownMenuItem = styleWithLayer({
  padding: '0.75rem 1rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '14px',
  color: vars.colors.textPrimary,
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: vars.colors.backgroundMuted,
  },
  ':focus-visible': {
    outline: 'none',
    backgroundColor: vars.colors.backgroundMuted,
  },
});

export const dropdownMenuItemVariants = styleVariants({
  default: {},
  destructive: {
    color: vars.colors.alertErrorText,
    ':hover': {
      backgroundColor: vars.colors.alertErrorBackground,
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
});

export const dropdownMenuSeparator = styleWithLayer({
  height: '1px',
  backgroundColor: vars.colors.borderMuted,
  margin: '0.5rem 0',
});

export const dropdownMenuGroup = styleWithLayer({
  padding: '0.5rem 0',
});

export const dropdownMenuLabel = styleWithLayer({
  padding: '0.5rem 1rem',
  fontSize: '12px',
  fontWeight: '600',
  color: vars.colors.textSecondary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});
