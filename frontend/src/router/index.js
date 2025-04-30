import { createRouter, createWebHistory } from 'vue-router'
// Importa las vistas principales
import SplashView from '../views/Presentation.vue'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import PlanetsView from '@/views/PlanetsView.vue'

// Definimos las rutas de la aplicación
const routes = [
  {
    path: '/',            // Ruta raíz
    name: 'Presentation',  // Nombre de la ruta
    component: SplashView  // Componente que se renderiza
  },
  {
    path: '/home',        // Ruta para la página principal
    name: 'Home',         // Nombre de la ruta
    component: HomeView   // Componente HomeView.vue
  },
  {
    path: '/characters',     // Ruta para ver personajes
    name: 'Characters',      // Nombre de la ruta
    component: CharactersView// Componente CharactersView.vue
  },
  {
    path: '/planets',        // Ruta para ver planetas
    name: 'Planets',         // Nombre de la ruta
    component: PlanetsView   // Componente PlanetsView.vue
  }
]

// Creamos el router con historial basado en el Web History API
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes // Array de rutas definido arriba
})

// Exportamos el router para usarlo en la aplicación
export default router
