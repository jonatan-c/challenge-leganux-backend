const crudControllers = {};

const ClassRoom = require("../models/ClassRoom");

crudControllers.getClassRooms = async (req, res, next) => {
  try {
    const notes = await ClassRoom.find().populate("students");
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.createClassRoom = async (req, res, next) => {
  const { className, order, numberOfStudents, active, students } = req.body;
  try {
    const newNote = new ClassRoom({
      className,
      order,
      numberOfStudents,
      active,
      students,
    });
    await newNote.save();
    res.status(200).json({ message: "ClassRoom Created" });
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.getClassRoom = async (req, res) => {
  try {
    const classRoom = await ClassRoom.findById(req.params.id).populate(
      "students"
    );
    if (!classRoom)
      return res.status(404).json({ message: "ClassRoom not found" });
    res.status(200).json(classRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.updateClassRoom = async (req, res) => {
  const { className, order, numberOfStudents, students } = req.body;

  try {
    const classRoom = await ClassRoom.findOneAndUpdate(
      { _id: req.params.id },
      {
        className,
        order,
        numberOfStudents,
        students,
      }
    );
    if (!classRoom)
      return res.status(404).json({ message: "ClassRoom not found" });
    res.status(200).json({ message: "ClassRoom Updated" });
  } catch (error) {
    res.status(500).json(error);
  }

  res.json({ message: "ClassRoom Edited" });
};

crudControllers.deleteClassRoom = async (req, res) => {
  try {
    const classRoom = await ClassRoom.findByIdAndDelete(req.params.id);
    if (!classRoom)
      return res.status(404).json({ message: "ClassRoom not found" });
    res.json({ message: "ClassRoom Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.deleteStudentInClassRoom = async (req, res) => {
  const { idStudent } = req.params;
  const { idClassRoom } = req.params;

  try {
    const classRoom = await ClassRoom.findOneAndRemove(
      { _id: idClassRoom },
      { students: { $elemMatch: { _id: idStudent } } }
    );
    if (!classRoom)
      return res.status(404).json({ message: "ClassRoom not found" });
    res.json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = crudControllers;
