const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

exports.getForm = asyncHandler(async(req, res, next) => {
    console.log("this works");
})