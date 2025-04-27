<template>
  <footer class="star-footer">
    <div class="footer-content">
      <p class="footer-text">© 2025 Star Wars Portal. All rights reserved.</p>
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

  padding: 1rem 0;
  color: #ffe81f;
  text-align: center;
  overflow: hidden;
}

@keyframes scrollFooterStars {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1000px 0;
  }
}

.footer-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;       
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f5f5f5;
  padding: 0 2rem;
}

.footer-text {
  font-family: 'Star Jedi', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-shadow:
    0 0 8px #ffe81f,
    0 0 16px #ffe81f;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font-family: 'Star Jedi', sans-serif;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
  text-shadow:
    0 0 12px #ffe81f,
    0 0 24px #ffe81f;
}

@media (max-width: 600px) {
  .footer-content {
    gap: 0.5rem;
  }
  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
