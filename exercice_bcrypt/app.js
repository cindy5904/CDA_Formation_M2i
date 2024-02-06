const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/exoBcrypt");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erreur de connexion à mongoDB"));
db.once("open", () => {
  console.log("Connecté à mongoDB");
});

app.use(bodyParser.json());
app.use(userRoutes);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });

  