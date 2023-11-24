// # Exercice 22
// - Demander à l’utilisateur le nombre de chiffre que comportera un tableau
// - Le programme générera aléatoirement des nombres entre 1 et 50 pour remplir les cellules de ce tableau.
// - Enfin votre programme vérifiera s’ils sont pair ou impair puis les affichera sous cette forme :
// ```
// Le nombre 30 est   pair.
// Le nombre 31 est impair.
// Le nombre  5 est impair.
// Le nombre 12 est   pair.
// ```


let tableau = [];

function nombre(tableau) {
    let n = (parseInt(prompt("Entrez un nombre")));
    for (let i = 0; i < n; i++) {
        let nombreAleatoire = Math.floor(Math.random() * 50 + 1);
        tableau.push(nombreAleatoire);
    }
    
}

function pairImpair(tableau) {
    for (let j = 0; j < tableau.length; j++) {
        let message = "Le nombre " + tableau[j] + " est " + (tableau[j] % 2 === 0 ? "pair." : "impair.");
        console.log(message);
    }
}

nombre(tableau);

pairImpair(tableau);



