const { Student } = require("../config/db");

exports.createStudent = async (req, res) => {
    try {
      const { nom, prenom } = req.body;
  
      if (!nom || !prenom) {
        return res.status(400).json({ message: "Nom et prénom sont requis pour créer un étudiant" });
      }

      const newStudent = await Student.create({ nom, prenom });
  
      res.status(201).json({ message: "Étudiant créé avec succès", student: newStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la création de l'étudiant" });
    }
  };

exports.getAllStudents = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des étudiants" });
    }
  };

exports.getOneStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findOne({ where: { id } });
  
      if (!student) {
        return res.status(404).json({ message: "Étudiant non trouvé" });
      }
  
      res.json(student);
    } catch (error) {
        console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération de l'étudiant" });
    }
  };

exports.updateStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const { updatedData } = req.body;
  
      const student = await Student.findOne({nom : 'orange'},{ where: { id } });
  
      if (!student) {
        return res.status(404).json({ message: "Étudiant non trouvé" });
      }
  
      await student.update(updatedData);
  
      res.json({ message: "Informations de l'étudiant mises à jour avec succès", student });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la mise à jour des informations de l'étudiant" });
    }
  };

 
exports.deleteStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findOne({ where: { id } });
  
      if (!student) {
        return res.status(404).json({ message: "Étudiant non trouvé" });
      }
  
      await student.destroy();
  
      res.json({ message: "Étudiant supprimé avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la suppression de l'étudiant" });
    }
};
  
