import { Config } from '@stencil/core';
import { postcss }   from '@stencil/postcss';
import autoprefixer  from 'autoprefixer';
import { sass }      from '@stencil/sass';

export const config: Config = {
  namespace: 'nuiverse-ui',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  globalStyle: 'src/style/nuiverse.scss',
  outputTargets: [
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/ionic-team/ionic/tree/master/core/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'fonts', dest: 'assets/fonts' },
      ],
    },
    {
      type: 'docs-readme',
      strict: true,
    },
    {
      type: 'docs-json',
      file: '../docs/core.json',
    },
    {
      type: 'dist-hydrate-script',
      dir: 'hydrate',
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  preamble: '(C) Nuiverse UI by Nuinalp - BSD-3-Clause',
  enableCache: true,
};
