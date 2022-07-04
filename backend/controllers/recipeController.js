//import Recipes from models moongoose schema
const { response } = require("express");
const Recipe = require ("../models/recipeModel")


//refector route controllers
exports.getAllRecipes = async (req, res)=>{
    try{
        const recipes = await Recipe.find();
    
    res.status(200).json({
        status:"success",
        data:{
            recipes: recipes,
        },
    });
} catch (error) {
    res.status(500).json({
        status:"error",
        message: error,
    })
}
}

//add new recipe
exports.addNewRecipe = async (req, res)=>{
    try {
        const newRecipe = await Recipe.create(req.body);
    
    res.status(201).json({
        status:"success",
        data:{
            newRecipe: newRecipe,
        }
    });
} catch (error) {
    response.status(500).json({
        status: "error",
        message: error,
    })
}
}

//get an individual recipe
exports.getSingleRecipe = async (req, res)=>{
    res.status(200).json({
        status:"success",
        data:{
            message:"Get Single Recipe",
        }
    });
}

//edit a single recipe
exports.editSingleRecipe = async (req, res)=>{
    res.status(200).json({
        status:"success",
        data:{
            message:`Update Recipe ${req.params.id}`,
        }
    });
}

//delete a single recipe
exports.deleteSingleRecipe = async (req, res)=>{
    res.status(200).json({
        status:"success",
        data:{
            message:`Delete recipe ${req.params.id}` ,
        }
    });
}

