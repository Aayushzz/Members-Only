const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const  comparePasswords = require("../middleware/comparepassword");
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
exports.getForm = asyncHandler(async (req, res, next) => {
  res.render("log-in");
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { Email, Password } = req.body;
  const user = await User.findOne({ Email });
  if (!user) {
    const errorMessage = "Invalid email"
    res.render('log-in', { errorMessage: errorMessage }); // Pass error message to template
    return;
  }

  const isMatch = await comparePasswords(Password, user.Password);

  if (!isMatch) {
    const errorMessage = "Invalid Password"
    res.render('log-in', { errorMessage: errorMessage }); // Pass error message to template
    return;
  }

  const token = jwt.sign({id: user._id, name: user.Name}, process.env.SECRET_TOKEN, {
    expiresIn: '1h'
  })
  res.cookie("token", token, {
    httpOnly: true,
  })
  res.redirect('/');
});
