// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { storeToRefs } from 'pinia';

import { usePostsStore } from '../stores/use-posts.store';

// eslint-disable-next-line verb/naming-convention
export function usePosts() {
  const postsStore = usePostsStore();
  const { posts, isLoading } = storeToRefs(postsStore);

  return { posts, isLoading, getPosts: () => postsStore.getPosts() };
}
