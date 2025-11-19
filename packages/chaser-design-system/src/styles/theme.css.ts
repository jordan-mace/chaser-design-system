import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from './sprinkles.css';
import { themeLayer } from './layers.css';

export const vars = createGlobalTheme(':root', {
  '@layer': themeLayer,
  colors: {
    textPrimary: '#1a1a1aff',
    textSecondary: '#797486',
    textDisabled: '#A5A2AE',
    buttonTextPrimary: colors['c1-50'],
    buttonTextSecondary: colors['c1-900'],
    buttonBackgroundPrimary: colors['c1-600'],
    buttonBackgroundFocusedPrimary: colors['c1-500'],
    buttonBackgroundFocusedSecondary: colors['c1-100'],
    buttonBackgroundSecondary: colors['c1-200'],
    borderDefault: '#D0CED4',
    borderMuted: '#EDECEE',
    backgroundDefault: '#FAFAFA',
    backgroundMuted: '#F8FAFB',
  },
  fontFamily: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
});
