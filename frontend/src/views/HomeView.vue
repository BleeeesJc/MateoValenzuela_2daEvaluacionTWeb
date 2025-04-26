<template>
  <div class="home bg-black text-white min-h-screen">
    <Navbar />

    <section
      class="hero flex flex-col items-center justify-center text-center py-20 px-6 bg-[url('https://starwars.com/assets/images/home-hero.jpg')] bg-cover bg-center"
    >
      <h1 class="text-6xl md:text-8xl font-extrabold star-wars-title mb-6 text-yellow-500">
        Bienvenido a la Galaxia
      </h1>
      <p class="max-w-2xl text-lg md:text-2xl mb-8 text-gray-300">
        Explora el vasto universo de Star Wars: películas, series, personajes,
        planetas y más.
      </p>
      <button
        class="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition"
      >
        Descubre Más
      </button>
    </section>

    <!-- ¿Qué es Star Wars? -->
    <section class="py-16 px-6 md:px-20 bg-gray-800">
      <h2 class="text-4xl md:text-5xl font-bold star-wars-title mb-6 text-yellow-500">
        ¿Qué es Star Wars?
      </h2>
      <div class="md:flex md:space-x-12">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <p class="text-lg leading-relaxed text-gray-300">
            Star Wars es una saga espacial creada por George Lucas que
            revolucionó el cine con su épica historia de héroes y villanos,
            droides, caballeros Jedi y la Fuerza. Desde 1977 ha enganchado a
            millones de fans en todo el mundo.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img
            src="https://starwars.com/assets/images/characters.jpg"
            alt="Personajes de Star Wars"
            class="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- Línea de tiempo resumida -->
    <section class="bg-gray-900 py-16 px-6 md:px-20">
      <h2 class="text-4xl md:text-5xl font-bold star-wars-title mb-10 text-center text-yellow-500">
        Línea de Tiempo
      </h2>
      <ul class="space-y-8 text-gray-300">
        <li class="md:flex md:items-start md:space-x-6">
          <div class="text-yellow-500 font-bold text-xl md:text-2xl">-32.000 BBY</div>
          <div class="mt-2 md:mt-0 text-lg leading-relaxed">
            Orígenes de los Jedi: los primeros caballeros comienzan a dominar
            la Fuerza y se establecen los primeros Templos.
          </div>
        </li>
        <li class="md:flex md:items-start md:space-x-6">
          <div class="text-yellow-500 font-bold text-xl md:text-2xl">0 BBY</div>
          <div class="mt-2 md:mt-0 text-lg leading-relaxed">
            Batalla de Yavin: Luke Skywalker destruye la Estrella de la Muerte
            marcando un antes y un después en la Rebelión.
          </div>
        </li>
        <li class="md:flex md:items-start md:space-x-6">
          <div class="text-yellow-500 font-bold text-xl md:text-2xl">35 ABY</div>
          <div class="mt-2 md:mt-0 text-lg leading-relaxed">
            Eventos de la serie “The Mandalorian” y el renacer de los Sith en
            nuevas amenazas galácticas.
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

.star-wars-title {
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 4px;
  text-shadow: 0 0 10px yellow, 0 0 20px yellow;
}
.hero button {
  text-shadow: 0 0 5px #000;
}
</style>style scoped>