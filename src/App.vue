<script setup>
import basico from './components/basico.vue'
import flexBox from './components/flexBox.vue'
import grid from './components/grid.vue'


</script>

<template>

  <!-- <basico/> -->
  <!-- <flexBox/> -->
  <grid/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
