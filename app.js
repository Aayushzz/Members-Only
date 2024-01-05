const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 5173;
require('dotenv').config();
app.use(session({
    secret:'SECRET_TOKEN',
    resave: false,
    saveUninitialized: true
}))
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
const mongoDb = require("./config/db");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
