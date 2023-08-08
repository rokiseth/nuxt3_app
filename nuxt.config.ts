import { defineNuxtConfig } from 'nuxt/config';
import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  // build 時の様々な設定
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify());
    },
  },
  css: [
    '@/assets/css/style.css',
    '@/assets/main.scss',
    'bootstrap/dist/css/bootstrap.min.css',
  ],
});
