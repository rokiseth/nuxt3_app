<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <hr />
        <h1 style="font-weight: bold">第一章</h1>
        <h2>【基本的な文法・基本的な型】</h2>
        <hr />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in items1" :key="i.id" cols="4">
        <v-card class="mx-auto" max-width="334">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-title> Top western road trips </v-card-title>
          <v-card-item>
            <div>
              <div class="text-overline">1-{{ i.id }}</div>
              <div class="text-h6 mb-1" style="font-weight: bold">
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
    <v-row>
      <v-col class="text-center">
        <hr />
        <h1 style="font-weight: bold">第二章</h1>
        <h2>【オブジェクトの基本とオブジェクトの型】</h2>
        <hr />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in items2" :key="i.id" cols="auto">
        <v-card
          class="mx-auto pl-3 pr-3"
          max-width="200"
          min-width="200"
          variant="outlined"
        >
          <v-card-item>
            <div>
              <div class="text-overline">2-{{ i.id }}</div>
              <div class="text-h6 mb-1" style="font-weight: bold">
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
  id: number;
  title: string;
  description: string;
  link: string;
}
const items1: item[] = [
  {
    id: 1,
    title: '変数の宣言と使用',
    description: '型注釈,letの特徴',
    link: '/typescript/pages/1_1',
  },
  {
    id: 2,
    title: 'プリミティブ型',
    description: '各リテラル',
    link: '/typescript/pages/1_2',
  },
  {
    id: 3,
    title: '演算子',
    description: 'さまざまな演算子',
    link: '/typescript/pages/1_3',
  },
  {
    id: 4,
    title: '基本的な制御構文',
    description: 'if,switch,while,forについて',
    link: '',
  },
  {
    id: 5,
    title: 'FizzBuzz',
    description: '力試し',
    link: '',
  },
];
const items2: item[] = [
  {
    id: 1,
    title: 'オブジェクトとは',
    description: 'オブジェクトの基本的な構文',
    link: '/',
  },
  {
    id: 2,
    title: 'オブジェクトの型',
    description: '識別子,let',
    link: '',
  },
  {
    id: 3,
    title: '部分型関係',
    description: '部分型について',
    link: '',
  },
  {
    id: 4,
    title: '型引数を持つ型',
    description: '型引数について',
    link: '',
  },
  {
    id: 5,
    title: '配列',
    description: '配列の基本',
    link: '',
  },
  {
    id: 6,
    title: '分割代入',
    description: 'オブジェクトの分割代入',
    link: '',
  },
  {
    id: 7,
    title: 'その他の組み込みオブジェクト',
    description: 'Date,正規表現,Map,Set',
    link: '',
  },
  {
    id: 8,
    title: 'データ処理',
    description: '力試し',
    link: '',
  },
];
</script>
