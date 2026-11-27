<!--
SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
SPDX-FileContributor: Azelann Borde

SPDX-License-Identifier: MIT
-->

Vite+ integration complete.

Root: pnpm add -Dw vite-plus + pnpm-workspace.yaml overrides (vite→@voidzero-dev/vite-plus-core@8.3.8001, vitest@5.1.1). Root vite.config.ts: block lint + defaultPackage './apps/web'.

Apps/web: Full Vue+PWA app. package.json (vue, pinia, vue-router, vite-plugin-pwa, @tailwindcss/vite). vite.config.ts (vue+PWA+tailwind). tsconfig. Squelettes src/app/ (main.ts, App.vue, style.css, router/index.ts) + modules/posts/ (components/PostCard.vue, pages/PostsPage.vue, composables/use-posts.ts, services/posts-api.service.ts, stores/use-posts.store.ts, types/post.types.ts, tests/use-posts.test.ts + posts-api.service.test.ts, index.ts exportant routes+helpers).

ESLint: config existante conservée (sonarjs, security, regexp, tsdoc, markdown, naming-convention, etc.) + eslint-plugin-boundaries + eslint-plugin-vue flat/base sur apps/web/**/*.ts. Matrice de politiques intra-module (page↔component↔composable↔store↔service↔type). Aucune erreur rules boundaries. ls-lint .vue: PascalCase. Hooks: .husky/pre-push → pnpm run lint:eslint, scripts lint/lint:eslint/lint:fix. CI quality.yml: étape lint:eslint après lint.

Tests: pnpm test ✅ (vitest, 3 fichiers, 6 tests). Type-check ✅ (vue-tsc TS 6 compatible). CI ✅.

Commandes : pnpm test, vp lint, pnpm run lint:eslint, vp build.
