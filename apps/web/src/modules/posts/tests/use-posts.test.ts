/* eslint-disable vitest/no-hooks, vitest/require-mock-type-parameters */
// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { usePosts } from '../composables/use-posts';
import { fetchPosts } from '../services/posts-api.service';

vi.mock(import('../services/posts-api.service'), () => ({
  fetchPosts: vi.fn(),
}));

describe(usePosts, () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.mocked(fetchPosts).mockReset();
  });

  it('loads posts through the store', async () => {
    expect.hasAssertions();

    const samplePosts = [{ id: 1, title: 'Hello', body: 'World' }];
    vi.mocked(fetchPosts).mockResolvedValue(samplePosts);

    const { posts, isLoading, getPosts } = usePosts();
    await getPosts();

    expect(posts.value).toStrictEqual(samplePosts);
    expect(isLoading.value).toBe(false);
  });

  it('clears the loading flag when the fetch fails', async () => {
    expect.hasAssertions();

    vi.mocked(fetchPosts).mockRejectedValue(new Error('network down'));

    const { posts, isLoading, getPosts } = usePosts();

    await expect(getPosts()).rejects.toThrow('network down');

    expect(posts.value).toStrictEqual([]);
    expect(isLoading.value).toBe(false);
  });
});
