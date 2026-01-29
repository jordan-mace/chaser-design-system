import { StorybookConfig } from 'storybook-react-rsbuild';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import { mergeRsbuildConfig } from '@rsbuild/core';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-styling-webpack',
  ],
  framework: 'storybook-react-rsbuild',
  docs: {
    autodocs: 'tag',
  },
  async rsbuildFinal(config) {
    return mergeRsbuildConfig(config, {
      output: {
        assetPrefix: process.env.STORYBOOK_BASE_URL || '/',
      },
      tools: {
        rspack: (config, { addRules, appendPlugins, rspack }) => {
          appendPlugins([new VanillaExtractPlugin()]);
          addRules([
            {
              test: /\.vanilla\.css$/i,
              type: 'css',
            },
          ]);
          return config;
        },
      },
    });
  },
};

export default config;
