<template>
  <div class="cards-container">
    <div v-if="loading" class="loading-overlay">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error" class="error-message">
      <p>Error al cargar personajes.</p>
    </div>
    <div v-else class="cards-wrapper">
      <div
        v-for="char in characters"
        :key="char.name"
        class="flip-card"
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              :src="getCharacterImage(char.name)"
              alt="Character Image"
              class="character-image"
            />
            <h2>{{ char.name }}</h2>
          </div>

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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Swal from 'sweetalert2'
import defaultImage from '@/assets/default.png'
import lukeImage from '@/assets/LukeSkywalker.jpg'
import obiwanImage from '@/assets/ObiWan.jpg'
import darthvaderImage from '@/assets/Darthvader.jpg'
import anakinImage from '@/assets/Anakinskywalker.jpg'
import leiaImage from '@/assets/Leiaorgana.jpg'
import hanImage from '@/assets/Hansolo.jpg'

const characters = ref([])
const loading = ref(false)
const error = ref(false)

async function fetchAllCharacters() {
  loading.value = true
  error.value = false
  let url = 'https://swapi.py4e.com/api/people/'

  while (url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json()
      characters.value.push(...data.results)
      url = data.next
    } catch (err) {
      console.error('Error fetching characters:', err)
      error.value = true
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

function getCharacterImage(name) {
  switch (name) {
    case 'Luke Skywalker':
      return lukeImage
    case 'Obi-Wan Kenobi':
      return obiwanImage
    case 'Darth Vader':
      return darthvaderImage
    case 'Anakin Skywalker':
      return anakinImage
    case 'Leia Organa':
      return leiaImage
    case 'Han Solo':
      return hanImage
    default:
      return defaultImage
  }
}

function handleOffline() {
  Swal.fire({
    icon: 'warning',
    title: 'Desconectado',
    text: 'Parece que has perdido la conexión.',
  })
}

function handleOnline() {
  Swal.fire({
    icon: 'success',
    title: 'Conectado',
    text: 'Conexión restablecida.',
  })
}

onMounted(() => {
  window.addEventListener('offline', handleOffline)
  window.addEventListener('online', handleOnline)
  fetchAllCharacters()
})

onBeforeUnmount(() => {
  window.removeEventListener('offline', handleOffline)
  window.removeEventListener('online', handleOnline)
})
</script>

<style scoped>
.cards-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;
  justify-content: center;
  background-color: transparent;
}
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.error-message {
  width: 100%;
  text-align: center;
  color: #fff;
}

.flip-card {
  background-color: transparent;
  width: 220px;
  height: 300px;
  perspective: 1000px;
}

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

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 12px #ffc10766;
  background: radial-gradient(circle at top, #1a1a1a, #000000);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.character-image {
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.flip-card-back {
  transform: rotateY(180deg);
}

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

.flip-card-front h2,
.flip-card-back h2,
.flip-card-back li {
  transition: font-size 0.3s ease;
}
</style>
