import { style } from '@vanilla-extract/css';
import { styleWithLayer } from '../../styles/utils';

export const icon = styleWithLayer({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  lineHeight: '1',
  userSelect: 'none',
});
