export default class Personnage {
    constructor(nom, vie, force) {
        this.nom = nom;
        this.vie = vie;
        this.force = force;
    }
    attaquer (cible) {
        let degat = this.force;
        this.vie -= degat;
        console.log(`${this.nom} attaque ${cible.nom} avec ${degat} point de force`);
    }
}
