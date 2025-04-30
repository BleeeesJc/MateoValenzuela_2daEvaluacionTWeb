// Importa la función para crear una aplicación Vue
import { createApp } from 'vue'
// Importa Pinia, que es el sistema de gestión de estado
import { createPinia } from 'pinia'
// Importa el componente principal de la app
import App from './App.vue'
// Importa el sistema de rutas
import router from './router'
// Crea la aplicación Vue con el componente App como raíz
const app = createApp(App)
// Usa Pinia para manejar el estado global de la app
app.use(createPinia())
// Usa el router para la navegación entre vistas
app.use(router)
// Monta la aplicación en el elemento con id 'app' del HTML
app.mount('#app')
