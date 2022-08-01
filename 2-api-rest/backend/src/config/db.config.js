require("dotenv").config();
const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); 
  }
};

module.exports = conectarDB;
