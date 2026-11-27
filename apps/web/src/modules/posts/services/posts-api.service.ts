// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import type { Post } from '../types/post.types';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${String(response.status)}`);
  }

  return (await response.json()) as Post[];
}
