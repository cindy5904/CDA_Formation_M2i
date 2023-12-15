<script setup>
import {useGameStore} from "../../store/games";
import {useGAuthStore} from "../../store/auth";

const gamesStore = useGameStore();
const authStore = useGAuthStore();
</script>

<template>
 <h1>Liste des games :</h1>
 <div v-if="gamesStore.games.length>0">

 </div>
</template>

<style scoped>
</style>