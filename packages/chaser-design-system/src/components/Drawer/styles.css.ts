import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

const slideInFromLeft = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
});

const slideInFromRight = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
});

const slideInFromTop = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
});

const slideInFromBottom = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const drawerPositionVariants = styleVariants({
  left: {
    top: 0,
    left: 0,
    bottom: 0,
    width: 'var(--drawer-width, 300px)',
    maxWidth: '100vw',
    animation: `${slideInFromLeft} 0.3s ease-out`,
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0,
    width: 'var(--drawer-width, 300px)',
    maxWidth: '100vw',
    animation: `${slideInFromRight} 0.3s ease-out`,
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
    height: 'var(--drawer-height, 300px)',
    maxHeight: '100vh',
    animation: `${slideInFromTop} 0.3s ease-out`,
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 'var(--drawer-height, 300px)',
    maxHeight: '100vh',
    animation: `${slideInFromBottom} 0.3s ease-out`,
  },
});

export const drawerOverlay = styleWithLayer({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  animation: `${fadeIn} 0.2s ease-out`,
  zIndex: 40,
});

export const drawer = styleWithLayer({
  position: 'fixed',
  background: vars.colors.backgroundDefault,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  zIndex: 50,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const drawerHeader = styleWithLayer({
  padding: '1.25rem',
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
});

export const drawerTitle = styleWithLayer({
  fontFamily: vars.fontFamily.heading,
  fontSize: '1.25rem',
  fontWeight: '600',
  color: vars.colors.textPrimary,
  margin: 0,
});

export const drawerCloseButton = styleWithLayer({
  background: 'none',
  border: 'none',
  padding: '0.5rem',
  cursor: 'pointer',
  borderRadius: '0.375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.textSecondary,
  fontSize: '1.5rem',
  lineHeight: '1',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.borderMuted,
      color: vars.colors.textPrimary,
    },
    '&:focus-visible': {
      outline: '2px solid var(--drawer-focus-ring, currentColor)',
      outlineOffset: '2px',
    },
  },
});

export const drawerBody = styleWithLayer({
  padding: '1.25rem',
  overflowY: 'auto',
  flex: 1,
});

export const drawerFooter = styleWithLayer({
  padding: '1.25rem',
  borderTop: `1px solid ${vars.colors.borderMuted}`,
  display: 'flex',
  gap: '0.75rem',
  justifyContent: 'flex-end',
  alignItems: 'center',
});
