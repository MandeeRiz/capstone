//require express to build an express application
const express = require("express");
//import router 
const recipeRouter = require("./routes/recipeRoutes")
//create a variable to store our express methods
const app = express();

//require cors to allow cross origin resource sharing
const cors = require("cors");

//use cors to allow development of front end
app.use(cors());

//use json data
app.use(express.json())

// middleware to handle our routes
app.use("/recipes", recipeRouter);

//export app for use elsewhere in project
module.exports = app;

