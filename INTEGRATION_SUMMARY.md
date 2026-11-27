<!--
SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
SPDX-FileContributor: Azelann Borde

SPDX-License-Identifier: MIT
-->

Vite+ integration complete.

Root: pnpm add -Dw vite-plus + pnpm-workspace.yaml overrides (vite→@voidzero-dev/vite-plus-core@8.3.8001, vitest@5.1.1). Root vite.config.ts: block lint + defaultPackage './apps/web'.

Apps/web: Full Vue+PWA app. package.json (vue, pinia, vue-router, vite-plugin-pwa, @tailwindcss/vite). vite.config.ts (vue+PWA+tailwind). tsconfig. Skeletons src/app/ (main.ts, App.vue, style.css, router/index.ts) + modules/posts/ (components/PostCard.vue, pages/PostsPage.vue, composables/use-posts.ts, services/posts-api.service.ts, stores/use-posts.store.ts, types/post.types.ts, tests/use-posts.test.ts + posts-api.service.test.ts, index.ts exporting routes+helpers).

ESLint: existing config kept (sonarjs, security, regexp, tsdoc, markdown, naming-convention, etc.) + eslint-plugin-boundaries + eslint-plugin-vue flat/base on apps/web/**/*.ts. Intra-module policy matrix (page↔component↔composable↔store↔service↔type). No boundaries rule errors. ls-lint .vue: PascalCase. Hooks: .husky/pre-push → pnpm run lint:eslint, scripts lint/lint:eslint/lint:fix. CI quality.yml: lint:eslint step after lint.

Tests: pnpm test ✅ (vitest, 3 files, 6 tests). Type-check ✅ (vue-tsc TS 6 compatible). CI ✅.

Commandes : pnpm test, vp lint, pnpm run lint:eslint, vp build.
