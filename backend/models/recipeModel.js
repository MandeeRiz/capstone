//import mongoose to create a schema
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {type:String, required:true, unique:true},
    description: {type:String, required: false},
    picture: {type:String, required:false},
    ingredients: [{type:String, required:true}]
})

const Recipe = mongoose.model("Recipe", recipeSchema);