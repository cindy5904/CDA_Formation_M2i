// Intéraction

// alert("Coucou!!!!")

console.log("Coucou");
console.error("Une erreur"); 
console.warn("Attention");
console.info("une info");

console.log("%cUn joli Message !!!","font-size: 22px; background-color :pink;");

// Variables

// Var

var maVariable = 42;

console.log(maVariable);

// const 

const PI = 3.14;

// PI = 3.141

console.log(PI);

// let

let maVariableLet; // Déclaration

console.log(maVariableLet); // non défini donc undefined

console.log("type de ma variable: " + typeof maVariableLet);

maVariableLet = "Salut" // Assignation

console.log(maVariableLet);

console.log("type de ma variable: " + typeof maVariableLet + " .");

maVariableLet = 33 // Assignation

console.log("type de ma variable: " + typeof maVariableLet + " .");

let str = "Ma chaîne de caractères" // string

console.log("type de ma variable str: " + typeof str + " .");

let nb = 12 //number

console.log("type de ma variable nb: " + typeof nb + " .");

let boolean = true //boolean
boolean = false //boolean

console.log("type de ma variable boolean : " + typeof boolean + " .");

let maVariableNull = null

console.log("type de ma variable null : " + typeof maVariableNull + " .");
console.clear();
//  Interaction 

// Prompt

let maValeur;

maValeur = prompt("Taper une valeur");

console.log(maValeur);
console.log("type de ma variable : " + typeof maValeur + " .");

console.log(`type de ma variable maValeur : ${typeof maValeur} .`)


