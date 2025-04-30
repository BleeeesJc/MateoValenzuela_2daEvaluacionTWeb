<template>
  <div class="home-page">
    <Navbar />
    <main class="main-content">
      <div v-if="loading" class="loading-overlay">
        <p>Cargando personajes...</p>
      </div>
      <div v-else-if="error" class="error-message">
        <p>Error al cargar los personajes.</p>
      </div>
      <Card v-else :characters="characters" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Swal from 'sweetalert2'
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/CardCharacters.vue'

const characters = ref([])
const loading = ref(false)
const error = ref(false)

async function fetchCharacters() {
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
  fetchCharacters()
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
  position: relative;
  padding-top: clamp(80px, 8vw, 120px);
  padding-bottom: clamp(40px, 8vw, 50px);
}

@media (max-width: 768px) {
  .home-page {
    background-attachment: scroll;
  }
}

@media (max-width: 480px) {
  .home-page {
    background-position: top;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding-top: clamp(130px, 10vw, 90px);
    padding-bottom: clamp(40px, 8vw, 50px);
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-top: clamp(200px, 12vw, 200px);
  }
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
.loading-overlay p {
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: #fff;
}

.error-message {
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 20px;
}
.error-message p {
  font-size: clamp(0.9rem, 3vw, 1.2rem);
}
</style>
