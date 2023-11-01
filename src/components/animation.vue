<template>
  <Vue3Lottie :animationData="AstronautJSON" :speed="1" :height="400" :width="600" @on-loop-complete="completed++" />

  <div class="text-center bg-blue-500 py-3 w-[15%] mx-auto rounded-xl border-8 border-purple-700">
    LOOP: {{ completed }}
  </div>
  <button class="bg-green-400 justify-center flex mx-auto px-8 py-2 rounded-lg text-xl my-6" >Aumentar Velocidade</button>
  <button class="bg-green-400 justify-center flex mx-auto px-8 py-2 rounded-lg text-xl mb-6" >Diminuir Velocidade</button>
  <button class="bg-green-400 justify-center flex mx-auto px-8 py-2 rounded-lg text-xl" >Play</button>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue' 
import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '../assets/animate_smzinho.json'

const completed = ref(0)

</script>