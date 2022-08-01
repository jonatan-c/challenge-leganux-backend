const { Schema, model } = require("mongoose");

const classRoom = new Schema(
  {
    className: { type: String, required: true },
    order: { type: Number, required: true },
    numberOfStudents: { type: Number, required: true },
    active: { type: Boolean, required: true, default: true },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("ClassRoom", classRoom);
