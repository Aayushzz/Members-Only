//connect to the database

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoDb_url =
  "mongodb+srv://aayushnrla:Members@cluster0.qyxdzup.mongodb.net/?retryWrites=true&w=majority";
const mongoDb = process.env.MONGODB_URI || mongoDb_url;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDb);
    console.log("Mongo connection successful");
  } catch (err) {
    console.log("mongo connection error", err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
