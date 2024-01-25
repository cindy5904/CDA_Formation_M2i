const express = require("express");
const router = express.Router();
const path = require('path');
const fs = require('fs');

const livresPath = path.join('Data', 'livres.json');

router.get('/', (req, res) => {  
    fs.readFile(livresPath, 'utf8', (err, data) => {
        if (err) throw err; console.log(data);
        const livres = JSON.parse(data);
        res.json(livres);
    });
});

router.get('/:id', (req, res) => {
    fs.readFile(livresPath, 'utf8', (err, data) => {
        if (err) throw err; console.log(data);
        const livres = JSON.parse(data);
        const livresId = req.params.id;
        const livre = livres.find(l => l.id == livresId);
        res.json(livre);
    });  
  })
 
router.get('/ajout-livres', (req, res) => {
    fs.readFile(livresPath, 'utf8', (err, data) => {
        if (err) throw err; console.log(data);
        const livres = JSON.parse(data);
        const nouveauLivre = {id: 5,
                              titre: 'La vallée',
                              auteur: 'Bernard Minet' 
        };
        livres.push(nouveauLivre);
        fs.writeFile(livresPath, 'utf8', (err) => {
            if (err) throw err; 
            console.log("Le fichier a été enregistré");
          });
        res.json(nouveauLivre);
    });  
})

router.get('/recherche-livre/auteur/:auteur', (req, res) => {
    const auteurRecherche = req.params.auteur;
    fs.readFile(livresPath, 'utf8', (err, data) => {
        if (err) throw err; console.log(data);
        const livres = JSON.parse(data);
        const livresAuteur = livres.filter(livre => livre.auteur === auteurRecherche);
        res.json(livresAuteur);
    });
})



module.exports = router;
