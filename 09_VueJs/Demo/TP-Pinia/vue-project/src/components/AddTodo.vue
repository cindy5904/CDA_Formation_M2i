<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todostore'; 
import { v4 as uuidv4 } from 'uuid';

const store = useTodoStore();
const newTodoText = ref('');

function emitAddTodo() {
  const newTodo = { id: uuidv4(), text: newTodoText.value };
  store.addTodo(newTodo);
  newTodoText.value = '';
}
</script>

<template>
   <div class="d-flex align-items-center justify-content-center mx-auto pt-5 w-50 input">
    <input type="text" placeholder="Saisir une tache" class="form-control mx-2 w-50" v-model="newTodoText" @keyup.enter="emitAddTodo">
    <button class="btn btn-warning" @click="emitAddTodo()">Add</button>
  </div>
  
</template>

<style scoped>
.input {
  place-items: center;
}
</style>