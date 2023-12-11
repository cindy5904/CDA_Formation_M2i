import Personnage from "./personnage.js";
import Magicien from "./magicien.js";
import Guerrier from "./guerrier.js";


let hercule = new Guerrier("Hercule", 100, 10,50);
let magicien = new Magicien("Magicien", 100, 10, 10);
hercule.attaquer(magicien);

console.log(magicien.vie);
hercule.attaquer(magicien);

console.log(magicien.vie);
magicien.attaquer(hercule);
console.log(hercule.vie);
magicien.soigner(hercule);

console.log(hercule.vie);


