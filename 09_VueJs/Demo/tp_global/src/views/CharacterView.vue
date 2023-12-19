<script setup>
import { useCharacterStore } from '../stores/character';
import { computed, onMounted } from 'vue';

const characterStore = useCharacterStore();

const characters = computed(() => characterStore.characters);
const fetchCharacter = async () => {
  if (!characters.value.length) {
    await characterStore.fetchCharacters();
  }
};
onMounted(fetchCharacter);

</script>

<template>
  <div class="card">
    <div class="character-card" v-for="character in characters" :key="character.id">
      <img :src="character.image" alt="Character Image" class="character-image" />
      <div class="character-details">
        <h3 class="character-name">{{ character.name }}</h3>
        <div class="character-species">
          <span class="color-character">Species: </span>
          <span>{{ character.species }}</span>
        </div>  
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
  padding-top: 10px;
}
.character-card {
  border: 1px solid rgb(7, 67, 4);
  border-radius: 10px;
  margin: 20px;
  width: 250px;
  height: 350px;
  box-shadow: 0 0px 30px rgba(4, 209, 14, 0.5);
  background-color: rgb(241, 233, 233);
  transition: transform 0.3s ease;
}
.character-car:hover {
  transform: scale(1.1);
}
.character-image {
  width: 100%; 
  height: 200px;
  margin-right: 10px;
  border-radius: 10px 10px 0px 0px;
  
}
.character-details {
  display: flex;
  flex-direction: column;
  margin: 12px;
}
.color-character {
  color: rgb(14, 127, 14);
  margin-left: 12px;
  font-size: 16px;
}
h3 {
  text-align: center;
  font-weight: bold;
  font-family: 'roboto', sans-serif;
  color: rgb(43, 239, 43);
}
</style>
