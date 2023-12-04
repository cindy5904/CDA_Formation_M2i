export default class Person {
    #nom; 
    #prenom; 
    #dateNaissance; 

    constructor (nom, prenom, dateNaissance) {
       this.#nom = nom;
       this.#prenom = prenom;
       this.#dateNaissance = dateNaissance;

       
    }
  
    get NomComplet() {
        return `${this.#prenom} ${this.#nom}`;
    }

    get Nom() {
        return this.#nom;
    }
    set Nom(value) {
        return this.#nom = value;
    }

    get Prenom() {
        return this.#prenom;
    }

    set Prenom(newPrenom) {
        if (newPrenom === "Lou") {
            console.error("Vous ne pouvez pas modifier le prenom")
        } else {
            this.#prenom = newPrenom;
        }
        
    }
    
    get DateNaissance() {
        return this.#dateNaissance;
    }
    set DateNaissance(Date) {
        this.#dateNaissance = Date;
    }
}