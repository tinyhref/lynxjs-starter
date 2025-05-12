import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
// @ts-ignore
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    publicDir: [
      {
        name: path.join(__dirname, '../core/dist'),
      },
    ],
  },
  dev: {
    hmr: true,
    watchFiles: {
      paths: ['../core/src/**/*'],
      options: {
        awaitWriteFinish: true
      },
      type: 'reload-page'
    },
  },
  html: {
    title: 'LynxJS Starter'
  }
});
