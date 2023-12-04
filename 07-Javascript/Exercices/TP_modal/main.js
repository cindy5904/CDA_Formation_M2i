import Person from "./person.js";

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementsByClassName("modal")[0];
  
    document.getElementById("modal-btn-close")?.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) modal.style.display = "none";
    });
  
    document.getElementById("btn-show-modal")?.addEventListener("click", () => {
      modal.style.display = "flex";
    });
    
     const modal2 = document.getElementsByClassName("modal2")[0];
      
        document.getElementById("modal-btn-close2")?.addEventListener("click", () => {
          modal2.style.display = "none";
        });
      
        modal2.addEventListener("click", (event) => {
          if (event.target === event.currentTarget) modal2.style.display = "none";
        });
      
        document.getElementById("btn-show-modal2")?.addEventListener("click", () => {
          modal2.style.display = "flex";
        });

let persons = [];

const person1 = new Person("Doe", "John", "22");
const person2 = new Person("Smith", "Jane", "30");

persons.push(person1, person2);

console.log(persons);

document.getElementById("person-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const newPerson = new Person(
        document.getElementById("nom").value,
        document.getElementById("prenom").value,
        document.getElementById("age").value
      );
    persons.push(newPerson);

    const tBodyEl = document.getElementById('tbody-result'); 
    const TREl = document.createElement('tr');
    const newTRElement = document.createElement("tr");
    for (const key in newPerson) {
        const newTDElement = document.createElement("td");
        newTDElement.textContent = newPerson[key];
        newTRElement.appendChild(newTDElement);
    }

    const actionsTDElement = document.createElement("td");
    const deleteBTNElement = document.createElement("button");
    const modifBTNElement = document.createElement("button");
    deleteBTNElement.textContent = "Delete";
    modifBTNElement.textContent = "Modifier";
    deleteBTNElement.addEventListener("click", () => {
        newTRElement.remove();
        persons = persons.filter((person) => person.id !== newPerson.id);
        console.log(persons);
    });
    document.getElementById("btn-show-modal2")?.addEventListener("click", () => {
        
        const selectPersonId = event.target.dataset.personId;
        const selectPerson = persons.find(person => person.id === selectPersonId);
    
        if (selectPerson) {
            document.getElementById("nom-modify").value = selectPerson.nom;
            document.getElementById("prenom-modify").value = selectPerson.prenom;
            document.getElementById("age-modify").value = selectPerson.age;
    
            // Affichez le modal de modification
            modal2.style.display = "flex";
        } else {
            console.error("Contact non trouvé pour l'ID spécifié");
        }
    });
    actionsTDElement.appendChild(deleteBTNElement);
    newTRElement.appendChild(actionsTDElement);

    tBodyEl.appendChild(newTRElement);

    console.log(persons);
});
    })


   
 
  
   
  
 
 