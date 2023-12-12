<script setup>
import {ref} from 'vue';
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);

const addTodo = newTodoText => {
  todos.value.push({text: newTodoText})
}

const removeTodo = index => {
  todos.value.splice(index,1)
}

const updateTodo = (index) => {
  const newTodoText = prompt('Entrer une tâche')
  
  todos.value.splice(index, 1, {text: newTodoText});
  console.log(newTodoText);
}
</script>

<template>
  

<div>
  <AddTodo @add-todo="addTodo" />
  <h3 v-if="todos.length" class="mt-4"> Liste des tâches : </h3>
  <ul>
    <TodoItem v-for="(todo,index) in todos"
    :key="index"
    :todo="todo"
    :index="index"
    :text="text"
    @remove-todo="removeTodo"
    @update-todo="updateTodo"/>
    
  </ul>

</div>


</template>

<style scoped>

</style>
