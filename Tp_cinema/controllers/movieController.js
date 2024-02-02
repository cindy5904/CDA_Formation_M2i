const Movie = require('../models/movie');

exports.createMovie = async (req, res) => {
  try {
    
    const { title, description, director, releaseDate } = req.body;

    const newMovie = await Movie.create({
        "title": "film4",
        "description": "description4.",
        "director": "auteur4",
        "releaseDate": "2010-07-16"
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error('Erreur lors de la création du film :', error);
    res.status(500).send('Erreur lors de la création du film.');
  }
};

exports.getAllMovies = async (req, res) => {
    try {
      console.log('Fetching all movies...');
      const movies = await Movie.find();
      console.log('Movies:', movies);
      res.status(200).json(movies);
    } catch (error) {
      console.error('Erreur lors de la récupération des films :', error);
      res.status(500).send('Erreur lors de la récupération des films.');
    }
  };

  exports.searchMovieByTitle = async (req, res) => {
    try {
      const title = req.params.title;
  
      const movie = await Movie.findOne({ title });
  
      if (!movie) {
        return res.status(404).send('Film non trouvé.');
      }
  
      res.status(200).json(movie);
    } catch (error) {
      console.error('Erreur lors de la recherche du film par titre :', error);
      res.status(500).send('Erreur lors de la recherche du film par titre.');
    }
  };
