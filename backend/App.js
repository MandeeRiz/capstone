//require express to build an express application
const { response } = require("express");
const express = require("express");

//create a variable to store our express methods
const app = express();

//refector route controllers
const getAllRecipes = (req, res)=>{
    res.status(500).json({
        status:"fail",
        data:{
            message:"undefined routes",
        }
    });
}

//add new recipe
const addNewRecipe = (req, res)=>{
    res.status(500).json({
        status:"fail",
        data:{
            message:"undefined routes",
        }
    });
}

//get an individual recipe
getSingleRecipe = (req, res)=>{
    res.status(500).json({
        status:"fail",
        data:{
            message:"undefined routes",
        }
    });
}

//edit a single recipe
editSingleRecipe = (req, res)=>{
    res.status(500).json({
        status:"fail",
        data:{
            message:"undefined routes",
        }
    });
}

//delete a single recipe
deleteSingleRecipe = (req, res)=>{
    res.status(500).json({
        status:"fail",
        data:{
            message:"undefined routes",
        }
    });
}
//create an express router
const recipeRouter = express.Router();

// middleware to handle our routes
app.use("/recipes", recipeRouter);

//route handlers
//get all recipes & post/add new recipe
recipeRouter.route("/") .get(getAllRecipes)
                    .post(addNewRecipe);

//get, edit & delete individual recipes
recipeRouter.route("/:id") .get(getSingleRecipe)
                            .put(editSingleRecipe)
                            .delete(deleteSingleRecipe)









//create a variable that stores our port number
const port = 3000;

//listen to the request/response cycle
app.listen(port, ()=> {
    console.log (`server started on port ${port}`);
})