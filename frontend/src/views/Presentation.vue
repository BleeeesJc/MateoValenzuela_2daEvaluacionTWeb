<template>
  <div class="star-wrapper">
    <div class="container">
      <img
        src="../assets/logostarwars.png"
        alt="Star Wars Logo"
        class="logo"
      />
      <h1 class="title">Star Wars Portal</h1>
      <button class="enter-button" @click="goToHome">Enter Portal</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push('/home')
}
</script>
<style scoped>
.star-wrapper {
  position: fixed;
  inset: 0;
  background-image: url('../assets/estrellas.jpg');
  background-repeat: repeat;
  background-size: auto;
  animation: moveBackground 60s linear infinite;
}

@keyframes moveBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
.container {
  position: fixed;
  inset: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

.logo {
  width: clamp(300px, 60%, 400px);
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 15px #ffe81f); 
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05); 
}

.title {
  font-family: 'Star Jedi', sans-serif;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.enter-button {
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1.5rem, 5vw, 2rem);
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  text-transform: uppercase;
  border: 2px solid #ffe81f; 
  background: transparent;
  color: #ffe81f;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Arial', sans-serif;
  border-radius: 0.25rem;
}

.enter-button:hover {
  background: #ffe81f;
  color: #000;
  box-shadow: 0 0 20px #ffe81f, 0 0 40px #ffe81f;
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }
}
.title {
  font-family: 'Star Jedi V2', sans-serif;
}
</style>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #000;
}
</style>
