<script setup>
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';
import { useTodoStore } from '../stores/todostore';

const store = useTodoStore();

const { todos } = store;

function addTodo(todo) {
  store.addTodo(todo);
}

function removeTodo(todo) {
  store.removeTodo(todo);
}

function toggleFavorite(todo) {
  store.toggleFavorite(todo);
}

</script>

<template>
   <AddTodo @add-todo="addTodo" />
  <h3 v-if="todos.length" class="mt-4 mb-4 tache"> Liste des tâches : </h3>
  <ul>
    <TodoItem v-for="(todo,index) in todos"
    :key="index"
    :todo="todo"
    :index="index"
    @remove-todo="removeTodo"
    @toggle-favorite="toggleFavorite"
    />
    
  </ul>
 
</template>

<style scoped>
.tache {
  color : #c7b198;
  text-align : center;
}
</style>
