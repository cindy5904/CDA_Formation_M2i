// # Exercice 14

//   - Écrire une fonction qui prend en **paramètre** :
//   - **prénom**
//   - **nom**
// - Elle **retournera** une **chaîne** avec le prénom et le nom séparé d'un espace, exemple : `"John Doe"`
// - Vous afficherez **ensuite** le résultat de l'**appel** cette fonction dans la console
// la version 2 vous devrez utiliser le chart() et le substr()

// Version 1 
// function nomPrenom(prenom, nom) {
//     return `${prenom} ${nom}`;
// }

// console.log(nomPrenom("John", "Doe"));

// Version 2

function nomPrenom(prenom, nom) {
    let str2 =`${prenom.charAt(0).toUpperCase()}` + prenom.slice(1);
    let str3= `${nom.charAt(0).toUpperCase()}` + nom.slice(1);
    return str2 + " " + str3; 
}
console.log(nomPrenom("john", "doe"));

