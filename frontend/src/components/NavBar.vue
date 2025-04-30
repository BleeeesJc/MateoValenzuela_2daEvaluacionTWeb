<template>
  <!-- Wrapper fijo en la parte superior con fondo animado de estrellas -->
  <div class="star-wrapper">
    <nav class="container">
      <!-- Lado izquierdo: logo y título -->
      <div class="left">
        <img
          src="../assets/logostarwars.png"
          alt="Star Wars Logo"
          class="logo"
        />
        <h1 class="title">Star Wars Portal</h1>
      </div>

      <!-- Lado derecho: enlaces de navegación -->
      <div class="right">
        <RouterLink to="/home" class="nav-button">Inicio</RouterLink>
        <RouterLink
          to="/characters"
          class="nav-button characters-button"
        >
          Personajes
        </RouterLink>
        <RouterLink
          to="/planets"
          class="nav-button planets-button"
        >
          Planetas
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
// Importa el componente RouterLink de Vue Router
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Contenedor fijo en top para que la barra siempre sea visible */
.star-wrapper {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: url('../assets/estrellas.jpg') repeat;
  background-size: 400px 400px;
  animation: scrollStars 60s linear infinite; 
  z-index: 10; 
}

/* Animación que desplaza horizontalmente el fondo de estrellas */
@keyframes scrollStars {
  from { background-position: 0 0; }
  to   { background-position: 1000px 0; }
}

/* Contenedor central con layout flex para logo y menús */
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  color: #f5f5f5;
}

/* Sección izquierda: logo + título */
.left {
  display: flex;
  align-items: center;
}

/* Logo de Star Wars */
.logo {
  height: 50px;
  margin-right: 1rem;
  filter: drop-shadow(0 0 8px #ffe81f); /* Sombra amarilla */
  transition: transform 0.3s ease;
}
.logo:hover {
  transform: scale(1.1); 
}

/* Título con fuente estilo Star Wars */
.title {
  font-family: 'Star Jedi V2', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Sección derecha: botones de navegación */
.right {
  display: flex;
  gap: 1rem;
}

/* Estilo base de los botones de navegación */
.nav-button {
  font-family: Arial, sans-serif;
  padding: 0.5rem 1rem;
  border: 2px solid #fff;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  text-decoration: none;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
}
.nav-button:hover {
  background: #fff;
  color: #000;
  box-shadow: 0 0 12px #b8a713, 0 0 24px #a59612; 
}

/* Efecto hover especial para botón "Personajes" */
.characters-button:hover {
  background: linear-gradient(90deg, blue, red);
  box-shadow: 0 0 60px blue, 0 0 24px red;
}

/* Efecto hover especial para botón "Planetas" */
.planets-button:hover {
  background: linear-gradient(90deg, #0f0, #070);
  box-shadow: 0 0 12px #0f0, 0 0 24px #070;
}

/* Añade espacio arriba del body/app para que no tape contenido */
body, #app {
  padding-top: 80px;
}

/* Media query para pantallas medianas */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
  }
  .left {
    justify-content: center;
  }
  .title {
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }
  .right {
    margin-top: 0.75rem;
    width: 100%;
    justify-content: space-around;
  }
  .nav-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  body, #app {
    padding-top: 160px; /* Más espacio en móvil */
  }
}

/* Media query para pantallas pequeñas */
@media (max-width: 480px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
  .logo {
    height: 40px;
  }
  .title {
    font-size: 1rem;
  }
  .right {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-button {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
  body, #app {
    padding-top: 200px; 
  }
}
</style>
