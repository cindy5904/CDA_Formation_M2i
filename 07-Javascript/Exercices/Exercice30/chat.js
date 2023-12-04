export default class Chat {
    name; 
    age; 
    couleur;
    id;

    static count = 0;

    constructor (name, age, couleur) {
        this.name = name;
        this.age = age;
        this.couleur = couleur;
        Chat.count++;
    }
}