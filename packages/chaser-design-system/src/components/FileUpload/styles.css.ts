import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const fileUploadContainer = styleWithLayer({
  width: '100%',
});

export const fileUploadDropzone = styleWithLayer({
  border: `2px dashed ${vars.colors.borderDefault}`,
  borderRadius: '12px',
  padding: '2rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: vars.colors.backgroundMuted,
  ':hover': {
    borderColor: vars.colors.inputBorderFocused,
    backgroundColor: vars.colors.alertInfoBackground,
  },
});

export const fileUploadDropzoneVariants = styleVariants({
  default: {},
  dragOver: {
    borderColor: vars.colors.buttonBackgroundPrimary,
    backgroundColor: vars.colors.alertInfoBackground,
    borderStyle: 'solid',
  },
  error: {
    borderColor: vars.colors.alertErrorBorder,
    backgroundColor: vars.colors.alertErrorBackground,
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.6,
    ':hover': {
      borderColor: vars.colors.borderDefault,
      backgroundColor: vars.colors.backgroundMuted,
    },
  },
});

export const fileUploadLabel = styleWithLayer({
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  color: vars.colors.textPrimary,
  marginBottom: '8px',
});

export const fileUploadText = styleWithLayer({
  fontSize: '14px',
  color: vars.colors.textSecondary,
  marginTop: '0.5rem',
});

export const fileUploadHint = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.textSecondary,
  marginTop: '0.5rem',
});

export const fileUploadInput = styleWithLayer({
  display: 'none',
});

export const fileUploadList = styleWithLayer({
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const fileUploadItem = styleWithLayer({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.75rem',
  backgroundColor: vars.colors.backgroundDefault,
  border: `1px solid ${vars.colors.borderMuted}`,
  borderRadius: '8px',
});

export const fileUploadItemInfo = styleWithLayer({
  flex: 1,
  minWidth: 0,
});

export const fileUploadItemName = styleWithLayer({
  fontSize: '14px',
  fontWeight: '500',
  color: vars.colors.textPrimary,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const fileUploadItemSize = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.textSecondary,
  marginTop: '2px',
});

export const fileUploadItemProgress = styleWithLayer({
  flex: 1,
  maxWidth: '200px',
});

export const fileUploadRemoveButton = styleWithLayer({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.25rem',
  color: vars.colors.textSecondary,
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  transition: 'all 0.15s ease',
  ':hover': {
    color: vars.colors.alertErrorText,
    backgroundColor: vars.colors.alertErrorBackground,
  },
});

export const fileUploadError = styleWithLayer({
  fontSize: '12px',
  color: vars.colors.alertErrorText,
  marginTop: '0.5rem',
});

export const fileUploadIcon = styleWithLayer({
  fontSize: '24px',
  color: vars.colors.textSecondary,
});

export const fileUploadProgressBar = styleWithLayer({
  width: '100%',
  height: '4px',
  backgroundColor: vars.colors.borderMuted,
  borderRadius: '2px',
  overflow: 'hidden',
  marginTop: '0.5rem',
});

export const fileUploadProgressFill = styleWithLayer({
  height: '100%',
  backgroundColor: vars.colors.buttonBackgroundPrimary,
  transition: 'width 0.3s ease',
});

export const fileUploadProgressFillVariants = styleVariants({
  uploading: {
    backgroundColor: vars.colors.buttonBackgroundPrimary,
  },
  success: {
    backgroundColor: vars.colors.alertSuccessBorder,
  },
  error: {
    backgroundColor: vars.colors.alertErrorBorder,
  },
});
