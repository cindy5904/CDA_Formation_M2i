const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/ajout', movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.get('/search/:title', movieController.searchMovieByTitle);

module.exports = router;
