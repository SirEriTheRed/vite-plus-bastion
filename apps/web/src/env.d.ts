/* eslint-disable unicorn/name-replacements, import-x/no-default-export */
// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

// Reserved for bare TypeScript (ESLint type-check): vue-tsc resolves .vue files.
declare module '*.vue' {
  import type { Component } from 'vue';

  const component: Component;
  export default component;
}

// vite/client n'existe pas dans @voidzero-dev/vite-plus-core.
declare module '*.css' {
  import type { CSSModule } from 'vitest/config';
  const cssClass: CSSModule;
  export default cssClass;
}

// vite/client n'existe pas dans @voidzero-dev/vite-plus-core.
declare module '*.css';
