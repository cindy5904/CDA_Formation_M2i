const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const userController = {
  registration: async (req, res) => {
    try {
      const userData = req.body;
      if (!userData) {
        return res.status(400).json({ message: 'Données utilisateur manquantes' });
      }
      const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;

      const createdUser = await userModel.create(userData);

      res.status(201).json({
        message: "Utilisateur ajouté avec succès",
        user: createdUser,
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un utilisateur", error);
      res.status(500).send("Erreur lors de l'ajout d'un utilisateur");
    }
  },

  connexion: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          const token = jwt.sign({ user: user.id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "1d",
          });

          res.status(200).json({ token });
        } else {
          res.status(401).send("Email ou mot de passe incorrect");
        }
      } else {
        res.status(401).send("Email ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
      res.status(500).send("Erreur lors de la connexion");
    }
  },
};

module.exports = userController;
