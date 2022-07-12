//imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const RecipeList = () => {

    const [eachRecipe, setEachRecipe] = useState([]);

     // function to retrive data from Atlas db
    useEffect(()=> {
const fetchFunction = async () => {
const response = await axios.get("http://localhost:3001/recipes/");
const data = response.data.data;
setEachRecipe(data.recipes);
};
// calling function to retrieve data
fetchFunction();
    }, []);

    //map each recipe to a card
    const listedRecipes = eachRecipe.map((element) => {
        return (
            <Card className="card" key = {element._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={element.picture}/>
            <Card.Body>
            <Card.Title>{element.name}</Card.Title>
            <Card.Text>{element.description}</Card.Text>
            <Link to={`/recipe/${element._id}`}>
            <Button variant="primary">See Full Recipe</Button>
            </Link>
            </Card.Body>
            </Card>
        );
    })
return(
    <div>
        <h2 className="subtitle">All My Delicious Recipes</h2>
        <>{listedRecipes}</>
    </div>
)
}

//export to App.js
export default RecipeList;