import React from "react";
import  RecipeAdd from "./RecipeAdd";
import RecipeList from "./RecipeList"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <div>
            <h1>Mangia</h1>
            <RecipeAdd/>
            <RecipeList/>

        </div>
    )
}

export default App; 