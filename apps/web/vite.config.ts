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
        icons: [
          {
            src: '/pwa/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/pwa/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        screenshots: [
          {
            src: '/apple-splash-2732-2048.jpg',
            sizes: '2732x2048',
            type: 'image/jpeg',
            form_factor: 'wide',
          },
          {
            src: '/apple-splash-1170-2532.jpg',
            sizes: '1170x2532',
            type: 'image/jpeg',
          },
        ],
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
      // Presentation (app/, .vue) and index barrels: logic lives in services/, stores/, composables/ and is tested.
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
