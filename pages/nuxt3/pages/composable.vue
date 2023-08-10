<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <p class="text-h5" style="font-weight: bold">
        <span class="title">▍</span>コンポーザブル
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        Vue
        アプリケーションの文脈で「コンポーザブル（composable）」とは、ロジックをカプセル化して再利用するための関数である。<br />
        コンポーザブルは再利用だけでなく、コード整理のために抽出することもできる。
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
      ><span class="filename">plugins/sample.ts</span>
      <pre style="font-size: 14px">
  export interface SamplePluginInterface {
    hoge (): string
  }
  
  class <span class="highlight">SamplePlugin</span> implements SamplePluginInterface {
    public hoge = () => {
      return "hoge";
    };
  }
  
  export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        <span class="highlight">samp</span>: new SamplePlugin
      },
    };
  });</pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>provide を呼び出す
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        自作クラスの呼び出しには、 <code>useNuxtApp()</code> を使う。<br />
        <code>$</code> をつけて呼び出す。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">nuxt.config.ts</span>
      <pre style="font-size: 14px">
  const { <span class="highlight">$samp</span> } = useNuxtApp();<span class="highlight"></span>
  console.log(<span class="highlight">$samp.hoge()</span>); <span class="comment">// hoge</span></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $samp } = useNuxtApp();
console.log($samp.hoge()); // hoge
</script>
