
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const emptyState = styleWithLayer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  textAlign: 'center',
});

export const emptyStateIcon = styleWithLayer({
  fontSize: '48px',
  marginBottom: '1rem',
  color: vars.colors.textSecondary,
});

export const emptyStateTitle = styleWithLayer({
  fontSize: '18px',
  fontWeight: '600',
  color: vars.colors.textPrimary,
  margin: '0 0 0.5rem 0',
});

export const emptyStateDescription = styleWithLayer({
  fontSize: '14px',
  color: vars.colors.textSecondary,
  margin: '0 0 1rem 0',
  maxWidth: '400px',
});

export const emptyStateAction = styleWithLayer({
  marginTop: '0.5rem',
});
