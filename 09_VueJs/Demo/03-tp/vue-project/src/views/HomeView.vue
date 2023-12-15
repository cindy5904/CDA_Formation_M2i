<script setup>
import { inject } from 'vue';

const {contacts} = inject('contacts');
</script>

<template>
<div class="card" v-for="contact of contacts" :key="contact.id">
    <h4>{{ contact.name }}</h4>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
    <button>Cliquez pour plus de détails</button>
</div>
</template>

<style scoped>

</style>