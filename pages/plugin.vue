<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <p class="text-h5" style="font-weight: bold">
        <span class="title">▍</span>プラグイン
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        Nuxt.jsではモジュールやライブラリを自前で定義できる。<br />
        Vue.jsアプリケーションがインスタンスされる前に実行され、いつでも利用できるようになる。
      </p>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>プラグインの作成
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        二項演算子とは、+、-、*、/、%、**のことで、それぞれ加算、減算、乗算、除算、剰余、冪乗である。
        単項演算子とは、+、-、++、--のことである。以下の例では、+を使用することで文字列型から数値型に変換している。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_3.vue</span>
      <pre style="font-size: 14px">
  console.log(<span class="highlight">18 / 12</span>); <span class="comment">// 1.5</span>
  console.log(<span class="highlight">18n / 12n</span>); <span class="comment">// 1n</span>
  
  const x = 123;
  const minusx = <span class="highlight">-x</span>;
  console.log(minusx); <span class="comment">// -123</span>
  
  const str: string = '123';
  console.log(<span class="highlight">+str</span> * 100); <span class="comment">// 12300</span></pre>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
