import { ref, computed } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useCharacterStore = defineStore('character', () => {
  const characters = ref([]);
  const pageInfo = ref({});
  const currentPage = ref(1);
  let selectedCharacter = ref();
  const isModalOpen = ref(false);
  let filteredCharacters = [];
  const getCharacterById = computed(() => (characterId) => {
    return characters.value.find(character => character.id === characterId);
  });

  
  async function fetchCharacters(page = 1) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      characters.value = response.data.results;
      currentPage.value = page;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
    
  }
  const filterCharacters = async (page, name, status, species, gender, type) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}&type=${type}`);
      characters.value = response.data.results;
    } catch (error) {
      console.error('Erreur lors du filtrage des personnages :', error);
    }
  };

  
  return { characters, getCharacterById, pageInfo, currentPage, fetchCharacters, selectedCharacter, isModalOpen, filterCharacters, filteredCharacters  };
});

