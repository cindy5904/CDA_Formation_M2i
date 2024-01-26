const express = require('express');
const router = express.Router();
const livreController = require('../controller/livreController');

router.get('/', livreController.getAllLivres);
router.post('/ajouter', livreController.addLivre);
router.put('/:id', livreController.updateLivre);
// router.delete('/:id', userController.deleteLivre);

module.exports = router;