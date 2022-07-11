//imports
import React, {useState} from "react";
import axios from "axios";


//component
const RecipeEdit = () => {

    //states
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [picture, setPicture] = useState(" ")
    const [ingredients, setIngredients] = useState([])
    const id= window.location.pathname.replace("/edit/", "")

    const editRecipe = () => {
        axios.put(`http://localhost:3001/recipes/${id}`, {name, description, picture, ingredients})
        .then (window.location = "/")
    }

    

    return(
    <div className = "App">
        <h1>edit recipe</h1>
        <label htmlFor=" "> Name: </label>
        <input type="text" onChange= {(e) => {setName(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Description: </label>
        <input type="text" onChange={(e) => {setDescription(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Picture: </label>
        <input type="text" onChange={(e) => {setPicture(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Ingredients: </label>
        <input type="text" onChange={(e) => {setIngredients(e.target.value)}}/>
        <br/><br/>
        <button onClick={editRecipe}>Submit Changes</button>
    </div>
    );
}


//exports
export default RecipeEdit;