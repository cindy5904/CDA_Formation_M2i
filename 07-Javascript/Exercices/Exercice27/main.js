// # Exercice 27

// Réaliser une page HTML qui, via le Javascript, permet d'avoir un listing dynamique de prénoms. 

// Il devra être possible de taper le prénom d'une personne dans un input et de l'ajouter au listing (sous la forme d'une liste non ordonnée) suite au clic sur un bouton 'Ajout'

// document.querySelector("input#prenom").addEventListener("input", (event) => {console.log(event.target.value);
//     if (document.querySelector("span#result-input")) {
//       document.querySelector("span#result-input").textContent =
//         event.target.value;
//     }
//   });

document.addEventListener("DOMContentLoaded", () => {
    // Cette fonction sera exécutée en cas de clic sur le bouton
    document.querySelector("button#add-btn").addEventListener("click", () => {
      // On sélectionne l'input de notre page
      const inputElement = document.getElementById("mon-input");
  
      // On en extrait le texte et on en retire les espaces au début et / ou à la fin de la chaine de caractère
      const text = inputElement.value.trim();
  
      if (text) {
        // On créé une balise <li> vierge
        const newLIElement = document.createElement("li");
  
        // On fixe le contenu textuel de notre <li>
        newLIElement.textContent = text;
  
        // On ajoute la balise <li> remplie du texte à la fin de la balise <ul> (.appendChild() place l'élément avant la balise fermante)
        document.getElementById("result").appendChild(newLIElement);
      }
    });
  });
  
 
