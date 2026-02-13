import { styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

const fadeIn = keyframes({
  from: { opacity: 0, transform: 'scale(0.95)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

export const popoverContainer = styleWithLayer({
  position: 'relative',
  display: 'inline-block',
});

export const popoverTrigger = styleWithLayer({
  cursor: 'pointer',
});

export const popoverContent = styleWithLayer({
  position: 'absolute',
  backgroundColor: vars.colors.backgroundDefault,
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '0.75rem',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  zIndex: 50,
  padding: '1rem',
  minWidth: '200px',
  maxWidth: '400px',
  animation: `${fadeIn} 0.15s ease-out`,
});

export const popoverPositionVariants = styleVariants({
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '0.5rem',
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '0.5rem',
  },
  left: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: '0.5rem',
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: '0.5rem',
  },
  topLeft: {
    bottom: '100%',
    right: 0,
    marginBottom: '0.5rem',
  },
  topRight: {
    bottom: '100%',
    left: 0,
    marginBottom: '0.5rem',
  },
  bottomLeft: {
    top: '100%',
    right: 0,
    marginTop: '0.5rem',
  },
  bottomRight: {
    top: '100%',
    left: 0,
    marginTop: '0.5rem',
  },
});

export const popoverArrow = styleWithLayer({
  position: 'absolute',
  width: '8px',
  height: '8px',
  backgroundColor: vars.colors.backgroundDefault,
  border: `1px solid ${vars.colors.borderDefault}`,
  transform: 'rotate(45deg)',
});

export const popoverArrowPositionVariants = styleVariants({
  top: {
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    borderTop: 'none',
    borderLeft: 'none',
  },
  bottom: {
    top: '-5px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    borderBottom: 'none',
    borderRight: 'none',
  },
  left: {
    right: '-5px',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
    borderLeft: 'none',
    borderBottom: 'none',
  },
  right: {
    left: '-5px',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
    borderRight: 'none',
    borderTop: 'none',
  },
  topLeft: {
    bottom: '-5px',
    right: '1rem',
    transform: 'rotate(45deg)',
    borderTop: 'none',
    borderLeft: 'none',
  },
  topRight: {
    bottom: '-5px',
    left: '1rem',
    transform: 'rotate(45deg)',
    borderTop: 'none',
    borderLeft: 'none',
  },
  bottomLeft: {
    top: '-5px',
    right: '1rem',
    transform: 'rotate(45deg)',
    borderBottom: 'none',
    borderRight: 'none',
  },
  bottomRight: {
    top: '-5px',
    left: '1rem',
    transform: 'rotate(45deg)',
    borderBottom: 'none',
    borderRight: 'none',
  },
});

export const popoverHeader = styleWithLayer({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
  paddingBottom: '0.75rem',
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
});

export const popoverTitle = styleWithLayer({
  fontFamily: vars.fontFamily.heading,
  fontSize: '1rem',
  fontWeight: '600',
  color: vars.colors.textPrimary,
  margin: 0,
});

export const popoverCloseButton = styleWithLayer({
  background: 'none',
  border: 'none',
  padding: '0.25rem',
  cursor: 'pointer',
  borderRadius: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.textSecondary,
  fontSize: '1.25rem',
  lineHeight: '1',
  marginLeft: '0.5rem',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: vars.colors.borderMuted,
    color: vars.colors.textPrimary,
  },
});

export const popoverBody = styleWithLayer({
  fontSize: '14px',
  color: vars.colors.textPrimary,
  lineHeight: '1.5',
});

export const popoverFooter = styleWithLayer({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'flex-end',
  marginTop: '0.75rem',
  paddingTop: '0.75rem',
  borderTop: `1px solid ${vars.colors.borderMuted}`,
});
