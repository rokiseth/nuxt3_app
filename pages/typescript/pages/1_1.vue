<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <p class="text-h5" style="font-weight: bold">
        <span class="title">▍</span>
        <v-icon icon="">fa:fas fa-lock</v-icon>型注釈とlet
      </p>
      <hr style="margin-bottom: 30px" />
      <p>
        letを使う場合は後で再代入される意思表示をしないと、読む人に負担をかける。
        極力constを使おう。<v-icon icon="$vuetify"></v-icon
        ><v-icon icon="mdi-check-circle"></v-icon
        ><i class="bi bi-0-circle-fill"></i>
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_1.vue</span>
      <pre style="font-size: 14px">
<span class="comment">// const 変数: 型注釈 = 式;</span>
const greeting: string = 'Hello,';
const target: string = 'World!';
console.log(greeting + target); <span class="comment">// Hello,World!</span>

<span class="comment">// letによる変数宣言</span>
let letGreeting = 'Hello,';
<span class="comment">// 再代入が可能</span>
letGreeting = letGreeting + 'World!';
console.log(letGreeting); <span class="comment">// Hello,World!</span>

<span class="comment">// letは宣言時に値を代入しなくてもよい</span>
let value: number;
value = 3;
value = 4;
console.log(value); <span class="comment">// 4</span></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
// const 変数: 型注釈 = 式;
const greeting: string = 'Hello,';
const target: string = 'World!';
console.log(greeting + target); // Hello,World!

// letによる変数宣言
let letGreeting = 'Hello,';
// 再代入が可能
letGreeting = letGreeting + 'World!';
console.log(letGreeting); // Hello,World!

// letは宣言時に値を代入しなくてもよい
let value: number;
value = 3;
value = 4;
console.log(value); // 4
</script>
