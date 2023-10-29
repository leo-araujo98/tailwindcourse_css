<script setup lang="ts">
import { onMounted, ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import animate_smzinho from "../assets/animate_smzinho.json";
import Lego from "../assets/Lottie Lego.json";

let anim = ref();

onMounted(() => {
  setTimeout(() => {
    console.log(anim.value.goToAndPlay(150, true));
    anim.value;
  }, 500);
});
</script>
<template>
  <!-- <LottieAnimation
    ref="anim"
    :animation-data=""
    :loop="true"
    :auto-play="true"
    :speed="1"
    @loopComplete="loopComplete"
    @complete="complete"
    @enterFrame="enterFrame"
    @segmentStart="segmentStart"
    @stopped="stopped"/> -->

 
</template>