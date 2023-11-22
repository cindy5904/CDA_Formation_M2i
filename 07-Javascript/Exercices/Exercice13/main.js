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

let nbre, somme, ligne;
nbre = Number(prompt("Entrez le nombre"));
for(let i = 1; i <= nbre; i++) {
    somme = 0;
    ligne = " ";
    for (let j = i; somme < nbre; j++) {
        somme += j;
        ligne += ` + ${j} `;
        
        if (somme === nbre) {
            console.log(`\t ${nbre} = ${ligne}`)
    }
}
}