const { Router } = require("express");
const router = Router();

const {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/students.controller");

router.get("/", getStudents);
router.post("/", createStudent);

router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
