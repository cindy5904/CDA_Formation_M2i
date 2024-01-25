// const path = require('path');
// const fichier = path.join("Exercices", "documents", "rapport.txt");
// const fichierAbsolu = path.resolve("rapport.txt");
// const extension = path.extname("./Exercices/documents/rapport.txt");
// if (extension === ".txt") {
//     console.log('ce fichier est un .txt extension');
// }    else {
//         console.log('ce fichier n\'est pas un .txt extension');
//     }

// const repertoire = path.dirname('/Exercices/documents/rapport.txt');
// const nomFichier = path.basename("/Exercices/documents/rapport.txt");
// const detailsChemin = path.parse("./Exercices/documents/rapport.txt");
// const cheminNormalise = path.normalize("./Exercices/documents/rapport.txt");

// console.log(fichier);
// console.log(fichierAbsolu);
// console.log(extension);
// console.log(repertoire);
// console.log(nomFichier);
// console.log(detailsChemin);
// console.log(cheminNormalise);

// const fs = require('fs');

const fs = require('fs/promises');

async function monFichier() {
    try {
    
      await fs.mkdir("documents/nouveau_repertoire");
      console.log("Répertoire créé avec succès!");
  

      await fs.writeFile("documents/nouveau_repertoire/fichier.txt", "Contenu à écrire", 'utf8');
      console.log("Le fichier a été enregistré");
  

      const data = await fs.readFile("documents/nouveau_repertoire/fichier.txt", 'utf8');
      console.log(data);
  
      const files = await fs.readdir(".");
      console.log("Contenu du répertoire: ", files);
  
   
      await fs.unlink("documents/nouveau_repertoire/fichier.txt");
      console.log("Fichier supprimé avec succès!");
  
      await fs.rmdir("documents/nouveau_repertoire");
      console.log("Répertoire supprimé avec succès!");
    } catch (err) {
      console.error("Une erreur s'est produite :", err);
    }
  }
  
 monFichier();
  
