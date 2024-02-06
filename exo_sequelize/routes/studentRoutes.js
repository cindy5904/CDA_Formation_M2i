const express = require("express");
const studentController = require("../controllers/studentController")
const isAuthenticated = require("../middelwere/authentification")
const router = express.Router();

router.post("/create", studentController.createStudent, isAuthenticated);
router.get("/", studentController.getAllStudents, isAuthenticated);
router.get("/:id", studentController.getOneStudent, isAuthenticated);
router.put("/update/:id", studentController.updateStudent, isAuthenticated);
router.delete("/delete/:id",studentController.deleteStudent,  isAuthenticated);

module.exports = router;

