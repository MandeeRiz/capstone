//require express to build an express application
const { response } = require("express");
const express = require("express");


//create a variable to store our express methods
const app = express();


//import router 
const recipeRouter = require("./routes/recipeRoutes")

// middleware to handle our routes
app.use("/recipes", recipeRouter);

module.exports = app;

