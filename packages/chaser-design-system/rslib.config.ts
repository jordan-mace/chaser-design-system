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
          index: 'src/index.ts',
        },
      },
      bundle: false,
      output: {
        distPath: {
          root: './dist',
        },
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
      plugins: [new VanillaExtractPlugin()],
      module: {
        rules: [
          {
            test: /\.css\.ts$/,
            use: [
              {
                loader: '@vanilla-extract/webpack-plugin/loader',
              },
            ],
          },
        ],
      },
    },
  },
});
