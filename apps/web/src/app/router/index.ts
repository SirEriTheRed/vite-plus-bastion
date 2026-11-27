// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { createRouter, createWebHistory } from 'vue-router';

import { postsRoutes } from '../../modules/posts';

export const router = createRouter({
  history: createWebHistory(),
  routes: postsRoutes,
});
