import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
    const [eachRecipe, setEachRecipe] = useState([]);

    useEffect(()=> {
        // function to retrive data from Atlas db
const fetchFunction = async () => {
const response = await axios.get("http://localhost:3001/recipes/");
const data = response.data.data;
setEachRecipe(data.recipes);
};

fetchFunction();
    }, []);
    // console.log(eachRecipe);
    // console.log(typeof eachRecipe);
    // console.log(eachRecipe.recipes)

    const listedRecipes = eachRecipe.map((element, index) => {
        return (
            <div key={element._id} className="App">
              {element.name}
              <br></br>
              {element.description}
              <br></br>
              {element.ingredients}
            </div>
        );
    })
return(
    <div>
        <h3>recipes list</h3>
        <>{listedRecipes}</>
    </div>
)
}

export default RecipeList;