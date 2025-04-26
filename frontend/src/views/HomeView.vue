<template>
  <div class="home-page">
    <Navbar />

    <main class="main-content">
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Carousel from '@/components/Carousel.vue'
</script>

<style scoped>

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
