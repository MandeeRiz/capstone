
//refector route controllers
exports.getAllRecipes = async (req, res)=>{
    res.status(200).json({
        status:"success",
        data:{
            message:"Get All Recipes",
        }
    });
}

//add new recipe
exports.addNewRecipe = async (req, res)=>{
    res.status(200).json({
        status:"success",
        data:{
            message:"Add a New Recipe",
        }
    });
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

