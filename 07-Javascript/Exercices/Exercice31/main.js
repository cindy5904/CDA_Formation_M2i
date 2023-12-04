// Réaliser un programme via le JAvascript (et un module) permettant de créer des personnes (nom, prénom, date de naissance) et de les ajouter dans un tableau de personnes. 

// Pour ce faire, vous devrez, dans un fichier, avoir votre définition de classe (Person) qui sera exportée afin de la rendre disponible dans votre fichier de module principal. 

// Dans le fichier de module principal se trouverons le tableau de personnes, les créations d'objet de type Person ainsi que l'affichage en console du tableau de personnes rempli préalablement.

// La classe devra réaliser le mécanisme de l'encapsulation en rendant inaccessible ses champs privés et en forçannt le passage par un getter / setter afin d'obtenir en dehors de celle-ci les champs. 

// Pour les tester, au niveau du getter, on va réaliser un getter retournant le nom complet de la personne. Au niveau du setter, il devra être impossible de mettre en prénom à la personne un prénom donné.

// Bonus: Faire l'ensemble des manipulations via l'HTML et la manipulation du DOM (peuplage d'un tableau visuellement présent dans la page finale)

import Person from "./person.js";

let persons = []

const person1 = new Person("Doe", "John", "1990-01-01");
const person2 = new Person("Smith", "Jane", "1985-05-10");


console.log(person1.NomComplet);

persons.push(person1, person2);


console.log(persons);

document.getElementById("person-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const newPerson = new Person(
        document.getElementById("nom").value,
        document.getElementById("prenom").value,
        document.getElementById("dateNaissance").value
      );
    persons.push(newPerson);

    const tBodyEl = document.getElementById('person-result');
      
    const TREl = document.createElement('tr');
    const val = ['NomComplet', 'Nom', 'Prenom', 'DateNaissance'];
    val.forEach((element) => {
        const TDEl = document.createElement('td');
        TDEl.textContent = newPerson[element];
        TREl.appendChild(TDEl);
    });

    tBodyEl.appendChild(TREl);
    console.log(persons);
    // for(const key in newPerson) {
    //   const TDEl = document.createElement('td')
    //   TDEl.textContent = newPerson[key]
    //   TREl.appendChild(TDEl)
    // }

    // tBodyEl.appendChild(TREl);
    // console.log(persons);
})



