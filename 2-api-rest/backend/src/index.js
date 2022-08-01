require('dotenv').config();
const express = require("express");
const conectarDB = require("./config/db.config");
const crudClassRooms = require("./routes/classRoom.routes");
const crudStudents = require("./routes/students.routes");
const cors = require("cors");

const PORT_SERVER = process.env.PORT_SERVER || 3000;

const app = express();
app.use(cors());
conectarDB();
app.use(express.json({ extended: true }));

app.use("/classrooms", crudClassRooms);
app.use("/students", crudStudents);

app.listen(PORT_SERVER, () => {
  console.log("Server running on port 3000");
});
