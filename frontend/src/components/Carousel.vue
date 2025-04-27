<template>
  <div class="carousel-wrapper">
    <div class="carousel" :style="{ transform: `translateX(-${slideActual * 100}%)` }">
      <div
        v-for="(slide, index) in diapositivas"
        :key="index"
        class="slide"
        :class="{ active: index === slideActual }"
      >
        <img :src="slide.src" :alt="slide.alt || 'Diapositiva'" />
        <div class="slide-text">{{ slide.texto }}</div>
      </div>
    </div>
    <button class="nav-button prev" @click="anteriorDiapositiva" aria-label="Diapositiva anterior"></button>
    <button class="nav-button next" @click="siguienteDiapositiva" aria-label="Siguiente diapositiva"></button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import s1 from '../assets/s1.jpg'
import s2 from '@/assets/s2.jpg'
import s3 from '@/assets/s3.jpg'

const diapositivas = ref([
  { src: s1, texto: 'El poder del Lado Oscuro es muy tentador. Pero no es el único camino.' },
  { src: s2, texto: 'No somos nuestras circunstancias. Somos lo que elegimos ser.' },
  { src: s3, texto: 'La verdad de una persona puede ser diferente a la de otra.' }
])

const slideActual = ref(0)
let intervalo

const siguienteDiapositiva = () => {
  slideActual.value = (slideActual.value + 1) % diapositivas.value.length
}
const anteriorDiapositiva = () => {
  slideActual.value = (slideActual.value - 1 + diapositivas.value.length) % diapositivas.value.length
}

onMounted(() => {
  intervalo = setInterval(siguienteDiapositiva, 7000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100vw;
  height: 600px;
  margin: 0;
  overflow: hidden;
  background: url('/src/assets/estrellas.jpg') repeat;
  background-size: 500px 500px;
  animation: scrollStars 60s linear infinite;
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
  position: relative;
  min-width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.slide.active {
  opacity: 1;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Star Jedi V2', sans-serif;
  font-size: 2rem;
  color: #ffffff;
  text-shadow: 0 0 8px #0045ad;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
.nav-button {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0; 
  transition: opacity 0.3s ease;
}
.carousel-wrapper:hover .nav-button {
  opacity: 1; 
}
.nav-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(50% + var(--blade-offset));
  width: var(--blade-length);
  height: 4px;
  background: var(--blade-color);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--blade-color);
  transform: translateY(-50%);
  opacity: 1;
}
.nav-button.prev {
  left: 1rem;
  --blade-color: #00b4fc;
  --blade-length: 80px;
  --blade-offset: -20px;
}
.nav-button.next {
  right: 1rem;
  --blade-color: #ff0000;
  --blade-length: 80px;
  --blade-offset: -60px;
}
.nav-button:hover::before {
  opacity: 1;
}
</style>
