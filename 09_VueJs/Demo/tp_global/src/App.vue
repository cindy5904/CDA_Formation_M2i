<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
const logout = () => {

  authStore.logout();
  
   
}
</script>

<template>
  <header class="header">
    <div class="nav">
    <ul class="nav-home">
      <img src="./assets/mortyLogo.png" alt="logo morty" width="80">
      <li ><RouterLink to="/" id="color">Accueil</RouterLink></li>
      <li><RouterLink to="/personnages" id="color">Personnages</RouterLink></li>
      <li><RouterLink to="/login" id="color">Connexion</RouterLink></li>
      <li><RouterLink to="/register" id="color">Inscription</RouterLink></li>
      <li v-if="authStore.isLoggedIn">
          <img src="./assets/user.png" alt="Avatar" width="50">
        </li>
        <li v-if="authStore.isLoggedIn" @click="logout" id="no-pad">
          <img src="./assets/log2.png" alt="logo logout" width="80" height="50" class="img-log">
        </li>    
    </ul>
   
  </div>
  </header>
  
  <RouterView />

</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 80px;
}
.nav {
  background-color: rgb(6, 71, 6);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(144, 238, 144, 0.5); 
}
.nav-home {
  display: flex;
  align-items: center;
  gap : 40px;
  margin: 0;
}

img {
  border-radius: 50%;
}
li {
  list-style: none;
  font-size: 18px;
  padding: 10px 0 10px 0;
  
}
#color {
  color: white;
  font-family: 'Roboto', sans-serif;
}

.no-pad {
  padding: 0;
}

.img-log {
  margin-top: 4px;
  margin-left: -30px;
}
</style>
