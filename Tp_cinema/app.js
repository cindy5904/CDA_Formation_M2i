const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const movieRoutes = require('./router/movieRoute');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.json())
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cinema');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'erreur de connexion à Mongodb'))
db.once('open', () => {
    console.log('connexion à mongoDB');
})

app.use('/movie', movieRoutes); 

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
  });