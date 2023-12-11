import Personnage from "./personnage.js";

export default class Guerrier extends Personnage {
    constructor(nom, vie, force, armure) {
        super(nom, vie, force, armure);
        this.armure = armure;
    }
    attaquer (cible) {
        super.attaquer(cible);
       cible.vie -= this.armure;
        console.log(`${this.nom} attaque ${cible.nom} avec ${this.armure} point de force`);
    }
    
}