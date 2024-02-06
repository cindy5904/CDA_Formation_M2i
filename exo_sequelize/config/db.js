const Sequelize = require("sequelize");

const sequelize = new Sequelize("etudiant", "root", "Tabouret1", {
  host: "localhost",
  dialect: "mysql",
});

const Student = require("../models/student")(sequelize);
const User = require("../models/User")(sequelize);


sequelize
  .sync({ force: false })
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
  );

module.exports = {
  sequelize,
  Student,
  User
  
};