<template>
  <!-- Pie de página principal con estilo de fondo de estrellas -->
  <footer class="star-footer">
    <div class="footer-content">
      <!-- Texto de derechos de autor -->
      <p class="footer-text">
        © 2025 Star Wars Portal. All rights reserved. Mateo Valenzuela
      </p>
      <!-- Enlaces a políticas de privacidad y términos -->
      <div class="footer-links">
        <RouterLink to="/privacy" class="footer-link">Privacidad</RouterLink>
        <RouterLink to="/terms" class="footer-link">Términos</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Importa el componente de enlace del enrutador de Vue Router
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Estilos del contenedor del footer con fondo animado de estrellas */
.star-footer {
  width: 100%;
  flex-shrink: 0;               
  margin-top: auto;            
  background: url('../assets/estrellas.jpg') repeat;
  background-size: 400px 400px;
  animation: scrollFooterStars 60s linear infinite;
  padding: clamp(0.75rem, 2vw, 1.5rem) 0; /* Ajuste de padding responsivo */
  color: #ffe81f;               
  overflow: hidden;
}

/* Animación que desplaza el fondo de estrellas horizontalmente */
@keyframes scrollFooterStars {
  from { background-position: 0 0; }
  to   { background-position: -1000px 0; }
}

/* Contenedor interno con layout flex y espaciado */
.footer-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
  gap: 1rem;
  padding: 0 2rem;
}

/* Estilo del texto de copyright */
.footer-text {
  font-family: 'Star Jedi', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  letter-spacing: 0.1em;
  text-shadow:
    0 0 8px #ffe81f,
    0 0 16px #ffe81f;
  margin: 0;
}

/* Contenedor de los enlaces */
.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

/* Estilo de cada enlace */
.footer-link {
  font-family: 'Star Jedi', sans-serif;
  color: #ffffff;
  text-decoration: none;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

/* Efecto hover para resaltar los enlaces */
.footer-link:hover {
  color: #ffffff;
  text-shadow:
    0 0 12px #ffe81f,
    0 0 24px #ffe81f;
}

/* Ajustes responsivos para pantallas medianas */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
  .footer-text {
    text-align: center;
  }
  .footer-links {
    justify-content: center;
  }
}

/* Ajustes responsivos para pantallas pequeñas */
@media (max-width: 480px) {
  .footer-content {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
