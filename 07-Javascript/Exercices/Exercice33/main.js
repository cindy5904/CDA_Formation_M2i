// # Exercice 33

// Réaliser une application Javascript permettant à un utilisateur de faire un chronomètre ou un minuteur.

// * Si vous choisissez de faire un chronomètre, l'utilisateur devra pouvoir stocker des valeurs de temps (pour simuler un compte-tour) dans un élément de type tableau ou liste ordonnée

// * Si vous choississez de faire un minuteur, l'utilisateur devra pouvoir choisir le temps imparti du minuteur.

// Dans les deux cas, l'affichage proposera de visualiser les heures, les minutes et les secondes selon un format de type `hh:mm:ss` soit par exemple `02:17:14`.

// L'affichage doit être mis à jour à la seconde près et posséder un minimum de style via le CSS.


let timer;
let nb;
let minuteur = document.getElementById('minuteur');
let timeInput = document.getElementById('timeInput');
let startBTN = document.getElementById('startBTN');
let stopBTN = document.getElementById('stopBTN');

document.querySelector("#startBTN").addEventListener("click", () => {
    nb = Secondes(timeInput.value);
    timer = setInterval(() => {
      if (nb <= 0) {
        console.log("Fini");
      } else {
        document.querySelector("#minuteur").textContent = Temps(nb--);
      }
    }, 1000);
  });

  document.querySelector("#stopBTN").addEventListener("click", () => {
    clearInterval(timer);
    timer = undefined;
    document.querySelector("#minuteur").textContent = `00:00:00`;
    nb = 0;
  });

// ici pour les fonctions je me suis aidé du  site https://www.developpez.net/forums/d688916/javascript/general-javascript/convertir-secondes-heures/
function Secondes(temps) {
    const [heures, minutes, secondes] = temps.split(":").map(Number);
    return heures * 3600 + minutes * 60 + secondes;
}


function Temps(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const secondesRestantes = secondes % 60;
    return `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondesRestantes.toString().padStart(2, '0')}`;
}

