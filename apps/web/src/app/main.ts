// SPDX-FileCopyrightText: 2026 vite-plus-bastion contributors
//
// SPDX-License-Identifier: MIT

import { createPinia } from 'pinia';
import { createApp } from 'vue';

/* eslint-disable @typescript-eslint/naming-convention */
import App from './App.vue';
import { router } from './router';
import './style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
