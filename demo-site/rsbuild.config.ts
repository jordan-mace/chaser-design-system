import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact({
      reactRefreshOptions: {
        exclude: [/\.css\.ts$/],
      },
    }),
  ],
  performance: {
    chunkSplit: {
      override: {
        cacheGroups: {
          vanilla: {
            test: /@vanilla-extract\/webpack-plugin/,
            // make sure the chunk contains modules created by @vanilla-extract/webpack-plugin has stable id in development mode to avoid HMR issues
            name: process.env.NODE_ENV === 'development' && 'vanilla',
            chunks: 'all',
          },
        },
      },
    },
  },
  tools: {
    rspack: {
      plugins: [new VanillaExtractPlugin()],
    },
  },
});
