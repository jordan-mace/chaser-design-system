import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { colors } from './sprinkles.css';
import { themeLayer } from './layers.css';

globalStyle('@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap");', {});

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

export const lightTheme = 'light-theme';

export const darkTheme = 'dark-theme';

globalStyle(`:root.${darkTheme}`, {
  vars: {
    [vars.colors.textPrimary]: colors['c5-50'],
    [vars.colors.textSecondary]: colors['c5-300'],
    [vars.colors.textDisabled]: colors['c5-500'],
    [vars.colors.buttonTextPrimary]: colors['c1-900'],
    [vars.colors.buttonTextSecondary]: colors['c1-50'],
    [vars.colors.buttonBackgroundPrimary]: colors['c1-400'],
    [vars.colors.buttonBackgroundFocusedPrimary]: colors['c1-350'],
    [vars.colors.buttonBackgroundFocusedSecondary]: colors['c1-800'],
    [vars.colors.buttonBackgroundSecondary]: colors['c1-750'],
    [vars.colors.borderDefault]: colors['c4-700'],
    [vars.colors.borderMuted]: colors['c4-750'],
    [vars.colors.backgroundDefault]: colors['c4-900'],
    [vars.colors.backgroundMuted]: colors['c4-850'],
    [vars.colors.alertSuccessBackground]: colors['c2-850'],
    [vars.colors.alertSuccessBorder]: colors['c2-400'],
    [vars.colors.alertSuccessText]: colors['c2-100'],
    [vars.colors.alertWarningBackground]: colors['c3-850'],
    [vars.colors.alertWarningBorder]: colors['c3-400'],
    [vars.colors.alertWarningText]: colors['c3-100'],
    [vars.colors.alertErrorBackground]: colors['c4-850'],
    [vars.colors.alertErrorBorder]: colors['c4-400'],
    [vars.colors.alertErrorText]: colors['c4-100'],
    [vars.colors.alertInfoBackground]: colors['c1-850'],
    [vars.colors.alertInfoBorder]: colors['c1-400'],
    [vars.colors.alertInfoText]: colors['c1-100'],
    [vars.colors.inputBackground]: colors['c4-850'],
    [vars.colors.inputBorder]: colors['c4-700'],
    [vars.colors.inputBorderFocused]: colors['c1-400'],
    [vars.colors.inputPlaceholder]: colors['c5-500'],
    [vars.colors.listBorder]: colors['c4-700'],
    [vars.fontFamily.body]: "'Inter', sans-serif",
    [vars.fontFamily.heading]: "'Poppins', sans-serif",
  },
});
