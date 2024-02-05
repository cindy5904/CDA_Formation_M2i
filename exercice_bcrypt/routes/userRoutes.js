const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/connexion", userController.connexion);
router.post("/registration", userController.registration);


module.exports = router;