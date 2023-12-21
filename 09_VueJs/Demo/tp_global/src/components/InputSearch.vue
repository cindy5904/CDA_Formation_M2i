<script setup>
import { ref, watch } from 'vue';
import { useCharacterStore } from '../stores/character';

const isFormVisible = ref(false);
const characterStore = useCharacterStore();

const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};

const filters = [{"id":1,"name":"status","subFilters":["Alive","unknown","Dead"]},{"id":2,"name":"species","subFilters":["Human","Alien","Humanoid","unknown","Poopybutthole","Mythological Creature","Animal","Robot","Cronenberg","Disease"]},{"id":3,"name":"type","subFilters":["Genetic experiment","Superhuman (Ghost trains summoner)","Parasite","Human with antennae","Human with ants in his eyes","Fish-Person","Cromulon","Self-aware arm","Cat-Person","Human with baby legs","Bepisian","Hivemind","Mytholog","Human with giant head","Dog","Bird-Person","Korblock","Boobloosian","Elephant-Person","Superhuman","Gromflomite","Centaur","Organic gun","Microverse inhabitant","Vampire","Light bulb-Alien","Animal","Robot-Crocodile hybrid","Zigerion","Giant","Cone-nippled alien","Demon","Shapeshifter","Game","Amoeba-Person","Cronenberg","Clone","Robot","Interdimensional gaseous being","Flansian","Zombodian","Garblovian","Gazorpian","Eat shiter-Person","Goddess","Gazorpian reproduction robot","Hammerhead-Person","Hole","Tuskfish","Alphabetrian","Cat","Time God","Unknown-nippled alien","Krootabulan","Plutonian","Jellybean","Tentacle alien","Miniverse inhabitant","Cyborg","Larva alien","Snail alien","Tinymouth","Lizard-Person","Alligator-Person","Monster","Conjoined twin","Sentient ant colony","Human Gazorpian","Boobie buyer reptilian","Meeseeks","The Devil","Cat controlled dead lady","Numbericon","Octopus-Person","Hairy alien","Pickle","Bread","Mega Gargantuan","Rat","Gear-Person","Blue ape alien","Ring-nippled alien","Lobster-Alien","Scrotian","Shimshamian","Omniscient being","Slug","Stair goblin","Leprechaun","Morty's toxic side","Rick's toxic side","Traflorkian","Teenyverse inhabitant","Trunk-Person","Tumblorkian","Chair","Drumbloxian","Floop Floopian","Greebybobe","Corn-person","Phone-Person","Teddy Bear","Little Human","Mexican","Giant Cat Monster","Old Amazons","Mannie","Necrophiliac","Eel","Pizza","Grandma","Phone","Doopidoo","Pripudlian","Nano Alien","Human with a flower in his head","Hologram","Shrimp","Caterpillar","Wasp","Toy","Monogatron","Lizard","Fly","God","Dummy","Human with tusks","Gramuflackian","Dragon","Snake","Human-Snake hybrid","Soulless Puppet","Half Soulless Puppet","Glorzo","Planet","Zeus","Clay-Person","Sexy Aquaman","Narnian","Starfish","Squid","Decoy","Whenwolf","Summon","Morglutzian","Weasel","Super Sperm Monster","CHUD","Giant Incest Baby","CHUD Human Mix","Changeformer","Artificial Intelligence","Guinea Pig for the Polio Vaccine","Turkey","Turkey Human Mix","Anime","Memory","Bird-Person Human Mix","Crow","Cookie","Normal Size Bug","Slartivartian","Ferkusian","Mascot","Scarecrow","Tiger","Crow Horse","Ferret Robot","Passing Butter Robot"]},{"id":4,"name":"gender","subFilters":["Male","Female","unknown","Genderless"]}]

const applyFilters = async (page) => {
  await characterStore.filterCharacters(page, selectedFilters.value.name, selectedFilters.value.status, selectedFilters.value.species, selectedFilters.value.gender, selectedFilters.value.type);
};
const selectedFilters = ref({
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
});


watch(() => isFormVisible.value, () => {
  
  if (isFormVisible.value) {
    applyFilters();
  }
});
</script>

<template>
  <div class="container">
    <div class="img-filter" @click="toggleForm">
      <img src="../assets/filt.png" alt="icone filtre">
    </div>
    <form action="" v-if="isFormVisible" @click.prevent="applyFilters(1)">
      <input type="text" placeholder="Search by Name..." class="search-input">
      <div class="container-filtre">
        <div class="section1">
            <div class="content">
                <div class="label">
                <label for="status">Status:</label>
                </div>
                <div class="select">
                    <select id="status" name="status" class="form-input status" v-model="selectedFilters.status">
                    <option v-if="filters" v-for="filter in filters.find(f => f.name === 'status').subFilters" :key="filter">{{ filter }}</option>
                    </select>
                </div>
            </div>

            <div class="content">
                <div class="label">
                <label for="species">Species:</label>
                </div>
                <div class="select">
                    <select id="species" name="species" class="form-input species" v-model="selectedFilters.species">
                    <option v-if="filters" v-for="filter in filters.find(f => f.name === 'species').subFilters" :key="filter">{{ filter }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="section2">
            <div class="content">
                <div class="label">
                    <label for="type">Type:</label>
                 </div>
            
                <div class="select">
                    <select id="type" name="type" class="form-input type" v-model="selectedFilters.type">
                    <option v-if="filters" v-for="filter in filters.find(f => f.name === 'type').subFilters" :key="filter">{{ filter }}</option>
                    </select>
                </div>
            </div>

            <div class="content">
                <div class="label">
                <label for="gender">Gender:</label>
                </div>
                <div class="select">
                    <select id="gender" name="gender" class="form-input gender" v-model="selectedFilters.gender">
                <option v-if="filters" v-for="filter in filters.find(f => f.name === 'gender').subFilters" :key="filter">{{ filter }}</option>
                </select>
                </div>
            </div>
        </div>
        </div>
    </form>
  </div>
</template>

<style scoped>
.container {
    margin-top: 25px;
    text-align: center;
}
img {
    width: 50px;
}
.search-input {
    border-radius: 10px;
    padding: 12px;
    width: 350px;
}
.search-input:focus {
    outline: none;
}
.container-filtre {
    padding-top: 15px;
    display: flex;
    justify-content: space-between; 
    justify-content: center;
    background-color: white;
    width: 600px;
    margin: auto;
    height: 150px;
    border-radius: 15px;
  }
  .section1, .section2 {
    display: flex;
    flex-direction: column;
  }
  .content {
    display: flex;
    margin-bottom: 15px;
  }
  .section1, .section2 label {
    margin-right: 15px; 
  }
  label {
    color: rgb(35, 90, 35);
  }
  .form-input {
    border: none;
    width: 200px;
}
  .type {
    margin-left: 25px;
  }
  .gender {
    margin-left: 8px;
  }
  .species {
    margin-left: -10px;
  }
.form-input:focus {
    outline: none;
}
</style>