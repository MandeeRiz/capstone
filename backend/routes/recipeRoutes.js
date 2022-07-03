//import express from express
const express = require ("express");

//import controllers from recipecontroller
const recipeController = require("../controllers/recipeController");

//create an express router
const Router = express.Router();

//route handlers
//get all recipes & post/add new recipe
Router.route("/") .get(recipeController.getAllRecipes)
                    .post(recipeController.addNewRecipe);

//get, edit & delete individual recipes
Router.route("/:id") .get(recipeController.getSingleRecipe)
                            .put(recipeController.editSingleRecipe)
                            .delete(recipeController.deleteSingleRecipe)

module.exports = Router;