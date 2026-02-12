import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'styles/layers.css': resolve(__dirname, 'src/styles/layers.css.ts'),
        'styles/reset.css': resolve(__dirname, 'src/styles/reset.css.ts'),
        'styles/theme.css': resolve(__dirname, 'src/styles/theme.css.ts'),
        'styles/sprinkles.css': resolve(__dirname, 'src/styles/sprinkles.css.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'clsx'],
      output: {
        preserveModules: false,
        entryFileNames: '[name].mjs',
      },
    },
  },
});
