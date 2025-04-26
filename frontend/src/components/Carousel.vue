<template>
  <div class="carousel-wrapper">
    <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <button class="nav-button prev" @click="prevSlide">&#10094;</button>
    <button class="nav-button next" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Importa directamente la imagen para que Vue la procese correctamente
import episodio4 from '../assets/episodio4.jpg';

const slides = ref([
  { src: episodio4, alt: 'Episodio IV' },
]);

const currentSlide = ref(0);
let interval;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 90vw;
  max-width: 1000px;
  height: 600px;
  margin: 2rem auto;
  overflow: hidden;
  background: url('/src/assets/estrellas.jpg') repeat;
  background-size: 500px 500px;
  animation: scrollStars 60s linear infinite;
  border: 3px solid transparent;
  border-image: "#FFFFFF";
  border-radius: 0.5rem;
  z-index: 1;
}

@keyframes scrollStars {
  from { background-position: 0 0; }
  to   { background-position: 1000px 0; }
}

.carousel {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slide.active {
  opacity: 1;
}

.slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-wrapper:hover .nav-button {
  opacity: 1;
}

.nav-button.prev {
  left: 1rem;
}

.nav-button.next {
  right: 1rem;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.8);
}
</style>
