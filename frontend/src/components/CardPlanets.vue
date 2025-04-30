<template>
  <div class="planet-container">
    <div v-for="planet in planets" :key="planet.name" class="planet-card">
      <img
        :src="getPlanetImage(planet.name)"
        :alt="`Imagen de ${planet.name}`"
        class="planet-image"
      />
      <div class="planet-info">
        <h2>{{ planet.name }}</h2>
        <ul>
          <li><strong>Clima:</strong> {{ planet.climate }}</li>
          <li><strong>Terreno:</strong> {{ planet.terrain }}</li>
          <li><strong>Población:</strong> {{ planet.population }}</li>
          <li><strong>Diámetro:</strong> {{ planet.diameter }} km</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import defaultImage from '@/assets/default.png'
import tatooineImage from '@/assets/Tatooine.jpg'
import hothImage from '@/assets/Hoth.jpg'
import yavinImage from '@/assets/Yavin.jpg'
import alderaanImage from '@/assets/Aldeeran.jpg'
import dagoImage from '@/assets/Dago.jpeg'
import bespinImage from '@/assets/Bespin.jpg'
import endorImage from '@/assets/Endor.jpg'
import nabooImage from '@/assets/Naboo.jpg'

const planets = ref([])

async function fetchAllPlanets() {
  let url = 'https://swapi.py4e.com/api/planets/'
  while (url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      planets.value.push(...data.results)
      url = data.next
    } catch (err) {
      console.error('Error fetching planets:', err)
      break
    }
  }
}

function getPlanetImage(name) {
  if (name === 'Tatooine') {
    return tatooineImage
  } else if (name === 'Hoth') {
    return hothImage
  } else if (name === 'Yavin IV') {
    return yavinImage
  } else if (name === 'Alderaan') {
    return alderaanImage
  } else if (name === 'Dagobah') {
    return dagoImage
  } else if (name === 'Bespin') {
    return bespinImage
  } else if (name === 'Endor') {
    return endorImage
  } else if (name === 'Naboo') {
    return nabooImage
  } else {
    return defaultImage
  }
}

onMounted(() => {
  fetchAllPlanets()
})
</script>

<style scoped>
.planet-container {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 16px;
  justify-content: center;
}

.planet-card {
  display: flex;
  flex-direction: row;
  background: radial-gradient(circle at top left, #1a1a1a, #000);
  border: 2px solid #ffffff33;
  border-radius: 12px;
  box-shadow: 0 0 12px #ffe08566;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.planet-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 16px #ffffff88,
    0 0 32px #006effa4;
}

.planet-image {
  width: 180px;
  height: 205px;
  object-fit: cover;
  flex-shrink: 0;
}

.planet-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.planet-info h2 {
  margin: 0 0 8px;
  font-size: 1.4rem;
  color: #eedb2d;
  font-family: 'Star Jedi V2', sans-serif;
}

.planet-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.planet-info li {
  margin-bottom: 6px;
  font-size: 1.215rem;
  color: #f5f5f5;
}

@media (max-width: 480px) {
  .planet-card {
    flex-direction: column;
    align-items: center;
  }

  .planet-image {
    width: 100%;
    height: auto;
  }

  .planet-info {
    text-align: center;
  }
}
</style>
