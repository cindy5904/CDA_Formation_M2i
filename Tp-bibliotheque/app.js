const express = require('express');
const bodyParser = require('body-parser');
const livreRoutes = require('./routes/livreRoutes')
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/livres', livreRoutes)


app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`)
});

