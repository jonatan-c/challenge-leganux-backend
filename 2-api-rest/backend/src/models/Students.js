const { Schema, model } = require("mongoose");

const student = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    active: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Student", student);
