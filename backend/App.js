//require express to build an express application
const express = require("express");
//import router 
const recipeRouter = require("./routes/recipeRoutes")
//create a variable to store our express methods
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json())

// middleware to handle our routes
app.use("/recipes", recipeRouter);

module.exports = app;

