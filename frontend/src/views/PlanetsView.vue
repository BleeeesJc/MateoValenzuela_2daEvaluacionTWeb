<template>
  <div class="home-page">
    <Navbar />
    <main class="main-content">
      <div v-if="loading" class="loading-overlay">
        <p>Cargando planetas...</p>
      </div>
      <div v-else-if="error" class="error-message">
        <p>Error al cargar los planetas.</p>
      </div>
      <Card v-else :planets="planets" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Swal from 'sweetalert2'
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/CardPlanets.vue'

const planets = ref([])
const loading = ref(false)
const error = ref(false)
async function fetchPlanets() {
  loading.value = true
  error.value = false
  let url = 'https://swapi.py4e.com/api/planets/'

  while (url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      planets.value.push(...data.results)
      url = data.next
    } catch (err) {
      console.error('Error fetching planets:', err)
      error.value = true
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
  fetchPlanets()
})

onBeforeUnmount(() => {
  window.removeEventListener('offline', handleOffline)
  window.removeEventListener('online', handleOnline)
})
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('@/assets/fondo.jpg') no-repeat center center fixed;
  background-size: cover;
}

.main-content {
  flex: 1;
  padding-top: 80px;
  background-color: #0b0b0b;
  color: #fff;
  position: relative;
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
  padding: 20px;
}
</style>
