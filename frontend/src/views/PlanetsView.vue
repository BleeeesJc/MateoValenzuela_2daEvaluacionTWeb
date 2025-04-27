<template>
    <div class="home-page">
      <Navbar />
  
      <main class="main-content">
        <Card />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  import Card from '@/components/CardPlanets.vue'
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
  }
  </style>
  