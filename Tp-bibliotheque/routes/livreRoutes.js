const express = require('express');
const router = express.Router();
const livreController = require('../controller/livreController');

router.get('/', livreController.getAllLivres);
router.get('/ajouter', livreController.addLivre);
router.get('/:id', livreController.updateLivre);
router.get('/delete/:id', livreController.deleteLivre);

module.exports = router;