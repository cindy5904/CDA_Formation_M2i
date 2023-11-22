// let nbre;

// nbre = Number(prompt("Entrez un nombre"));

// for (i = 1; i <= nbre; i++) {
//         console.log(`Table de ${i} :`);

//         for (j = 1; j <= 10; j++) {
//             console.log('\n')
//             console.log(`${i} X ${j} = ${i * j}`);
//         }
// }

// let nbre;
// let str;

// nbre = Number(prompt("Entrez un nombre"));

// for (i = 1; i <= nbre; i++) {
//     console.log(`${i}\t`);       
// }
    
// console.log("------------------------")

//     for (i = 1; i <= nbre; i++) {
//         console.log(" ");
//         for (j = 1; j <= 10; j++) {
//             console.log(i * j)
        
//     }
// }

//  let nbre;

//  nbre = Number(prompt("Entrez un nombre"));
//  let str = "    ";
//  for (i = 1; i <= nbre; i++) {
    
//      str +=  `${i}\t`;
//  }
// console.log(str);
// console.log("  ------------------------------------------")
//  for (let i = 1; i <= nbre; i++) {
//      str +=  "\n";
//      for (let j = 1; j <= 10; j++) {
//          str +=   i * j + "\t";
//      }
//  }
//  console.log(str);



let hauteur ;

hauteur = Number(prompt("Entrez une hauteur"));

for (let i = 1; i <= hauteur; i++) {
    let n = "";
    for (let j = 1; j <= hauteur - i; j++) {
      n += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      n += "*";
    }
    console.log(`%c ${n}` , `color : yellow` );
}