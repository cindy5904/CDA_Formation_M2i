<script setup>
import { useCharacterStore } from '../stores/character';
import { computed, onMounted, ref } from 'vue';
import Modal from '../components/Modal.vue'

const characterStore = useCharacterStore();
const isModalOpen = ref(false);

const characters = computed(() => characterStore.characters);
const currentPage = computed(() => characterStore.currentPage);

const fetchCharacter = async (page = 1) => {
  await characterStore.fetchCharacters(page);
};
function changePage(page) {
    characterStore.fetchCharacters(page);
  }
  function openModal(characters) {
  characterStore.selectedCharacter = characters;
  characterStore.isModalOpen = true;
}

function closeModal() {
  isModalOpen.value = true;
}

onMounted(fetchCharacter);

</script>

<template>
  <div>
    <div>
      <Modal v-if="characterStore.selectedCharacter" :selectedCharacter="characterStore.selectedCharacter"  @close="closeModal" />
    </div>
    <div class="card">
      <div class="character-card" v-for="character in characters" :key="character.id" @click="openModal(character)">
        <img :src="character.image" alt="Character Image" class="character-image" />
      <div class="character-details">
        <h3 class="character-name">{{ character.name }}</h3>
        <div class="character-species">
          <span class="color-character">Species: </span>
          <span> {{ character.species }}</span>
        </div>  
      </div>
      </div>
    </div>
    <div class="pagination">  
      <button @click="changePage(currentPage - 1)" :disabled="currentPage <=1" class="btn-pagination">Précédent</button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >=42" class="btn-pagination">Suivant</button>
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
  width: 1200px;
}
.character-card {
  border: 1px solid rgb(130, 236, 124);
  border-radius: 10px;
  margin: 20px;
  padding: 8px;
  width: 200px;
  height: 300px;
  box-shadow: 0 0px 20px rgb(130, 236, 124);
  /* background-color: rgb(241, 233, 233); */
  background-color: rgb(56, 107, 56);
  transition: transform 0.3s ease;
}
.character-card:hover {
  transform: scale(1.1);
}
.character-image {
  width: 100%; 
  height: auto;
  border-radius: 10px;
  
}
.character-details {
  display: flex;
  flex-direction: column;
  margin: 12px;
}
.color-character {
  color: rgb(162, 214, 162);
  margin-left: 12px;
  font-size: 16px;
}
h3 {
  text-align: center;
  font-weight: bold;
  font-family: 'roboto', sans-serif;
  color: rgb(43, 239, 43);
  margin-top: -8px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 8px;
}

.btn-pagination {
  padding: 5px 15px 5px 15px;
  background-color: rgb(14, 127, 14);
  color: white;
  border-radius: 12px;
}

.character-species {
  margin-top: -10px;
  text-align: center;
  margin-left: -18px;
}

</style>
