const User = require('../models/user');
const asyncHandler = require('express-async-handler');

exports.getForm = asyncHandler(async(req, res, next) => {
    res.render('sign-up');
})

exports.createUser = asyncHandler(async(req, res, next) => {
   const newUser = new User({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
   });

   await newUser.save();

   res.redirect('/log-in');
})