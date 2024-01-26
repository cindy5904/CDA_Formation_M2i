const Livre = require('../models/livre')

const livreController = {
  getAllLivres: (req, res) => {
    Livre.getAllLivres((err, livres) => {
      if (err) throw err;
      res.json(livres);
    });
  },

  addLivre: (req, res) => {
    const livreData = req.body;
    Livre.addLivre(livreData, (err, result) => {
      if (err) {
        console.error(err); 
        res.status(500).send('Erreur lors de l\'ajout du livre.');
      } else {
        res.send('Livre ajouté avec succès');
      }
    });
  },

  updateLivre: (req, res) => {
    console.log('Fonction updateLivre appelée');
    const livreId = req.params.id;
    const livreData = req.body;
    Livre.updateLivre(livreId, livreData, (err, result) => {
      if (err) {
        console.error(err); 
        res.status(500).send('Erreur lors de l\'Update du livre.');
      } else {
        res.send('Livre mis à jour avec succès');
      }
    })
  },
  
  deleteLivre: (req, res) => {
    const livreId = req.params.id;
    Livre.deleteLivre(livreId, (err, result) => {
      if (err) {
        console.error(err); 
        res.status(500).send('Erreur lors du delete du livre.');
      } else {
        res.send('Livre supprimé avec succès');
      }
      
    });
  },
}
module.exports = livreController;