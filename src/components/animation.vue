<template>
  <div class="my-60 bg-gray-200 flex w-full p-6">
    <textarea
      class="relative border border-gray-300 p-2 resize-none rounded-md max-h-60"
      v-model="texto"
      rows="1"
      @input="autoResize"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const texto = ref('');

const autoResize = (event: InputEvent) => {
  const target = event.target as HTMLTextAreaElement;
  target.style.height = 'auto';
  target.style.height = target.scrollHeight + 'px';
};
</script>

<style>
textarea {
  overflow: hidden;
}
</style>