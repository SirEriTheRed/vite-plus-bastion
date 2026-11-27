// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

/* eslint-disable import-x/no-default-export, @typescript-eslint/naming-convention */
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      manifest: {
        name: 'vite-plus-bastion',
        short_name: 'bastion',
        description: 'Vue + PWA application of the vite-plus-bastion template',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reportsDirectory: 'reports/coverage',
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      // Présentation (app/, .vue) et barillets d'index : la logique vit dans services/, stores/, composables/ et est testée.
      exclude: ['**/*.vue', 'src/app/**', 'src/modules/*/index.ts', '**/*.test.ts', 'tests/**'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
