<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <p class="text-h5" style="font-weight: bold">
        <span class="title">▍</span>演算子
      </p>
      <hr style="margin-bottom: 20px" />
      <p>例えば、（1 + x）では"+"が演算子、"1"、"x"をオペランドと呼ぶ。</p>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>二項演算子・単項演算子
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
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>比較演算子・等価演算子
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        返り値は必ず真偽値である。<br />
        等価演算子は==、!=、===、!==の4つである。
        ==、!=は暗黙の型変換を行ってから両者を比較するため、基本的に使うべきではない。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_3.vue</span>
      <pre style="font-size: 14px">
const left = 12n;
const right = 8n;
console.log(<span class="highlight">left &lt;= right</span>); <span class="comment">// false</span>

console.log(<span class="highlight">'null' === null</span>); <span class="comment">// false</span></pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>論理演算子
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        &&、||、!、??がある。<br />
        !!は!(!)のことであり、使用例として値が存在しているかどうかを判定する。<br />
        ??は||や&&と異なり、0やfalse、""の時は左辺を返し、nullとundefinedの時だけ右辺を返す。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_3.vue</span>
      <pre style="font-size: 14px">const t: boolean = true;
const f: boolean = false;
console.log(<span class="highlight">t && f</span>); <span class="comment">// false</span>
console.log(<span class="highlight">t || f</span>); <span class="comment">// true</span>

console.log(<span class="highlight">!Number.isNaN(1)</span>); <span class="comment">// true</span>

<span class="comment">// 空かどうかの判定</span>
const input1 = '123';
const input2 = '';
console.log(<span class="highlight">!!input1</span>); <span class="comment">// true</span>
console.log(<span class="highlight">!!input2</span>); <span class="comment">// false</span>

<span class="comment">// name(左辺)がtrueならばnameが入り、falseなら右辺の値が入る</span>
const name1 = '';
const displayName1 = <span class="highlight">name1 || '名無し'</span>;
console.log(displayName1); <span class="comment">// 名無し</span>

<span class="comment">// &&の場合は左辺がtrueなら右辺が入り、falseなら左辺の値が入る</span>
const name2 = '';
const displayName2 = <span class="highlight">name2 && '名無し'</span>;
console.log(displayName2); <span class="comment">// ""</span>

const val3 = null;
console.log(<span class="highlight">val3 ?? 'val3はnullまたはundefined'</span>); <span class="comment">// val3はnullまたはundefined</span>
const val4 = false;
console.log(<span class="highlight">val4 ?? 'val3はnullまたはundefined'</span>); <span class="comment">// false</span></pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>条件演算子・その他の演算子
      </p>
      <hr style="margin-bottom: 20px" />
      <p>ビット演算では、|がOR演算、&がAND演算、~がビット反転である。</p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_3.vue</span>
      <pre style="font-size: 14px">
const judge = true;
const message = <span class="highlight">judge ? 'judgeはtrue' : 'judgeはfalse'</span>;
console.log(message); <span class="comment">// judgeはtrue</span>

<span class="comment">// ビット演算</span>
console.log(<span class="highlight">0b0101 | 0b1100</span>); <span class="comment">// 13(0b1101)</span>
console.log(<span class="highlight">0b0101 & 0b1100</span>); <span class="comment">// 4(0b0100)</span>
console.log(<span class="highlight">~0b1100</span>); <span class="comment">// -13(1b0011)</span></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log(18 / 12); // 1.5
console.log(18n / 12n); // 1n

const x = 123;
const minusx = -x;
console.log(minusx); // -123

const str: string = '123';
console.log(+str * 100); // 12300

const left = 12n;
const right = 8n;
console.log(left <= right); // false

console.log('null' === null); // false

const t: boolean = true;
const f: boolean = false;
console.log(t && f); // false
console.log(t || f); // true

console.log(!Number.isNaN(1)); // true

// 空かどうかの判定
const input1 = '123';
const input2 = '';
console.log(!!input1); // true
console.log(!!input2); // false

// name(左辺)がtrueならばnameが入り、falseなら右辺の値が入る
const name1 = '';
const displayName1 = name1 || '名無し';
console.log(displayName1); // 名無し

// &&の場合は左辺がtrueなら右辺が入り、falseなら左辺の値が入る
const name2 = '';
const displayName2 = name2 && '名無し';
console.log(displayName2); // ""

const val3 = null;
console.log(val3 ?? 'val3はnullまたはundefined'); // val3はnullまたはundefined

const val4 = false;
console.log(val4 ?? 'val3はnullまたはundefined'); // false

const judge = true;
const message = judge ? 'judgeはtrue' : 'judgeはfalse';
console.log(message); // judgeはtrue

// ビット演算
console.log(0b0101 | 0b1100); // 13(0b1101)
console.log(0b0101 & 0b1100); // 4(0b0100)
console.log(~0b1100); // -13(1b0011)
</script>
