import axios from "axios";
import React from "react";

const RecipeDelete = () => {
    const deleteRecipe = () => {
        axios.delete("http://localhost:3001/recipes/62cb16895cf97e25019c0e6b")
    }

    return (
        <div>
           <button onClick={deleteRecipe}> Delete Recipe </button> 
        </div>
    )
}

export default RecipeDelete;