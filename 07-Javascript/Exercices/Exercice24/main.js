// # Exercice 24
// Faire un programme permettant stocker une liste de contacts :
// - Ces contacts seront des chaines stockés dans un tableau
// - Au démarrage de l’application, le nombre de contacts à saisir sera demandé à l’utilisateur
// - Un menu proposera au choix à l'utilisateur de (re)saisir les contacts, de les afficher ou de quitter le programme 
// - Dans un second temps, ajoutez une fonctionnalité au menu permettant de trier les contacts dans l'ordre alphabétique
// - Dans un troisième temps, ajoutez une fonctionnalité au menu permettant de mélanger aléatoirement les contacts

let tableau = [];
function menu() {
    choix = prompt(`Faites votre choix :
    1 - Afficher tous les contacts
    2 - Resaisir les contacts
    3 - Afficher les contacts par ordre alphabétique
    4 - Afficher les contacts aléatoirement
    0 - Quitter
    Votre choix : `);
    if (choix === "1"){
        console.log(tableau);
    }else if (choix === "2") {
        resaisirContact(tableau);
    }else if (choix === "3") {
        ordreAlphabétique(tableau);
    }else if (choix === "4") {
        FisherShuffle(tableau);
    }else {
        return;
}
}

function tailleTableau(tableau) {
    
    let n = (parseInt(prompt("Entrez le nombre de contact que vous voulez saisir")));
    
    for (let i = 0; i < tableau.length; i++) {
        tableau.push(n);    
    }
    for (let j = 0; j < n ; j++) {
        
        let contact = prompt(`Saisir votre contact n° ${j + 1} : `);
        
        tableau.push(contact);
        console.log(contact);
    }
    return tableau;
}

function ordreAlphabétique(tableau) {
    tableau.sort();
    console.log("Contacts triés par ordre alphabétique :");
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}

function resaisirContact(tableau) {
    let n = tableau.length;
    for (let j = 0; j < n ; j++) {
        
        let contact = prompt(`Saisir votre contact n° ${j + 1} : `);
        
        tableau.push(contact);
        console.log(contact);
    }
    return;
}

// ici j'ai essayé de reprendre le code sur https://www.astucesmobiles.com/comment-melanger-un-tableau-en-javascript/
function FisherShuffle(tableau) {
    
    tableau.sort(() => Math.random() - 0.5);
    return tableau;
  }

tailleTableau(tableau);
menu();