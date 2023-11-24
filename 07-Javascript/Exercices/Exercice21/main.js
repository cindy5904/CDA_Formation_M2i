// # Exercice 21

// - Vous devez créer un tableau qui contiendra 10 valeurs.
// - Faites en sorte que l’utilisateur puisse saisir les 10 valeurs afin de les stocker dans le tableau.
// - Enfin procédez à l’itération de son contenu afin de l’afficher dans la console
// - Effectuer l’affichage des résultats dans la console comme indiqué dans l'exemple ci-dessous.
// - Pour aller plus loin créez une fonction permettant de le remplir automatiquement avec des nombres aléatoires
  
// ```
// Affichage des valeurs saisies :
// 1
//     4
//         6
//             23
//                 9
//                     12
//                         33
//                             45
//                                 8
//                                     30
// ```

let tableau = [];

function nombre(tableau) {
    for (let i = 0; i < 10; i++) {
        tableau.push(parseInt(prompt("Entrez un nombre")));
    }
    
     console.log("Affichage des valeurs saisies :")
     return tableau;
}


function afficherTableau(tableau) {
    for (let ligne = 0; ligne <= tableau.length-1; ligne++){
        console.log(`${"    ".repeat(ligne)}${tableau[ligne]}`);
    }
    
}

nombre(tableau);
afficherTableau(tableau);
