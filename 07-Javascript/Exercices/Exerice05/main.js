// let temp;

// temp =Number(prompt("veuillez entrer une température"))

// if (temp < 0) {
//     console.log("L'eau est à l'état solide !")
// } else if (temp >= 0 && temp <= 100) {
//     console.log("L\'eau est à l'état liquide.")
// } else if (temp > 100) {
//     console.log("L\'eau est à l'état gazeux.")
// } else {
//     console.log("Votre saisie n'est pas valide")
// }

let age, salaire, xp;
age = Number(prompt("Veuillez saisir votre age"));
salaire = Number(prompt("Veuillez saisir le salaire attendu"));
xp = Number(prompt("Veuillez saisir vos années d'xp")); 


if(age < 30) {
    console.log("Refus !! L'âge minimum est de 30 ans");
} else if (salaire > 40000){
    console.log('Refus !!le salaire max est de 40000');
} else if (xp < 5) {
    console.log("Refus !!Vous devez avoir 5 ans minimum d'XP");
} else {
    console.log("Bravo ! Vous remplissez toutes les conditions");
}

// pour vérifier un type
// let verif = typeof val === "number";