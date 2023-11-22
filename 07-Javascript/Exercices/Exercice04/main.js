let age;
age = prompt("Veuillez saisir votre age");
// console.log((age >= 18) ? true : false);

if(age<0){
    console.log('Age invalible !!!');
}else if(age >= 18){
    console.log("Vous êtes majeur");
} else if(age<225){
    console.log("Vous êtes mineur");
} else {
    console.log("Veuillez saisir un âge valide")
}

let choix = Number(prompt("Choisir un chiffre entre 1 et 3 :"));


switch (choix) {
    case 1:
        console.log("choix 1");
        break
    case 2:
        console.log("choix 2");
        break
    case 3:
        console.log("choix 3");
        break;
    
    default:
        console.log(`Choix inconnu`)
        break
}
