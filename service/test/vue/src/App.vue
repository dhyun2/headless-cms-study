<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { Aicoach, Golfzonpass, Heart_fill, Lightening, Megaphone } from '@hyun2/ui/icons/vue';
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>
      하이
      <Aicoach :size="50" :color="'red'" />
      <Golfzonpass :size="50" :color="'red'" />
      <Aicoach :size="50" :color="'red'" />
      <Heart_fill :size="50" :color="'red'" />
      <Megaphone :size="50" :color="'red'" />
      <Lightening :size="50" :color="'red'" />
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style>
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
