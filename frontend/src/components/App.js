import React from "react";
import  RecipeAdd from "./RecipeAdd";
import RecipeList from "./RecipeList"
import Recipe from "./Recipe";
import RecipeEdit from "./RecipeEdit";
import RecipeDelete from "./RecipeDelete"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Switch} from "react-router-dom";

const App = () => {
    return(
        <div className="App">
            <div className="navbar">
            <h1>Mangia</h1>
            GetAll
            Get
            CreateNew
            Update
            Delete
            </div>
            <RecipeList/>
            <RecipeAdd/>
            <Recipe/>
            <RecipeEdit/>
            <RecipeDelete/>
        </div>
    )
}

export default App; 