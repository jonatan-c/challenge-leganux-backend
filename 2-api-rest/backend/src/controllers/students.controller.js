const crudControllers = {};

const Student = require("../models/Students");

crudControllers.getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.createStudent = async (req, res, next) => {
  try {
    const { name, age, active } = req.body;
    const student = new Student({
      name,
      age,
      active,
    });

    await student.save();

    res.status(200).json({ message: "Student Created" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

crudControllers.getStudent = async (req, res) => {
  try {
    const students = await Student.findById(req.params.id);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.updateStudent = async (req, res) => {
  const { name, age, active, students } = req.body;

  try {
    await Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        age,
        active,
        students,
      }
    );
    res.status(200).json({ message: "Student Updated" });
  } catch (error) {
    res.status(500).json(error);
  }
};

crudControllers.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = crudControllers;
