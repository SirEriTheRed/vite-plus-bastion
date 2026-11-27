/* eslint-disable vitest/no-hooks */
// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchPosts } from '../services/posts-api.service';

function createResponse(ok: boolean, body: unknown): Response {
  return {
    ok,
    status: ok ? 200 : 500,
    json: () => Promise.resolve(body),
  } as Response;
}

describe(fetchPosts, () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns the parsed posts on success', async () => {
    expect.hasAssertions();

    const samplePosts = [{ id: 1, title: 'Hello', body: 'World' }];
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(createResponse(true, samplePosts)));

    await expect(fetchPosts()).resolves.toStrictEqual(samplePosts);
  });

  it('throws on an unsuccessful response', async () => {
    expect.hasAssertions();

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(createResponse(false, null)));

    await expect(fetchPosts()).rejects.toThrow('Failed to fetch posts: 500');
  });
});
