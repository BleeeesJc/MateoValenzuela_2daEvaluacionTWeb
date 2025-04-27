<template>
  <div class="cards-container">
    <div v-for="char in characters" :key="char.name" class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            :src="getCharacterImage(char.name)"
            alt="Character Image"
            class="character-image"
          />
          <h2>{{ char.name }}</h2>
        </div>

        <div class="flip-card-back">
          <h2>{{ char.name }}</h2>
          <ul>
            <li><strong>Altura:</strong> {{ char.height }} cm</li>
            <li><strong>Peso:</strong> {{ char.mass }} kg</li>
            <li><strong>Genero:</strong> {{ char.gender }}</li>
            <li><strong>Cumpleaños:</strong> {{ char.birth_year }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import defaultImage from '@/assets/default.png'
import lukeImage from '@/assets/LukeSkywalker.jpg'
import obiwanImage from '@/assets/ObiWan.jpg'
import darthvaderImage from '@/assets/Darthvader.jpg'
import anakinImage from '@/assets/Anakinskywalker.jpg'
import leiaImage from '@/assets/Leiaorgana.jpg'
import hanImage from '@/assets/Hansolo.jpg'

const characters = ref([])

async function fetchAllCharacters() {
  let url = 'https://swapi.py4e.com/api/people/'
  while (url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      characters.value.push(...data.results)
      url = data.next
    } catch (err) {
      console.error('Error fetching characters:', err)
      break
    }
  }
}

function getCharacterImage(name) {
  if (name === 'Luke Skywalker') {
    return lukeImage
  } else if (name === 'Obi-Wan Kenobi') {
    return obiwanImage
  } else if (name === 'Darth Vader') {
    return darthvaderImage
  }else if (name === 'Anakin Skywalker') {
    return anakinImage
  }else if (name === 'Leia Organa') {
    return leiaImage
  }else if (name === 'Han Solo') {
    return hanImage
  }else {
    return defaultImage
  }
}

onMounted(() => {
  fetchAllCharacters()
})
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;
  justify-content: center;
  background-color: transparent;
}

.flip-card {
  background-color: transparent;
  width: 220px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 12px #ffc10766;
  background: radial-gradient(circle at top, #1a1a1a, #000000);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.character-image {
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card-front h2, .flip-card-back h2 {
  margin: 8px 0;
  font-size: 1.1rem;
  color: #ffffff;
}

.flip-card-back ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  text-align: left;
}

.flip-card-back li {
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #ffffff;
}
.flip-card-front h2,
.flip-card-back h2,
.flip-card-back li {
  transition: font-size 0.3s ease;
}
</style>
