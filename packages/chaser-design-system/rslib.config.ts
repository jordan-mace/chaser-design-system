import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['node 18'],
      dts: false, // Disable for now due to TS error
      source: {
        entry: {
          index: 'src/index.ts',
        },
      },
      bundle: false, // Don't bundle - keep files separate
      output: {
        distPath: {
          root: './dist',
        },
        filename: {
          js: '[name].mjs',
        },
        // Copy .css.ts files as-is without transformation
        copy: [
          { from: 'src/**/*.css.ts', to: './' },
        ],
      },
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
      externals: {
        react: 'react',
        'react-dom': 'react-dom',
        clsx: 'clsx',
        '@vanilla-extract/css': '@vanilla-extract/css',
        '@vanilla-extract/sprinkles': '@vanilla-extract/sprinkles',
      },
      module: {
        rules: [
          {
            test: /\.css\.ts$/,
            type: 'asset/resource',
            generator: {
              filename: '[path][name][ext]',
            },
          },
        ],
      },
    },
  },
});

