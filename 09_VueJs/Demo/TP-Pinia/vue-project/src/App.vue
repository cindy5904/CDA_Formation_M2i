<script setup>
import TodoList from './components/TodoList.vue';

</script>

<template>
    <header class="bg p-3 w-100">
    <div class="d-flex justify-content-center align-items-center gap-2">
      <img src="./assets/piiniia.png" alt="logo pinia" >
      <h1 class="fw-bold mt-3 to-do">To Do</h1>
    </div>
    <div>
    </div>
  </header>
 <main>
  <TodoList/>
 </main>
 
  
</template>

<style scoped>
.to-do {
  background: linear-gradient(to right, #ff8a00, #da1b60);
    -webkit-background-clip: text; 
    color: transparent;
}

.bg {
  background-color: blanchedalmond;
}
</style>
