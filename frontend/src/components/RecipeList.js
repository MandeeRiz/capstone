import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

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

            <Card key = {element._id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={element.picture}/>
  <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
      {element.description}
    </Card.Text>
    <Button variant="primary">See Full Recipe</Button>
    <>{element._id}</>
  </Card.Body>
</Card>

            // <div key={element._id} className="App">
            //   {element.name}
            //   <br></br>
            //   {element.description}
            //   <br></br>
            //   {element.ingredients}
            // </div>
        );
    })
return(
    <div>
        <h3>All My Delicious Recipes</h3>
        <>{listedRecipes}</>
    </div>
)
}

export default RecipeList;