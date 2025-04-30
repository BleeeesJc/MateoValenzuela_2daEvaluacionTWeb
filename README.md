# Star Wars Portal

## 📙 Descripción

Este portal integra datos de la Star Wars API (SWAPI) para ofrecer información detallada sobre:

- **Personajes:** Altura, peso, género, año de nacimiento y más.
- **Planetas:** Clima, terreno, población, diámetro y características geográficas.
- **Carousel inicial:** Frases icónicas y animaciones de fondo espacial.
- **Navegación fluida:** Rutas Vue Router para `Home`, `Characters`, `Planets` y páginas informativas.
- **Diseño responsive:** Adaptable desde pantallas grandes hasta dispositivos móviles, usando CSS Grid, Flexbox y `clamp()` para tamaños fluidos.
- **Notificaciones:** Manejo de estados `online`/`offline` y errores con SweetAlert2.

## 🚀 Tecnologías

- **Framework:** Vue.js 3 (Composition API, `<script setup>`).
- **Enrutamiento:** Vue Router.
- **API:** SWAPI (Star Wars API).
- **Alertas:** SweetAlert2.
- **Estilos:** CSS puro (Grid, Flexbox, animaciones con `@keyframes`).
- **Bundler:** Vite.

## 🗂️ Estructura del proyecto

```text
src/
├─ assets/           # Imágenes y recursos estáticos (fondos, logos, slides)
├─ components/       # Componentes reutilizables
│  ├─ Navbar.vue
│  ├─ Footer.vue
│  ├─ Carousel.vue
│  ├─ CardCharacters.vue
│  ├─ CardPlanets.vue
│  └─ LoadingOverlay.vue
├─ views/            # Vistas asociadas a rutas
│  ├─ Landing.vue
│  ├─ Home.vue
│  ├─ Characters.vue
│  └─ Planets.vue
├─ App.vue           # Componente raíz
└─ main.js           # Punto de entrada, configuración de Vue y Router
```
## ✨ Autor

- **Mateo Valenzuela**


