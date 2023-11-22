// incrémente

let epaisseur, tailleReel;
epaisseur = 0.0001;

tailleReel = 400;
let plis = 0;

while (epaisseur <= tailleReel) {
    epaisseur *= 2;
    plis+=1;
}
console.log(plis);

// Décrémente 
let i, j;
i = 0.0001;
j= 400;
let pli = 0;
while (i < j) {
    j/= 2;
    pli+=1;
}
 
console.log(pli);