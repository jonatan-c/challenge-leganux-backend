const { Router } = require("express");
const router = Router();

const {
  getClassRooms,
  createClassRoom,
  getClassRoom,
  updateClassRoom,
  deleteClassRoom,
  deleteStudentInClassRoom,
} = require("../controllers/classRoom.controller");

router.get("/", getClassRooms);
router.post("/", createClassRoom);

router.get("/:id", getClassRoom);
router.put("/:id", updateClassRoom);
router.delete("/:id", deleteClassRoom);
router.delete("/:idClassRoom/:idStudent", deleteStudentInClassRoom);

module.exports = router;
