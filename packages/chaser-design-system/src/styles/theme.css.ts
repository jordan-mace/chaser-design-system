import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { colors } from './sprinkles.css';
import { themeLayer } from './layers.css';

// Import Google Fonts
globalStyle('@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap");', {});

// Apply global font styles
globalStyle('body', {
  fontFamily: "'Inter', sans-serif",
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: "'Poppins', sans-serif",
});

export const vars = createGlobalTheme(':root', {
  '@layer': themeLayer,
  colors: {
    textPrimary: colors['c5-800'],
    textSecondary: colors['c5-500'],
    textDisabled: colors['c5-350'],
    buttonTextPrimary: colors['c1-50'],
    buttonTextSecondary: colors['c1-900'],
    buttonBackgroundPrimary: colors['c1-600'],
    buttonBackgroundFocusedPrimary: colors['c1-500'],
    buttonBackgroundFocusedSecondary: colors['c1-100'],
    buttonBackgroundSecondary: colors['c1-200'],
    borderDefault: colors['c4-200'],
    borderMuted: colors['c4-100'],
    backgroundDefault: colors['c4-50'],
    backgroundMuted: colors['c4-50'],
    alertSuccessBackground: colors['c2-50'],
    alertSuccessBorder: colors['c2-500'],
    alertSuccessText: colors['c2-800'],
    alertWarningBackground: colors['c3-50'],
    alertWarningBorder: colors['c3-500'],
    alertWarningText: colors['c3-800'],
    alertErrorBackground: colors['c4-50'],
    alertErrorBorder: colors['c4-500'],
    alertErrorText: colors['c4-800'],
    alertInfoBackground: colors['c1-50'],
    alertInfoBorder: colors['c1-500'],
    alertInfoText: colors['c1-800'],
    inputBackground: colors['c4-50'],
    inputBorder: colors['c4-200'],
    inputBorderFocused: colors['c1-500'],
    inputPlaceholder: colors['c5-350'],
    listBorder: colors['c4-100'],
  },
  fontFamily: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
});
