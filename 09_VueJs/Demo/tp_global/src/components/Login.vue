<!-- <script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');

const onLogin = async () => {
  await authStore.login({ username: username.value, password: password.value });
  
  if (authStore.isLoggedIn) {
    router.push('/personnages');
  }
};
</script> -->
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');
const emailError = ref('');

const onLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username.value)) {
        emailError.value = '⚠️ Veuillez saisir une adresse e-mail valide.';
        return;
    } else {
        emailError.value = '';
    }

    // Ajoutez d'autres validations si nécessaire

    await authStore.login({ username: username.value, password: password.value });

    if (authStore.isLoggedIn) {
        router.push('/personnages');
    }
};
</script>


<template>
  <!-- <div class="container">
    <div class="card-login">
        <h1>Connexion</h1>
        <form @submit.prevent="onLogin" class="login-form">
        <div class="card-email">
            <label for="username">Email : </label>
            <input v-model="username" type="text" id="username"/>
        </div>
        <div class="card-password">
            <label for="password">Mot de passe : </label>
            <input v-model="password" type="password" id="password"/>
        </div>
        <button type="submit" class="button-card" @click="onLogin">Se connecter</button>
        </form>
     </div>
  </div> -->
  <div class="container">
    <div class="card-login">
        <h1>Connexion</h1>
        <form @submit.prevent="onLogin" class="login-form">
        <div class="card-email">
            <label for="username">Email : </label>
            <input v-model="username" type="text" id="username"/>
            <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>
        <div class="card-password">
            <label for="password">Mot de passe : </label>
            <input v-model="password" type="password" id="password"/>
        </div>
        <button type="submit" class="button-card">Se connecter</button>
        </form>
     </div>
  </div>
</template>

<style scoped>

h1{
    background: linear-gradient(to right, #00ccff, #00ff99); 
    -webkit-background-clip: text;
    color: transparent; 
    margin: 80px;
    font-family: 'fancy horror', sans-serif;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.card-login {
    display: flex;
    flex-direction: column;
    place-items: center;
    border: 1px solid rgb(85, 220, 78);
    border-radius: 10px;
    padding: 0;
    width: 450px;
    height: 450px;
    box-shadow: 0 0px 30px rgba(4, 209, 14, 0.5);
    
}
.card-email {
    display: flex;
    flex-direction: column;
    width: 200px;
}
.card-password {
    display: flex;
    flex-direction: column;
    width: 200px;
}
label {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
}
input {
    margin-top: 3px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 8px;
}
input:focus {
  outline: none; 
  border-color: #00ccff; 
  box-shadow: 0 0 5px #00ff99;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
}

.button-card {
  margin: 15px auto 0px auto;
  text-decoration: none;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  background: linear-gradient(to right, #00ccff, #00ff99); 
  border-radius: 22px;
  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  border: 4px solid #FFFFFF;
  box-shadow: 3px 3px 12px #444444;
  -webkit-box-shadow: 3px 3px 12px #444444;
  -moz-box-shadow: 3px 3px 12px #444444;
}

.button-card:hover {
  padding: 10px;
  box-shadow: 1px 1px 4px #777777;
  -webkit-box-shadow: 1px 1px 4px #777777;
  -moz-box-shadow: 1px 1px 4px #777777;
}



</style>