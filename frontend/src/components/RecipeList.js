import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

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

    const listedRecipes = eachRecipe.map((element) => {
        return (
            <Card key = {element._id} style={{ width: '18rem' }}>
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
        <h2>All My Delicious Recipes</h2>
        <>{listedRecipes}</>
    </div>
)
}

export default RecipeList;