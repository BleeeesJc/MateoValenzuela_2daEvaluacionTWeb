<template>
  <!-- Contenedor principal que agrupa todas las tarjetas de planetas -->
  <div class="planet-container">
    <!-- Recorre la lista de planetas y crea una tarjeta por cada uno -->
    <div
      v-for="planet in planets"
      :key="planet.name"
      class="planet-card"
    >
      <!-- Imagen del planeta: usa una función para elegir la imagen correcta -->
      <img
        :src="getPlanetImage(planet.name)"
        :alt="`Imagen de ${planet.name}`"
        class="planet-image"
      />
      <!-- Información del planeta: nombre y lista de datos -->
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

// Importa imágenes locales de cada planeta o un placeholder genérico
import defaultImage from '@/assets/default.png'
import tatooineImage from '@/assets/Tatooine.jpg'
import hothImage from '@/assets/Hoth.jpg'
import yavinImage from '@/assets/Yavin.jpg'
import alderaanImage from '@/assets/Aldeeran.jpg'
import dagoImage from '@/assets/Dago.jpeg'
import bespinImage from '@/assets/Bespin.jpg'
import endorImage from '@/assets/Endor.jpg'
import nabooImage from '@/assets/Naboo.jpg'

// Reactive ref para almacenar la lista de planetas
const planets = ref([])

// Función para traer todos los planetas de la API paginada
async function fetchAllPlanets() {
  let url = 'https://swapi.py4e.com/api/planets/'
  // Mientras exista una URL de siguiente página, seguimos pidiendo datos
  while (url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      // Añade los resultados al array reactivo
      planets.value.push(...data.results)
      // Actualiza la URL para la siguiente página (o null si ya no hay más)
      url = data.next
    } catch (err) {
      console.error('Error fetching planets:', err)
      break
    }
  }
}
// Función que, según el nombre del planeta, devuelve la ruta de la imagen correspondiente
function getPlanetImage(name) {
  switch (name) {
    case 'Tatooine':    return tatooineImage
    case 'Hoth':        return hothImage
    case 'Yavin IV':    return yavinImage
    case 'Alderaan':    return alderaanImage
    case 'Dagobah':     return dagoImage
    case 'Bespin':      return bespinImage
    case 'Endor':       return endorImage
    case 'Naboo':       return nabooImage
    default:            return defaultImage
  }
}

// Cuando el componente se monte, dispara la carga de planetas
onMounted(() => {
  fetchAllPlanets()
})
</script>

<style scoped>
/* Contenedor flexible que adapta las tarjetas según el ancho */
.planet-container {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 16px;
  justify-content: center;
}

/* Estilo de cada tarjeta: fondo oscuro con borde y sombra */
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

/* Al pasar el ratón, eleva la tarjeta y cambia la sombra */
.planet-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 16px #ffffff88,
    0 0 32px #006effa4;
}

/* Imagen del planeta: tamaño fijo y recorte adecuado */
.planet-image {
  width: 180px;
  height: 205px;
  object-fit: cover;
  flex-shrink: 0;
}

/* Contenedor de texto: centrado verticalmente */
.planet-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Título con tipografía estilo Star Wars */
.planet-info h2 {
  margin: 0 0 8px;
  font-size: 1.4rem;
  color: #eedb2d;
  font-family: 'Star Jedi V2', sans-serif;
}

/* Lista sin viñetas ni márgenes internos */
.planet-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Cada elemento de la lista con espaciado y tamaño de letra */
.planet-info li {
  margin-bottom: 6px;
  font-size: 1.215rem;
  color: #f5f5f5;
}

/* Ajustes para pantallas pequeñas: tarjetas en columna y texto centrado */
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
