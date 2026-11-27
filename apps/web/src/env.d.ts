/* eslint-disable unicorn/name-replacements, import-x/no-default-export */
// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

// Réservé à TypeScript "nu" (type-check ESLint) : vue-tsc résout les .vue réellement.
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
