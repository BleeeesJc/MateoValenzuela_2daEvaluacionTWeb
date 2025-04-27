import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '../views/Presentation.vue'
import HomeView   from '../views/HomeView.vue'
import CharactersView  from '../views/CharactersView.vue'

const routes = [
  {
    path: '/',
    name: 'Presentation',
    component: SplashView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/characters',
    name: 'Characters',
    component: CharactersView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
