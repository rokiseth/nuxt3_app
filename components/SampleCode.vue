<template>
  <div>
    <v-icon class="mb-1">mdi-folder-file-outline</v-icon
    ><span class="filename">{{ filename }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  filename: string;
}>();
</script>

<style>
.filename {
  display: inline-block;
  margin-left: 3px;
  font-weight: bold;
}
</style>
