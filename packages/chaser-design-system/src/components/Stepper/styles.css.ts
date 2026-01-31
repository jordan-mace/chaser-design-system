import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const stepperContainer = styleWithLayer({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
});

export const stepperHorizontal = styleWithLayer({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const stepperVertical = styleWithLayer({
  flexDirection: 'column',
  gap: '1rem',
});

export const step = styleWithLayer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  flex: 1,
});

export const stepVertical = styleWithLayer({
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '1rem',
});

export const stepIndicator = styleWithLayer({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '14px',
  transition: 'all 0.3s ease',
  zIndex: 1,
});

export const stepIndicatorVariants = styleVariants({
  pending: {
    backgroundColor: vars.colors.borderMuted,
    color: vars.colors.textSecondary,
    border: `2px solid ${vars.colors.borderMuted}`,
  },
  current: {
    backgroundColor: vars.colors.buttonBackgroundPrimary,
    color: vars.colors.buttonTextPrimary,
    border: `2px solid ${vars.colors.buttonBackgroundPrimary}`,
    boxShadow: `0 0 0 4px ${vars.colors.alertInfoBackground}`,
  },
  completed: {
    backgroundColor: vars.colors.alertSuccessBorder,
    color: vars.colors.buttonTextPrimary,
    border: `2px solid ${vars.colors.alertSuccessBorder}`,
  },
});

export const stepContent = styleWithLayer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '0.5rem',
  textAlign: 'center',
});

export const stepContentVertical = styleWithLayer({
  alignItems: 'flex-start',
  marginTop: 0,
  textAlign: 'left',
});

export const stepTitle = styleWithLayer({
  fontFamily: vars.fontFamily.heading,
  fontSize: '14px',
  fontWeight: '600',
  color: vars.colors.textPrimary,
  margin: 0,
});

export const stepDescription = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.textSecondary,
  marginTop: '0.25rem',
  maxWidth: '200px',
});

export const stepConnector = styleWithLayer({
  position: 'absolute',
  top: '1.25rem',
  left: 'calc(50% + 1.5rem)',
  right: 'calc(-50% + 1.5rem)',
  height: '2px',
  backgroundColor: vars.colors.borderMuted,
  zIndex: 0,
});

export const stepConnectorCompleted = styleWithLayer({
  backgroundColor: vars.colors.alertSuccessBorder,
});

export const stepConnectorVertical = styleWithLayer({
  position: 'absolute',
  top: '2.5rem',
  left: '1.25rem',
  width: '2px',
  height: 'calc(100% + 1rem)',
  backgroundColor: vars.colors.borderMuted,
  zIndex: 0,
});
