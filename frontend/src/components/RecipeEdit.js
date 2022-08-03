//imports
import React, {useState, useEffect} from "react";
import axios from "axios";


//component
const RecipeEdit = () => {
    //states
    const [recipe, setRecipe] = useState([]);
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [picture, setPicture] = useState(" ");
    const [ingredients, setIngredients] = useState([]);

    // setName(recipe.name)
    // setDescription(recipe.description)
    // setPicture(recipe.picture)
    // setIngredients(recipe.ingredients)

    //get id from browser URL
    const id= window.location.pathname.replace("/edit/", "");

    useEffect(() => {
    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`)
        const data = response.data.data.singleRecipe
        setRecipe(data);
    };
    getRecipe();
},[recipe]);
    // function to edit indivdual recipe
    const editRecipe = () => {
        axios.put(`http://localhost:3001/recipes/${id}`, {name, description, picture, ingredients})
        // .then (window.location = "/");
    }

    return(
    <div className = "App">
        <h3 id="editTitle">Edit Recipe</h3>
        <label htmlFor=" "> Name: </label>
        <br></br>
        <input type="text" defaultValue={recipe.name} onLoad={(e)=> setName(e.target.defaultValue)} onChange= {(e) => {setName(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Description: </label>
        <br></br>
        <input type="text" defaultValue={recipe.description} onLoad={(e)=> setName(e.target.defaultValue)} onChange={(e) => {setDescription(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Picture: </label>
        <br></br>
        <input type="text" defaultValue={recipe.picture} onLoad={(e)=> setName(e.target.defaultValue)} onChange={(e) => {setPicture(e.target.value)}}/>
        <br/><br/>
        <label htmlFor=" ">Ingredients: </label>
        <br></br>
        <input type="text" defaultValue={recipe.ingredients} onLoad={(e)=> setName(e.target.defaultValue)} onChange={(e) => {setIngredients(e.target.value)}}/>
        <br/><br/>
        <button onClick={editRecipe}>Submit Changes</button>
    </div>
    );
}

//export to Recipe.js
export default RecipeEdit;