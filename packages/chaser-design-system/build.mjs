import { build } from 'esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { glob } from 'glob';
import { readdir, readFile, rename, writeFile } from 'fs/promises';
import { join } from 'path';

// Find all TypeScript files except .css.ts files
const tsFiles = await glob('src/**/*.{ts,tsx}', {
  ignore: [
    '**/*.css.ts',
    '**/*.stories.ts',
    '**/*.stories.tsx',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
  ],
});

// Build TypeScript files
const buildResult = await build({
  entryPoints: tsFiles,
  outdir: 'dist',
  format: 'esm',
  target: 'es2020',
  jsx: 'automatic',
  outExtension: { '.js': '.mjs' },
  bundle: true,
  splitting: true,
  packages: 'external',
  plugins: [vanillaExtractPlugin()],
  metafile: true,
});

const indexPath = join('dist', 'index.mjs');
const coreIndexPath = join('dist', 'index.core.mjs');
await rename(indexPath, coreIndexPath);
await writeFile(
  indexPath,
  [
    "import './index.css';",
    "export * from './index.core.mjs';",
    '',
  ].join('\n')
);

const manifestPath = join('dist', 'build-manifest.json');
await writeFile(manifestPath, JSON.stringify(buildResult.metafile, null, 2));

// Build vanilla-extract styles into real CSS files
await build({
  entryPoints: {
    reset: 'src/styles/reset.css.ts',
    theme: 'src/styles/theme.css.ts',
    sprinkles: 'src/styles/sprinkles.css.ts',
  },
  outdir: 'dist/styles',
  format: 'esm',
  bundle: true,
  entryNames: '[name].css',
  plugins: [vanillaExtractPlugin()],
});

const styleFiles = await readdir('dist/styles');
for (const file of styleFiles) {
  if (file.endsWith('.css.css')) {
    const source = join('dist/styles', file);
    const target = join('dist/styles', file.replace(/\.css\.css$/, '.css'));
    await rename(source, target);
  }
}

const sprinklesCssPath = join('dist/styles', 'sprinkles.css');
const sprinklesCss = await readFile(sprinklesCssPath, 'utf8');
const componentsImport = '@import "../components/index.css";';
if (!sprinklesCss.includes(componentsImport)) {
  await writeFile(
    sprinklesCssPath,
    `${sprinklesCss}\n${componentsImport}\n`
  );
}

const layersCssPath = join('dist/styles', 'layers.css');
try {
  await writeFile(layersCssPath, '', { flag: 'wx' });
} catch (error) {
  if (error?.code !== 'EEXIST') {
    throw error;
  }
}

console.log('Build complete!');
