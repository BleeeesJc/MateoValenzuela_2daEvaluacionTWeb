<template>
   <!-- Contenedor principal del carrusel -->
  <div class="carousel-wrapper">
    <!-- Elemento deslizante: se mueve en X según la diapositiva actual -->
    <div class="carousel" :style="{ transform: `translateX(-${slideActual * 100}%)` }">
      <!-- Recorre el array de diapositivas y renderiza cada una -->
      <div
        v-for="(slide, index) in diapositivas"
        :key="index"
        class="slide"
        :class="{ active: index === slideActual }"
      >
       <!-- Imagen de la diapositiva -->
        <img :src="slide.src" :alt="slide.alt || 'Diapositiva'" />
        <div class="slide-text">{{ slide.texto }}</div>
      </div>
    </div>
    <!-- Botón para ir a la anterior diapositiva -->
    <button class="nav-button prev" @click="anteriorDiapositiva" aria-label="Diapositiva anterior"></button>
    <!-- Botón para ir a la siguiente diapositiva -->
    <button class="nav-button next" @click="siguienteDiapositiva" aria-label="Siguiente diapositiva"></button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Importa las imágenes desde la carpeta de assets
import s1 from '../assets/s1.jpg'
import s2 from '@/assets/s2.jpg'
import s3 from '@/assets/s3.jpg'

// Array reactivo con los datos de cada diapositiva
const diapositivas = ref([
  {
    src: s1,
    texto: 'El poder del Lado Oscuro es muy tentador. Pero no es el único camino.'
  },
  {
    src: s2,
    texto: 'No somos nuestras circunstancias. Somos lo que elegimos ser.'
  },
  {
    src: s3,
    texto: 'La verdad de una persona puede ser diferente a la de otra.'
  }
])

// Índice de la diapositiva actualmente visible
const slideActual = ref(0)
let intervalo  // Guardará la referencia al setInterval

// Avanza a la siguiente diapositiva (con bucle)
const siguienteDiapositiva = () => {
  slideActual.value = (slideActual.value + 1) % diapositivas.value.length
}

// Retrocede a la diapositiva anterior (con bucle)
const anteriorDiapositiva = () => {
  slideActual.value =
    (slideActual.value - 1 + diapositivas.value.length) %
    diapositivas.value.length
}

// Cuando el componente se monta: inicia el autoplay cada 7 segundos
onMounted(() => {
  intervalo = setInterval(siguienteDiapositiva, 7000)
})

// Cuando se destruye el componente: limpia el intervalo
onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<style scoped>
/* Wrapper: contenedor relativo y con fondo animado de estrellas */
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: clamp(300px, 60vh, 600px);
  margin: 0 auto;
  overflow: hidden;
  background: url('/src/assets/estrellas.jpg') repeat;
  background-size: 500px 500px;
  animation: scrollStars 60s linear infinite;
}

/* Animación que desplaza el fondo de estrellas horizontalmente */
@keyframes scrollStars {
  from { background-position: 0 0; }
  to   { background-position: 1000px 0; }
}

/* Contenedor flex de las diapositivas */
.carousel {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease; 
}

/* Cada diapositiva ocupa el 100% del ancho y está oculta por defecto */
.slide {
  position: relative;
  min-width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease; 
}

/* La diapositiva activa se hace visible */
.slide.active {
  opacity: 1;
}

/* La imagen de la diapositiva cubre todo el espacio */
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Texto superpuesto en la parte inferior de la imagen */
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

/* Botones de navegación (previa/siguiente) ocultos hasta hover */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(2rem, 5vw, 3rem);
  height: clamp(2rem, 5vw, 3rem);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Muestra los botones al pasar el ratón por el wrapper */
.carousel-wrapper:hover .nav-button {
  opacity: 1;
}

/* Estilo de la “hoja” del botón (simula sable de luz) */
.nav-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(60px, 10vw, 80px);
  height: 4px;
  background: var(--blade-color);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--blade-color);
}

/* Posiciona y colorea cada botón */
.nav-button.prev {
  left: 1rem;
  --blade-color: #00b4fc; 
}
.nav-button.next {
  right: 1rem;
  --blade-color: #ff0000; 
}

/* Ajusta tamaño de texto y posiciones en pantallas pequeñas */
@media (max-width: 768px) {
  .slide-text {
    font-size: clamp(1rem, 4vw, 1.5rem);
    bottom: 15px;
    padding: 0.4rem 0.8rem;
  }
}
@media (max-width: 480px) {
  .slide-text {
    font-size: clamp(0.9rem, 5vw, 1.2rem);
    bottom: 10px;
    padding: 0.3rem 0.6rem;
    white-space: normal;
    text-align: center;
  }
  .nav-button.prev {
    left: 0.5rem;
  }
  .nav-button.next {
    right: 0.5rem;
  }
}
</style>