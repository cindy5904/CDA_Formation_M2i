const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Student = sequelize.define("Student", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        prenom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
    
      return Student;
    };
