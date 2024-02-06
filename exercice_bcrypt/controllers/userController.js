const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user");

const userController = {
  registration: async (req, res) => {
    try {
      const {email, password} = req.body;
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await Users({email : email, password : hashedPassword});
      await newUser.save();
      

      res.status(201).json({
        message: "Utilisateur ajouté avec succès",
        
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un utilisateur", error);
      res.status(500).json("Erreur lors de l'ajout d'un utilisateur");
    }
  },

  connexion: async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

       
        const token = jwt.sign({ user: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
        });

        res.json({ token });
    } catch (error) {
        console.error("Erreur lors de la connexion", error);
        res.status(500).send("Erreur lors de la connexion");
    }
}
};

module.exports = userController;
