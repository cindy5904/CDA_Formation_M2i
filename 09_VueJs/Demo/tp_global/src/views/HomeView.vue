<script setup>

</script>

<template>
  <main>
    <div class="home-title">
      <h1>Ceci est la page d'accueil</h1>
      <h2>Vous devez être connecter pour voir notre contenue</h2>
      <h3>Voulez-vous vous </h3>
    </div>
    <div class="gif">
      <img src="../assets/gif.gif" alt="flèche">
    </div>
    <div class="home-btn">
      <button><RouterLink to="/login" id="color">Connecter</RouterLink></button>
      <button><RouterLink to="/register" id="color">Inscrire</RouterLink></button>
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
  font-family: 'fancy horror', sans-serif;
  margin-top: 50px;
  background: linear-gradient(to right, #00ccff, #00ff99); 
    -webkit-background-clip: text;
    color: transparent; 
}
.home-title, h2, h3 {
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

</style>
