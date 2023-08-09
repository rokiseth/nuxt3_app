<template>
  <v-app dark>
    <!--
      app: ダークテーマなどを適応させる。
      fixed: コンポーネントに position: fixed を適用させる。
    -->
    <v-app-bar elevation="3" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container><slot /> </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('新道の備忘録');
const drawer = ref(false);
const items = ref([
  {
    icon: 'mdi-apps',
    title: 'Welcome',
    to: '/',
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'Inspire',
    to: '/inspire',
  },
  {
    icon: 'mdi-language-typescript',
    title: 'TypeScript',
    to: '/typescript',
  },
  {
    icon: 'mdi-nuxt',
    title: '[Nuxt3] Plugin',
    to: '/nuxt3/plugin',
  },
  {
    icon: 'mdi-nuxt',
    title: '[Nuxt3] Composable',
    to: '/nuxt3/composable',
  },
  {
    icon: 'mdi-nuxt',
    title: '[Nuxt3] Nitro',
    to: '/nuxt3/nitro',
  },
]);
</script>
