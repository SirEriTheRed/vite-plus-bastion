// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
// SPDX-License-Identifier: MIT

import { defineConfig } from 'vite-plus';

/* eslint-disable import-x/no-default-export */
export default defineConfig({
  fmt: {
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    printWidth: 100,
    arrowParens: 'always',
    endOfLine: 'lf',
    sortPackageJson: false,
    ignorePatterns: [
      'dist',
      'coverage',
      'reports',
      'node_modules',
      'pnpm-lock.yaml',
      'yarn.lock',
      '.github',
      'eslint.config.js',
      'knip.json',
      'lint-staged.config.js',
    ],
  },
  defaultPackage: './apps/web',
  lint: {
    plugins: ['typescript', 'vue'],
    overrides: [
      {
        files: ['apps/api/**'],
        env: {
          node: true,
        },
      },
    ],
  },
});
