<script setup>
import { useCharacterStore } from '../stores/character';
import { computed, ref } from 'vue';

const characterStore = useCharacterStore();
const characters = computed(() => characterStore.characters);
const props = defineProps(['selectedCharacter']);
const isModalOpen = ref(true);


const emit  = defineEmits();

function closeModal() {
  emit('close');
}
</script>

<template>
<div class="modal">
    <button @click="closeModal">×</button>
    <div class="content">
        <div class="modal-img">
        <img :src="selectedCharacter.image" alt="Character Image" class="img" />
    </div>
    <div class="specie">
        <h3 class="character-name">{{ selectedCharacter.name }}</h3>
        <div class="span">
            <span class="span-color">Status:  </span><span> {{ selectedCharacter.status }}</span>
        </div>
        <div class="span">
            <span class="span-color">Species:  </span><span class="span-marg">{{ selectedCharacter.species }}</span>
        </div>
        <div class="span">
            <span class="span-color">Type:  </span><span class="span-marg">{{ selectedCharacter.type }}</span>
        </div>
        <div class="span">
            <span class="span-color">Gender:  </span><span class="span-marg">{{ selectedCharacter.gender }}</span>
        </div>
        <div class="span">
            <span class="span-color">Origin:  </span><span class="span-marg">{{ selectedCharacter.origin.name }}</span>
        </div>
        <div class="span">
            <span class="span-color">Location:  </span><span class="span-marg">{{ selectedCharacter.location.name }}</span>
        </div>
        <div class="span">
            <span class="span-color">Created:  </span><span class="span-marg">{{ selectedCharacter.created }}</span>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
    background-color: #e9e8ea;
    width: 600px;
    height: 300px;
    border-radius: 10px;
    margin: auto;
    padding: 12px;
    font-family: 'Preahvihear', sans-serif;
}
button {
    margin-left: 560px;
    border: none;
    background-color: #e9e8ea;
    font-size: 26px; 
}

h3 {
    margin-top: -5px;
    color: rgb(215, 129, 215);
    font-size: 26px;
}
.content {
    display: flex;
    
    
}
.specie {
    margin-left: 9px;
}
.modal-img {
    width: 250px;
}
.img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
.span-color {
    color: #cb88ac;
}
.span-marg {
    margin-left: 5px;
}

</style>