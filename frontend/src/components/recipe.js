//imports
import React, {useState, useEffect} from "react";
import axios from "axios";
// // import axios from "axios";

//component
const Recipe = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(()=> {

    
    // function to retrive data from Atlas db
const fetchFunction = async () => {
    const response = await axios.get("http://localhost:3001/recipes/62cae4ae5cf97e25019c0e3c");
    const data = response.data.data.singleRecipe
    // console.log(data)
    setRecipe(data);
    };

    fetchFunction();
},[]);

    return(
        <div className = "App">
            {recipe.name}
            {recipe.description}
            <img src={recipe.picture}/>
            {recipe.ingredients}
           
        </div>
    )
}

export default Recipe;

