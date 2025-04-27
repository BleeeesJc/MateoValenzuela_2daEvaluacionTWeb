<template>
  <div class="home-page">
    <Navbar />
    <main class="main-content">
      <section class="carousel-section">
        <Carousel />
      </section>
      <section class="about-section">
        <h2>Sobre la página</h2>
        <p>
          Bienvenido al Star Wars Portal, tu fuente de información sobre
          personajes, planetas y noticias del universo de Star Wars. Explora
          datos, curiosidades y mucho más.
        </p>
      </section>
      <section class="news-section">
        <div class="news-card" v-for="n in 3" :key="n">
          <h3>Noticia {{ n }}</h3>
          <p>Descripción breve de la noticia número {{ n }}.</p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>

.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
}
.main-content {
  flex: 1;
  padding-top: 40px; 
}
.carousel-section {
  width: 100%;
  margin: 0;
  padding: 0;
}
.carousel-wrapper {
  width: 100%;
  max-width: none;
  height: 700px;
  margin: 2rem 0;
}

/* Sobre la página */
.about-section {
  width: 80%;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #f5f5f5;
  text-align: center;
}
.about-section h2 {
  margin-bottom: 1rem;
  font-family: 'Star Jedi V2', sans-serif;
  font-size: 2rem;
}
.about-section p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Sección de noticias */
.news-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem auto 4rem;
  width: 90%;
}
.news-card {
  background: radial-gradient(circle at top left, #1a1a1a, #000);
  border: 2px solid #ffffff33;
  border-radius: 12px;
  box-shadow: 0 0 12px #555;
  width: 300px;
  padding: 1.5rem;
  color: #f5f5f5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 16px #00bfff88, 0 0 32px #ff450088;
}
.news-card h3 {
  margin-top: 0;
  font-family: 'Star Jedi V2', sans-serif;
  font-size: 1.4rem;
  color: #ffe81f;
}
.news-card p {
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
}
</style>
