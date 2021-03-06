//import Recipes from models moongoose schema
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
    res.status(500).json({
        status: "error",
        message: error,
    })
}
}

//get an individual recipe
exports.getSingleRecipe = async (req, res)=> {
    try{
        const singleRecipe = await Recipe.findById(req.params.id);
    
    res.status(200).json({
        status:"success",
        data:{
            singleRecipe: singleRecipe,
        },      
    });
} catch (error){
    res.status(500).json({
        status: "error",
        message: error,
    });
}
};

//edit a single recipe
exports.editSingleRecipe = async (req, res)=>{
    try {
        const editRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json({
        status:"success",
        data:{
            editRecipe,
        }
    });
} catch (error){
    res.status(500).json({
        status:"error",
        message: error,
    })
}
}

//delete a single recipe
exports.deleteSingleRecipe = async (req, res)=>{
    try{
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"success",
            data:{},
        });
    } catch (error){
        res.status(500).json({
            status:"error",
            message:error,
        });
    }
};

