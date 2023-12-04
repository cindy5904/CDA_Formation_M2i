const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function mapPokemon(data) {
    return {
        name: data.name.substring(0, 1).toUpperCase() + data.name.substring(1).toLowerCase(),  
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name),
        abilities: data.abilities.map(ability => ability.ability.name),
        imageUrl: data.sprites.other['official-artwork'].front_default,
      
    };
  }
  const pokemon = {};

const inputSearch = document.querySelector("#inputSearch");
const searchBTN = document.querySelector("#imgSearch");
searchPokemon = 0;
pokemon.name = document.getElementById('inputSearch').value;
pokemon.name = inputSearch.value;


  document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(BASE_URL + "bulbasaur");
    const bulbasaurComplet = await response.json();
    const bulbasaurSimple = mapPokemon(bulbasaurComplet);
    console.log(bulbasaurSimple);
  
    const monPost = {
      userId: 24,
      title: "Title",
      body: "Description",
    };
  
    const postId = 24;
  
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(monPost),
    });
    const data = await res.json();
    console.log(data);
  
    console.log("------------");
    console.log(monPost);
    console.log("------------");
    console.log(JSON.stringify(monPost));
  
    const resBis = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postId,
      {
        method: "DELETE",
      }
    );
    const dataBis = await resBis.json();
    console.log(dataBis);
  });

const pokemonName = document.querySelector(".nomPokemon");
const pokemonTaille = document.querySelector(".taillePokemon");
const pokemonPoids = document.querySelector(".poidsPokemon");
const pokemonTypes = document.querySelector(".typePokemon");
const pokemonCapacite = document.querySelector(".capacite");
const pokemonImg = document.querySelector(".imgPokemon");


// document.addEventListener("DOMContentLoaded", async () => {
//     const response = await fetch(BASE_URL + "bulbasaur");
//     const bulbasaurComplet = await response.json();
//     const bulbasaurSimple = mapPokemon(bulbasaurComplet);

    
//     pokemonName.textContent = bulbasaurSimple.name;
//     pokemonTaille.textContent = "Taille: " + bulbasaurSimple.height;
//     pokemonPoids.textContent = "Poids: " + bulbasaurSimple.weight;
//     pokemonTypes.textContent = "Types: " + bulbasaurSimple.types.join(", ");
//     pokemonCapacite.textContent = "Capacités: " + bulbasaurSimple.abilities.join(", ");
//     pokemonImg.src = bulbasaurSimple.imageUrl; 
//});
const cardContainer = document.querySelector('.card-container');
document.addEventListener("DOMContentLoaded", async () => {
    const nombrePokemon = 12;

    for (let i = 1; i <= nombrePokemon; i++) {
        const response = await fetch(BASE_URL + i);
        const pokemonComplet = await response.json();
        const pokemonSimple = mapPokemon(pokemonComplet);

        
        const card = createPokemonCard(pokemonSimple);
        cardContainer.appendChild(card); 
    }
});

function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
        <div class="cardEntete">
            <div class="img">
                <img src="${pokemon.imageUrl}" class="imgPokemon" alt="${pokemon.name}" width="150px">
            </div>
            <div class="partieGauche">
                <div class="nom">
                    <h3 class="nomPokemon">${pokemon.name}</h3>
                </div>
                <div class="taillePoids">
                    <div class="taille">
                        <p class="taillePokemon"><span class="mot-cle">Taille:</span> ${pokemon.height}</p>
                    </div>
                    <div class="poids">
                        <p class="poidsPokemon"><span class="mot-cle">Poids:</span> ${pokemon.weight}</p>
                    </div>
                </div>
                <div class="type">
                    <p class="typePokemon"><span class="mot-cle">Types:</span> ${pokemon.types.join(", ")}</p>
                </div>
            </div>
        </div>
        
        <div class="bas">
            <p class="capacite"><span class="mot-cle">Capacités:</span> ${pokemon.abilities.join(", ")}</p>
        </div>
    `;

    return card;
}


searchBTN.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await fetch(BASE_URL + inputSearch.value);
    const searchPokemonComplet = await response.json();
    const searchPokemonSimple = mapPokemon(searchPokemonComplet);

    const card = createPokemonCard(searchPokemonSimple);
    cardContainer.innerHTML = '';
    cardContainer.appendChild(card);
    
});

