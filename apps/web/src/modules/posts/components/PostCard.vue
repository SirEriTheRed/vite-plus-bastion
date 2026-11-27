<!--
SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors

SPDX-License-Identifier: MIT
-->
<script setup lang="ts">
import type { Post } from '../types/post.types';

defineProps<{ post: Post }>();
</script>

<template>
  <article class="border-b border-slate-700 p-4">
    <h3 class="font-semibold">{{ post.title }}</h3>
    <p class="text-sm text-slate-400">{{ post.body }}</p>
  </article>
</template>
