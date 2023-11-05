<script setup>
import basico from './components/basico.vue'
import grid from './components/grid.vue'
import spotify from './components/projetos_curso/spotify.vue'
import flexBoxVue from './components/flexBox.vue'
import espaçamentos from './components/espaçamentos.vue'
import tipografia from './components/tipografia.vue'
import background from './components/background.vue'
import animation from './components/animation.vue'
import facebook from './components/projetos_curso/facebook.vue'
import bordas from './components/bordas.vue'
import amazon from './components/projetos_curso/amazon.vue'

import { ref } from 'vue'


const completed = ref(0);

const updateCompleted = (value) => {
  completed.value = value
}

</script>

<template>
  <!-- <basico/> -->
  <!--Flexbox/-->
  <!--grid/-->
  <!--espaçamentos/-->
  <!--spotify/-->
  <!--tipografia/-->
  <!--background/-->
  <!--bordas /-->
  <!--facebook /-->
  <amazon/>


  <!--animation @animation-completed="updateCompleted" class="w-[40%] justify-center flex m-auto"/-->
</template>

<style scoped></style>
