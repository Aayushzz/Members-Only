const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 5173;
require('dotenv').config();

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

const signupRouter = require("./routes/sign-up");
app.use("/sign-up", signupRouter);

const loginRouter = require("./routes/log-in");
app.use("/log-in", loginRouter);

const logoutRouter = require('./routes/log-out');
app.use('/log-out', logoutRouter);
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
