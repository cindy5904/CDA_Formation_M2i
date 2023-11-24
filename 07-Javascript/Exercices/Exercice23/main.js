// # Exercice 23

//   - Via l'utilisation d'une variable de type <b>tableau</b>, vous devrez réaliser un logiciel permettant à l'utilisateur d'entrer une <b>série de notes</b>, dont le nombre possible à entrer sera soit (au choix de l'utilisateur) :
//     - saisie avant la saisie de notes
//     - permissif et pourra aller jusqu'à entrer une note négative qui stoppera la saisie des notes.
//   - Une fois la <b>saisie des notes terminée</b>, l'utilisateur aura à sa disposition un <b>affichage</b> lui permettant d'avoir la <b>note max</b>, la <b>note min</b> ainsi que la <b>moyenne</b> (possible de faire un menu pour choisir)
//   - Pour les menus à choix, l'utilisation d'un switch est conseillée

// Exemples :

// ```
// Choisir un mode de saisie:
// 1 : Saisie fixe
// 2 : Saisie jusqu'à note négative 

// Votre choix : 1

// Combien de notes ? 5

// Début de Saisie !
// Veuillez entrer une note entre 0 et 20 compris : 12
// Veuillez entrer une note entre 0 et 20 compris : 0
// Veuillez entrer une note entre 0 et 20 compris : 20
// Veuillez entrer une note entre 0 et 20 compris : 300
// ERREUR, veuillez réessayer : 10
// Veuillez entrer une note entre 0 et 20 compris : 13
// Fin de Saisie !

// La note maximale est de 20.00 / 20
// La note minimale est de 0.00 / 20
// La moyenne est de 11.0 / 20
// ```


// ```
// Choisir un mode de saisie:
// 1 : Saisie fixe
// 2 : Saisie jusqu'à note négative 

// Votre choix : 2

// Veuillez entrer une note entre 0 et 20 compris : 12
// Veuillez entrer une note entre 0 et 20 compris : 0
// Veuillez entrer une note entre 0 et 20 compris : 20
// Veuillez entrer une note entre 0 et 20 compris : 300
// ERREUR, veuillez réessayer : 10
// Veuillez entrer une note entre 0 et 20 compris : 13
// Veuillez entrer une note entre 0 et 20 compris : -1
// Fin de Saisie !

// La note maximale est de 20.00 / 20
// La note minimale est de 0.00 / 20
// La moyenne est de 11.0 / 20
// do {
//     n = (parseInt(prompt("Entrez un nombre de note à saisir")));
// } while (isNaN(n) || n < 0 || n > 20);

let tableau = [];

function Menu(options) {
    choix = prompt(`Faites votre choix :
    1 - Afficher la note minimum
    2 - Afficher la note maximum
    3 - Afficher la moyenne des notes
    0 - Quitter
    Votre choix : `);
    if (choix === "1"){
        min(tableau);
    } else if (choix === "2") {
        max(tableau);
    }else if (choix === "3") {
        moyenne(tableau);
    } else {
        return options;
}}
function tailleTableau(tableau) {
    
    let n = (parseInt(prompt("Entrez un nombre de note à saisir")));
    
    for (let i = 0; i < tableau.length; i++) {
        tableau.push(n);
        
    }
    for (let j = 0; j < n ; j++) {
        do {
            c = (parseInt(prompt("Entrez une note")));
         } while (isNaN(c) || c < 0 || c > 20);
        
         tableau.push(c);
         console.log(c);
    }
    return tableau;
    
}
function min(tableau) {
    let min = tableau[0];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }
    console.log("La note minimale : " + min);
}

function max(tableau) {
    let max = tableau[0];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    console.log("La note maximale : " + max);
}

function moyenne(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    let moyenne = somme / tableau.length;
    console.log("La Moyenne est de : " + moyenne.toFixed(2));
}

tailleTableau(tableau);
Menu(tableau);
