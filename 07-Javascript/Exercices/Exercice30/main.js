import Chat from './chat.js';

let chats = [];

const monChat = new Chat("Miaou", 20, "Noir");
const monChat2 = new Chat("Milou", 2, "blanc");
const monChat3 = new Chat("Garfield", 4, "Roux");


chats.push(monChat, monChat2, monChat3);
console.log(chats);

const tBody = document.getElementById("tbody-result");


const newTR = document.createElement("tr");


chats.forEach((element) => { 
  const newTDName = document.createElement("td");
  newTDName.textContent = element.name;
  newTR.appendChild(newTDName);

  const newTDAge = document.createElement("td");
  newTDAge.textContent = element.age;
  newTR.appendChild(newTDAge);

  const newTDColor = document.createElement("td");
  newTDColor.textContent = element.couleur;
  newTR.appendChild(newTDColor);
})

tBody.appendChild(newTR);
