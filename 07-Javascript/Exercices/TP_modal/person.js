export default class Person {
    nom; 
    prenom; 
    age;
    id;

    static count = 0;

    constructor (nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        Person.count++;
    }
}