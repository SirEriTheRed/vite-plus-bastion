// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { defineStore } from 'pinia';
import { ref } from 'vue';

import { fetchPosts } from '../services/posts-api.service';
import type { Post } from '../types/post.types';

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]);
  const isLoading = ref(false);

  async function getPosts(): Promise<void> {
    isLoading.value = true;
    try {
      posts.value = await fetchPosts();
    } finally {
      isLoading.value = false;
    }
  }

  return { posts, isLoading, getPosts };
});
