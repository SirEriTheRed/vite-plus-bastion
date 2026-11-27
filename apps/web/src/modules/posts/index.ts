// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import type { RouteRecordRaw } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/naming-convention
import PostsPage from './pages/PostsPage.vue';

export const postsRoutes: RouteRecordRaw[] = [
  { path: '/posts', name: 'posts', component: PostsPage },
];
