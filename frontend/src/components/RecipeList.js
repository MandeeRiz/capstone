import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
    const [eachRecipe, setEachRecipe] = useState([]);

    useEffect(()=> {
        // function to retrive data from Atlas db
const fetchFunction = async () => {
const response = await axios.get("http://localhost:3001/recipes/");
const data = response.data;
setEachRecipe(data.results);
console.log(data);
console.log(eachRecipe);
};
fetchFunction();
    })
return (
    <div className="App">
        Recipes List
    </div>
);
}

export default RecipeList;