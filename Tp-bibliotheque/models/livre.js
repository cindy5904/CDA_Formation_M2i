const connection = require('../config/db');

class Livre {
    static getAllLivres(callback) {
      connection.query('SELECT * FROM livres', callback);
    }
  
    static addLivre(livreData, callback) {
      const { titre, auteur, annee_publication, disponible } = livreData;
      const sql = 'INSERT INTO livres (titre, auteur, annee_publication, disponible) VALUES (?, ?, ?, ?)';
      const values = [titre, auteur, annee_publication, disponible];
  
      connection.query(sql, values, callback);
    }
  
    static updateLivre(livreId, livreData, callback) {
      const { titre } = livreData;
      const sql = 'UPDATE livres SET titre = ? WHERE id = ?';
    
      connection.query(sql, [titre, livreId], callback);
    }
    
  
    static deleteLivre(livreId, callback) {
      const sql = 'DELETE FROM livres WHERE id = ?';
      connection.query(sql, [livreId], callback);
    }
  }

module.exports = Livre;