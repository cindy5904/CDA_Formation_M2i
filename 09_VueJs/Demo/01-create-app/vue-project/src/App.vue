<!-- <script setup>
import {ref} from 'vue';

let title = ref("hello");
function revers() {
        title.value = title.value.split('').reverse().join('');
      }
function ajout() {
  title.value += ' !';
}
function alerte() {
  if (title.value) {
    alert(title.value);
  }
}
</script>

<template>
  <h1>{{ title }}</h1><br>
  <button @click="revers">bouton1</button>
  <button @click="ajout">bouton2</button>
  <a href="#" @click.prevent="alerte">clique</a>
</template>

<style scoped>

</style> -->

<!-- <script setup>
import {ref} from 'vue';
let entier = ref([1, 2 , 3, 4, 5, 6]);
let toggleList = ref(false);

const ajoutElement = () => {
  entier.value.push(entier.value.length + 1);
};
const supprimeElement = () => {
   entier.value.pop();
  
};
const inverseList = () => {
  entier.value.reverse();
}
console.log(entier);
</script>
<template>
<button @click="toggleList = !toggleList;">Toggle Liste</button>
<button @click="ajoutElement">Ajouter élément</button>
<button @click="supprimeElement">Supprimer élément</button>
<button @click="inverseList">Inverser la liste</button>

<div v-if="toggleList">
  <p>{{ entier}}</p>
</div>
<div v-else>
  <p>Ici il y a un tableau caché</p>
</div>
<div v-if="entier.length === 0">
  <p>oh la la le tableau est vide 😨</p>
</div>


</template>
<style scoped>

</style> -->
<!-- Rappel: les classes et le style inline supportent les objets et les tableaux

1. Créer un template avec 2 élément `p`
2. Le premier `p` devra passer de noir à rouge au click à l'aide d'une classe (toggle)
3. Le second `p` devra passer de rouge à bleu au click en utilisant le style inline -->
<!-- <script setup>
import  {ref, computed, reactive} from 'vue';

let isSelected = ref(false);
let isActive = ref(false);

let classes = computed(() => {
  return { "selected": isSelected.value}
});

let classe = computed(() => isActive.value ? "blue" : "red");
</script>

<template>
  <div>
    <p @click="isSelected = !isSelected" :class="classes">Hello world!</p>
  </div>
  <div>
    <p @click="isActive = !isActive" :style="{color: classe}">Bonjour!</p>
  </div>  
</template>

<style scoped>
  .selected {
    color : red;
  } 
</style> -->

<!-- <script setup>
import {reactive, ref, onBeforeMount, onUpdated} from 'vue'; 

let newTodo = "";

let todos = reactive([{ nom: "Tâche 1", fait : false }, { nom: "Tâche 2", fait : true}]);

const ajouterTodo = () => {
        todos.push({ nom: newTodo, fait: false });
        newTodo = "";
        // sauvegardeTodo();
};
const faitTodo = (index) => {
  todos[index].fait = !todos[index].fait;
  // sauvegardeTodo();
}
onBeforeMount(() => {
  if ('todos' in localStorage) {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
})

onUpdated(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
})
</script>
<template>
<form @submit.prevent="ajouterTodo">
  <label for="newTodo">Ajouter un todo :</label>
  <input v-model="newTodo" type="text">
  <button type="submit">Ajouter</button>
  <div>
    <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox"  @click="faitTodo(index)">
      <span :class="{ fait: todo.fait}">{{ todo.nom }}</span>
      
    </li>
  </ul>
  </div>
</form>

</template>
<style scoped>
</style> -->

<!-- <script setup>
import {ref, reactive, watchEffect} from 'vue';
let id = ref(10);
let data = ref[('')];
let error = ref(null);

watchEffect(async () => {
  try {
    // console.log(id.value);
    const base_url = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
  data.value = await base_url.json();
  } catch(e) {
    error.value = e;
  }
})
console.log(data.name);


</script>
<template>
<div v-for="pokemon in data < 12">
   <h1>{{ pokemon.id }}</h1>
   <h2>{{ pokemon.name }}</h2>
   
    <img :src="data.sprites.front_shiny" alt= '`{{ data.name }}`' />          
</div>
          

</template>
<style scoped>
</style> -->

<!-- <script setup>
import { ref, watchEffect } from 'vue';

const numberOfPokemons = 12;
const pokemons = ref([]);
const error = ref(null);

watchEffect(async () => {
  try {
    const pokemonPromises = Array.from({ length: numberOfPokemons }, (_, index) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then(response => response.json())
    );

    pokemons.value = await Promise.all(pokemonPromises);
  } catch (e) {
    error.value = e;
  }
});

</script>

<template>
  <div class="card-container">
    <div v-for="pokemon in pokemons" :key="pokemon.id" class="card">
      <img :src="pokemon.sprites.front_shiny" :alt="pokemon.name" />
      <h1>{{ pokemon.name }}</h1>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
}

h1 {
  color: #333;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style> -->
<script setup>
import TodoList from './components/TodoList.vue';
</script>

<template>
  

<div>
<h1>Saisir des tâches : </h1>
<TodoList/>
</div>


</template>

<style scoped>

</style>