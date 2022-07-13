//imports
import React from "react";
import  RecipeAdd from "./RecipeAdd";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

//App component
const App = () => {
    return(
        <div className="App">
            <Router>
            <h1 id="title">Mangia</h1>
            <div className="Nav">
                <hr id="hr"></hr>
                <li>
                    <Link to="/">
                    <ul>Home</ul>
                    </Link>
                    <Link to= "/add">
                    <ul>New Recipe</ul>
                    </Link>
                    <ul>About</ul>
                </li>
                <hr id="hr"></hr>
            </div>
            <div className="switch">
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

//export App for Index.js
export default App; 
