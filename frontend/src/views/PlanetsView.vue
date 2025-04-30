<template>
  <div class="home-page">
    <!-- Barra de navegación en la parte superior -->
    <Navbar />
    <main class="main-content">
      <!-- Muestra este overlay mientras se cargan los planetas -->
      <div v-if="loading" class="loading-overlay">
        <p>Cargando planetas...</p>
      </div>
      <!-- Muestra este mensaje si ocurre un error al cargar -->
      <div v-else-if="error" class="error-message">
        <p>Error al cargar los planetas.</p>
      </div>
      <!-- Una vez cargados sin error, muestra las tarjetas de planetas -->
      <Card v-else :planets="planets" />
    </main>
    <!-- Pie de página en la parte inferior -->
    <Footer />
  </div>
</template>

<script setup>
// Importa referencias reactivas y hooks del ciclo de vida
import { ref, onMounted, onBeforeUnmount } from 'vue'
// Importa SweetAlert2 para mostrar alertas bonitas
import Swal from 'sweetalert2'
// Importa componentes reutilizables
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/CardPlanets.vue'

// Estado reactivo para planetas, carga y error
const planets = ref([])
const loading = ref(false)
const error = ref(false)

// Función asíncrona que trae todos los planetas de la API paginada
async function fetchPlanets() {
  loading.value = true
  error.value = false
  let url = 'https://swapi.py4e.com/api/planets/'

  // Mientras haya siguiente página, sigue pidiendo datos
  while (url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      planets.value.push(...data.results)
      url = data.next  // actualiza URL a la siguiente página
    } catch (err) {
      console.error('Error fetching planets:', err)
      error.value = true
      // Muestra alerta de error al usuario
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los planetas.',
      })
      break
    }
  }

  loading.value = false
}

// Muestra alerta si se pierde la conexión
function handleOffline() {
  Swal.fire({
    icon: 'warning',
    title: 'Desconectado',
    text: 'Parece que has perdido la conexión.',
  })
}

// Muestra alerta si se recupera la conexión
function handleOnline() {
  Swal.fire({
    icon: 'success',
    title: 'Conectado',
    text: 'Conexión restablecida.',
  })
}

// Al montar el componente, agrega listeners y carga planetas
onMounted(() => {
  window.addEventListener('offline', handleOffline)
  window.addEventListener('online', handleOnline)
  fetchPlanets()
})

// Antes de desmontar, remueve los listeners del window
onBeforeUnmount(() => {
  window.removeEventListener('offline', handleOffline)
  window.removeEventListener('online', handleOnline)
})
</script>

<style scoped>
/* Contenedor principal que ocupa toda la pantalla con fondo fijo */
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('@/assets/fondo.jpg') no-repeat center center fixed;
  background-size: cover;
}
/* Zona principal donde se muestran las cartas o mensajes */
.main-content {
  flex: 1;
  position: relative;
  padding-top: clamp(80px, 8vw, 120px);
}
/* Overlay semitransparente con mensaje de carga */
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
.loading-overlay p {
  font-size: clamp(1rem, 4vw, 1.5rem);
}
/* Mensaje de error centrado */
.error-message {
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 20px;
}
.error-message p {
  font-size: clamp(0.9rem, 3vw, 1.2rem);
}
/* Ajustes para pantallas medianas */
@media (max-width: 768px) {
  .home-page {
    background-attachment: scroll;
  }
  .main-content {
    padding-top: clamp(130px, 10vw, 90px);
    padding-bottom: clamp(40px, 8vw, 50px);
  }
}
/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .home-page {
    background-attachment: scroll;
    background-position: top;
  }
  .main-content {
    padding-top: clamp(200px, 12vw, 200px);
  }
}
</style>
