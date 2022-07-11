//imports
import React from "react";
import  RecipeAdd from "./RecipeAdd";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const App = () => {
    return(
        <div className="App">
            <Router>
            <h1>Mangia</h1>
            <div className="Nav">
                <li>
                    <Link to="/">
                    <ul>Home</ul>
                    </Link>
                    <Link to= "/add">
                    <ul>Add A New Recipe</ul>
                    </Link>
                
                </li>
            </div>
            <div>
                
                    <Switch>
                        <Route exact path="/" component={RecipeList}/>
                        <Route exact path="/add" component={RecipeAdd}/>
                        <Route exact path="/recipe/:id" component={Recipe}/>
                    </Switch>
                
            </div>
            </Router>
        </div>
    )
}

export default App; 
