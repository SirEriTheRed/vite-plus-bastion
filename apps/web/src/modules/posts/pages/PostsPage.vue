<!--
SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors

SPDX-License-Identifier: MIT
-->
<script setup lang="ts">
import { onMounted } from 'vue';

import PostCard from '../components/PostCard.vue';
import { usePosts } from '../composables/use-posts';

const { posts, isLoading, getPosts } = usePosts();

onMounted(() => {
  void getPosts();
});
</script>

<template>
  <section class="mx-auto max-w-2xl p-6">
    <h1 class="text-2xl font-bold">Posts</h1>
    <button v-if="isLoading" type="button" disabled>Loading...</button>
    <button v-else type="button" @click="getPosts">Refresh</button>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>
