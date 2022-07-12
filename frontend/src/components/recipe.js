//imports
import React, {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RecipeEdit from "./RecipeEdit";

//component
const Recipe = ({match}) => {
    const [recipe, setRecipe] = useState([]);

    const deleteRecipe = (params) => {
        axios.delete(`http://localhost:3001/recipes/${params}`)
        .then (window.location = "/");
    }

    useEffect(()=> {

// function to retrive data from Atlas db
const fetchFunction = async () => {
    const response = await axios.get(`http://localhost:3001/recipes/${match.params.id}`);
    const data = response.data.data.singleRecipe
    setRecipe(data);
    };

    fetchFunction();
},[]);

    return(
        <div className = "App">
            {recipe.name}
            {recipe.description}
            <img alt={recipe.name} src={recipe.picture}/>
            {recipe.ingredients}
            <button onClick={()=>deleteRecipe(recipe._id)}> Delete Recipe </button> 
            <Router>
                <Link to={`/edit/${recipe._id}`}>
                    <button> Edit Recipe </button>
                </Link>
                <Route exact path="/edit/:id" component = {RecipeEdit}/>
            </Router>
        </div>
    )
}

//export to App.js
export default Recipe;

