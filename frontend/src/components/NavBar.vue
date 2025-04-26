<template>
  <nav class="bg-black text-yellow-400 flex items-center justify-between p-6 shadow-lg">
    <div class="flex items-center space-x-4">
      <img alt="Star Wars Logo" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" width="100" />
      <h1 class="text-2xl font-bold star-wars-title">Star Wars Portal</h1>
    </div>
    <div class="space-x-6 text-lg">
      <RouterLink to="/home" class="hover:text-white transition">Inicio</RouterLink>
      <RouterLink to="/about" class="hover:text-white transition">Acerca</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

.star-wars-title {
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
  text-shadow: 0 0 8px yellow, 0 0 16px yellow;
}

.logo {
  filter: drop-shadow(0 0 5px yellow);
}
</style>
