/**
 * main.js - главная точка входа (entrypoint)
 * Именно в этом файле запускается и инициализируется всё приложение
 */

import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import { createPinia } from 'pinia';
import { createToaster } from './plugins/toaster';
import { createProgress } from './plugins/progress';


const pinia = createPinia();
const toster = createToaster();
const progress = createProgress({ router });

// TODO: установить плагины: router, pinia, head(title), toaster, progress
createApp(App).use(router).use(pinia).use(toster).use(progress).mount('#app');

// В этом же файле при необходимости можно сделать всё, что требуется делать ещё до создания приложения,
// или что не относится к Vue приложению и UI
