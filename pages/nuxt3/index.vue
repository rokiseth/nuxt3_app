<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <hr />
        <h1 style="font-weight: bold">【 Nuxt3 】</h1>
        <h3>関連記事</h3>
        <hr />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in items" :key="i.title" cols="4">
        <v-card class="mx-auto" max-width="334">
          <v-card-item>
            <div>
              <div class="text-h6 mb-1 mt-1" style="font-weight: bold">
                {{ i.title }}
              </div>
              <div class="text-caption mb-1">
                {{ i.description }}
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn :to="i.link" variant="outlined"> 選択 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
interface item {
  title: string;
  description: string;
  link: string;
}
const items: item[] = [
  {
    title: 'plugin',
    description: '自前のプラグインを作成する。',
    link: '/nuxt3/pages/plugin',
  },
  {
    title: 'composable',
    description: '関数をカプセル化して再利用する。',
    link: '/nuxt3/pages/composable',
  },
  {
    title: 'useNuxtApp',
    description: 'Nuxtインスタンスを操作する。',
    link: '/nuxt3/pages/composable',
  },
];
</script>
