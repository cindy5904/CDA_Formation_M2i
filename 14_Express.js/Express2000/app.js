const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookRoutes = require('./Routes/bookRoutes');
app.use(express.static('public'));

app.use('/livres', bookRoutes);

// envoie une réponse sous la forme d'une page HTML avec un message de bienvenue
app.get('/bienvenue', (req, res) => {
    res.send('Bienvenue sur l\'application!');
})

//Mettez en place une route qui renvoie une réponse au format JSON
app.get('/info', (req, res) => {
    res.json({
        nom : 'Jonh Doe',
        age : 32,
        statut: 'prisonnier'
    });
    
})

// Ajoutez une route qui renvoie un code de statut HTTP personnalisé (autre  que 200) avec un message associé.
app.get('/acces-interdit', (req, res) => {
    res.status(403).send('Accès Interdit')
})

//Configurez une route qui redirige automatiquement l'utilisateur vers la page d'accueil.
app.get('/redirection-accueil', (req, res) => {
    res.redirect('/bienvenue');
});

// Enfin, assurez-vous d'avoir une route par défaut qui renvoie une réponse par défaut pour toutes les autres routes non spécifiées
app.get('*', (req, res) => {
    res.status(404).send('Page Non Trouvé')
})

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
  })



