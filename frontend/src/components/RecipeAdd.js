//imports
import React, {useState} from "react";
import axios from "axios";

//component
const RecipeAdd = () => {

    //states
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [picture, setPicture] = useState(" ")
    const [ingredients, setIngredients] = useState([]);

    //function to post new recipe to the database
    const addNewRecipe = () => {
        axios.post("http://localhost:3001/recipes/", {name, description, picture, ingredients})
        .then (window.location = "/");
    }

    return(
    <div className = "App">
        <h3>Add A New Recipe</h3>
        <label htmlFor=" "> Name: </label>
        <br></br>
        <input type="text" onChange= {(e) => {setName(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Description: </label>
        <br></br>
        <input type="text" onChange={(e) => {setDescription(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Picture: </label>
        <br></br>
        <input type="text" onChange={(e) => {setPicture(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Ingredients: </label>
        <br></br>
        <input type="text" onChange={(e) => {setIngredients(e.target.value)}}/>
        <br/><br/>
        <button onClick={addNewRecipe}>Add New Recipe</button>
    </div>
    );
}


//export to App.js
export default RecipeAdd;