
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const kbd = styleWithLayer({
  display: 'inline-block',
  padding: '0.125rem 0.375rem',
  fontFamily: 'monospace',
  fontSize: '0.85em',
  fontWeight: '600',
  lineHeight: '1.5',
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.backgroundMuted,
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '4px',
  boxShadow: '0 2px 0 rgba(0, 0, 0, 0.1)',
  whiteSpace: 'nowrap',
});
