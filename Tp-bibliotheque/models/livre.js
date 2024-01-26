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
      const { titre, auteur, annee_publication, disponible } = livreData;
      const sql = 'UPDATE livres SET titre=?, auteur=?, annee_publication=?, disponible=? WHERE id=?';
      const values = [titre, auteur, annee_publication, disponible, livreId];
  
      connection.query(sql, values, callback);
    }
  
    // static deleteLivre(livreId, callback) {
    //   connection.query('DELETE FROM livres WHERE id= ?', livreId, callback);
    // }
  }

module.exports = Livre;