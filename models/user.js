const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const hashPassword = require("../middleware/hashpassword");

const userSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
});
userSchema.pre("save", async function (next) {
  try {
    this.Password = await hashPassword(this.Password);
    next();
  } catch (err) {
    next(err);
  }
});
module.exports = mongoose.model("User", userSchema);
