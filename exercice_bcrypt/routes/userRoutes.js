const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/registration", userController.registration);
router.post("/connexion", userController.connexion);



module.exports = router;