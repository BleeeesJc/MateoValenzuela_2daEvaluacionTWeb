<template>
  <div class="home-page">
    <!-- Barra de navegación en la parte superior -->
    <Navbar />

    <main class="main-content">
      <!-- Sección del carrusel de imágenes/componentes -->
      <section class="carousel-section">
        <Carousel />
      </section>

      <!-- Sección "Sobre la página" con título y párrafo descriptivo -->
      <section class="about-section">
        <h2>Sobre la página</h2>
        <p>
          Bienvenido al Star Wars Portal, tu fuente definitiva de información sobre todo lo relacionado con el universo de Star Wars. En este portal, podrás explorar a fondo los personajes, planetas, naves, especies y muchos más elementos icónicos de la saga. Gracias a la integración con SWAPI (Star Wars API), tendrás acceso a datos detallados sobre los personajes más emblemáticos, sus características, habilidades, y su evolución a lo largo de las películas y series. Además, podrás consultar información sobre los planetas y sistemas estelares, aprendiendo sobre sus geografías, climas, habitantes y mucho más.
          Este portal está diseñado para ofrecerte una experiencia interactiva y dinámica utilizando Vue.js, un poderoso framework de JavaScript. Con Vue, cada sección de la página se actualizará en tiempo real, brindándote una interfaz de usuario fluida y moderna. Ya sea que quieras conocer más sobre un héroe como Luke Skywalker, un villano como Darth Vader, o descubrir los secretos de Tatooine o Coruscant, este portal será tu compañero ideal.
          Explora datos, curiosidades y mucho más: cada personaje tiene su propia página con detalles únicos sobre su historia, habilidades, razas y la influencia que han tenido en la saga. Lo mismo ocurre con los planetas, donde podrás encontrar información clave sobre su ecosistema, historia y los eventos más importantes que han tenido lugar en ellos. Además, mantente al tanto de las últimas noticias y actualizaciones del universo de Star Wars, para que no te pierdas de nada.
          ¡Adéntrate en el universo de Star Wars y disfruta de una experiencia interactiva como nunca antes! May the Force be with you.
        </p>
      </section>

      <!-- Sección de noticias: se repite una tarjeta por cada elemento en newsData -->
      <section class="news-section">
        <div class="news-card" v-for="(news, index) in newsData" :key="index">
          <!-- Imagen de la noticia -->
          <img :src="news.image" :alt="`Noticia ${index + 1}`" class="news-card-image" />
          <!-- Título numerado de la noticia -->
          <h3>Noticia {{ index + 1 }}</h3>
          <!-- Descripción de la noticia -->
          <p>{{ news.description }}</p>
        </div>
      </section>
    </main>

    <!-- Pie de página al final de la vista -->
    <Footer />
  </div>
</template>

<script setup>
// Importa componentes reutilizables
import Navbar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'

// Importa imágenes locales para las noticias
import noticia1 from '@/assets/noticia1.jpg'
import noticia2 from '@/assets/noticia2.jpg'
import noticia3 from '@/assets/noticia3.jpeg'

// Datos de ejemplo para la sección de noticias
const newsData = [
  {
    image: noticia1,
    description: 'Este 25 de abril se celebra el aniversario del estreno de la famosa película *Star Wars: Episodio III - La Venganza de los Sith*. Revive una de las entregas más impactantes de la saga, donde Anakin Skywalker enfrenta su destino final, la caída de la República se sella y los separatistas libran su última batalla contra los Jedi. Un evento que cambió el rumbo de la galaxia para siempre.'
  },
  {
    image: noticia2,
    description: 'La nueva temporada de *The Mandalorian* ha llegado con más acción, nuevos aliados y enemigos inesperados. Acompaña a Din Djarin y Grogu en su travesía a través de los rincones más peligrosos de la galaxia mientras se enfrentan a nuevas amenazas y secretos del legado mandaloriano son revelados.'
  },
  {
    image: noticia3,
    description: '*The Acolyte* promete sumergirnos en una era jamás explorada en el universo de Star Wars: el final de la Alta República. Con una trama llena de intriga oscura y el surgimiento de poderes siniestros, esta nueva serie explorará los orígenes del lado oscuro de la Fuerza y los eventos que pavimentaron el camino para el surgimiento de los Sith.'
  }
]
</script>

<style scoped>
/* Contenedor principal ocupa toda la pantalla y aplica fondo fijo */
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('@/assets/fondo.jpg') no-repeat center center fixed;
  background-size: cover;
}

/* Área principal con padding para separar del Navbar */
.main-content {
  flex: 1;
  padding-top: clamp(60px, 8vw, 100px);
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Ajuste del ancho y márgenes del carrusel */
.carousel-section {
  width: 100%;
  margin: 0;
  padding: 0;
}
.carousel-wrapper {
  width: 100%;
  height: clamp(700px, 50vh, 200px);
  margin: 2rem 0;
}

/* Sección "Sobre la página": fondo semitransparente y bordes redondeados */
.about-section {
  width: clamp(85%, 60%, 80%);
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #f5f5f5;
  text-align: center;
}
.about-section h2 {
  margin-bottom: 1rem;
  font-family: 'Star Jedi V2', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
}
.about-section p {
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
}

/* Diseño de la sección de noticias como grid adaptable */
.news-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem auto 4rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}

/* Tarjeta de noticia: fondo oscuro, borde, sombra y animación hover */
.news-card {
  background: radial-gradient(circle at top left, #1a1a1a, #000);
  border: 2px solid #ffffff33;
  border-radius: 12px;
  box-shadow: 0 0 12px #555;
  padding: 1.5rem;
  color: #f5f5f5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 16px #ffffff, 0 0 32px #006eff88;
}
.news-card h3 {
  margin-top: 0;
  font-family: 'Star Jedi V2', sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.4rem);
  color: #ffe81f;
}
.news-card p {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin: 0.5rem 0 0;
}

/* Imagen dentro de la tarjeta de noticia */
.news-card-image {
  width: 100%;
  height: clamp(150px, 30vh, 300px);
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Responsive: ajustes para pantallas medianas */
@media (max-width: 768px) {
  .about-section {
    width: 90%;
    padding: 1rem;
  }
  .news-section {
    padding: 0 0.5rem;
  }
}

/* Responsive: ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .main-content {
    padding-top: clamp(80px, 12vw, 120px);
  }
  .about-section {
    width: 95%;
    margin: 1.5rem auto;
    padding: 1rem;
  }
  .news-card {
    padding: 1rem;
  }
  .news-card-image {
    height: clamp(120px, 25vh, 200px);
  }
}
</style>
