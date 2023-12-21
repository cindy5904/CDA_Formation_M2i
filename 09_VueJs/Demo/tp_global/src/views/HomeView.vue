<script setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <main>
    <div class="nolog" v-if="!authStore.isLoggedIn">
      <div class="home-title">
        <h1>Ceci est la page d'accueil</h1>
        <h2>Vous devez être connecter pour voir notre contenue</h2>
        <h3>Voulez-vous vous</h3>
      </div>
      <div class="gif">
        <img src="../assets/gif.gif" alt="flèche" />
      </div>
      <div class="home-btn">
        <button>
          <RouterLink to="/login" id="color">Connecter</RouterLink>
        </button>
        <button>
          <RouterLink to="/register" id="color">Inscrire</RouterLink>
        </button>
      </div>
    </div>
    <!-- <div>
      <img src="../assets/background-1.png" alt="paysage" width="100%">
    </div> -->
    <div class="container" v-if="authStore.isLoggedIn">
      <h4>Rick et Morty</h4>
      <div id="video-container">
        <video autoplay loop id="video-background">
          <source src="../assets/video.mp4" type="video/mp4" class="vid" />
        </video>
        <div id="video-overlay"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: "fancy horror", sans-serif;
  margin-top: 50px;
  background: linear-gradient(to right, #00ccff, #00ff99);
  -webkit-background-clip: text;
  color: transparent;
}
.home-title,
h2,
h3 {
  color: white;
}

.gif {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.home-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
}
button {
  border: none;
  border-radius: 15px;
  padding: 10px 15px 10px 15px;
  background-color: #00ff99;
}
#color {
  color: white;
  font-size: 25px;
}
button:hover {
  background-color: rgb(9, 34, 9);
  color: white;
}
h4 {
  font-family: "fancy horror", sans-serif;
  background: linear-gradient(to right, #40abc6, #35e66a);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  font-size: 50px;
  margin: 0;
  padding-top: 20px;
}
.container {
  background-image: url("../assets/background-1.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
#video-container {
  position: absolute;
  width: 600px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
.vid {
  border-radius: 20px;
}
#video-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
  border-radius: 20px;
}

#video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 20px;
}

#video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
