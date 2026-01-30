import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { styleWithLayer } from '../../styles/utils';

export const table = styleWithLayer({
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  fontFamily: vars.fontFamily.body,
});

export const thead = styleWithLayer({
  backgroundColor: vars.colors.backgroundDefault,
  borderBottom: `2px solid ${vars.colors.borderDefault}`,
});

export const tbody = styleWithLayer({
  backgroundColor: 'transparent',
});

export const tfoot = styleWithLayer({
  backgroundColor: vars.colors.backgroundMuted,
  borderTop: `2px solid ${vars.colors.borderDefault}`,
  fontWeight: 'bold',
});

export const tr = styleVariants({
  default: {
    borderBottom: `1px solid ${vars.colors.borderMuted}`,
    ':hover': {
      backgroundColor: vars.colors.backgroundMuted,
    },
  },
  striped: {
    borderBottom: `1px solid ${vars.colors.borderMuted}`,
  },
});

export const th = styleWithLayer({
  padding: '12px 16px',
  textAlign: 'left',
  fontWeight: '600',
  color: vars.colors.textPrimary,
  whiteSpace: 'nowrap',
});

export const td = styleWithLayer({
  padding: '12px 16px',
  color: vars.colors.textPrimary,
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
});

export const tableContainer = styleWithLayer({
  overflowX: 'auto',
  border: `1px solid ${vars.colors.borderDefault}`,
  borderRadius: '8px',
});
