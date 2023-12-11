import Personnage from "./personnage.js";

export default class Magicien extends Personnage {
    constructor(nom, vie, force, mana) {
        super(nom, vie, force);
        this.mana = mana;
}
    attaquer (cible) {
        super.attaquer(cible) ;
            cible.vie -= this.mana;
            console.log(`${this.nom} attaque ${cible.nom} avec ${this.mana} point de force`);
    
}
    soigner (cible) {
        cible.vie += this.mana;
        console.log(`${cible.nom} est soigné avec ${this.mana} point de vie`);
    }
    
}
