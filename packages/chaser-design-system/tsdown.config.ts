import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'styles/layers.css': 'src/styles/layers.css.ts',
    'styles/reset.css': 'src/styles/reset.css.ts',
    'styles/theme.css': 'src/styles/theme.css.ts',
    'styles/sprinkles.css': 'src/styles/sprinkles.css.ts',
  },
  format: 'esm',
  dts: true,
  clean: true,
  treeshake: false,
  external: [
    'react',
    'react-dom',
    'clsx',
    '@vanilla-extract/css',
    '@vanilla-extract/sprinkles',
  ],
});
