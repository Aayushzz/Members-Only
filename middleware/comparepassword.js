const bcrypt = require("bcryptjs");

const comparePasswords = async(plainPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (err) {
    throw new Error("Failed to compare password");
  }
};
module.exports = comparePasswords;