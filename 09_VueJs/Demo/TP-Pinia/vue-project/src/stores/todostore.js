import {ref, computed, reactive} from 'vue';
import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todos', ()=> {
  
  const todos = reactive([]);
  
  const todoForId = computed((todoId)=> todos.find(t => t.id === todoId));

  function addTodo(todo){
    todos.push(todo);
  }
  console.log(todos.value)
  function removeTodo(todoToRemove) {
    todos.splice(todos.indexOf(todoToRemove), 1);
  }
  function toggleFavorite(todo) {
    todo.isFavorite = !todo.isFavorite;
  }

return {todos, todoForId, addTodo, removeTodo, toggleFavorite}

})

