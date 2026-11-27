// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import type { RouteRecordRaw } from 'vue-router';

import { usePosts } from './composables/use-posts';
// eslint-disable-next-line @typescript-eslint/naming-convention
import PostsPage from './pages/PostsPage.vue';
import { usePostsStore } from './stores/use-posts.store';
import type { Post } from './types/post.types';

export const postsRoutes: RouteRecordRaw[] = [
  { path: '/posts', name: 'posts', component: PostsPage },
];

export { usePosts, usePostsStore };
export type { Post };
