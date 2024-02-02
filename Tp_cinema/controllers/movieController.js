const Movie = require('../models/movie');

exports.createMovie = async (req, res) => {
  try {
    
    const { title, description, director, releaseDate } = req.body;

    const newMovie = await Movie.create({
      title,
      description,
      director,
      releaseDate,
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error('Erreur lors de la création du film :', error);
    res.status(500).send('Erreur lors de la création du film.');
  }
};
