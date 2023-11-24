// let nbre, somme, ligne;
// nbre = Number(prompt("Entrez le nombre"));

// for (let i = 1; i <= nbre; i++) {
//     somme = 0;
//     ligne = "";
//     for (let j = i; somme < nbre; j++) {
//         somme += j;
//         if (j === i) {
//             ligne += j;
//         } else {
//             ligne += ` + ${j}`;
//         }
        
//     if (somme === nbre) {
//         console.log(`\t ${nbre} = ${ligne}`)
//     }  
// }
// }

// let nbre, somme, ligne;
// nbre = Number(prompt("Entrez le nombre"));
// for(let i = 1; i <= nbre; i++) {
//     somme = 0;
//     ligne = " ";
//     for (let j = i; somme < nbre; j++) {
//         somme += j;
//         ligne += ` + ${j} `;
        
//         if (somme === nbre) {
//             console.log(`\t ${nbre} = ${ligne}`)
//     }
// }
// }
function sommeEntier(n) {
    let debut = 1;
    let fin = 2;
    let somme = debut + fin;
    while (debut <= n / 2 && !isNaN(nombre)) {
        if (somme === n) {
            afficherSomme(debut, fin);
            fin++;
            somme += fin;
        }
        else if (somme < n) {
            fin++; somme += fin;
        } else {
            somme -= debut; debut++;
        }
    }
} function afficherSomme(debut, fin) {
    let result = `${debut}`;
    for (let i = debut + 1; i <= fin; i++) {
        result += `+${i}`;
    }
    console.log(`${nombre} = ${result}`);
}
 
let nombre = parseInt(prompt("Saisir nombre"));
sommeEntier(nombre);