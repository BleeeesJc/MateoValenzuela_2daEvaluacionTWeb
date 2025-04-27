<template>
  <div class="star-wrapper">
    <nav class="container">
      <div class="left">
        <img src="../assets/logostarwars.png" alt="Star Wars Logo" class="logo" />
        <h1 class="title">Star Wars Portal</h1>
      </div>
      <div class="right">
        <RouterLink to="/home" class="nav-button">Inicio</RouterLink>
        <RouterLink to="/characters" class="nav-button characters-button">Personajes</RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.star-wrapper {
  position: fixed;
  inset: 0 0 auto 0;
  width: 100%;
  height: 80px;
  background: url('../assets/estrellas.jpg') repeat;
  background-size: 400px 400px;
  overflow: hidden;
  animation: scrollStars 60s linear infinite;
  z-index: 10;
}
@keyframes scrollStars {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 0;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  color: #f5f5f5;
}

.left {
  display: flex;
  align-items: center;
}
.logo {
  height: 50px;
  margin-right: 1rem;
  filter: drop-shadow(0 0 8px #ffe81f);
  transition: transform 0.3s ease;
}
.logo:hover {
  transform: scale(1.1);
}
.title {
  font-family: 'Star Jedi V2', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.right {
  display: flex;
  gap: 1rem;
}
.nav-button {
  font-family: 'Arial', sans-serif;
  padding: 0.5rem 1rem;
  border: 2px solid #ffffff;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  color: #ffffff;
  background: transparent;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}
.nav-button:hover {
  background: #ffffff;
  color: #000;
  box-shadow:
    0 0 12px #b8a713,
    0 0 24px #a59612;
}
.characters-button {
  color: white;
  border: 2px solid white;
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  transition:
    background 0.5s ease,
    color 0.5s ease,
    box-shadow 0.5s ease;
}

.characters-button:hover {
  color: white;
  background: linear-gradient(90deg, blue, red);
  box-shadow:
    0 0 12px blue,
    0 0 24px red;
}
body,
#app {
  padding-top: 80px;
}
</style>
