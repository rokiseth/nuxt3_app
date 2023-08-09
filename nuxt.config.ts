import { defineNuxtConfig } from 'nuxt/config';
import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ページ直下の devtools
  devtools: { enabled: true },
  // TypeScript の設定
  typescript: {
    strict: true,
    typeCheck: true,
  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify());
    },
  },
  // グローバルに設定する css
  css: [
    '@/assets/css/style.css',
    '@/assets/main.scss',
    'bootstrap/dist/css/bootstrap.min.css',
  ],
});
