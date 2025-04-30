<template>
  <div class="cards-container">
    <!-- Muestra overlay de carga mientras fetching -->
    <div v-if="loading" class="loading-overlay">
      <p>Cargando...</p>
    </div>

    <!-- Muestra mensaje de error si falla la petición -->
    <div v-else-if="error" class="error-message">
      <p>Error al cargar personajes.</p>
    </div>

    <!-- Muestra las tarjetas cuando los datos están listos -->
    <div v-else class="cards-wrapper">
      <!-- Crea una tarjeta por cada personaje -->
      <div v-for="char in characters" :key="char.name" class="flip-card">
        <div class="flip-card-inner">

          <!-- Cara frontal de la tarjeta con imagen y nombre -->
          <div class="flip-card-front">
            <img
              :src="getCharacterImage(char.name)"
              alt="Character Image"
              class="character-image"
            />
            <h2>{{ char.name }}</h2>
          </div>

          <!-- Cara trasera de la tarjeta con detalles del personaje -->
          <div class="flip-card-back">
            <h2>{{ char.name }}</h2>
            <ul>
              <li><strong>Altura:</strong> {{ char.height }} cm</li>
              <li><strong>Peso:</strong> {{ char.mass }} kg</li>
              <li><strong>Género:</strong> {{ char.gender }}</li>
              <li><strong>Cumpleaños:</strong> {{ char.birth_year }}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importa reactividad y hook onMounted para cargar datos al inicio
import { ref, onMounted } from 'vue'
// Importa imágenes locales de personajes y una imagen por defecto
import defaultImage from '@/assets/default.png'
import lukeImage from '@/assets/LukeSkywalker.jpg'
import obiwanImage from '@/assets/ObiWan.jpg'
import darthvaderImage from '@/assets/Darthvader.jpg'
import anakinImage from '@/assets/Anakinskywalker.jpg'
import leiaImage from '@/assets/Leiaorgana.jpg'
import hanImage from '@/assets/Hansolo.jpg'
import cp3Image from '@/assets/C3po.jpg'
import r2Image from '@/assets/R2d2.jpg'
import owenImage from '@/assets/Owenlars.jpg'
import beruImage from '@/assets/Berulars.jpg'
import r5Image from '@/assets/R5d4.jpg'
import biImage from '@/assets/Biggs.jpg'
import moffImage from '@/assets/Moff.jpg'
import cheImage from '@/assets/Che.jpg'

// Estado reactivo: lista de personajes, indicador de carga y error
const characters = ref([])
const loading = ref(false)
const error = ref(false)

// Función para devolver la imagen correspondiente según el nombre
function getCharacterImage(name) {
  switch (name) {
    case 'Luke Skywalker':        return lukeImage
    case 'Obi-Wan Kenobi':        return obiwanImage
    case 'Darth Vader':           return darthvaderImage
    case 'Anakin Skywalker':      return anakinImage
    case 'Leia Organa':           return leiaImage
    case 'Han Solo':              return hanImage
    case 'C-3PO':                 return cp3Image
    case 'R2-D2':                 return r2Image
    case 'Owen Lars':             return owenImage
    case 'Beru Whitesun lars':    return beruImage
    case 'R5-D4':                 return r5Image
    case 'Biggs Darklighter':     return biImage
    case 'Wilhuff Tarkin':        return moffImage
    case 'Chewbacca':             return cheImage
    default:                      return defaultImage
  }
}

// Función asíncrona para obtener todos los personajes de SWAPI (paginación)
async function fetchAllCharacters() {
  loading.value = true
  let url = 'https://swapi.py4e.com/api/people/'

  while (url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      // Añade los resultados al arreglo
      characters.value.push(...data.results)
      url = data.next // actualiza la URL a la siguiente página
    } catch (err) {
      console.error('Error fetching characters:', err)
      error.value = true
      // Opcional: muestra alerta al usuario
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los personajes.',
      })
      break
    }
  }

  loading.value = false
}

// Al montar el componente, inicia la carga de datos
onMounted(() => {
  fetchAllCharacters()
})
</script>

<style scoped>
/* Contenedor principal de tarjetas, con espacio alrededor */
.cards-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;
  justify-content: center;
}

/* Wrapper para organizar las tarjetas */
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Tarjeta con efecto 3D al pasar el cursor */
.flip-card {
  width: 220px;
  height: 300px;
  perspective: 1000px; 
}

/* Contenedor interno que rota */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Lados de la tarjeta, front y back */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
  border: 2px solid #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 12px #ffc10766;
  background: radial-gradient(circle at top, #1a1a1a, #000);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flip-card-back {
  transform: rotateY(180deg); 
}

/* Imagen del personaje en la tarjeta frontal */
.character-image {
  width: 200px;
  height: 230px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

/* Estilos para títulos y lista de detalles */
.flip-card-front h2,
.flip-card-back h2 {
  margin: 8px 0;
  font-size: 1.1rem;
  color: #ffffff;
}
.flip-card-back ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  text-align: left;
}
.flip-card-back li {
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #ffffff;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .cards-wrapper {
    gap: 12px;
  }
}
</style>
