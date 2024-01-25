<script setup>
import { useCharacterStore } from "../stores/character";
import { computed, onMounted, ref } from "vue";
import Modal from "../components/Modal.vue";
import InputSearch from "../components/InputSearch.vue";

const characterStore = useCharacterStore();

const isModalOpen = computed(() => characterStore.isModalOpen);
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
  characterStore.isModalOpen = !characterStore.isModalOpen;
  characterStore.selectedCharacter = "";
}

onMounted(fetchCharacter);
</script>

<template>
  <InputSearch />
  <div>
    <div>
      <Modal
        v-if="characterStore.selectedCharacter"
        :selectedCharacter="characterStore.selectedCharacter"
        @close="closeModal"
      />
    </div>
    <div class="card">
      <div
        class="character-card"
        v-for="character in characters"
        :key="character.id"
        @click="openModal(character)"
      >
        <img
          :src="character.image"
          alt="Character Image"
          class="character-image"
        />
        <div class="character-details">
          <h3 class="character-name">{{ character.name }}</h3>
          <div class="character-species">
            <span class="color-character">Species: </span>
            <span class="text-character"> {{ character.species }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="pagination">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage <= 1"
        class="btn-pagination"
      >
        Précédent
      </button>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage >= 42"
        class="btn-pagination"
      >
        Suivant
      </button>
    </div> -->
    <div class="pagination">
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage <= 1"
      class="btn-pagination"
    >
      ←
    </button>
    <span class="pageactuelle">{{ currentPage }}</span>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage >= 42"
      class="btn-pagination"
    >
      →
    </button>
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
  margin: 15px 15px;
  padding-top: 10px;
}
.character-card {
  border: 1px solid rgb(108, 202, 217);
  border-radius: 10px;
  margin: 20px;
  padding: 8px;
  width: 230px;
  height: 350px;
  box-shadow: 0 0px 20px rgb(96, 171, 222);
  /* background-color: rgb(241, 233, 233); */
  background-color: #3f6472;
  transition: transform 0.3s ease;
  font-family: 'Preahvihear', sans-serif;
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
  color: #cb88ac;
  margin-left: 12px;
  font-size: 16px;
}
.text-character{
  color: white;
}
h3 {
  text-align: center;
  font-weight: bold;
  font-family: "roboto", sans-serif;
  color: rgb(158, 173, 185);
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
  background-color: rgb(88, 99, 142);
  color: white;
  border-radius: 12px;
}

.character-species {
  margin-top: -10px;
  text-align: center;
  margin-left: -18px;
}
.pageactuelle {
  color: white;
}
</style>
