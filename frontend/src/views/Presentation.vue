<template>
  <div class="star-wrapper">
    <div class="container">
      <!-- Imagen del logo de Star Wars -->
      <img
        src="../assets/logostarwars.png"
        alt="Star Wars Logo"
        class="logo"
      />
      <!-- Título principal del portal -->
      <h1 class="title">Star Wars Portal</h1>
      <!-- Botón que redirige al usuario al home -->
      <button class="enter-button" @click="goToHome">Enter Portal</button>
    </div>
  </div>
</template>

<script setup>
// Importa el router para poder navegar entre rutas
import { useRouter } from 'vue-router'
// Inicializa el router
const router = useRouter()
// Función para ir a la ruta '/home'
const goToHome = () => {
  router.push('/home')
}
</script>

<style scoped>
/* Estilo del contenedor principal con fondo animado */
.star-wrapper {
  position: fixed;
  inset: 0;
  background-image: url('../assets/estrellas.jpg');
  background-repeat: repeat;
  background-size: cover;
  animation: moveBackground 60s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Animación de movimiento del fondo */
@keyframes moveBackground {
  from { background-position: 0 0; }
  to   { background-position: 100% 100%; }
}
/* Contenedor del contenido centrado */
.container {
  text-align: center;
  padding: 1rem;
}
/* Estilo del logo */
.logo {
  width: clamp(200px, 50vw, 400px); 
  margin-bottom: clamp(1rem, 5vw, 2rem);
  filter: drop-shadow(0 0 15px #ffe81f); /* Brillo amarillo */
  transition: transform 0.3s ease;
}
.logo:hover {
  transform: scale(1.05); /* Efecto al pasar el mouse */
}
/* Estilo del título */
.title {
  font-family: 'Star Jedi V2', sans-serif;
  font-size: clamp(1.5rem, 8vw, 3rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: clamp(1rem, 4vw, 2rem);
  color: #ffffff;
  text-shadow: 0 0 8px #ffe81f; /* Resplandor amarillo */
}
/* Botón para entrar al portal */
.enter-button {
  padding: clamp(0.5rem, 3vw, 1rem) clamp(1rem, 10vw, 2rem);
  font-size: clamp(1rem, 4vw, 1.25rem);
  text-transform: uppercase;
  border: 2px solid #ffffff;
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
  box-shadow: 0 0 20px #ffe81f, 0 0 40px #ffe81f; /* Efecto brillante */
}
/* Ajustes para pantallas medianas (tablets) */
@media (max-width: 768px) {
  .logo {
    width: clamp(180px, 40vw, 300px);
  }
  .title {
    font-size: clamp(1.25rem, 6vw, 2.5rem);
    margin-bottom: clamp(0.75rem, 3vw, 1.5rem);
  }
  .enter-button {
    padding: clamp(0.4rem, 4vw, 0.8rem) clamp(0.8rem, 12vw, 1.5rem);
    font-size: clamp(0.9rem, 5vw, 1.125rem);
  }
}
/* Ajustes para pantallas pequeñas (móviles) */
@media (max-width: 480px) {
  .container {
    padding: 0.5rem;
  }
  .logo {
    width: clamp(150px, 60vw, 250px);
  }
  .title {
    font-size: clamp(1rem, 8vw, 2rem);
    margin-bottom: clamp(0.5rem, 4vw, 1rem);
  }
  .enter-button {
    width: 100%;
    padding: clamp(0.4rem, 5vw, 0.75rem) 0;
    font-size: clamp(0.9rem, 6vw, 1rem);
  }
}
</style>
