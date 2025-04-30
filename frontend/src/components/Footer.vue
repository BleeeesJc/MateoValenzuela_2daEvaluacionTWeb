<template>
  <footer class="star-footer">
    <div class="footer-content">
      <p class="footer-text">© 2025 Star Wars Portal. All rights reserved. Mateo Valenzuela</p>
      <div class="footer-links">
        <RouterLink to="/privacy" class="footer-link">Privacidad</RouterLink>
        <RouterLink to="/terms" class="footer-link">Términos</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.star-footer {
  width: 100%;
  flex-shrink: 0;
  margin-top: auto;
  background: url('../assets/estrellas.jpg') repeat;
  background-size: 400px 400px;
  animation: scrollFooterStars 60s linear infinite;
  padding: clamp(0.75rem, 2vw, 1.5rem) 0;
  color: #ffe81f;
  overflow: hidden;
}
@keyframes scrollFooterStars {
  from { background-position: 0 0; }
  to   { background-position: -1000px 0; }
}

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

.footer-text {
  font-family: 'Star Jedi', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  letter-spacing: 0.1em;
  text-shadow:
    0 0 8px #ffe81f,
    0 0 16px #ffe81f;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-link {
  font-family: 'Star Jedi', sans-serif;
  color: #ffffff;
  text-decoration: none;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
.footer-link:hover {
  color: #ffffff;
  text-shadow:
    0 0 12px #ffe81f,
    0 0 24px #ffe81f;
}

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
