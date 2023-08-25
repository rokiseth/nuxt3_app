<template>
  <div>
    <p class="text-h5" style="font-weight: bold">
      <span class="title">▍</span>{{ title }}
    </p>
    <hr style="margin-bottom: 20px" />
    <p>
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
