import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const slideInRight = keyframes({
  '0%': {
    transform: 'translateX(100%)',
    opacity: '0',
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: '1',
  },
});

export const slideInLeft = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
    opacity: '0',
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: '1',
  },
});

export const slideInTop = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
    opacity: '0',
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: '1',
  },
});

export const slideOutRight = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: '1',
  },
  '100%': {
    transform: 'translateX(100%)',
    opacity: '0',
  },
});

export const slideOutLeft = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: '1',
  },
  '100%': {
    transform: 'translateX(-100%)',
    opacity: '0',
  },
});

export const slideInBottom = keyframes({
  '0%': {
    transform: 'translateY(100%)',
    opacity: '0',
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: '1',
  },
});

export const slideOutBottom = keyframes({
  '0%': {
    transform: 'translateY(0)',
    opacity: '1',
  },
  '100%': {
    transform: 'translateY(100%)',
    opacity: '0',
  },
});

export const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

export const fadeOut = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const fadeOutSuccess = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const fadeOutError = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const fadeOutWarning = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const fadeOutInfo = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const slideOut = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: '1',
  },
  '100%': {
    transform: 'translateX(100%)',
    opacity: '0',
  },
});

export const toastContainer = style({
  position: 'fixed',
  zIndex: '9999',
  pointerEvents: 'none',
});

export const toastWrapper = styleVariants({
  topLeft: {
    position: 'fixed',
    top: '16px',
    left: '16px',
    zIndex: '9999',
  },
  topCenter: {
    position: 'fixed',
    top: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9999',
  },
  topRight: {
    position: 'fixed',
    top: '16px',
    right: '16px',
    zIndex: '9999',
  },
  bottomLeft: {
    position: 'fixed',
    bottom: '16px',
    left: '16px',
    zIndex: '9999',
  },
  bottomCenter: {
    position: 'fixed',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9999',
  },
  bottomRight: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: '9999',
  },
});

export const toastItem = style({
  width: '300px',
  pointerEvents: 'auto',
  marginBottom: '8px',
});

export const toastCloseButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.textSecondary,
  fontSize: '16px',
  lineHeight: '1',
  ':hover': {
    color: vars.colors.textPrimary,
  },
});

export const toastProgressBarContainer = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '3px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius: '0 0 4px 4px',
  overflow: 'hidden',
});

export const toastProgressBar = style({
  height: '100%',
  borderRadius: '0 0 4px 4px',
  transition: 'width 0.1s linear',
  animation: `progressBar 0.3s ease ${fadeIn} forwards`,
});

export const toastContent = styleWithLayer({
  flex: 1,
  minWidth: 0,
});
