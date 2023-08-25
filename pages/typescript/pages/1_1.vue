<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <TypeScriptHeader title="型注釈とlet"
        >letを使う場合は後で再代入される意思表示をしないと、読む人に負担をかける。<br />
        極力constを使おう。</TypeScriptHeader
      >
      <SampleCode filename="1_1.vue"></SampleCode>
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
console.log(value); // 4</pre>
      <p>以下コピペ用</p>
      <TypeScriptHeader title=""></TypeScriptHeader>
      <SampleCode filename=""></SampleCode>
      <pre style="font-size: 14px"></pre>
      <br />
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
