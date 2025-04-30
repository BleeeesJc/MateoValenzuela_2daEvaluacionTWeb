<template>
  <div class="home-page">
    <!-- Barra de navegación en la parte superior -->
    <Navbar />
    <main class="main-content">
      <!-- Overlay de carga mientras se obtienen los personajes -->
      <div v-if="loading" class="loading-overlay">
        <p>Cargando personajes...</p>
      </div>
      <!-- Mensaje de error si falla la petición -->
      <div v-else-if="error" class="error-message">
        <p>Error al cargar los personajes.</p>
      </div>
      <!-- Una vez cargados sin error, muestra las tarjetas de personajes -->
      <Card v-else :characters="characters" />
    </main>
    <!-- Pie de página en la parte inferior -->
    <Footer />
  </div>
</template>

<script setup>
// Importa reactividad y hooks del ciclo de vida de Vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
// Importa SweetAlert2 para mostrar alertas al usuario
import Swal from 'sweetalert2'
// Importa componentes reutilizables
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/CardCharacters.vue'

// Estado reactivo para la lista de personajes, carga y error
const characters = ref([])
const loading = ref(false)
const error = ref(false)

// Función asíncrona que carga todos los personajes de la API paginada
async function fetchCharacters() {
  loading.value = true
  error.value = false
  let url = 'https://swapi.py4e.com/api/people/'

  // Repite mientras haya siguiente página
  while (url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      characters.value.push(...data.results)
      url = data.next  // siguiente página
    } catch (err) {
      console.error('Error fetching characters:', err)
      error.value = true
      // Muestra alerta de error
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

// Al perder conexión, muestra alerta de advertencia
function handleOffline() {
  Swal.fire({
    icon: 'warning',
    title: 'Desconectado',
    text: 'Parece que has perdido la conexión.',
  })
}

// Al recuperar conexión, muestra alerta de éxito
function handleOnline() {
  Swal.fire({
    icon: 'success',
    title: 'Conectado',
    text: 'Conexión restablecida.',
  })
}

// Al montar el componente: añade listeners y carga datos
onMounted(() => {
  window.addEventListener('offline', handleOffline)
  window.addEventListener('online', handleOnline)
  fetchCharacters()
})

// Antes de desmontar: elimina los listeners
onBeforeUnmount(() => {
  window.removeEventListener('offline', handleOffline)
  window.removeEventListener('online', handleOnline)
})
</script>

<style scoped>
/* Contenedor principal ocupa toda la pantalla con fondo */
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('@/assets/fondo.jpg') no-repeat center center fixed;
  background-size: cover;
}

/* Área principal de contenido con espacio arriba y abajo */
.main-content {
  flex: 1;
  position: relative;
  padding-top: clamp(80px, 8vw, 120px);
  padding-bottom: clamp(40px, 8vw, 50px);
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
  color: #fff;
}

/* Mensaje de error centrado y visible */
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
    background-position: top;
  }
  .main-content {
    padding-top: clamp(200px, 12vw, 200px);
  }
}
</style>
