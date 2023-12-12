<script setup>
import {ref, defineEmits} from 'vue';

const NewUser = ref({
  name: '',
  email: '',
});
const emit = defineEmits(['add-user']);

function emitAddUser() {
  emit('add-user', { name: NewUser.value.name, email: NewUser.value.email });
  NewUser.value.name = '';
  NewUser.value.email = '';
}


</script>

<template>
<div class="d-flex flex-column gap-3">
    <input type="text" placeholder="Saisir votre nom" class="form-control mx-2" v-model="NewUser.name" />
    <input type="email" placeholder="Veuillez saisir votre email" class="form-control mx-2" required v-model="NewUser.email" />
    <button class="btn btn-primary" @click="emitAddUser" type="submit">Add</button>
  </div>
</template>

<style scoped>

</style>
