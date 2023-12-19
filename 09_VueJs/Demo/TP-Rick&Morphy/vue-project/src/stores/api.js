import { ref, computed } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useRickAndMortyStore = defineStore('rickAndMorty', () => {
  const characters = ref([]);

  
  const getCharacterById = computed(() => (characterId) => {
    return characters.value.find(character => character.id === characterId);
  });

  
  async function fetchCharacters() {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      characters.value = response.data.results;
    } catch (error) {
      console.error('Erreur lors de la récupération des  données:', error);
    }
  }

  return { characters, getCharacterById, fetchCharacters };
});


