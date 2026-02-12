import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['node 18'],
      dts: true,
      source: {
        entry: {
          index: [
            'src/index.ts',
            'src/components/index.ts',
            'src/components/*/*.{ts,tsx}',
            'src/styles/*.ts',
            'src/styles/*.css.ts',
            '!**/*/*.stories.{ts,tsx}',
            '!**/*/*.test.{ts,tsx}',
          ],
          'layers.css': 'src/styles/layers.css.ts',
          'reset.css': 'src/styles/reset.css.ts',
          'theme.css': 'src/styles/theme.css.ts',
        },
      },
      bundle: false,
    },
  ],
  plugins: [
    pluginReact({
      reactRefreshOptions: {
        exclude: [/\.css\.ts$/],
      },
    }),
  ],
  tools: {
    rspack: {
      plugins: [new VanillaExtractPlugin()],
    },
    cssLoader: {
      url: false,
    },
  },
});
