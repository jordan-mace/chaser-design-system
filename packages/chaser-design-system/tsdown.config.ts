import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  treeshake: true,
  external: [
    'react',
    'react-dom',
    'clsx',
    '@vanilla-extract/css',
    '@vanilla-extract/sprinkles',
  ],
});
