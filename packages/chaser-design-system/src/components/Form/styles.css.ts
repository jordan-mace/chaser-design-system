import { styleWithLayer } from '../../styles/utils';

export const formStyle = styleWithLayer({
  display: 'grid',
  gridTemplateRows: 'min-content 1fr min-content',
});

export const formInputStyle = styleWithLayer({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
