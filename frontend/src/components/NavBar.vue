<template>
  <div class="star-wrapper">
    <nav class="container">
      <div class="left">
        <img src="../assets/logostarwars.png" alt="Star Wars Logo" class="logo" />
        <h1 class="title">Star Wars Portal</h1>
      </div>
      <div class="right">
        <RouterLink to="/home" class="nav-button">Inicio</RouterLink>
        <RouterLink to="/characters" class="nav-button characters-button">Personajes</RouterLink>
        <RouterLink to="/planets" class="nav-button planets-button">Planetas</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.star-wrapper {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: url('../assets/estrellas.jpg') repeat;
  background-size: 400px 400px;
  animation: scrollStars 60s linear infinite;
  z-index: 10;
}

@keyframes scrollStars {
  from { background-position: 0 0; }
  to   { background-position: 1000px 0; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  color: #f5f5f5;
}

.left {
  display: flex;
  align-items: center;
}
.logo {
  height: 50px;
  margin-right: 1rem;
  filter: drop-shadow(0 0 8px #ffe81f);
  transition: transform 0.3s ease;
}
.logo:hover {
  transform: scale(1.1);
}
.title {
  font-family: 'Star Jedi V2', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.right {
  display: flex;
  gap: 1rem;
}
.nav-button {
  font-family: Arial, sans-serif;
  padding: 0.5rem 1rem;
  border: 2px solid #fff;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  color: #fff;
  background: transparent;
  text-decoration: none;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
}
.nav-button:hover {
  background: #fff;
  color: #000;
  box-shadow: 0 0 12px #b8a713, 0 0 24px #a59612;
}
.characters-button:hover {
  background: linear-gradient(90deg, blue, red);
  box-shadow: 0 0 60px blue, 0 0 24px red;
}
.planets-button:hover {
  background: linear-gradient(90deg, #0f0, #070);
  box-shadow: 0 0 12px #0f0, 0 0 24px #070;
}

body, #app {
  padding-top: 80px;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
  }
  .left {
    justify-content: center;
  }
  .title {
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }
  .right {
    margin-top: 0.75rem;
    width: 100%;
    justify-content: space-around;
  }
  .nav-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  body, #app {
    padding-top: 160px;
  }
}

@media (max-width: 480px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
  .logo {
    height: 40px;
  }
  .title {
    font-size: 1rem;
  }
  .right {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-button {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
  body, #app {
    padding-top: 200px;
  }
}
</style>
