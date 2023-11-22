let populationInitial, taux, populationVisee, annee;

populationInitial = parseInt(prompt("Entrez la population initial"));
populationVisee = parseInt(prompt("Entrez la population visee"));
taux = parseInt(prompt("Entrez le taux"));
taux = taux /100

annee = 0;


while (populationInitial < populationVisee) {
    populationInitial *= (1 + taux);
    annee += 1;
}

console.log(annee);
console.log(populationVisee);

 

// let populationInitial = 40000;
// let populationVisee = 80000;
// let taux = (2 / 100);
// let annee = 0;

// while (populationInitial < populationVisee  ) {
//     populationInitial *= (1 + taux);
//     annee += 1;
// }
// console.log(annee);